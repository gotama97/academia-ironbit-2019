const urlUser ="http://localhost:3000/users/"
const addUser = document.getElementById("createUser");

//Async ensures that the function returns a promise
//and wraps non-promises in it.
const makeRequest = async (urlUser)  =>{
    //Await => will pause the async function and wait for the promise to 
    // resolve prior to moving on.
    try{
        const dataUsers = await fetch(urlUser)
        const jsonData = await dataUsers.json();
        printUsers(jsonData)
    }catch(err){
        console.log(err)
    }
   
   
}
const addUserToDB = ()=>{    
    let firstName= $("#nameUser");
    let nick = $("#nickName");
    let lastName ="Glz";
    let userName = nick[0].value;
    let password = "dfadfsadfss";
    (async () => {
        const rawResponse = await fetch(urlUser, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id:1, firstName: firstName, lastName: lastName , userName : userName , password : password})
        });
        const content = await rawResponse.json();
    })();
}
const printUsers = jsonData =>{
    let userContainer = document.querySelector("#users");
    let html ="";    
    for(let user of jsonData){
           html += `<div>`
            html += `<div class="card col-12" data-card-name="${user.firstName}">`;
            html += `<div class="card-body"> `
                html += `<h5 class= "card-title">${user.firstName} ${user.lastName} </h5>`
                html += `<p class= "card-text">User Name : ${user.userName} </p>`
            html += `</div> `
            html+= `  <a href="#" class="btn btn-primary">Delete</a>`
            html += `</div>`
           html += `</div>`
        //  });

    }
    userContainer.innerHTML =html ; 
}

makeRequest(urlUser);
  
addUser.onclick = addUserToDB;