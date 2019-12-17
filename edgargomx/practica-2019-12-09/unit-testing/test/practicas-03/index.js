'use strict';

const assert = require('chai').assert;
const esplais = require('../../src/practicas-03/esplais.js');
const minUmbrellas = require('../../src/practicas-03/sombrillas.js')

suite('Practice Splais', () => {
    test('Success case', () => {
        Array.prototype.esplaisMethod = esplais;
        const arrayTest = [10, 9, 10, 11];
        assert.deepEqual(arrayTest.esplaisMethod(2, 1), [10,9,11]);
    });

    test('Error case', () => {
        Array.prototype.esplaisMethod = esplais;
        const arrayTest = [10, 9, 10, 11];
        assert.deepEqual(arrayTest.esplaisMethod(5, 0), [10, 9, 10, 11]);
    });

    test('Without params', () => {
        Array.prototype.esplaisMethod = esplais;
        const arrayTest = [10, 9, 10, 11];
        assert.deepEqual(arrayTest.esplaisMethod(), [10, 9, 10, 11]);
    });

    test('Drop element and Add new elements', () => {
        Array.prototype.esplaisMethod = esplais;
        const arrayTest = [10, 9, 10, 11];
        assert.deepEqual(arrayTest.esplaisMethod(0,1,7,8), [7, 8, 9, 10, 11]);
    });

    test('Drop two elements ', () => {
        Array.prototype.esplaisMethod = esplais;
        const arrayTest = [7, 8, 9, 1, 2, 3, 10, 11];
        assert.deepEqual(arrayTest.esplaisMethod(3,3), [7, 8, 9, 10, 11]);
    });
});

suite('Practice Kata Umbrella a Man', () => {
    test('Success case', () => {
        assert.strictEqual(minUmbrellas(["rainy", "clear", "rainy", "cloudy"]), 2);
    });

    test('rainy frecuent', () => {
        assert.strictEqual(minUmbrellas(["rainy", "rainy", "rainy", "rainy", "thunderstorms", "rainy"]), 1);
    });

    test('Without umbrellas', () => {
        assert.strictEqual(minUmbrellas(["sunny", "windy", "sunny", "clear"]), 0);
    });

    test('Return 3 umbrellas', () => {
        assert.strictEqual(minUmbrellas(["sunny","clear","sunny","sunny","clear","clear","sunny","rainy","clear","clear","windy","clear","clear","windy","sunny","clear","cloudy","clear","clear","sunny","sunny","rainy","thunderstorms","sunny","clear","windy","thunderstorms","windy","windy","clear","windy","clear","clear","clear","windy","clear","windy","sunny","windy","clear","windy","sunny","sunny","sunny","windy","sunny","sunny","sunny","windy","windy","sunny","sunny","rainy","thunderstorms","rainy","rainy","clear","windy","windy","thunderstorms","windy","clear","windy","clear","sunny","windy","cloudy","sunny","clear","clear","clear","sunny","cloudy","clear","windy","rainy","windy","clear","clear","sunny","sunny","sunny","sunny","cloudy","clear","clear","sunny","windy","windy","windy","thunderstorms","windy","windy","clear","thunderstorms","sunny","sunny","sunny","sunny","clear"]), 3);
    });

    test('Array empty', () => {
        assert.strictEqual(minUmbrellas([]), 0);
    });
});