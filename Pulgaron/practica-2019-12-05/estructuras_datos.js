class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        return this.stack = [...this.stack, item];
    }

    pop() {
        return this.stack.splice(this.stack.length-1, 1);
    }
}


class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
            
        return this.queue = [...this.queue, item];
    }

    dequeue() {
        return this.queue.splice(0, 1);
    }
}


class Node {
    constructor(value, prev) {
        this.value = value;
        this.prev = prev;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const node = new Node(value, this.head);
        this.head = node;
    }

    remove() {
        if (!this.head) return null;
        const value = this.head.value;
        this.head = this.head.prev;
        return value;
    }



    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return value;
            current = current.prev;
        }
        return null;
    }

}



class NodeDouble {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        const node = new Node(value, null, this.head);
        if (this.head) this.head.next = node;
        else this.tail = node;
        this.head = node;
    }

    addEnd(value) {
        const node = new Node(value, this.tail, null);
        if (this.tail) this.tail.prev = node;
        else this.head = node;
        this.tail = node;
    }

    remove() {
        if (!this.head) return null;
        const value = this.head.value;
        this.head = this.head.prev;
        if (this.head) this.head.next = null;
        else this.tail = null;
        return value;
    }

    removeEnd() {
        if (!this.tail) return null;
        const value = this.tail.value;
        this.tail = this.tail.next;
        if (this.tail) this.tail.prev = null;
        else this.head = null;
        return value;
    }

    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return value;
            current = current.prev;
        }
        return null;
    }

    indexOf(value) {
        const indexes = [];
        let current = this.tail;
        let index = 0;
        while (current) {
            if (current.value === value) indexes.push(index);
            current = current.next;
            index++;
        }
        return indexes;
    }
}
