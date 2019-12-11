function partsSums(ls) {

    let total = [ ls.reduce((acc, actualValue) => {return acc + actualValue},0)];

    for (const index in ls){

        total[parseInt(index) + 1] = total[parseInt(index)] - ls[parseInt(index)] 
    }
    
    return total;
    }