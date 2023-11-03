#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DeploymentsStack } from '../lib/deployments-stack';

const app = new cdk.App();
new DeploymentsStack(app, 'DeploymentsStack', {});
