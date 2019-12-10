'use strict';

const assert = require('chai').assert;
const findMissingLetter = require('../../Kata/index');

suite('first suite',()=>{
    test('success case',()=>{
        assert.strictEqual(findMissingLetter([ 'a', 'b', 'c', 'd', 'f' ]),'e');
    });
    test('empty string',()=>{
        assert.strictEqual(findMissingLetter([]),'Only character Arrays accepted');
    });
    test('numbers case',()=>{
        assert.strictEqual(findMissingLetter([1,2,3,4]),'Only character Arrays accepted');
    });
})