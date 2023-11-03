import { GoFunction } from "@aws-cdk/aws-lambda-go-alpha";
import * as cdk from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Architecture } from "aws-cdk-lib/aws-lambda";
import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { Construct } from "constructs";

export class DeploymentsStack extends cdk.Stack {
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
  }
}
