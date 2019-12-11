let listPeliculas = [];
const getMovies = () => {
    const urlApi = 'http://localhost:3000/movies';
    return fetch(urlApi)
            .then(response => response.json())
            .catch(error => {
                console.log(error)
            });
}

const loadNavbar = function () {
    const navbarElement = document.querySelector('#navbar');
    navbarElement.innerHTML = `<nav class="navbar navbar-expand-lg fixed-top ">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                                </button>
                                <a class="navbar-brand" href="index.html" style="color: red;">LA NETFLIX</a>

                                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li class="nav-item active">
                                    <a class="nav-link" href="index.html">Inicio <span class="sr-only">(current)</span></a>
                                    </li>
                                </ul>
                                <form class="form-inline my-2 my-lg-0">
                                    <a class="btn btn-danger my-2 my-sm-0" type="submit" href="perfil.html">Perfil</a>
                                </form>
                                </div>
                                </nav>`;
}

const loadPreview = function (pelicula_index = 0) {
    console.log("preview")
    const pelicula = listPeliculas[pelicula_index];
    const element = document.querySelector('#preview');
    element.innerHTML = `<div style="color: whitesmoke;">
                                    <div class="content-center-vh mt-5">
                                    <blockquote class="blockquote text-center" style="width: 600px;">
                                        <h1  style="font-weight: bold;">${ pelicula.title }</h1>
                                        <p style="font-size: 14px">${ pelicula.description }</p>
                                        <p style="font-size: 13px">${ pelicula.reseña }</p>
                                        <div class="content-center-vh">
                                            <div style="width: 300px">
                                                <div class="col-12 mt-5">
                                                    <button type="button" class="btn btn-danger btn-block" onclick="showMovie('${ pelicula.trailer }')">VER AHORA</button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </blockquote>  
                                    <iframe width="80%" height="400" src="https://www.youtube.com/embed/${ pelicula.trailer }" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>      
                                </div>`;
}

const loadCarrousel = function() {
    console.log("load carrousel")
    const element = document.querySelector('#carrousel');
    moviesHTML = `<div class="contain">
                    <div class="row">
                      <div class="row__inner">`;
    listPeliculas.forEach((pelicula, index) => { 
        moviesHTML += `<div class="tile" id="movie_selected" onclick="loadPreview(${index})">
                            <div class="tile__media">
                                <img class="tile__img" src="${ pelicula.imagen }" alt=""  />
                            </div>
                            <div class="tile_details">
                                <div class="tile_title">
                                ${ pelicula.title }
                                </div>
                            </div>
                     </div>`;
    });
    moviesHTML += `</div>
                </div>
            </div>`;

  element.innerHTML = moviesHTML;
}

const loadPerfiles = function() {
    const element = document.querySelector('#perfiles');
   //// const listPer = JSON.parse(localStorage.getItem('perfiles'));
    let perfilesHTML = `<h3>PERFILES</h3>
                            <div class="row" style="margin-top: 150px;">
                                <div style="display: flex; flex-direction: row;">`;
    listPerfiles.forEach((perfil, index) => {
        perfilesHTML += `<div class="col-4 mt-5 mr-1" style="background-color: red; width: 150px; height: 100px;">
                            <h5 style="color: whitesmoke">${ perfil.name }</h5> 
                            <a id="update" style="cursor: pointer;" onclick="showUpdatePerfil(${ index })"><i class="fa fa-edit" ></i></a>
                            <a id="remove" style="cursor: pointer;" onclick="deletePerfil(${ index })"><i class="fa fa-remove"></i></a>
                        </div>`;
    });
    perfilesHTML += `<div class="col-4 mt-5">
                               <a id="add" style="cursor: pointer;" onclick="showFormPerfil('Agregar')"><i class="fa fa-plus-square fa-3x"></i></a>
                            </div>
                        </div>
                    </div>`;
    element.innerHTML = perfilesHTML; 
}
//Movie show
const showMovie = (movie) => {
    console.log("movie:", movie)
    document.querySelector('#preview').innerHTML = `<iframe width="100%" height="700" src="https://www.youtube.com/embed/${ movie }" frameborder="0" allow="accelerometer; autoplay=true; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    document.querySelector('#carrousel').innerHTML = '';
}

// CRUD FUNCTIONS
const listPerfiles = [ {name: "Edgar"}];

const deletePerfil = function(index_perfil) {
    listPerfiles.splice(index_perfil, 1);

    loadPerfiles();
}

const showUpdatePerfil = function(index_perfil) {
    //showFormPerfil("Actualizar", index_perfil);
    element = document.querySelector('#perfiles');
    element.innerHTML = `<h3>ACTUALIZAR PERFIL</h3>
                            <form>
                            <div class="form-group">
                            <label for="inputNameUser">Nombre Usuario</label>
                                <input type="text" class="form-control" id="inputNameUser">
                            </div>
                            </form>
                            <button class="btn btn-primary" onclick="updatePerfil(${ index_perfil })">Guardar</button>
                        `;
    const input = document.querySelector('#inputNameUser');
    input.value = listPerfiles[index_perfil].name;
}

const updatePerfil = function(index_perfil) {

    const input = document.querySelector('#inputNameUser');
    console.log(index_perfil)
    listPerfiles[index_perfil].name = input.value
    
    //localStorage.setItem('perfiles', JSON.stringify(listPerfiles))
    ////const listPer = JSON.parse(localStorage.getItem('perfiles'));
    loadPerfiles();
}

const showFormPerfil = function(action_text, index) {
    element = document.querySelector('#perfiles');
    element.innerHTML = `<h3>${ action_text.toUpperCase() } PERFIL</h3>
                         <form>
                            <div class="form-group">
                            <label for="inputNameUser">Nombre Usuario</label>
                                <input type="text" class="form-control" id="inputNameUser">
                            </div>
                            <button class="btn btn-primary" onclick="addPerfil()">Guardar</button>
                         </form>`;
}

const addPerfil = function() {
    const input = document.querySelector('#inputNameUser');
    const nuevoPerfil = { name: input.value }
    listPerfiles.push(nuevoPerfil);
    //localStorage.getItem('perfiles', JSON.stringify(listPerfiles))
    loadPerfiles();
}


//cargar scripts
loadNavbar();
path = window.location.pathname.split("/")
if (path[path.length - 1] === 'index.html'){
    (async () => {
        try {
            listPeliculas = await getMovies();
            console.log("Peliculas", listPeliculas);
            if(listPeliculas.length > 0 ) {
                loadPreview();
                loadCarrousel();
            }
        } catch (error) {
            alert("No se pudo conectar al servidor")
        } 
        
        
        
    })();
    
}else {
    (async () => {
        try {
            listPeliculas = await getMovies();
            
        } catch (error) {
            alert("No se pudo conectar al servidor")
        } 
        
        
        
    })();
}
