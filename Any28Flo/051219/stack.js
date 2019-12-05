
class Stack{
    constructor(){
        // this.element = element;
        this.stack = [];
        this.stackTop = 0;
    }
    push(element){
        this.stack[this.stackTop] = element;
        this.stackTop++;

    }
   
    stackEmpty(){
        return this.stack.length <= 0   
    }
    pop(){
        this.stackTop--;
         if(this.stackEmpty()){
             console.log(" No podemos sacar elementos")

         }else{
             this.stack.splice( this.stackTop, 1)

         }
       //!this.stackEmpty() ? this.stack.splice(this.stackTop, 1)  : console.log("No podemos sacar elementos")
    }
}

let newStack = new Stack ( 1);

newStack.push("Analin")
newStack.push("Pablo")
console.log(newStack)

newStack.pop()