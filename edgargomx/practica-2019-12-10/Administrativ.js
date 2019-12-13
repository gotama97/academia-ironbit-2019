const Employee = require('./Employee.js');

module.exports = class Administrativ extends Employee{
    constructor() {
        super();
        this.uid            = this.generateUID("ADMIN");
        this.name           = "Admin",
        this.hours          = 20,
        this.working_hours  = 15,
        this.free_time      = 5  
    }

}
