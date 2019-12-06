let listPeliculas = [];
const urlApi = 'http://localhost:3000/'
const getMovies = () => {
    return fetch(`${urlApi}movies`)
            .then(response => response.json())
            .catch(error => {
                console.log(error.response)
            });
}

const getProfiles = () => {
    return fetch(`${urlApi}profiles`)
            .then(response => response.json())
            .catch(error => {
                console.log(error)
            });
}

const loadNavbar = function (isHome = true) {
    const navbarElement = document.querySelector('#navbar');
    let toHTML = `<div class="uk-position-relative" >
                    <div class="uk-position-absolute uk-margin-top">
                        <div id="preview"></div>
                    </div>`;
    toHTML += isHome ? `<img id="bg-img-movie" src="${ listPeliculas[0].imagen }" alt="">` : "";
    toHTML += `<div class="uk-position-top">
                    <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                        <div class="uk-navbar-left">
                            <ul class="uk-navbar-nav">
                                <li class="uk-active"><a class="navbar-brand" href="index.html" style="color: red;">LA NETFLIX</a></li>
                                <li>
                                    <a class="nav-link" href="index.html" style="color: white">Inicio</a>
                                </li>
                            </ul>
                        </div>

                        <div class="uk-navbar-right">
                            <ul class="uk-navbar-nav">
                                <li>
                                    <a href="#">Opciones</a>
                                    <div class="uk-navbar-dropdown">
                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                            <li class="uk-active"><a href="perfil.html">Ver Perfiles</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>`;

navbarElement.innerHTML = toHTML;
}

const loadPreview = function (pelicula_index = 0) {
    console.log("preview")
    const pelicula = listPeliculas[pelicula_index];
    const element = document.querySelector('#preview');
    const bgImg = document.querySelector('#bg-img-movie');
    bgImg.src = pelicula.imagen;
    element.innerHTML = `
    <div class="uk-flex uk-flex-middle">
        <div class="uk-container-expand	">
                <h1  style="font-weight: bold; color=white">${ pelicula.title }</h1>
                <p style="font-size: 14px">${ pelicula.description }</p>
                <p style="font-size: 13px">${ pelicula.reseña }</p>
               
                <button class="uk-button uk-button-danger" onclick="showMovie('${ pelicula.trailer }')">VER AHORA</button>
        </div>
        <div class=" uk-margin-left">
            <iframe width="100%" height="350" src="https://www.youtube.com/embed/${ pelicula.trailer }" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    <div class="uk-flex uk-flex-center">`;
    listPerfiles.forEach((perfil, index) => {
        perfilesHTML += `<div class="uk-card uk-card-default uk-card-body uk-margin-left" style="background-color: red;">
                            <h5 style="color: whitesmoke">${ perfil.name }</h5> 
                            <a id="update" style="cursor: pointer;" onclick="showUpdatePerfil(${ index })"><i class="fa fa-edit" ></i></a>
                            <a id="remove" style="cursor: pointer;" onclick="deletePerfil(${ index })"><i class="fa fa-remove"></i></a>
                        </div>`;
    });
    perfilesHTML += `<div class="uk-card uk-card-default uk-card-body uk-margin-left" style="background-color: red;">
                            <a id="add" style="cursor: pointer;" onclick="showFormPerfil('Agregar')"><i class="fa fa-plus-square fa-3x"></i></a>
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
let listPerfiles = [];

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
                                <input type="text" class="uk-input" id="inputNameUser">
                            </div>
                            </form>
                            <button class="uk-button uk-button-primary" onclick="updatePerfil(${ index_perfil })">Guardar</button>
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
                                <input type="text" class="uk-input" id="inputNameUser">
                            </div>
                            
                         </form>
                         <button class="uk-button uk-button-primary" onclick="addPerfil()">Guardar</button>`;
}

const addPerfil = async () => {
    const input = document.querySelector('#inputNameUser');
    const content = await fetch(`${urlApi}profiles`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: (listPerfiles.length + 1), name: input.value })
        }).then(rawResponse => rawResponse.json()).catch(error => console.log(error));
        console.log("content", content);
        // listPerfiles = await getProfiles();
        console.log(listPerfiles)
        await listPerfiles.push(content);
        await loadPerfiles();
}

//cargar scripts

path = window.location.pathname.split("/")
if (path[path.length - 1] === 'index.html'){
    (async () => {
        try {
            listPeliculas = await getMovies();
            console.log("Peliculas", listPeliculas);
            if(listPeliculas.length > 0 ) {
                loadNavbar();
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
            listPerfiles = await getProfiles();
            console.log(listPerfiles)
            loadNavbar(false);
            loadPerfiles();
        } catch (error) {
            alert("No se pudo conectar al servidor")
        } 
    })();
}
