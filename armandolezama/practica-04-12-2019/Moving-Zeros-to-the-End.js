const moveZeros = arr => {
    let positions = [];
    
    let filteredArr = arr.filter((value, index) => {
        if(value === 0){
            positions = [...positions, index]
        }
        return value === 0;
    })
    let newArr = [];
        if(positions.length > 0){
            do{
                arr.splice(arr.indexOf(0), 1)
            }while(arr.some(value => value === 0))
            arr = [...arr, filteredArr]
        }
        return arr;
    }