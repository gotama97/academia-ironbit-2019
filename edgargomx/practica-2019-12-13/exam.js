const whatArePrime = (start, end) => {
    const long = end - start;
    const numArray = Array.from({ length: long + 1 }, () => start++ )

    const primes = numArray.filter(number => ( ((number === 2)  || (number%2 !== 0)) &&
                                               ((number === 3)  || (number%3 !== 0)) &&
                                               ((number === 5)  || (number%5 !== 0)) &&
                                               ((number === 7)  || (number%7 !== 0)) &&
                                               ((number === 11) || (number%11 !== 0)) &&
                                               ((number === 13) || (number%13 !== 0)) ));
    console.info(primes)
}


whatArePrime(100, 200);