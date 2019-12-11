
Array.prototype.esplais = function (start, del, ...toAdd){
    if(start >= this.length || start < 0) {
        return console.error(`Value 'start' out of parameter`);
    } else if(del + start > this.length){
        return console.error('start items to del are out of rank')
    } else {
        console.info(this.Array)
        const firstArr = [...this.slice(0, start)]
        const secondArr = [...this.slice(start + del, this.length)]
        const result = [...this.slice(start, start + del)]
        console.log(this.values())
        this.values([...firstArr, ...toAdd, ...secondArr])
        return result
    }
}

