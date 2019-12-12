

Array.prototype.esplais = function esplicer(inicio, fin, array ){
    

    const arrayslicedpart1 = this.slice(0, inicio);
    
    const arrayslicedpart2 = this.slice(fin, this.length-1);
    
    const lastarray = [...arrayslicedpart1,...array, ...arrayslicedpart2];
    
    return lastarray;
}


const array = [1,2,3,4,5,6,7,8,9];

const array2 = [11,12,13];

const arraysplice = array.esplais(2,4, array2);

console.log(arraysplice);