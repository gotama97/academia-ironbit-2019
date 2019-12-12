class Employee {
    constructor(totalHrs, workingHrs, freeHrs ){
        this.totalHours = totalHrs;
        this.workingHours = workingHrs;
        this.freeHours = freeHrs;
        this.schedule = [];
    }
    assignHours(){
        
    }
}

class Administrative extends Employee{
    constructor(totalHrs, workingHrs, freeHrs){
        super(totalHrs, workingHrs, freeHrs);
        this.schedule = [
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null]
        ] 
    }
    /*assignHours(){
        for (const day in this.schedule){
            for (const hour in day){
                if (Math.floor(Math.random()*2) == 1){
                    this.schedule[day][hour] = `Clase de ${}`
                }
            }
        }
    }*/
}

class Professor extends Employee{
    constructor(totalHrs, workingHrs, freeHrs){
        super(totalHrs, workingHrs, freeHrs);
        this.bonus = false;
        this.schedule = [
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null]
        ] 
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
        if (totalBonus > 0){
            for(let i = 0; i < totalBonus; i++){
                this.workingHours = this.workingHours - (1 * totalBonus);
                this.freeHours = this.freeHours + (1 * totalBonus);
            }
        } 
    }
    assignHours(){
        /*const totalWorkinHours = this.workingHours;
        const totalfreeHours = this.freeHours;
        let work = 0;
        let free = 0;
        let availableWorkTimePerDay = totalWorkinHours / 5;
        //let availableFreeTimePerDay = totalfreeHours / 5;
        let thisDayWork = 0;
        //let thisDayFree = 0;
        while (work <  totalWorkinHours){
            for ( const index in this.schedule){
                for (const element of index){
                    while (thisDayWork < availableWorkTimePerDay){
                        if (element === null){
                            if (Math.floor(Math.random()*2 === 1)){
                                element = `dar clase`;
                                work += 1;
                            } 
                        }
                    }
                }
            }
        }
        console.log(this.schedule);*/
        /*while (free < totalfreeHours){

        }
        for ( const index in this.schedule){
            for (const element of index){
                if (element === null ){
                    while ( work < 4){
                        if (Math.floor(Math.random()*10)){
                            element = `dar clase`;
                            work += 1;
                        } 
                    }
                }
            }
        }*/
    }
}

class ProfessorContract extends Professor{
    constructor(totalHrs, workingHrs, freeHrs, weekWorkedHours, bonus = 0){
        super(totalHrs, workingHrs, freeHrs);
        this.weekWorkedHours = weekWorkedHours;
        this.bonus = bonus;
    }
    bono(weekWorkedHours){
        let totalBonus = (this.weekWorkedHours / 10);
        if(this.weekWorkedHours > 10){
            this.bonus = totalBonus;
        }
    }
}

let manu = new ProfessorFixed(50, 35, 15, 10);
manu.assignHours();
console.log(manu);