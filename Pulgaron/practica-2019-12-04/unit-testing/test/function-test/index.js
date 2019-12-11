'use strict';

const assert = require('chai').assert;
const moduleToTest = require('../../src/function-test');

suite('All cases', () => {
    test('Success case', () => {
        assert.strictEqual(moduleToTest(7, 13), 20);
    });
    
});
