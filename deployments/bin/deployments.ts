#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import "source-map-support/register";
import { DeploymentsStack } from "../lib/deployments-stack";

const app = new cdk.App();
new DeploymentsStack(app, "Homepage40Stack", {});
