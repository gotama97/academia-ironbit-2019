function esplais(arr,index,deleteCount,itemsToAdd){
    let a = arr;
    let b = a[index];
    let c = a.slice(b, deleteCount)
    let d = c.push(itemsToAdd);
    console.log(c)
  }
  esplais(['a','b','c','d'],1,2,'tito');




  

  
  

