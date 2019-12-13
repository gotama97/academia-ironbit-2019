class Emloyee{
    constructor(hrs,workHrs,resHrs){
        this.hrs = hrs;
    this.workHrs=workHrs;
    this.resHrs=resHrs;
    this.schedule;
    }
}

class Teacher extends Employee{
    constructor(hrs,workHrs,resHrs){
        super(hrs,workHrs,resHrs);
        this.bonus = false;
    }

    schedule(){
        this.schedule = new Array(5);
        for (var i = 0; i < 6; i++) {
            this.schedule[i] = new Array(9);
          }
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
            this.workHrs = this.workHrs - num_bonus;
            this.resHrs = this.resHrs+num_bonus;
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
    meeting(){
        this.workHrs=-3;
    }
    laboresAdm(){
        this.workHrs-=4;
    }
}

module.exports = Employee;
module.exports = TeacherC;
module.exports = TeacherP;
