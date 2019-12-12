
function myFunction() {
    fetch('http://localhost:3000/users',{
                  method: 'POST',
                  body:  JSON.stringify({id: 10, password: 'adsasd'}),
                  headers: {
                      'Content-Type': 'application/json'        
                  }
              })
              .then(response => response.json())
              .then(data => console.log(data));
  }



function check() {

    var storedName = localStorage.getItem('nombre');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

     if(userName.value == storedName && userPw.value == storedPw) {
        alert('Bienvenido '+storedName);
    }else {
        alert('ERROR.');
    }
}



function deleted() {
    var storedName = localStorage.getItem('nombre');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if(userName.value == storedName && userPw.value == storedPw) {
        localStorage.removeItem('nombre')
        localStorage.removeItem('pw')
        alert('Cuenta eliminada con exito');
    }else {
        alert('ERROR.');
    }

   

}




