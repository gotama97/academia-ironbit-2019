const Employee = require('./Employee.js');

module.exports = class Teacher extends Employee{
    constructor(type) {
        super();
        type = type.toUpperCase();
        if(type === 'PLAZA'){
            this.uid            = this.generateUID(type);
            this.name           = "Profesor Plaza",
            this.type_teacher   = type
            this.hours          = 50,
            this.class_hours    = 35,
            this.free_time      = 15 
        }

        if(type === 'CONTRATO'){
            this.uid            = this.generateUID(type);
            this.name           = "Profesor Contrato",
            this.type_teacher   = type,
            this.hours          = 20,
            this.class_hours    = 15,
            this.free_time      = 5 
        }
         
    }
}
