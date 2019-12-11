class Employe{
    constructor(id,tasks){
        this.id = id;
        this.name ="Fulanito";
        this.rfc ="FOGE921128dfa";
        this.tasks = tasks;
    }
    displayInfo(){
        console.log(` Employe number ${this.id}, name ${this.name}, rfc : ${this.rfc} `)
    }

}
class Administrator extends Employe {
    constructor(id){
        super(id);
        this.type = "Administrator";
    }
}
class Profesor extends Employe{
    constructor(id,tasks){
        super(id,tasks);
        this.type ="Profesor";
        this.acummHrs = 0;
    }
}
class fullTimeProfesor extends Profesor{
    constructor(id,tasks){
        super(id,tasks)
        this.type ="Full time profesor";
    }
    assingTasks(tasks){
        this.tasks = tasks.map( task =>{
            console.log( `My task are ${task}`)
        })
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
    let id= 0 ;
    for(let i = 0 ; i < numAdmins ; i++){
        let newAdmin = new type (id, tasks);
        arrayAdmins.push(newAdmin);
        id++;
    }
    return arrayAdmins;
}

let arrayAdmins = [];

createProfesors(2, fullTimeProfesor)
createProfesors(3, partTimeProfesor)
createProfesors(3, Administrator)
console.log(arrayAdmins);
