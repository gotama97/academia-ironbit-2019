class Empleado{
    constructor(hrs,workHrs,resHrs){
        this.hrs = hrs;
    this.workHrs=workHrs;
    this.resHrs=resHrs;
    }
}

class Profesor extends Empleado{
    constructor(hrs,workHrs,resHrs){
        super(hrs,workHrs,resHrs);
        this.bono = false;
    }

    bono(){

    }
}

class ProfPlaza extends Empleado{
    constructor(hrs,workHrs,resHrs,age){
        super(hrs,workHrs,resHrs);
        this.age = age;
    }
    bono(age){
        let num_bonos = (age/5);
        if(age>=5){
            this.workHrs = this.workHrs - (1*num_bonos);
            this.resHrs = this.resHrs+(1*num_bonos);
        }
    }
}

class ProfContrato extends Empleado{
    constructor(hrs,workHrs,resHrs){
        super(hrs,workHrs,resHrs);
        //CONTADOR DE HORAS DE TRABAJO
        this.accHrs = 0;

    }
}

module.exports = Empleado;
module.exports = ProfContrato;
module.exports = ProfPlaza;
