const Empleado = require('./Empleado.js');

module.exports = class Profesor extends Empleado{
    constructor(type) {
        super();
        if(type.toLowerCase() === 'plaza'){
            this.name           = "Pofesores Plaza",
            this.hours          = 50,
            this.class_hours    = 35,
            this.free_time      = 15 
        }

        if(type.toLowerCase() === 'contrato'){
            this.name           = "Pofesores Contrato",
            this.hours          = 20,
            this.class_hours    = 15,
            this.free_time      = 5 
        }
         
    }
}
