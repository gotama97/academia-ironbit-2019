class Stack{
    constructor(){
        this.items = {};
        this.top = 0;
    }

    push(data){
        this.top++;
        this.items[this.top] = data;
    }

    pop(data){
        let deletedData;
        if(this.top){
            deletedData = this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return deletedData;
        }
    }

    getSize(){
        return this.top;
    }

    isEmpty(){
        if(!this.getSize()){
            return true;
        }else{
            return false;
        }
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[this.top];
    }

    print(){
        let result = '';
        for(let i=this.top; i>0;i--){
            result += this.items[i] + ''
        }
        return result;
    }
}


const stack = new Stack();
stack.push('plato 1');
stack.push('plato 2');
stack.push('plato 3');

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


console.log(stack.getSize());
console.log(stack.isEmpty());
console.log(stack);


/******************************************************************************/

class Queue{
    constructor(){
        this.items = {};
        this.front = 0;
        this.end = 0;
    }

    enqueue(data){
        this.items[this.end]=data;
        this.end++;
    }

    dequeue(){
        if(this.front === this.end){
            return null;
        }
        const data = this.items[this.front];
        this.front++;
        return data;
    }

    getSize(){
        return this.end - this.front;
    }

    isEmpty(){
        if(this.getSize()===0){
            return true;
        }else{
            return false;
        }
    }

    peek(){
        if(this.getSize()===0){
            return null;
        }
        return this.items[this.front];
    }

   print(){
       if(this.getSize()===0){
           return null;
       }
       let result = '';
       for(let i = this.front; i < this.end; i++){
           result += this.items[i] + "";
       }
       return result;
   }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.getSize());
console.log(queue.isEmpty());
console.log(queue.peek());

console.log(queue);



/******************************************************************************/





