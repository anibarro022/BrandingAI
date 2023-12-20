#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CopykittInfraStack } from '../lib/copykitt-infra-stack';

const app = new cdk.App();
new CopykittInfraStack(app, 'CopykittInfraStack', {

});