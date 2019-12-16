const primeNumbers = (start, end) => {
  let array = [];
  let divisibleOf = [2, 3, 5, 7];
  if (start <= 10){
    for (let element of divisibleOf){
      array.push(element);
    }
  }
  for (let i = start; i < end + 1; i++){
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0){
      if (i !== 1){
        array.push(i);
      }
    }
  }
  return array;
}

primeNumbers(10, 100);