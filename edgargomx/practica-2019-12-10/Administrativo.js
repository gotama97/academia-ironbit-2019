const Empleado = require('./Empleado.js');

module.exports = class Administrativo extends Empleado{
    constructor() {
        super();
        this.uid            = this.generateUID("ADMIN");
        this.name           = "Admin",
        this.hours          = 20,
        this.working_hours    = 15,
        this.free_time      = 5  
    }

}
