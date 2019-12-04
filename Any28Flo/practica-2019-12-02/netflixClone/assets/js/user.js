

function createUser(){
    import User from app.js
    import arrayUsers from app.js
    let name= $("#nameUser");
    let userName = name[0].value;
    let nick = $("#nickName")
    let nickName = nick[0].value;

    console.log()
   let newUser = new User(userName, nickName);
   arrayUsers.push(newUser);
}


$( "#createUser" ).click(function() {
    console.log("clik")
    createUser();
});