//function declaration
Array.prototype.esplais = function( index, deleteCount , ...itemsToAdd){
 let indexi = index;
 console.log(indexi)
 let arrayFilter= []
 for (let i = 0 ; i <= this.length ; i++){
     if(i != indexi){
         arrayFilter.push(this[i])
     }
 }
 console.log(arrayFilter)
  //return newArray;
};

let numberArray = [ 1 ,2,3,4,5,6];

console.log(numberArray.esplais(2));

