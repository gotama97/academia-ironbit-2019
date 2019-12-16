'use strict';

const assert = require('chai').assert;
const findMissingLetters = require('../../src/Find-missing-letters/Find-missing-letters');

suite('Find missing letters', () => {
    test('First case', () => {
        assert.strictEqual(findMissingLetters(['a','b','c','d','f']),'e');
    });
    test('Second case', () => {
        assert.strictEqual(findMissingLetters(['O','Q','R','S']),'P');
    });

    test('Third case', () => {
        assert.strictEqual(findMissingLetters(['Q','R','S','T','V','W']),'U');
    });

    test('Fourth case', () => {
        assert.strictEqual(findMissingLetters(['i','k','l']),'j');
    });
});
