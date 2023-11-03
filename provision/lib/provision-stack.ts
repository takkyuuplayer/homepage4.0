import { GoFunction } from "@aws-cdk/aws-lambda-go-alpha";
import * as cdk from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
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

    const role = Role.fromRoleName(this, "DeployRole", "DeployRole");
    role.attachInlinePolicy(
      new Policy(this, "DeployPolicy", {
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
