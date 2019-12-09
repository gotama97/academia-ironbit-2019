//Here we write the function to test
'use strict';
//let xoString = ooxx;
const xoFunction  = (xoString) =>{
  //return sameAmount(xoString);
 
  if (isEmpty(xoString)){
      return "Empty strings are not allowed"
  }else{
      sameAmount(xoString)
  }   
}

const  isEmpty = (str)=> {
    if(str.length === undefined)
        return false;
    else
        return true;
}

 const sameAmount = str =>{
    //code here
    let xs = "x";
    let os = "o"
   let strLowerCase=  str.toLowerCase();
  let xArray =(strLowerCase.split("")).filter(element =>{
    return element === xs ;
  })
  let oArray =(strLowerCase.split("")).filter(element =>{
    return element === os ;
  })
  let anyArray =(strLowerCase.split("")).filter(element =>{
    return element != os && element != xs ;
  })
  console.log(str)
    
  if(xArray.length === oArray.length){
    return true;
    }else if (xArray.length <= oArray.length || xArray.length >= oArray.length ){
    
    return false;
    }else if(xArray.length === 0 || oArray.length === 0){
     return true;
     }else if(anyArray.length >= 0){
     return true
     }
}

module.exports = xoFunction;