'use strict';

module.exports = function(index, deleteCount, ...itemToAdd) {
        //validations
        if (index === undefined) {
            return this;
        }

        const part1 = this.slice(0, index)
        const part2 = this.slice(index)
        const numberDelete = new Array(deleteCount)
        for(let index of numberDelete) {
            part2.shift()
        }

        return [...part1,...itemToAdd,...part2]
}
