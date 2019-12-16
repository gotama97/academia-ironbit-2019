'use strict';

const validSolution = (array) =>{

    let cols = array[0].map((col, i) => array.map(row => row[i]));
    let grid = array[0].map((col, i) => array.map(row => 0));

    for (let row = 0; row < 9; row++) {

        for (let col = 0; col < 9; col++) {

            let gridRow = Math.floor( row / 3 );
            let gridCol = Math.floor( col / 3 );
            let gridIndex = gridRow * 3 + gridCol;
            
            grid[gridIndex].push(array[row][col]);            
        }
    }

    for (const array of grid) {
        array.splice(0,9);
    }

    if(setArrays(array,cols, grid) === true) return true
    else return false

}

const setArrays = (rows, cols, grid) =>{
    for (let array of rows) {
       array = new Set(array);
       if(array.size < 9) return false;
    }
    for (let array of cols) {
       array = new Set(array);
       if(array.size < 9) return false;
    }
    for (let array of grid) {
        array = new Set(array);  
        if(array.size < 9) return false; 
   }
    return true;
}

module.exports = validSolution;
