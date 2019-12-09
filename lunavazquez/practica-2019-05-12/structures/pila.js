function myPush(array, value) {
  const nextIndex = array.length;
  console.log(1, array);
  array[nextIndex] = value;
  console.log(2, array);
  return array;
}

function myPop(array){
  console.log(pila[pila.length - 1])
}

const pila = [1, 2, 3, 4];
console.log(myPush(pila, 10));