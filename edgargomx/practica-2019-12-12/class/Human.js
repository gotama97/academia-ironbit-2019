module.exports = class Human {
    constructor(name, gender, origin){
        this.name = name;
        this.gender = gender;
        this.origin = origin;
        this.is_eating = false;
        this.is_sleep = false;
        this.is_drink = false;
        this.procreate = false;
    }

    getName = () => {
        return this.name;
    }

    getGender = () => {
        return this.gender;
    }

    getOrigin = () => {
        return this.origin;
    }

    setName = () => {
        this.name = name;
    }

    setGender = () => {
        this.gender = gender;
    }

    setOrigin = () => {
        this.origin = origin;
    }

    sleep = () => {
        this.is_sleep = true;
    }

    eat = () => {
        this.is_eating = true;
    }

    drink = () => {
        this.is_drink = true;
    }

    procreate = () => {
        this.procreate = true;
    }
}