Administrativo = require('./Administrativo.js')
Profesor = require('./Profesor.js')

generateEmpleados = (type, numEmpleados) => {
    if(type === 'admin'){
        return returnArray = Array.from({length: numEmpleados}, () => new Administrativo()); 
    } else if ((type === 'plaza') || type === 'contrato') {
        return returnArray =  Array.from({length: numEmpleados}, () => new Profesor(type));
    }else {
        return "error: no se puede generar";
    }
}


generateRandom = (inicio, fin) => {
    return Math.floor(Math.random() * ((fin + 1)- inicio) + inicio);
}

const runInsertHorarios = (profesoresPlaza, profesoresContrato, administrativos) =>{
    const listTask = [
        {
            name: "Clase",
            hours: 1
        },
        {
            name: "Recesos",
            hours: 1
        },
        {
            name: "Juntas",
            hours: 3
        },
        {
            name: "Labores Administrativas",
            hours: 4
        }
    ];

    let schedule = [];

    let employmentArray = [
        ...generateEmpleados('plaza', profesoresPlaza),
        ...generateEmpleados('contrato', profesoresContrato),
        ...generateEmpleados('admin', administrativos)
    ];

    let hourInitial = 6
    const hoursArray = Array.from({length: 12}, () => hourInitial = hourInitial + 1)

    for (hour of hoursArray) {

        let employRandom = generateRandom(1, employmentArray.length)
        schedule = [...schedule, { hour: hour, employ: employmentArray[employRandom] }]
        console.log(schedule)
    }


}

runInsertHorarios(2,1,4);