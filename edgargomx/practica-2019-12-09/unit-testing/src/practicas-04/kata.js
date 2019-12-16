const removeNb  = (n) => {
    let x = 0;
    const arrayNumbers = Array.from({length: n}, () => ++x);
    
    const sum = (n * (n +1))/2;
    let result = [];
     
    arrayNumbers.reduce((acc) => {
        const a = (sum - acc)/(acc + 1);
          if(a < n && Number.isInteger(a)){
              result = [...result, (a, acc)];
          }
        return --acc;
    }, n);
    return result;
  }

  module.exports = removeNb;
  //removNb(26) should return [(15, 21), (21, 15)]
