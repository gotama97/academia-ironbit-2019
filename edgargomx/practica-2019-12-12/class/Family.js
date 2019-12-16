const Human = requiere('.Human.js');

class Family {
    constructor(father = null, mother = null, childrens = []) {
        this.father = father;
        this.mother = mother;
        this.childrens = childrens;
    }

    getFather = () => {
        return this.father;
    }

    getMother = () => {
        return this.mother;
    }

    getChildrens = () => {
        return this.childrens;
    }

    setFather = (father) => {
        this.father = father;
    }

    setMother = (mother) => {
        this.mother = mother;
    }

    setChildrens = (childrens) => {
        this.childrens = childrens;
    }

    sleep = (integrant) => {
        integrant.is_sleep = true;
    }

    play = (integrant) => {
        integrant.is_play = true;
    }

    meeting = () => {
        return  [ this.father, this.mother, ...this.childrens]
    }
}