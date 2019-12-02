
var name = document.getElementById('nombre');
var pw = document.getElementById('pw');

function store() {




    localStorage.setItem('nombre', nombre.value);
    localStorage.setItem('pw', pw.value);

    alert('Usuario registrado con exito');
    location.href="login.html";

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