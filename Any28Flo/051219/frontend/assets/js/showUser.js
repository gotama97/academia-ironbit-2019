let urlUser ="http://localhost:3000/users/"

//Async ensures that the function returns a promise
//and wraps non-promises in it.
const makeRequest = async (urlUser)  =>{
    //Await => will pause the async function and wait for the promise to 
    // resolve prior to moving on.
    try{
        const dataUsers = await fetch(urlUser)
        const jsonData = await dataUsers.json();
        // console.log(jsonData)
        printUsers(jsonData)
    }catch(err){
        console.log(err)
    }
   
   
}
const printUsers = jsonData =>{
    let userContainer = document.querySelector("#users");
    let html ="";    
    for(let user of jsonData){
        console.log(user.firstName)
           html += `<div>`
            html += `<div class="card col-md-2" data-card-name="${user.firstName}">`;
            html += `<div class="card-body"> `
                html += `<h5 class= "card-title">${user.firstName} ${user.lastName} </h5>`
                html += `<p class= "card-text">User Name : ${user.userName} </p>`
            html += `</div> `
            html+= `  <a href="#" class="btn btn-primary">Update</a>`
            html += `</div>`
           html += `</div>`
           console.log(user)
        //  });

    }
    userContainer.innerHTML =html ; 
}

makeRequest(urlUser);
  
