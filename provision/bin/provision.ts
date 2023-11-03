#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import "source-map-support/register";
import { ProvisionStack } from "../lib/provision-stack";

const app = new cdk.App();
new ProvisionStack(app, "Homepage40Stack", {});
