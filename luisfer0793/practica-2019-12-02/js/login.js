const newUserBtn = document.getElementById('newUserBtn');

newUserBtn.addEventListener('click', event => {
    event.preventDefault();
    const email = prompt('Escribe el correo nuevo');
    const password = prompt('Escribe la contraseña nueva');
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert(`Usuario Nuevo Agregado`);
});