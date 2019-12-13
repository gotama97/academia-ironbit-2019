'use strict';

const assert = require('chai').assert;
const createPhoneNumber = require('../../src/function-test/index');

suite('All cases', () => {
    test('Success case', () => {
        assert.equal(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    });
    test('Success case', () => {
        assert.equal(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    });
    test('Success case', () => {
        assert.equal(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    });
    test('Fail case', () => {
        assert.equal(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 'b']), "All elements need to be numbers");
    });
});