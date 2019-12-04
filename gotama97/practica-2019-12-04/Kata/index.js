  function findMissingLetter(array){

    let arrayCap = [];
    let arrayLow=[];
    let position=0;
    let position1=0;

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
        }return false;
    }

    const confLow = (cur,idx)=>{
        if(cur==array[0]){
            position=idx;
            return true
        }return false
    }

    const compCap = (cur,idx)=>{
        if(cur[idx]===array[idx]){
            return true;
        }else {
            position1=idx;
            return false;
        }
    }

    const compLow=(cur,idx)=>{
        if(cur[idx]!=array[idx]){
            return true;
        }else{
            position=idx;
            return false;
        }
    }


    if(arrayCap.some(confirmation)){
        
        let arrayComp = arrayCap.slice(position,(array.length+1));
        //REALIZANDO LA COMPRACION DE LOS DOS ARREGLOS
        if(arrayComp.some(compCap)){
            return arrayComp[position1];
        }

    }else{
        let arrayComp = arrayLow.slice(position,(array.length+1));
        //REALIZANDO LA COMPRACION DE LOS ARRGLOS
        if(arrayComp.some(compLow)){
            return arrayComp[position1];
        }
    }

  return ' ';
}

let array=["B","C","D","F"];

findMissingLetter(array);