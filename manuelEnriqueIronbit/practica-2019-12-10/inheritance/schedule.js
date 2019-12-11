class Empleado {
    constructor(totalHrs, workingHrs, freeHrs ){
        this.totalHours = totalHrs;
        this.workingHours = workingHrs;
        this.freeHours = freeHrs;
    }
}

class Professor extends Empleado{
    constructor(totalHrs, workingHrs, freeHrs){
        super(totalHrs, workingHrs, freeHrs);
        this.bonus = flase;
    }
    bono(){

    }
}

class ProfessorFixed extends Professor{
    constructor(totalHrs, workingHrs, freeHrs, agesWorked){
        super(totalHrs, workingHrs, freeHrs);
        this.agesWorked = agesWorked;
    }
    bono(agesWorked){
        let totalBonus = (this.agesWorked / 5);
        if(this.agesWorked >= 5){
            this.workHrs = this.workHrs - (1 * num_bonos);
            this.resHrs = this.resHrs+(1 * num_bonos);
        }
    }
}

class ProfessorContract extends Professor{
    constructor(totalHrs, workingHrs, freeHrs, weekWorkedHours, bonus = 0){
        super(totalHrs, workingHrs, freeHrs);
        this.weekWorkedHours = weekWorkedHours;
        this.bonus = bonus;
    }
    bono(){
        let totalBonus = (this.weekWorkedHours / 10);
        if(this.weekWorkedHours > 10){
            this.bonus = totalBonus;
        }
    }
}