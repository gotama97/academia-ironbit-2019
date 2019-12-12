'use strict';

const moduleToTest = ls => {
    if(_isAnArray(ls)) return 'Introduce a parameter of an array type';

}

const _isAnArray = ls =>{
    if(typeof(ls) !== 'array'){
        return true;
    }
}

module.exports = moduleToTest;
