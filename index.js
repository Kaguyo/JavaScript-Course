let username;
let password;

document.getElementById("logInButton").onclick = function (){
    username = document.getElementById("myText1").value;
    password = document.getElementById("myText2").value;
    document.getElementById("h1").textContent = `Hello ${username}`;
}
