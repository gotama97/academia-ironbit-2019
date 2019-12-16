const myfunction = (start,end)=>{
    let flag = false;
    let i, j;
    //regresar numeros primos
     for( i = start; i <= end; i++){
        if(i === 0 || i === 1){
            continue;   
        }
    
        flag = true;
        for( j = 2; j<=i/2; ++j){
            if(i % j === 0){
                flag = false;
                break;
            }
        }
            
        if (flag === true) { 
            console.log(i); 
        } 
    }
}
