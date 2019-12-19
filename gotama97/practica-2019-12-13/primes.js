const test = (from,to)=>{
    let arrayPrimes = [];

    for(let num=from; num<=to;num++){
        if(isPrime(num)){
            arrayPrimes.push(num);
        }
    }
    return arrayPrimes;

}

const isPrime=(number)=>{
    let primeFinded = true;
    for(let itr = 2;itr<number;itr++){
       if(number%itr===0){
        primeFinded = false;
        itr = number;
       }
    }
    return primeFinded
}

test(3,18);
