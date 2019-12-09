Array.prototype.esplais = function (index,numDelete,...valuesToAdd) {  

	let new_array = []	
	let i = 0, otherIndex = 0;	
	let lengthArray = this.length + 1

	//try map and slice
	while (i < lengthArray) {		
		if (i === index) {			
			new_array[i] = valuesToAdd;	
			otherIndex += numDelete	
			lengthArray -= numDelete
		} else {		 
		 new_array[i] = array[otherIndex];      
		 otherIndex++;    
		}		
		i++;	
	}	
	console.log(new_array);
};

const array = ['1', '2', '3', '4', '5', '6', '7', '8'];
array.esplais(1,2,"esplaising","maybe not to well");
console.log(array);