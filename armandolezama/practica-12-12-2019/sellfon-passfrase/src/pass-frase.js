
const fibonacci = (counter) => {
    let fibonacciSerie = [0, 1];
    for(let i = 3; i <= counter ; i++){
        if(i > 10){
            counter -= 2;
        } else if (i > 100){
            counter -= 3;
        };
        fibonacciSerie = [...fibonacciSerie, fibonacciSerie[i - 3] + fibonacciSerie[i - 2]];
    }
    return fibonacciSerie;
}

const smoothArrays = (fibonArray, stringArray) => fibonArray.join('').toString().slice(0,stringArray.length);

const transform = (fibonArray, stringArray) => {
    let newArray = [];

    for(const position in fibonArray){
        if(newArray.length < fibonArray[position]){

            if(fibonArray[position] % newArray.length === 0){
                newArray = [...newArray, stringArray[position]];
            } else {
                newArray.splice( fibonArray[position] % newArray.length , 0, stringArray[position]);
            }
            
        } else {
            newArray.splice( fibonArray[position] , 0, stringArray[position]);
        }
        newArray[fibonArray[position]];
    }
    return newArray;
}

const getPassFrase = (string) => {
    let fibonacciArray = fibonacci(string.length);
    fibonacciArray = smoothArrays(fibonacciArray, [...string]);
    return transform(fibonacciArray, [...string]).join('').toString();
}

module.exports = {fibonacci, transform, getPassFrase};