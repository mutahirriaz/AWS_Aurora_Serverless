import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as AuroraServerless from '../lib/aurora_serverless-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new AuroraServerless.AuroraServerlessStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
