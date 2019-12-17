'use strict';

const assert = require('chai').assert;
const moveZeros = require('../../src/Moving-Zeros-to-the-End/Moving-Zeros-to-the-End');

suite(' cases', () => {
    test('Zeros case', () => {
        assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1,2,1,1,3,1,0,0,0,0]);
    });
    
    test('More zeros case', () => {
        assert.deepEqual(moveZeros([9,0,9,0,1,0,2,1,0,1,0,3,1,0,9,9,0,0,0,0]), [9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]);
    });

    test('Total zeros case', () => {
        assert.deepEqual(moveZeros([0,0,0,0]), [0,0,0,0]);
    });
});