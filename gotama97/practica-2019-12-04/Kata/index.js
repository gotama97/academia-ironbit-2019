    function findMissingLetter(array){

        let arrayCap = [];
        let arrayLow=[];
        let position=0;
        let missingLetter = "";

        //MAPEANDO EL ARREGLO DE MAYUSCULAS
        for(let i = 0;i<26;i++){
            let letter = String.fromCharCode(i+65);
            arrayCap[i]=letter;
        }
    //charCodeAt(number);
        //MAPEANDO EL ARREGLO DE MINUSCULAS
        for(let i = 0;i<26;i++){
            let letter = String.fromCharCode(i+97);
            arrayLow[i]=letter;
        }

        //CALLBACKS
        const confirmation = (cur,idx)=>{
            if(cur===array[0]){
                position=idx;
                return true;
            }
            return false;
        }

        const confirmationlow = (cur,idx)=>{
            if(cur===array[0]){
                position=idx;
                return true;
            }
            return false;
        }
    
    

        if(arrayCap.some(confirmation)){
            
            let arrayComp = arrayCap.slice(position,(array.length+1+position));
            //REALIZANDO LA COMPRACION DE LOS DOS ARREGLOS
            console.log(arrayComp);
            for (let i = 0; i < array.length; i++){
                if(arrayComp[i] === array[i]){
                    
                } else{
                    missingLetter = arrayComp[i];
                    return missingLetter;
                }
            }
        }else if( arrayLow.some(confirmationlow)){
            let arrayComp = arrayLow.slice(position,(array.length+1+position));
            //REALIZANDO LA COMPRACION DE LOS ARRGLOS
            console.log(arrayComp);
            for (let i = 0; i < array.length; i++){
                if(arrayComp[i] === array[i]){
                
                } else{
                    missingLetter = arrayComp[i];
                    return missingLetter;
                }
            }
        }


        
        console.log(missingLetter);
    return missingLetter;
    }

let array=["p","q","s","t"];

console.log(findMissingLetter(array));