    (array)=>{

        if(array.length>0&& array.every(item=>typeof item === 'string')){
            let isCapital = false;
            let capitalABC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            array[0] === array[0].toUpperCase() ? isCapital = true: isCapital = false;
            
            if(isCapital){
                for(const letter in capitalABC){
                capitalABC[letter] = capitalABC[letter].toUpperCase()
                }
            }
    
            let from = capitalABC.indexOf(array[0])
            let to = capitalABC.indexOf(array[array.length - 1])
            let arrayForCompare = capitalABC.slice(from, to + 1)
            let result = []
    
    
            for(const letter of arrayForCompare){
                if(array.indexOf(letter) < 0){
                   result = [...result, letter]
                }
                }
            return result.toString();
        }else{
            return 'Only character Arrays accepted';
        }
    }

    module.exports = findMissingLetter;