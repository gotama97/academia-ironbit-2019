'use strict';

const assert = require('chai').assert;
const moduleToTest = require('../../src/function-test');

suite('All cases', ()=>{
    test('The function parameter is not an array', () =>{
        assert.strictEqual(moduleToTest(3), 'Introduce a parameter of an array type');
    });
})

