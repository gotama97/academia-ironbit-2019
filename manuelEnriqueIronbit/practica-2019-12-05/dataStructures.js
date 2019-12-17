let stack = ['hi', 9 , 'ironbit', 'plus', 55];
const addToEnd = (stackArray, element) => { 
    let lastElement = stackArray.length;
    if (stackArray == undefined){
        lastElement = 0;
        stackArray[lastElement] = element;
    } else{
        stackArray[lastElement] = element;
    }
}

const removeFromEnd = (stackArray) => {
    let lastElement = stack.length;
    stackArray.splice(lastElement-1, lastElement);
};


const removeFromStart = (stackArray) => {
    stackArray.splice(0, 1);
};

class Node {
    constructor(val, next){
        this.val = val;
        this.next = next;
    }
}

class List{
    constructor(){
        this.head = null;
    }

    add(val){
        let newNode = new Node(val, this.head);
        this.head = newNode;
    }

    remove(){
        if (this.head === null){
            return null;
        } else {
            this.head = this.head.next;
        }
    }
}

class NodeWithTwoPointers{
    constructor (val, next, prev){
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class DoubleList{
    constructor (){
        this.head = null;
        this.tail = null;
    }

    add(val){
        if (this.head === null && this.tail === null){
            let newNode = new NodeWithTwoPointers(val, this.head, this.tail);
            this.head = newNode;
            this.tail = newNode;
        } else{
            let newNode = new NodeWithTwoPointers(val, this.head, this.tail);
            this.head = newNode;
        }
    }

    remove(){
        if (this.head === null && this.tail === null){
            return null;
        } 
    }
}
