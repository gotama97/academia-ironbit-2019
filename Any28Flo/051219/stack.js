// let stack=[]

class Stack{
    constructor(){
        // this.element = element;
        this.stack = [];
        this.stackTop = 0;
    }
    push(element){
        this.stack[this.stackTop] = element;
        this.stackTop++;
        console.log(this.stack.length)

    }
   
    stackEmpty(){
        return this.stack.length <= 0   
    }
    pop(){
        //console.log(this.stackEmpty());
        if(this.stackEmpty()){
            console.log(" No podemos sacar elementos")

        }else{
            this.stack.splice( this.stackTop, 1)

        }
       
    }
}

let newStack = new Stack ( 1);

newStack.push(1)
newStack.push(2)
console.log(newStack)

newStack.push()
 newStack.pop();
 newStack.pop();
