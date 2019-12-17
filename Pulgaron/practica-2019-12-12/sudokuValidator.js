const solution = (array) =>{

    const cols = array[0].map((col, i) => array.map(row => row[i]));
    const grid = array[0].map((col, i) => array.map(row => 0));

    for (var row = 0; row < 9; row++) {

        for (var col = 0; col < 9; col++) {

            // Calculate grid identifiers
            gridRow = Math.floor( row / 3 );
            gridCol = Math.floor( col / 3 );
            gridIndex = gridRow * 3 + gridCol;

            // Save each grid in a new row
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

console.log(solution([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
]));
