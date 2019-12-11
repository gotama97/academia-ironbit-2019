//function declaration
Array.prototype.esplais = function( index , ...itemsToAdd){
 let indexi = index;
 console.log(indexi)
 let arrayFilter= []
 for (let i = 0 ; i <= indexi ; i++){
     if(i != indexi){
         arrayFilter.push(this[i])
     }
 }
 console.log(`${arrayFilter} , ${itemsToAdd}`)
  //return newArray;
};

let numberArray = [ 1 ,2,3,4,5,6];
let array = [2,3,1]
console.log(numberArray.esplais(2, array));

