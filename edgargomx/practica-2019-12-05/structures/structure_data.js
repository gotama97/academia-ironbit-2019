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
        this.stock = null;
    }

    newNode = (item) => {
        return { valor: item, nextValor: null }
    }

    pushLast = (item, current = this.stock) => {

        let newNode = this.newNode(item);
        if(this.stock === null){
            return this.stock = newNode;
        }

        if(current.nextValor === null){
            return current.nextValor = newNode;
        }

      this.pushLast(item, current.nextValor);
    }

    pushFirst = (item) => {
        let newNode = this.newNode(item);

        if(this.stock === null){
            return this.stock = newNode;
        }

        newNode.nextValor = this.stock;
        return this.stock = newNode;
    }

    pop = (item, current = this.stock) => {

        if (this.stock.valor === item){
            return this.stock = this.stock.nextValor;
        }

        if(current.nextValor !== null){
            if(current.nextValor.valor === item){
                return current.nextValor = current.nextValor.nextValor;
            }
            this.pop(item, current.nextValor);
        }
        return false // no match found
    }


    getItem = () => {
        return this.stock
    }

    searchItem = (item, current = this.stock) => {
        if(this.stock === null) {
            return false;
        }

        if (current !== null) {
            if (current.valor === item){
                return true;
            } else {
                return this.searchItem(item, current.nextValor);
            }
        }
        return false;
    }

    getSize = (current = this.stock, acum = 1) => {
        if (current === null) {
            return 0;
        }
        
        if (current.nextValor !== null){
            return this.getSize(current.nextValor, acum = acum + 1)
        }
        return acum 
    }

    getAllItems = () => {
        return this.stock
    }
    
}

class ListDouble {
    constructor(){
        this.stock = null;
    }

    newNode = (item) => {
        return { valor: item, nextValor: null, beforeValor: null }
    }

    pushLast = (item, current = this.stock) => {
        let newNode = this.newNode(item);

        if(this.stock === null){
            return this.stock = newNode;
        }

        if(current.nextValor === null){
            current.nextValor = newNode;
            return newNode.beforeValor = current;
        }

        return this.pushLast(item, current.nextValor);
    }

    pushFirst = (item) => {

        let newNode = this.newNode(item);
        if(this.stock === null){
            return this.stock = newNode;
        }
        
        newNode.nextValor = this.stock;
        this.stock.beforeValor = newNode;
        return this.stock = newNode;
    }

    pop = (item, current = this.stock) => {

       if (this.stock.valor === item){
            console.log("stock", this.stock)
            this.stock.nextValor.beforeValor = null;
            return this.stock = this.stock.nextValor;
        }

        if(current.nextValor !== null){
            if(current.nextValor.valor === item){
               // current.beforeValor = current.nextValor.beforeValor.beforeValor;
                current.nextValor = current.nextValor.nextValor;
                return current.beforeValor = current.nextValor.beforeValor.beforeValor;
            }
            this.pop(item, current.nextValor);
        }
        return false // no match found
    }


    getItem = () => {
        return this.stock
    }

    searchItem = (item, current = this.stock) => {
        if(this.stock === null) {
            return false;
        }

        if (current !== null) {
            if (current.valor === item){
                return true;
            } else {
                return this.searchItem(item, current.nextValor);
            }
        }
        return false;
    }

    getSize = (current = this.stock, acum = 1) => {
        if (current === null) {
            return 0;
        }
        
        if (current.nextValor !== null){
            return this.getSize(current.nextValor, acum = acum + 1)
        }
        return acum 
    }

    getAllItems = () => {
        return this.stock
    }
    
}

lista = new ListDouble()

lista.pushLast(10)
lista.pushLast(11)
lista.pushLast(13)

lista.pop(11)
len = lista.getSize();
console.log(lista.searchItem(11))
console.log(lista.getAllItems())
console.log(len)