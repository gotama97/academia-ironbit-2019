'use strict';

const validSolution = (array) => {
    let flag = true;
    let _rows = array;
    let _cols = [[], [], [], [], [], [], [], [], []];
    let _grids = [[], [], [], [], [], [], [], [], []];
    for (let row in array) {
        for (let col in array[row]) {
            //salvando cada columna en na nueva fila
            _cols[col][row] = array[row][col];

            //delegando los datos a su grid correspondiente
            let gridRow = Math.floor(row / 3);
            let gridCol = Math.floor(col / 3);
            let grindIndex = gridRow * 3 + gridCol;

            //guardando cada grid en una nueva fila
            _grids[grindIndex].push(array[row][col]);
        }
    }
    //revisamos que en las filas no se repitan caracteres
    for (let idxrr in _rows) {
        let addr;
        let rowSet = new Set();
        for (let idxcr in _rows[idxrr]) {
            addr = _rows[idxrr][idxcr];
            if(!rowSet.has(addr)){
                rowSet.add(addr);
            }else{
                flag=false;
            }
        }
    }
//revisando que no se repitan lo caracteres en las columnas
    for(let idxrc in _cols){
        let addc;
        let colSet = new Set();
        for(let idxcc in _cols[idxrc]){
             addc = _cols[idxrc][idxcc];
          if(!colSet.has(addc)){
            colSet.add(addc);
          }else{
            flag = false;
          }
        }
    }
//revisamos que ningun numero se repita en las grillas
    for(let idxrg in _grids){
        let addg ;
        let gridSet = new Set();
        for(let idxcg in _grids[idxrg]){
             addg = _grids[idxrg][idxcg];
            if(!gridSet.has(addg)){
                gridSet.add(addg);
            }else{
                flag = false;
            }
        }
    }

    return flag;

}

module.exports = validSolution;