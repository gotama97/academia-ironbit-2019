Array.prototype.esplais = function(index, deleteCount, ...itemToAdd ) {
    
    const part1 = this.slice(0, index)
    const part2 = this.slice(index)
    numberDelete = new Array(deleteCount);
    for(let index in numberDelete) {
        part2.pop()
    }
     
    return [...part1,...itemToAdd,...part2];
}