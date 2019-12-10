'use strict';

const assert = require('chai').assert;
const removNb = require('../../src/practicas-04/kata.js')

suite('Practice Kata', () => {
    test('Succes case', () => {
        assert.deepEqual(removNb(26), [(15, 21), (21, 15)])
    });

    test('Result Empty', () => {
        assert.deepEqual(removNb(100), [])
    });

    test('Not a number', () => {
        assert.deepEqual(removNb('doce'), [])
    });

    test('Not a number decimal', () => {
        assert.deepEqual(removNb(26.5), [])
    });

    test('With params', () => {
        assert.deepEqual(removNb(), [])
    });
});