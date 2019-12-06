
class Stack {
    constructor() {
        this.stack = [];
        this.typeOfData = '';
    };

    push(newElement){
        if(typeof newElement === typeof this.stack[0] || this.stack.length === 0 ){
            this.stack = [...this.stack, newElement]
        } else {
            console.error('New element is not same type of stack')
        }
    };

    pop(){
        if(this.stack.length > 0){
            this.stack = [...this.stack.slice(0, this.stack.length - 1)]
        } else {
            console.error('Current stack is empty')
        }
    };

    top(){
        if(this.stack.length > 0){
            return this.stack[this.stack.length -1]
        } else {
            console.error('Current stack is empty')
        }
    };
}

class linkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    insertion(){
        let node = new Node
        this.head = node
    }

    deletion(){

    }

    display(){

    }
    search(){

    }
    delete(){

    }

}

class Node {
    constructor(field, reference){
        this.field = field;
        this.reference = reference 
    }
}