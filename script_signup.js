var form = document.getElementById("form");
var email = document.getElementById("email");
var password = document.getElementById("password");

form.addEventListener("submit",function(event){
    event.preventDefault();

    let logindetails = {
        email: email.value,
        password : password.value
    }
    localStorage.setItem("logindetails",JSON.stringify(logindetails)) || {};

});