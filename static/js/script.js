//jshint esversion:6
const login = document.getElementById("login");
const register = document.getElementById("register");
const payment = document.getElementById("pay");

payment.addEventListener("click", () => {   
    if(login.innerHTML ==='Login'){
        document.getElementsByClassName("login-alert").setAttribute("hidden",false );
    }
    else{
        document.getElementsByClassName("login-alert").setAttribute("hidden",true );
    }
});