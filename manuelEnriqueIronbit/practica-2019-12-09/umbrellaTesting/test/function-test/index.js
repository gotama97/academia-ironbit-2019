'use strict';

const assert = require('chai').assert;
const minUmbrellas = require('../../src/function-test/index');
const atLeastOne = require('../../src/function-test/emptyOrNot');

suite('All cases', () => {
    test('Success case', () => {
        assert.equal(minUmbrellas(["cloudy"]), 0, "wrong answer for one value in weather array");
    });
    test('Success case', () => {
        assert.equal(minUmbrellas(["rainy", "rainy", "rainy", "rainy"]), 1, "wrong answer for always rainy.");
    });
    test('Success case', () => {
        assert.equal(minUmbrellas(["overcast", "rainy", "clear", "thunderstorms"]), 2, "wrong answer for 2 dry mornings and 2 rainy afternoons.");
    });
    test('Success case', () => {
        assert.equal(minUmbrellas(["overcast", "rainy", "clear", "thunderstorms"]), 2, "wrong answer for 2 dry mornings and 2 rainy afternoons.");
    });
    test('Success case', () => {
        assert.equal(minUmbrellas(["rainy", "rainy", "clear", "rainy", "clear", "rainy", "clear", "rainy"]), 4, "wrong answer for 2 dry mornings and 2 rainy afternoons.");
    });
    test('Success case', () => {
        assert.strictEqual(atLeastOne(4,1,0), true, "There must be a umbrella on home or office");
    });
    test('Success case', () => {
        assert.equal(minUmbrellas(["overcast", "rainy", "clear", "overcast", "rainy", "clear", "thunderstorms", "rainy", "clear"]), 2, "wrong answer for 2 dry mornings and 2 rainy afternoons.");
    });
});
