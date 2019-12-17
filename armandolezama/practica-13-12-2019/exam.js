
const primeGenerator = to => {
    const arr = [2,to];
    let secondArr = [2, 3];
    let isPrime = true;
    for(let i = arr[0]; i <= arr[1]; i++){
        isPrime = true
            for(const previousNumber of secondArr){
                i % previousNumber === 0 ? isPrime = false : isPrime
            }
            isPrime ? secondArr = [...secondArr, i] : secondArr
    };

    return secondArr;
}

const primeNumbers = (from, to) => {
    return primeGenerator(to).filter(value=>{
        return value >= from;
    })
};

