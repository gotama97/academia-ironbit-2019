class Node {
  
    constructor(data){
      this.data = data;
      this.prev = null;
      this.next = null;
    }
    
  }
  
  class DoublyLinkedList{
    
    constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    
    push(data){
      
      const node = new Node(data);
      
      if(!this.head){
        this.head = node;
        this.tail = node;
      }else{
         node.prev = this.tail; 
        this.tail.next = node;
       
        this.tail = node;
        
      }
      
      this.length++;
    }
    
    
    pop(){
      
      if(!this.head) return null
      //TAIL ES EL ULTIMO ELEMENTO ASI QUE TOMAMOS EL PREV DE TAIL
      const prevNode = this.tail.prev
  
      if(prevNode){
         prevNode.next = null;
         //ACTUALIZAMOS EL NODO
         this.tail = prevNode;
      }else{
          //SI PREV ES NULL SIGNIFICA QUE SIKI HAY UN NODO
        this.head = null;
        this.tail = null;
      }
      //RECORRER 
       this.length--;
    }
    
    
    insertBeginning(data){
      
      // NUEVO NODO ES AGREGADO
      const node = new Node(data);
      
      // SI MO HAY NODOS
      if(!this.head) {
        this.head = node;
        this.tail = node;
      }else{
          //ACTUALIZA EL HEAD.PREV AL NUEVO NODO
          //TOMA EL NEW NODE.NEXT Y LO ENLAZA AL HEAD
        this.head.prev = node
        node.next = this.head;
        this.head = node;
      }
      // RECORREMOS 
      this.length++;
      
    }
    
    removeFirst(){
      
      if(!this.head) return null
      
      const node = this.head.next;
      
      if(node){
        node.prev = null
        this.head = node
      }else{
        this.head = null
        this.tail = null
      }
      
       this.length--;
      
    } 
  }
  