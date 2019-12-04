Array.prototype.esplais = function(index, deleteCount, ...itemToAdd ) {
    console.log(deleteCount - index)
    aux = this.slice(index, )
    const part1 = this.slice(0, index)
    const part2 = this.slice(index)
    console.log(part2)
    numberDelete = new Array(deleteCount);
    for(let index in numberDelete) {
        part2.pop()
    }
    
    return [...part1,...itemToAdd,...part2];
}