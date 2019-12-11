import Node from './Node.js';

class Stack {
    constructor(){
        this.top = null;
    }

    get pop() {
        return this.top;
    }

    push(element) {
        const node = new Node(element);
        node.next = this.top;
        this.top = node;
    }

    isEmpty() {
        return !this.top;
    }
}

export default Stack;