
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

class Queue{
    constructor(){
        this.tail = 0 ; 
        this.head = 0 ; 
        this.queue = [];


    }
    enqueue(element){
        // if(this.tail == this.head ){
        //     this.tail++;

        // }
        console.log("Tail "+this.tail)
        console.log("Head "+this.head)
        
        if(this.head == this.tail){
            this.queue[this.head] = element;
            this.tail++;
        }else{
            this.queue[this.tail] = element;
            this.tail++;
        }
      
    }
    dequeue(){
      
    }
}
//  ***** STACK ****
let newStack = new Stack ( 1);

newStack.push("Analin")
newStack.push("Pablo")
console.log(newStack)

newStack.pop()

// *** QUEUES ***
let newQueue = new Queue();

newQueue.enqueue(1);

newQueue.enqueue(2);

newQueue.enqueue(3);
newQueue.dequeue()
newQueue.enqueue(7);
console.log(newQueue)