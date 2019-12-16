module.exports = class Animal {
    constructor(raza = null, gender = null, origin = null, type = null) {
        this.raza = raza;
        this.gender = gender;
        this.origin = origin;
        this.type = type;
    }

    getRaza  = () => {
        return this.raza;
    }
    getGender = () => {
        return this.gender;
    }
    getOrigin = () => {
        return this.origin;
    }
    getType = () => {
        return this.type;
    }

    setRaza  = (raza) => {
        this.raza = raza;
    }
    setGender = (gender) => {
        this.gender = gender;
    }
    setOrigin = (origin) => {
        this.origin = origin;
    }
    setType = (type) => {
        this.type = type;
    }
}