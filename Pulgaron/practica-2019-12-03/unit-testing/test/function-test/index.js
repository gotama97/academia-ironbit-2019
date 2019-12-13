'use strict';

const assert = require('chai').assert;
const moduleToTest = require('../../src/function-test');

suite('All cases', () => {
    test('The two first elements need to be number and the last one an array', () =>{
        assert.strictEqual(moduleToTest([1], 5,[1,2,3,4]),'At least one of the three elements has a type error');
    });
    test('The two first elments need to be positives', () =>{
        assert.strictEqual(moduleToTest(-1, 3, [1,2,3,4]),'One of the two first elements is negative or zero');
    });
    test('The second element needs to be lesser than the array length', () => {
        assert.strictEqual(moduleToTest(1, 3, [1,2]), 'second value is greater than the array');    
    });
});
