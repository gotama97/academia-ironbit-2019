'use strict';

const assert = require('chai').assert;
const moduleToTest = require('../../src/function-test');



suite('All cases', () => {
    test('Que falle', () => {
        assert.strictEqual(moduleToTest(-3, '2'), 'All of them must be primes');
    });
});
