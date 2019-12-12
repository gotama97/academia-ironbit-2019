'use strict';

const moduleToTest = (inicio, fin, array) => {

    if(_validate(inicio, fin, array)) {
        return 'At least one of the three elements has a type error';
    }

    if(!_isPositive(inicio) || !_isPositive(fin)){
        return 'One of the two first elements is negative or zero';
    }
    
    if (_isLesser(fin, array) === false) return 'second value is greater than the array';
   
};

const _validate = (inicio, fin, array) =>{
    if(typeof(inicio) !== 'number' || typeof(fin) !== 'number'){
        return true;        
    }
    else if(typeof(array) === 'array') return false;
}

const _isPositive = num =>{
    if(num > 0) return true;
    else
        return false;
}

const _isLesser = (number, array)=> {
    if(number < array.length) return true;
    else return false;
}

module.exports = moduleToTest;
