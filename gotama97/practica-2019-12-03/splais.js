Array.prototype.splais = function (start, del, ...toAdd){
    if(start>=0&&start<=this.length&&(del+start<=this.length)){
        //ASIGNANDO EL ARREGLO INICIAL
        const first =[...this.slice(0, start)];
        //ASIGNANDO EL ARREGLO FINAL
        const last = [...this.slice(start+del,this.length)];
        //ASIGNAMOS EL ARREGLO RES
        const res = [...first,...add,...last];
        return res ;
    }else{
        console.error('fuera de rango')
    }
}
