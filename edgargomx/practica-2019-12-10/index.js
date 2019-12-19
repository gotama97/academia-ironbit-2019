const Administrativ = require('./Administrativ.js')
const Teacher = require('./Teacher.js')

generateEmpleados = (type, numEmpleados) => {
    if(type === 'admin'){
        return returnArray = Array.from({length: numEmpleados}, () => new Administrativ()); 
    } else if ((type === 'plaza') || type === 'contrato') {
        return returnArray =  Array.from({length: numEmpleados}, () => new Teacher(type));
    }else {
        return "error: no se puede generar";
    }
}

generateRandom = (inicio, fin) => {
    return Math.floor(Math.random() * ((fin)- inicio) + inicio);
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

    let daySchedule = [];
    let weekSchedule = [];
    let employmentArray = [
        ...generateEmpleados('plaza', profesoresPlaza),
        ...generateEmpleados('contrato', profesoresContrato),
        ...generateEmpleados('admin', administrativos)
    ];

    let hourInitial = 6
    const hoursArray = Array.from({length: 12}, () => hourInitial = hourInitial + 1)
    const daysArray = Array.from({length: 5}, () => hourInitial = hourInitial + 1)

    for (const day of daysArray) {
        let daySchedule = [];
        for (const hour of hoursArray) {
            let employRandom = generateRandom(1, employmentArray.length);
            daySchedule = [...daySchedule, { hour: hour, employ: employmentArray[employRandom] }]
            
        }
        weekSchedule = [...weekSchedule, daySchedule ]
    }

}

runInsertHorarios(2,1,4);