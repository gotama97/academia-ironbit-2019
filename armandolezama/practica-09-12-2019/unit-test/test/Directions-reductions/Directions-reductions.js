'use strict';

const assert = require('chai').assert;
const dirReduc = require('../../src/Directions-reductions/Directions-reductions');

suite('Directions reductions', () => {
    test('First case', () => {
        assert.deepEqual(dirReduc(
            ['EAST', 'WEST', 'SOUTH', 'NORTH', 'NORTH', 'NORTH', 'NORTH', 'WEST', 'EAST', 'SOUTH', 'NORTH']),
            ['NORTH', 'NORTH', 'NORTH']);
    });
   
    test('Second case', () => {
        assert.deepEqual(dirReduc(
            ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]),
            []);
    });
    
    
});