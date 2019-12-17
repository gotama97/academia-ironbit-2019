const Animal = require('./Animal.js')

module.exports = class Pet extends Animal {
    constructor(raza , gender, origin, type){
        this.super(raza , gender, origin, type)
    }
}