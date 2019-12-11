//EL SYMBOL DE USA PARA ESPECIFICAR QUE ES UN VALOR QUE NO SE VA A MODIFICAR
const head = Symbol("head");

//CREACION DE LA CLASE 
class LinkedList{
    //CONSTRUCTOR DEL PUNTERO QUE GUARDARA LA PUNTA DE LA LISTA
    constructor(){
        this[head]=null;
    }

    add(data){
        //CREA UN NUEVO NODO 
        const newNode = LinkedList(data);
        //CASO EN DONDE LA LISTA ESTA VACIA
        if(this[head]){
            //DEFINIENDO EL HEAD DE LA LISTA
            this[head]=newNode;
        }else{
            //GUARDAMOS EL DATO ACTUAL PARA ITERAR
            let cur = this[head]
            //RECRRIENDO LA LISTA HASTA LLEGAR AL ULTIMO ELEMNTO 
            //AGREGAR EL ELEMNTO A LA CABEZA
            while(cur.next!==null){
                cur=cur.next;
            }
            //ASIGNANDO EL NODO DENTRO DEL PUNTERO DEL ULTIMO NODO
            cur.next = newNode;
        }
    }

    get(idx){
        //NOS ASEGURAMOS QUE EL INDICE DEL NODO SEA VALIDO
        if(idx>-1){
            //THE POINTER TO USE FOR TRAVERSAL
            let cur = this[head];
            //DEFINIMOS UNA VARIBLE PARA SABER EN QUE INDICE ESTAMOS
            let i = 0;
            //RECORRIENDO LA LISTA HASTA ENCONTRA EL INDICE O EL FINAL
            while((cur!==null)&&(i<idx)){
                cur = cur.next;
                i++;
            }
            //RETORNANDO EL DATO SI CUR ES DIFERENTE DE NULL
            return cur !==null ? cur.data:undefined;
        }else{
            return undefined;
        }
    }

    remove(idx){
        //CASO ESPECIFICO CUANDO LA LISTA ESTA VACIA
        //O EL INDICE SUPERA LA LISTA
        if((this[head]=== null)||(idx<0)){
            console.log("el indice no corresponde o la lista es nula");
        }

        //CASO ESPECIFICO EN DONDE REMOVEMOS EL PRIMER NODO
        if(idx===0){
        //ALMACENAMIENTO TEMPORAL DE LA DATA DEL NODO
        const data = this[head].data;
        //REEMPLAZANDO EL DATO CON EL SIGUIENTE DE LA LISTA
        this[head] = this[head].next;
        //RETURNA LA DATA DE LA CABEZA ANTERIOR
        return data;
        }
        //PUNTERO USADO PARA RECORRER LA LISTA
        let cur = this[head];
        //GUARDA EL NODO ANTERIOR AL NODO ACTUAL EN EL CICLO
        let prev=null;
        //DECLARACION PARA SABER QUE TAN PROFUNDO ESTAMOS EN LA LISTA
        let i = 0;
        //RECORREMOS LA LISTA PARA BUSCAR EL DATO A REMOVER
        while((cur!==null)||(i<idx)){
            //SALVAR EL VALOR ACTUAL 
            prev = cur;
            //TRAEMOS EL NODO SIGUIENTE
            cur=cur.next;
            //INCREMENTAMOS LA CUENTA
            i++;
        }
        //SI EL NODO SE ENCONTRO LO TIENE QUE REMOVER
        if(cur!==null){
            //NOS SALTAMOS EL NODO SELECCIONADO CON LAS VARIABLES YA ASIGNADAS
            prev.next=cur.next;
            //RETORNA EL VALOR QUE FUE REMOVIDO DE LA LISTA
            return cur.data;
        }
        //SI EL NODO NO FUE ENCONTRA DDEVOLVEMOS UN ERROR
        return console.log("error datos invalidos");
    }

    //EL METODO SE DECLARA CON UN ASTERISCO PARA INDICAR
    //QUE ES UN GENERADOR DE METODO
    *values(){
        let cur = this[head];
        while(cur!==null){
            //yield DEVUELVE CADA DATO ENCONTRADO
            yield cur.data;
            cur=cur.next;
        }
    }
    //RETORNA EL ITERADOR DE VALUES
    [Symbol.iterator](){
        return this.values();
    }
}