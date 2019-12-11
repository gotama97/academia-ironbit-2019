class Emloyee{
    constructor(hrs,workHrs,resHrs){
        this.hrs = hrs;
    this.workHrs=workHrs;
    this.resHrs=resHrs;
    this.schedule;
    }
    schedule(){
    }
}

class Teacher extends Employee{
    constructor(hrs,workHrs,resHrs){
        super(hrs,workHrs,resHrs);
        this.bonus = false;
    }

    schedule(){
        this.schedule = new Array(9);
        for (var i = 0; i < 6; i++) {
            this.schedule[i] = new Array(2);
          }
    }

    bonus(){

    }

    rest(){
        this.resHrs-=1;
    }

    class(){
        this.workHrs+=1;
    }
}

class TeacherP extends Teacher{
    constructor(hrs,workHrs,resHrs,age){
        super(hrs,workHrs,resHrs);
        this.age = age;
    }
    bonus(age){
        let num_bonus = (age/5);
        if(age>=5){
            this.workHrs = this.workHrs - (1*num_bonus);
            this.resHrs = this.resHrs+(1*num_bonus);
        }
    }

    fillSchedule(workHrs,resHrs){
        
    }
}

class TeacherC extends Teacher{
    constructor(hrs,workHrs,resHrs){
        super(hrs,workHrs,resHrs);
        
    }
    bonus(hrs){
        let bonus = hrs/10
        if(hrs>10){
            return bonus
        }
    }
}

class Admi extends Employee{
    junta(){
        this.workHrs=-3;
    }
    laboresAdm(){
        this.workHrs-=4;
    }
}

module.exports = Employee;
module.exports = TeacherC;
module.exports = TeacherP;
