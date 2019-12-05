class Pila {
    
    constructor(){
        this.stock = []
    }

    push = (item) => {
        this.stock = [ ...this.stock, item];
    }

    pop = () => {
        const lastPosition = this.getSize() - 1;
        this.stock.splice(lastPosition, 1)
    }

    getItem = () => {
        return this.stock[ this.stock.length -1 ]
    }

    getSize = () => {
        return this.stock.length;
    }

    showAllItems = () => {
        return console.log(this.stock)
    }
}

class Cola {
    constructor(){
        this.stock = []
    }

    push = (item) => {
        return this.stock = [ ...this.stock, item];
    }

    pop = () => {
        return this.stock.splice(0, 1)
    }

    getItem = () => {
        return this.stock[ 0 ]
    }

    getSize = () => {
        return this.stock.length;
    }

    showAllItems = () => {
        return console.log(this.stock)
    }
}


class List {
    constructor(){
        this.stock = [];
    }

    pushLast = (item) => {
        if (this.getSize() > 0 ) {
            const next = this.getSize();
            this.stock[ next - 1 ].nextValor = next;
        }
        return this.stock = [ ...this.stock, { valor: item, nextValor: null }];
    }

    pushLast = (item) => {
        if (this.getSize() > 0 ) {
            const next = this.getSize();
            this.stock[ next - 1 ].nextValor = next;
        }
        return this.stock = [ { valor: item, nextValor: null },...this.stock];
    }

    pop = () => {
        return this.stock.splice(0, 1)
    }

    getItem = () => {
        return this.stock[ this.getSize - 1 ]
    }

    searchItem = () => {

    }

    getSize = () => {
        return this.stock.length;
    }

    showAllItems = () => {
        return console.log(this.stock)
    }
}


lista = new List()

lista.pushLast(10)
lista.pushLast(11)
lista.pushLast(13)

console.log(lista.showAllItems())