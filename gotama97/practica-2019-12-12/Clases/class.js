class Animal{
    constructor(name){
        this.metabolism=true;
        this.reproductiveSystem=true;
        this.name = name;
    }

    eat(){
        this.metabolism?'yummy':'what are you?'
    }

    breed(){
        this.reproductiveSystem?'nice':'What are you'
    }
}

class Human extends Animal{
    constructor(lenguage,reasoning,home,name){
        super(name);
        this.lenguage=lenguage;
        this.reasoning=reasoning;
        this.home=home;
    }
}

class Pet extends Animal{
    constructor(){
        this.Human=new Human('juan');
        this.Leash= true;
    }


}