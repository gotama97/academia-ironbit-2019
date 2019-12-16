let listMovies = [];
let listProfiles = [];
const urlApi = 'http://localhost:3000/'

const getMovies = () => {
    return fetch(`${urlApi}movies`)
            .then(response => response.json())
            .catch(error => {
                alert(error.response)
            });
}

const getProfiles = () => {
    return fetch(`${urlApi}profiles`)
            .then(response => response.json())
            .catch(error => {
                alert(error.response)
            });
}

const requestProfiles =  (typeMethod, dataProfile) => {
    url = ( typeMethod.toUpperCase() === 'POST') ? `${urlApi}profiles` : `${urlApi}profiles/${ dataProfile.id }` 
    return fetch(
        url, 
        {
            method: typeMethod,
            headers: {
                        'Content-Type': 'application/json'
                     },
            body: JSON.stringify( dataProfile )
        })
        .then(response => response.json())
        .catch(error => alert(error.response));
}

const loadNavbar =  (isHome = true) => {
    const navbarElement = document.querySelector('#navbar');
    let toHTML = `<div class="uk-position-relative" >
                    <div class="uk-position-absolute uk-margin-top">
                        <div id="preview" style="margin-top: 60px"></div>
                    </div>`;
    toHTML += isHome ? `<img id="bg-img-movie" src="${ listMovies[0].imagen }" class="">` : "";
    toHTML += `<div class="uk-position-top">
                    <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
                        <div class="uk-navbar-left">
                            <ul class="uk-navbar-nav">
                                <li class="uk-active"><a class="navbar-brand" href="index.html" style="color: red; font-size: 2em">LA NETFLIX</a></li>
                                <li>
                                    <a class="nav-link" href="index.html" style="color: white">Inicio</a>
                                </li>
                            </ul>
                        </div>

                        <div class="uk-navbar-right">
                            <ul class="uk-navbar-nav">
                                <li>
                                    <a href="#" class="uk-button uk-button-danger" style="color: white">Opciones</a>
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

const loadPreview =  (movie_index = 0) => {
    const movie = listMovies[movie_index];
    const element = document.querySelector('#preview');
    const bgImg = document.querySelector('#bg-img-movie');
    bgImg.src = movie.imagen;
    element.innerHTML = `
    <div class="uk-flex uk-flex-middle" uk-grid>
        <div class="uk-container-expand	">
                <h1  style="font-weight: bold; color:white">${ movie.title }</h1>
                <p style="font-size: 14px">${ movie.description }</p>
                <p style="font-size: 13px">${ movie.reseña }</p>
                <div class="uk-flex uk-flex-center">
                <button class="uk-button uk-button-danger uk-margin-top" onclick="showMovie('${ movie.trailer }')">VER AHORA</button>
                </div>     
        </div>
        <div class=" uk-margin-left">
            <iframe width="180%" height="300" src="https://www.youtube.com/embed/${ movie.trailer }" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
    </div>`;
}

const loadCarrousel = () => {
    const element = document.querySelector('#carrousel');
    moviesHTML = `<div class="contain">
                    <div class="row">
                      <div class="row__inner">`;
    listMovies.forEach((pelicula, index) => { 
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

const loadPerfiles = () => {
    const element = document.querySelector('#perfiles');
    let perfilesHTML = `<h3 style="font-weight: bold; color: grey;">PERFILES</h3>
    <div class="uk-flex uk-flex-center">`;
    listProfiles.forEach((perfil, index) => {
        perfilesHTML += `<div class="uk-card uk-card-default uk-card-body uk-margin-left" style="background-color: red;">
                            <h5 style="color: whitesmoke">${ perfil.name }</h5> 
                            <a id="update" style="cursor: pointer;"  onclick="showUpdatePerfil(${ index })" uk-tooltip="Editar Perfil"><i class="fa fa-edit" ></i></a>
                            <a id="remove" style="cursor: pointer;" onclick="deletePerfil(${ index })" uk-tooltip="Eliminar Perfil"><i class="fa fa-remove"></i></a>
                        </div>`;
    });
    perfilesHTML += `<div class="uk-card  uk-card-body uk-margin-left" style="background-color: transparent;">
                            <a id="add" style="cursor: pointer;" onclick="showFormPerfil('Agregar')" uk-tooltip="Agregar Perfil"><i class="fa fa-plus-square fa-3x"></i></a>
                        </div>
                    </div>`;
    element.innerHTML = perfilesHTML; 
}
//Movie show
const showMovie = (movie) => {
    document.querySelector('#preview').innerHTML = `<iframe width="1150em" height="600" src="https://www.youtube.com/embed/${ movie }" frameborder="0" allow="accelerometer; autoplay=true; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    document.querySelector('#carrousel').innerHTML = '';
}

const deletePerfil = async (index_perfil) => {
    try {
        await requestProfiles('delete', listProfiles[index_perfil])
        listProfiles.splice(index_perfil, 1);
    }catch(error) {
        alert('hubo un error al eliminar')
    }finally {
        loadPerfiles();
    } 
}

const showUpdatePerfil = (index_perfil) => {
    element = document.querySelector('#perfiles');
    element.innerHTML = `<h3>ACTUALIZAR PERFIL</h3>
                            <form>
                            <div class="form-group">
                            <label for="inputNameUser">Nombre Usuario</label>
                                <input type="text" class="uk-input" id="inputNameUser">
                            </div>
                            </form>
                            <button class="uk-button uk-button-primary uk-margin-top" onclick="updatePerfil(${ index_perfil })">Guardar</button>
                        `;
    const input = document.querySelector('#inputNameUser');
    input.value = listProfiles[index_perfil].name;
}

const updatePerfil = async (index_perfil) => {

    const input = document.querySelector('#inputNameUser');
    try {
        listProfiles[index_perfil].name = await input.value
        await requestProfiles('put', listProfiles[index_perfil])
    } catch(error) {
        alert('hubo un problema');
    } finally {
        loadPerfiles();
    }
}

const showFormPerfil = (action_text, index) => {
    element = document.querySelector('#perfiles');
    element.innerHTML = `<h3>${ action_text.toUpperCase() } PERFIL</h3>
                         <form>
                            <div class="form-group">
                            <label for="inputNameUser">Nombre Usuario</label>
                                <input type="text" class="uk-input" id="inputNameUser">
                            </div>
                            
                         </form>
                         <button class="uk-button uk-button-primary uk-margin-top" onclick="addPerfil()">Guardar</button>`;
}

const addPerfil = async () => {
    const input = document.querySelector('#inputNameUser');
    try {
        const result = await requestProfiles('post',{ id: (listProfiles.length + 1), name: input.value })
        await listProfiles.push(result);
    } catch (error) {
        alert('hubo un problema')
    } finally {
        loadPerfiles();
    }
    
}

path = window.location.pathname.split('/')
if (path[path.length - 1] === 'index.html'){
    (async () => {
        try {
            listMovies = await getMovies();
            if(listMovies.length > 0 ) {
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
            listProfiles = await getProfiles();
            loadNavbar(false);
            loadPerfiles();
        } catch (error) {
            alert('No se pudo conectar al servidor')
        } 
    })();
}
