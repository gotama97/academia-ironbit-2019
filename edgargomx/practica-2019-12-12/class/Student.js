const Human = require('./Human.js')

module.exports = class Student extends Human {
    constructor(name,gender,origin, school, deagre_studies, average) {
        super(name, gender, origin);
        this.school = school;
        this.deagre_studies = deagre_studies;
        this.average = average;
        this.pets = [];
        this.tasks = [];
    }
    getSchool  = () => {
        return this.school;
    }
    getDeagreStudies = () => {
        return this.deagre_studies;
    }
    getAverage = () => {
        return this.average;
    }
    getPets = () => {
        return this.pets;
    }

    setSchool  = (school) => {
        this.school = school;
    }
    setDeagreStudies = (deagre_studies) => {
        this.deagre_studies = deagre_studies;
    }
    setAverage = (average) => {
        this.average = average;
    }
    setPets = (pets) => {
        this.pets = pets;
    }

    addPet(newPet) {
        this.pet = [...this.pet, newPet]
    }

    addPet(newTask) {
        this.tasks = [...this.tasks, newTask]
    }
}