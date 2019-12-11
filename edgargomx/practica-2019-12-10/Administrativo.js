const Empleado = require('./Empleado.js');

module.exports = class Administrativo extends Empleado{
    constructor() {
        super();
        this.name           = "Pofesores Contrato",
        this.hours          = 20,
        this.working_hours    = 15,
        this.free_time      = 5  
    }
}
