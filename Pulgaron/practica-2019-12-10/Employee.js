class Subjects {
    constructor(){
        this._subject = [
            {subject: 'Matematicas', hoursLeft: 40},
            {subject: 'Ciencias', hoursLeft: 40},
            {subject: 'Español', hoursLeft: 40},
            {subject: 'Historia', hoursLeft: 40},
            {subject: 'Geografia', hoursLeft: 40},
            {subject: 'Civismo', hoursLeft: 40}
        ];
    }   
}

class Employee {
    constructor(id, name, hours){
        this._id = id;
        this._name = name;
        this._hours = hours;
    }
}

class Administrative extends Employee{
    constructor(id, name, hours){
        super(id, name, 40);
    }

}

class Professor extends Employee{
    constructor(id, name, hours){
        super(id, name, hours);
        this._classHours = hours;
        this._hours = this._hours + this._classHours;
        this._professorSubject = [
            {subject: 'Matematicas', hoursLeft: 0},
            {subject: 'Ciencias', hoursLeft: 0},
            {subject: 'Español', hoursLeft: 0},
            {subject: 'Historia', hoursLeft: 0},
            {subject: 'Geografia', hoursLeft: 0},
            {subject: 'Civismo', hoursLeft: 0}
        ];
    }

    hoursGiven(){
        let hours = 0;
        for (let key of this._professorSubject) {
            hours = hours + key.hoursLeft;
        }
    return hours;
    }

    
}

class AssociateProfessor extends Professor{
    constructor(id, name, hours){
        super(id, name, 35);
    }

    assignSubjects(subjects){
        for (let index = 0; index < this._classHours; index++) {
            const i = Math.floor(Math.random() * (0 - 6) + 6);
                if(subjects[i].hoursLeft > 0){
                    this._professorSubject[i].hoursLeft++;
                    subjects[i].hoursLeft--;
                }
        }
        if(this._hours > 43800){
            console.log('Felicidades, se redujeron sus horas de clase');
            this._classHours = this._classHours -1;
            this._hours = 0;
        }   
        console.log('Horas totales asignadas: ', this.hoursGiven());
        console.log('full schedule');
    }

    
}

class ContractProfessor extends Professor{
    constructor(id, name, hours){
        super(id, name, 20);        
    }

    assignSubjects(subjects){
        for (let index = 0; index < this._classHours; index++) {
            const i = Math.floor(Math.random() * (0 - 6) + 6);
            if(subjects[i].hoursLeft > 0){
                this._professorSubject[i].hoursLeft++;
                subjects[i].hoursLeft--;
            }
        }   
        console.log('Horas totales asignadas: ', this.hoursGiven());
        const numBonos = Math.trunc(this.hoursGiven()/10);
        console.log('El numero de bonos en esta semana son: ', numBonos);
        console.log('full schedule');
    }

}

const subjects = new Subjects();
const empleado = new ContractProfessor (1, 'Juan');
empleado.assignSubjects(subjects._subject);
console.log(empleado._classHours);
console.log(empleado._professorSubject);
console.log(subjects._subject);
