'use strict';

const moduleToTest = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Numbers only allowed';
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return 'Floats not allowed';
    }
    if (_isNegative(a) || _isNegative(b)) {
        return 'Negative not allowed';
    }
    if (_isPrime(a) && _isPrime(b))
        return a + b >= 20 ? a + b : 'Result is less than 20';
    else {
        return 'All of them must be primes';
    }
};

const _isPrime = number => {
    let isPrime = true;
    for (let i = (number - 1); i > 1; i--) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime && number > 1;
};

const _isNegative = number => number < 0;

module.exports = moduleToTest;
