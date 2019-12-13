class Stack {
    constructor(){
        this.items = [];
    }

    //SE REALIZA LA ADICION DE UN ELEMENTO
    push(data){
        this.items.push(data);
    }
    //SE REALIZA EL RETIRO DE DATO
pop() 
{ 
	//REVISAMOS QUE HAYA ELEMENTOS PARA QUITAR
	if (this.items.length == 0) 
		return "arreglo indefinido"; 
	return this.items.pop(); 
} 

//TOMAMOS EL ULTIMO DAO DE LA PILA
peek(){
    return this.items[this.items.length-1];
}

//IMPRIMIMOS EL ARREGLO
print() 
{ 
    for(const item of this.items){
        console.log(item);
    }

}
}
//PRUEBA DE LA CLASE
let stack = new Stack();
stack.push(1);
stack.push(12);
stack.print();
stack.pop();
console.log(stack.peek());
