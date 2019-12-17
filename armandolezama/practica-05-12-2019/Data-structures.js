
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

class Node {
    constructor (data){
        this.next = null;
        this.prev = null;
        this.data = data;
    }

}

class DoubleLinkedList {
    constructor(){
        this.list = new Set();
        this.currentNode = null;
    }

    add(data, prev = null, next = null) {
        const node = new Node(data);
        node.prev = prev;
        node.next = next;
        if (prev !== null ){
            prev.next = node;
        }

        if (next !== null){
            next.prev = node;
        }

        this.currentNode = this.currentNode === null ? node : this.currentNode;
        this.list.add(node);
    }

    prev(){
        this.currentNode = this.currentNode.prev !== null ? this.currentNode.prev : this.currentNode;
    }

    next(){
        this.currentNode = this.currentNode.next !== null ? this.currentNode.next : this.currentNode;
    }

    delete(){
        if (this.currentNode.prev !== null ){
            this.currentNode.prev.next = this.currentNode.next;
        }

        if (this.currentNode.next !== null){
            this.currentNode.next.prev = this.currentNode.prev;
        }
        
        this.list.delete(this.currentNode);
        if(this.currentNode.prev !== null){
            this.currentNode = this.currentNode.prev;
        } else {
            this.currentNode = this.currentNode.next
        }
    }

}

class LinkedList {
    constructor(){
        this.list = new Set();
        this.currentNode = null;
        this.head = null;
    }

    add(data, prev = null, next = null) {
        const node = new Node(data);
        node.prev = prev;
        node.next = next;
        if (prev !== null ){
            prev.next = node;
        } else {
            this.head = node;
        }

        if (next !== null){
            next.prev = node;
        }

        this.currentNode = this.currentNode === null ? node : this.currentNode;
        this.list.add(node);
    }

    next(){
        this.currentNode = this.currentNode.next !== null ? this.currentNode.next : this.currentNode;
    }

    delete(){
        if (this.currentNode.prev !== null ){
            this.currentNode.prev.next = this.currentNode.next;
        }

        if (this.currentNode.next !== null){
            this.currentNode.next.prev = this.currentNode.prev;
        }
        
        this.list.delete(this.currentNode);
        this.currentNode = this.currentNode.next;
    }

    backToHead(){
        this.currentNode = this.head;
    }
}


class Tail {
    constructor() {
        this.stack = [];
        this.typeOfData = '';
    };

    push(newElement){
        if(typeof newElement === typeof this.stack[0] || this.stack.length === 0 ){
            this.stack = [newElement, ...this.stack]
        } else {
            console.error('New element is not same type of stack')
        }
    };

    removeFromTail(){
        if(this.stack.length > 0){
            this.stack = [...this.stack.slice(1, this.stack.length)]
        } else {
            console.error('Current stack is empty')
        }
    };

    removeFromTail(){
        if(this.stack.length > 0){
            this.stack = [...this.stack.slice(1, this.stack.length - 1)]
        } else {
            console.error('Current stack is empty')
        }
    };

    get(){
        if(this.stack.length > 0){
            return this.stack[0]
        } else {
            console.error('Current stack is empty')
        }
    };
}