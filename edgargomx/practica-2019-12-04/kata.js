function removeNb (n) {
    const arrayNumber = Array.from({length: n}, () => ++x);
    
    const sum = (n * (n +1))/2;
      let result = [];
      for(let b = n; b > 0; b --){
          const a = (sum - b)/(b + 1);
          if(a < n && Number.isInteger(a)){
              result = [...result, [a, b]];
          }
      }    return result;
    
  }

  //removNb(26) should return [(15, 21), (21, 15)]

  removeNb(26)