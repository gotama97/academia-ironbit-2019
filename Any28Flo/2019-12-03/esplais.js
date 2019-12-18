//function declaration
Array.prototype.esplais = function( index , ...itemsToAdd){
 let indexi = index;
 console.log(indexi)
 let arrayFilter= [];
 let arraySplice =[]
 for (let i = 0 ; i <= indexi ; i++){
     if(i != indexi){
         arrayFilter.push(this[i])
     }else{
         arraySplice.push(this[i])
     }
 }

   return `${arrayFilter} , ${itemsToAdd}, ${arraySplice}`
  //return newArray;
};

let numberArray = [ 1 ,2,3,4,5,6];
let array = [2,3,1]
console.log(numberArray.esplais(2, array));

function XO(str) {
    //code here
    let x = "x"
  console.log((str.split("")).map(element =>{
    element.toLowerCase();
  }))
}