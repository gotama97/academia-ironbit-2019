const listPeliculas = [
    {
        imagen: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elseworlds-crossover-arrow-flash-superman-1539952103.jpg',
        title: 'Flash',
        trailer: 'LOzaD3dHA9Q',
        description: 'Mientras Rosso roba más sangre para su cura, flashbacks muestran cómo una vez se preocupó por su madre antes de que le diagnosticaran HLH y cómo se enojó con ella por aparentemente darse por vencida antes de que ella muriera. Mientras el Equipo Flash procesa lo que Barry e Iris les dijeron, Cisco se niega a aceptarlo y promete salvarlo. En respuesta, Barry decide entrenar a Cisco para convertirse en el nuevo líder del Equipo Flash después de que él se haya ido al trabajar con él para salvar a Rosso.',
        reseña: `Grant Gustin, Candice Patton, Danielle Panabaker, Carlos Valdés, Hartley Sawyer, Danielle Nicolet, LaMonica Garrett, Tom Cavanagh, Jesse L. Martin`    
    },{
        imagen: 'https://i.ytimg.com/vi/ZRYJ1J5fcRk/maxresdefault.jpg',
        title: 'Guardianes de la Bahia',
        trailer: 'wXPiD2SbXWU',
        description: 'es una película de comedia y acción estadounidense de 2017, basada en la serie con el mismo nombre, de 1989.',
        reseña: 'Dwayne "The Rock" Johnson, Zac Efron, Alexandra Daddario y Kelly Rohrbach y con la participación antagónica de Priyanka Chopra'
    },
    {
        imagen: 'https://i2.wp.com/frasesdelapelicula.com/wp-content/uploads/2016/07/batman-el-caballero-de-la-noche-asciende.jpeg',
        title: 'Batman',
        trailer: 'a8W6fgeObDA',
        description: 'El 10 de junio de 2013, se anunció que el director Zack Snyder y el guionista David S. Goyer regresarían en una secuela de El hombre de acero. Goyer ya había firmado previamente un contrato de tres películas, las cuales incluían El Hombre de Acero, su secuela, y La Liga de la Justicia con Superman. También se espera que Christopher Nolan regrese como productor, o bien en un papel menos importante que en el que tuvo en la película. El 16 de junio de 2013, The Wall Street Journal informó que el estudio estaba planeando estrenar la secuela en 2014.',
        reseña: 'Ben Afleck, Amy Adams, Joe Manganiello'
    },
    {
        imagen: 'http://elhorror.com.mx/quehorror/wp-content/uploads/2017/04/anaconda-pelicula.jpg',
        title: 'Anaconda',
        trailer: 'zkX5t5ZJLEk',
        description: 'En el transcurso del viaje rescatan a un cazador de serpientes, Paul Sarone, después de que su bote hiciera aguas. Al conocer el interés de los documentalistas, Sarone les informa de que él puede guiarlos al lugar en el que se oculta la tribu. Al poco tiempo, un miembro de la expedición, el profesor Steven Cale, es picado por una avispa venenosa y queda inconsciente. Sarone convence al resto de la tripulación de seguir el rumbo establecido para llegar hasta un centro hospitalario en el que Cale pueda recibir atención, pero se trata de un engaño. ',
        reseña: ' Jon Voight, Jennifer Lopez, Ice Cube más '
    },
    {
        imagen: 'https://e.radio-oxigeno.io/normal/2016/05/23/160616_148440.jpg',
        title: 'Dia de la Independencia',
        trailer: 'avZLUwL-Tws',
        description: 'Siempre supimos que iban a regresar. Luego de que DÍA DE LA INDEPENDENCIA redefiniera el género de películas de eventos, en el próximo capítulo épico llega una catástrofe global de una escala inimaginable. Utilizando la tecnología alienígena recuperada, las naciones de la tierra han colaborado en un sistema de defensa inmensa para proteger al planeta. Pero nada nos puede preparar para la fuerza sin precedentes de los alienígenas. Solo el ingenio de algunos hombres y mujeres valientes pueden salvar al mundo del borde de la extinción.',
        reseña: 'Liam Hemsworth, Jeff Goldblum, Bill Pullman, Judd Hirsch, Vivica A. Fox, Brent Spiner, Charlotte Gainsbourg, Jessie Usher, Maika, Monroe, Sela Ward.'
    },
]



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
////localStorage.setItem('perfiles', JSON.stringify(listPerfiles));

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
    loadPreview();
    loadCarrousel();
}else {
    loadPerfiles();

}
