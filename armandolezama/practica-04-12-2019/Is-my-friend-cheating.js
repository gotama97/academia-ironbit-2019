const removeNb = (n) => {
    const sum = (n * (n +1))/2;
    const result = [];
    for(let b = n; b > 0; b --){
        const a = (sum - b)/(b + 1);
        if(a < n && Number.isInteger(a)){
            result= [...result,a,b];
        }
    }

    return result;
}

const findMissingLetter = (array) => {
    let isCapital = false;
    let lowerCaseABC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    array[0] === array[0].toUpperCase() ? isCapital = true: isCapital = false;
    
    if(isCapital){
        for(const letter in lowerCaseABC){
        lowerCaseABC[letter] = lowerCaseABC[letter].toUpperCase()
        }
    }
 
    let arrayForComparison = lowerCaseABC.slice(lowerCaseABC.indexOf(array[0]), lowerCaseABC.indexOf(array[array.length - 1]) + 1)
    let result = []
    for(const letter of arrayForComparison){
        if(array.indexOf(letter) < 0){
            result = [...result, letter]
        }
    }

    return result.toString();
  }