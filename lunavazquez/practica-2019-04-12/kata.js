const getAllPermutations = (string) => {
  let results = [];
  if (string.length === 1) {
    results = [...results, string];
    return results;
  }
  
  Array.from(string).reduce((i) => {
    let firstChar = string[i];
    let charsLeft = string.substring(0, i) + string.substring(i + 1);
    let innerPermutations = getAllPermutations(charsLeft);
    innerPermutations.reduce((j) => {
      results = [...results,(firstChar + innerPermutations[j]) ];
      return ++j;
    },0);
    return ++i;
  },0);

  return results;
}



const isPalindrome = (input) => { 
  let splitInput = input.split('');
  let reverseArray = splitInput.reverse();
  let joinArray = reverseArray.join('')
  if(input === joinArray){
    return true;
  } else {
    return false;
  }
  
}

const permuteAPalindrome = (input) => { 
  const array = getAllPermutations(input)
  return (array.length > 0) ? array.some(permutacion => isPalindrome(permutacion)) : true; 
}

console.log (permuteAPalindrome('baa'))