class Employe{
    constructor(id){
        this.id = id;
        this.name ="Fulanito";
        this.rfc ="FOGE921128dfa";
    }
    displayInfo(){
        console.log(` Employe number ${this.id}, name ${this.name}, rfc : ${this.rfc} `)
    }

}
class Administrator extends Employe {
    constructor(id,name,rfc){
        super(id,name,rfc);
        this.tasks = ""
    }
}
class Profesor extends Employe{
    constructor(id,name,rfc){
        this.clases = 1;

    }
}
class contractTeacher extends Profesor{
    constructor(){
     this.seniority = 2;

    }
}
// class fullProfesor extends Profesor{
//     constructor (){
 
//     }
// }

const createAdmins = numAdmins =>{
    let id= 0 ;
    for(let i = 0 ; i <= numAdmins ; i++){
        let newAdmin = new Employe(id);
        arrayAdmins.push(newAdmin);
        id++;
    }
    return arrayAdmins;
}
let arrayAdmins = [];

let numAdmins = 3;
createAdmins(numAdmins)
console.log(arrayAdmins);
