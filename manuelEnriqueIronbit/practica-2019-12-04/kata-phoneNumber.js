function createPhoneNumber(numbers){
	//Se separan los elementos deseados con slice
  	return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`
}

let numbers = [1,0,2,3,4,5,6,7,8,9];

createPhoneNumber(numbers)