import { GoFunction } from "@aws-cdk/aws-lambda-go-alpha";
import * as cdk from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import {
  Distribution,
  OriginProtocolPolicy,
  ViewerProtocolPolicy,
} from "aws-cdk-lib/aws-cloudfront";
import { HttpOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import { Policy, PolicyStatement, Role } from "aws-cdk-lib/aws-iam";
import { Architecture } from "aws-cdk-lib/aws-lambda";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { Construct } from "constructs";

export class ProvisionStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambda = new GoFunction(this, "feedLambda", {
      functionName: "feed",
      entry: "../",
      logRetention: RetentionDays.ONE_DAY,
      architecture: Architecture.ARM_64,
    });
    const restApi = new RestApi(this, "feedApiGateway", {
      restApiName: "feed",
    });
    restApi.root
      .addResource("feed")
      .addMethod("GET", new LambdaIntegration(lambda));

    // 旧サイトを *.cloudfront.net の https で配信する（S3 の website endpoint は http のみ）。
    // website endpoint は Host ヘッダでバケットを選ぶので、Host は転送しない。
    const distribution = new Distribution(this, "Homepage4Distribution", {
      defaultBehavior: {
        origin: new HttpOrigin(
          "takkyuuplayer.com.s3-website-ap-northeast-1.amazonaws.com",
          { protocolPolicy: OriginProtocolPolicy.HTTP_ONLY }
        ),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
    });
    new cdk.CfnOutput(this, "Homepage4Url", {
      value: `https://${distribution.distributionDomainName}/`,
    });

    const role = Role.fromRoleName(this, "DeployRole", "DeployRole");
    role.attachInlinePolicy(
      new Policy(this, "LambdaDeployPolicy", {
        statements: [
          new PolicyStatement({
            actions: ["lambda:UpdateFunctionCode"],
            resources: [lambda.functionArn],
          }),
        ],
      })
    );
  }
}
