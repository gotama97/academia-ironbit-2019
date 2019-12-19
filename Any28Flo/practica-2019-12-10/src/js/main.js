class Employee{
    constructor(id,tasks){
        this.id = id;
        this.name ="Fulanito";
        this.rfc ="FOGE921128dfa";
        this.tasks = tasks;
        this.hrsAccum = 0;
        this.antique = 0 ; 
    }
    displayInfo(){
        console.log(` Employe number ${this.id}, name ${this.name}, rfc : ${this.rfc} `)
    }

}
class Administrator extends Employee {
    constructor(id,tasks){
        super(id,tasks);
        this.type = "Administrator";
    }
    assingTasks(){
       this.tasks = this.tasks.filter( task =>{
            return task.nameTask === "Junta" || task.nameTask == "Labores Administrativas";
        })
    }
}
class Profesor extends Employee{
    constructor(id,tasks){
        super(id,tasks);
        this.type ="Profesor";
        this.acummHrs = 0;
    }
    assingTasks(){
        this.tasks = this.tasks.filter(task =>{
            return task.nameTask === "Clases" || tasks.nameTask == "Recesos" || tasks.nameTask == "Juntas"
        })
    }
}
class fullTimeProfesor extends Profesor{
    constructor(id,tasks){
        super(id,tasks)
        this.type ="Full time profesor";
    }
    assingTasks(){
        super.assingTasks();

    }
}
class partTimeProfesor extends Profesor{
    constructor(id, tasks){
        super(id,tasks);
        this.type = "Part time profesor";
    }
}
let tasks = [
    {"nameTask" : "Junta" , "hrs" : 3},
    {"nameTask" : "Labores Administrativas" , "hrs" : 4},
    {"nameTask" : "Clases" , "hrs" : 1 },
    {"nameTask" : "Recesos" , "hrs" : 1},
];
const createProfesors= (numAdmins, type) =>{
    for(let i = 0 ; i < numAdmins ; i++){
        let newAdmin = new type (id, tasks);
        arrayAdmins.push(newAdmin);
        id++;
    }
    return arrayAdmins;
}
//Global variables
let id= 0 ;

let arrayAdmins = [];

createProfesors(2, fullTimeProfesor)
createProfesors(3, partTimeProfesor)
createProfesors(3, Administrator)
arrayAdmins.map(admin =>{
    admin.assingTasks(tasks)
})
