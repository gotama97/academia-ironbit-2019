'use strict';

const assert = require('chai').assert;
const moduleToTest = require('../../src/function-test');

suite('moduleToTest', () => {
    test('Case 1', () => {
        assert.strictEqual(moduleToTest(/* input data */), /*Expect behavior*/);
    });
});
