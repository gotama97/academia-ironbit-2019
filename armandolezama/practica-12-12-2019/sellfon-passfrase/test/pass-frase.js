const assert = require('chai').assert;
const {fibonacci, 
    transform,
    getPassFrase} = require('../src/pass-frase.js');

suite('Pass frase', () => {
    test('Fibonacci number generator', () => {
        const myString = 'unafuncionvalidadora'
        assert.deepEqual(fibonacci(myString.length), [0,1,1,2,3,5,8,13,21,34,55,89,144,233]);
    })

    test('Transform to pass frase test', () => {
        assert.deepEqual(transform([0,1,1,2,3,5], [...'53r54l']), ['5','r','5','4','3','l']);
    })

    test('Get pass frase', () => {
        assert.strictEqual(getPassFrase('53r54l'), '5r543l')
    })
});
