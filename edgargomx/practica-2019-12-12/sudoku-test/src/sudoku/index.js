const validSolution = (matrix_solution) => {
    let num = 0
    const size_matrix = matrix_solution.length;
    const numbers = Array.from({length: size_matrix}, () => num++)
    num = 0;
    const iteratorGrids = Array.from({length: (size_matrix/3) }, () => num++);
    num = 0;
    const numbersToGrids = Array.from({length: (size_matrix/3) }, () => Array.from({length: (size_matrix/3) }, () => num++))

    // get rows
    const rows = matrix_solution.reduce((acc, current) => [...acc, new Set(current)], []);
    // get columns
    const columns = numbers.reduce((accR, currentColum)=> {
        const column = numbers.reduce((accC, currentRow)=> [...accC, matrix_solution[currentRow][currentColum]],[]);
        return [...accR, new Set(column)]
    },[]);
    // get grids
    const grids = iteratorGrids.reduce((acg, columna) => {
        const columGrid = iteratorGrids.reduce((acg, row) => { 
            const rowGrid = numbersToGrids[row].reduce((accR, currentColum)=> {
                const column = numbersToGrids[columna].reduce((accC, currentRow)=> [...accC, matrix_solution[currentColum][currentRow]],[]);
                return [...accR, ...column];
            },[]);
            return [...acg, new Set(rowGrid)];
        }, []);
        return [...acg, ...columGrid];
    }, []);

    const validRepeat = (setToValid) => {
        return setToValid.every(array => array.size === size_matrix);
    }

    return (validRepeat(rows) && validRepeat(columns) && validRepeat(grids));
}

module.exports = validSolution;