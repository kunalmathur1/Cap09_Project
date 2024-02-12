var form = document.getElementById("form");
var email = document.getElementById("email");
var password = document.getElementById("password");

form.addEventListener("submit",function(){
    event.preventDefault();

    let logindetails = {
        email: email.value,
        password : password.value
    }
   let saveddetails =  JSON.parse(localStorage.getItem("logindetails")) || {};
   if(logindetails.email === saveddetails.email && logindetails.password === saveddetails.password)  {
    localStorage.setItem("isAuth","Authenticated")
    alert("login Success!");
   }
   else{
    alert("Login Failed");
   }

});