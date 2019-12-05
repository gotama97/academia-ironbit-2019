// Botones.
const [moviesBtn, usersBtn, newUserBtn] = document.querySelectorAll('.button');

// Llamada fetch con el metodo HTTP - GET
moviesBtn.addEventListener('click', event => {
    fetch('http://localhost:3000/movies')
        .then(response => response.json())
        .then(movies => movies.forEach(movie => console.table(movie)))
        .catch(error => console.log(error))
});

usersBtn.addEventListener('click', event => {
    fetch('http://localhost:3000/users')
        .then(data => data.json())
        .then(users => users.forEach(user => console.table(user)))
        .catch(error => console.log(error))
});

// Fetch, recibe una URL y un elemento objet opcional.
const userExample = {
    username: "example",
    email: "example@example.com",
    password: "examplepass"
};

const options = {
    method: 'POST',
    body: JSON.stringify(userExample),
    headers: {
        'Content-Type': 'application/json'
    }
};

// Tal object será una colección de opciones qye debe cumplir la llamada a la URL.
newUserBtn.addEventListener('click', event => {
    fetch('http://localhost:3000/users', options)
        .then(response => console.log(response))
        .catch(error => console.log(error))
});