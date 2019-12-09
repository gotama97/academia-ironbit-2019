//Here write test code. 
/*Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.*/

const assert  = require ('chai').assert;
const xoFunction = require ("../src/index.js");

suite('All cases' , () => {
     test('Success case' , () =>{
        assert.strictEqual(xoFunction("ooxx"),true)
    }); 
    test('Array.length greather than 0 ' , () =>{
        assert.strictEqual(xoFunction(""),"Empty strings are not allowed")
    });
})