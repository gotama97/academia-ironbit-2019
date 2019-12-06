
fetch = require("node-fetch"); 
const store = async () => {
      let name = /* document.getElementById('nombre'); */ 'juan'
    let pw = /* document.getElementById('pw');  */ '12345'
 
    if(name && pw){ 
        
        try {

           const response = await fetch('http://localhost:3000/users',{
            method: 'POST',
            body:  JSON.stringify({user: name, password: pw}),
            });
        
            const json = await response.json();
            console.log(json);

        } catch (error) {
            console.log('Error:', error); 
        }
    }
    
    
};

store();


/* function myFunction() {
    fetch('http://localhost:3000/users',{
                  method: 'POST',
                  body:  JSON.stringify({id: 10, password: 'adsasd'}),
                  headers: {
                      'Content-Type': 'application/json'        
                  }
              })
              .then(response => response.json())
              .then(data => console.log(data));
  } */

  const checkNav = async () => {

    let values = {};

    try {

        const response = await fetch('http://localhost:3000/users',{
         method: 'GET',
         });
     
         const json = await response.json();
         values = json;


     } catch (error) {
         console.log('Error:', error); 
     }

    var storedName = values[0].user;
    var storedPw = values[0].password;

    var userName =  document.getElementById('userName'); 
    var userPw =   document.getElementById('userPw'); 

     if(userName.value == storedName && userPw.value == storedPw) {
        alert('Bienvenido '+storedName);
    }else {
        alert('ERROR.');
    }
};


  //fetch = require("node-fetch"); 


  const check = async () => {

    let values = {};

    try {

        const response = await fetch('http://localhost:3000/users',{
         method: 'GET',
         });
     
         const json = await response.json();
         values = json;


     } catch (error) {
         console.log('Error:', error); 
     }

    var storedName = values[0].user;
    var storedPw = values[0].password;

    var userName = /* document.getElementById('userName'); */ 'oscar'
    var userPw =  /* document.getElementById('userPw'); */ 'holi'

     if(userName == storedName && userPw == storedPw) {
        console.log('Bienvenido '+storedName);
    }else {
        console.log('ERROR.');
    }
};



//check();
//fetch = require("node-fetch"); 
const deleted = async() => {

    var userName =  document.getElementById('userName');  
    var userPw =   document.getElementById('userPw'); 


        /* try {

            const response = await fetch('http://localhost:3000/users',{
             method: 'DELETE',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify({id: 1}),
             });
             const json = await response.json();
             console.log( JSON.stringify(json) +'Cuenta eliminada con exito');
         } catch (error) {
             console.log('Error:', error); 
         } */

        fetch(`http://localhost:3000/users/${userName.value}`,{
        method: "DELETE"
        })
        .then (resp => resp.json())
        .then(data =>{alert("eliminado con exito")}, );
    
}
//deleted();


