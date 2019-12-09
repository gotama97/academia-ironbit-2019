'use strict';

const assert = require('chai').assert;
const moduleToTest = require('../../src/function-test');

suite('All cases', () => {
    test('Success case', () => {
        assert.strictEqual(moduleToTest(7, 13), 20);
    });
    test('All of them must be prime', () => {
        assert.strictEqual(moduleToTest(6, 19), 'All of them must be primes');

    });
    test('Negative not allowed', () => {
        assert.strictEqual(moduleToTest(7, -3), 'Negative not allowed');

    });
    test('Negative not allowed', () => {
        assert.strictEqual(moduleToTest(-7, 3), 'Negative not allowed');

    });
    test('Floats not allowed', () => {
        assert.strictEqual(moduleToTest(7.2, 3), 'Floats not allowed');

    });
    test('Numbers only allowed', () => {
        assert.strictEqual(moduleToTest('7', '3'), 'Numbers only allowed');

    });
    test('Numbers only allowed', () => {
        assert.strictEqual(moduleToTest([2, 3], 3), 'Numbers only allowed');

    });
    test('Result is less than 20 [FAIL]', () => {
        assert.strictEqual(moduleToTest(2, 3), 'Result is less than 20');

    });
    test('All of them must be primes', () => {
        assert.strictEqual(moduleToTest(0, 3), 'All of them must be primes');

    });
    test('All of them must be primes', () => {
        assert.strictEqual(moduleToTest(0, 0), 'All of them must be primes');
    });
    test('Que falle', () => {
        assert.strictEqual(moduleToTest(-3, '2'), 'All of them must be primes');
    });
});
