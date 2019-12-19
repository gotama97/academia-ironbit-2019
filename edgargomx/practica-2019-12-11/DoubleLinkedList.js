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

    drop(node_value){
        const arrayNodes = new Array([...this.list]);
        const toDropNode = arrayNodes[0].filter(node => node.data.name === node_value);
        
        if(toDropNode.length > 0) {
            this.currentNode = toDropNode[0].prev;
            this.currentNode.next = toDropNode[0].next;
            this.currentNode.next.prev = this.currentNode;
            this.list.delete(toDropNode[0]);
        }
    }
}

