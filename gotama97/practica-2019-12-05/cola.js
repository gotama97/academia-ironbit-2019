class Queue {
    constructor() {
        this.items = [];
    }

    //AGREGA UN ELEMENTO AL PRINCIPIO DEL ARREGLO
    add(data) {
        this.items.unshift(data);
    }

    pop() {
        //REVISAMOS QUE HAYA ELEMENTOS PARA QUITAR
        if (this.items.length == 0)
            return "arreglo indefinido";
        return this.items.pop();
    }

    first(){
        return this.items[0];
    }

    last(){
        return this.items[this.items.length-1];
    }

}