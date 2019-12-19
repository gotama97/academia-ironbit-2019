module.exports = class Employee {
    constructor(uid, name, hours, free_time) {
        this.uid = uid,
        this.name = name,
        this.hours = hours,
        this.free_time = free_time
    }

    generateUID = (typeEmployment) => {
        return typeEmployment.toUpperCase() + Math.floor(Math.random() * ((1000 + 1))).toString();
    }

}

