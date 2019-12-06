let url=   "http://localhost:3000/movie";

let getM =async () => {
return await fetch(url)
    .then(response=>{
        return response.json();
    })
    .catch(err =>{
        console.log(err);
    });
}


const printMovies = async function(){    
    let movieList = await getM();
    console.log(movieList)
    let movieContainer = document.querySelector("#movieContainer");

    for (const element of movieList) {
        let container = document.createElement('div');
        container.classList.add("carousel-item");
        //container.classList(" mt-5")

        container.innerHTML = `
        <img src="${element.poster}" class="d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block">
            <h5>${element.title}</h5>
            <p>${element.plot}</p>
        </div>`
        movieContainer.appendChild(container ); 
    }

};


function listUsers(){
    let users = document.getElementById("users");
    let newUser;
    arrayUsers.forEach((user,index) =>{
     newUser = document.createElement('div');
    newUser.classList.add('row');
    newUser.classList.add('newUSer');
   
    newUser.innerHTML = `
        <div class= "col-md-6 data=${index}">
        <div class="userName">Name: ${user.name}</div>
        <div class="nickName"> NickName: ${user.nickName}</div>
        <div>
            <button type='button' class='btn btn-danger btn-delete'>Delete</button>
        </div>
        <br>
        <div>
            <button type='button' class='btn btn-primary btn-update' data-toggle="modal" data-target="#exampleModal">Update</button>
        </div>
        </div>
    `;
    users.appendChild(newUser);
    })
}

printMovies();