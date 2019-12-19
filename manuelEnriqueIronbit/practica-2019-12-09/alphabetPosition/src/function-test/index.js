const alphabetPosition = text => {
  let arrayCap = [];
  let arrayLow = [];
  for(let i = 0;i<26;i++){
      let letter = String.fromCharCode(i+65);
      arrayCap[i]=letter;
  }
  for(let i = 0;i<26;i++){
      let letter = String.fromCharCode(i+97);
      arrayLow[i]=letter;
  }

  let phraseArray = Array.from(text);
  let ignoreSpaces = phraseArray.filter(c=>c!=' ');
  
  for (element of ignoreSpaces){
    if(typeof element !== 'string'){
      return "Only strings can be used";
    }
  }

  let res = ignoreSpaces.map((cur,idx)=>{
      for(let i=0;i<26;i++){
          if(cur===arrayLow[i]||cur===arrayCap[i]){
              return (cur=(i+1))
          }
      }
  });
  let res2 = res.filter(c=>c!=undefined).join(' ');
  test=res2;
  return test;
}

module.exports = alphabetPosition;
