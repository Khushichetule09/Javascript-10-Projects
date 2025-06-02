const eyeicon = document.getElementById("eyeicon");
const password = document.getElementById("password");

eyeicon.onclick = function(){

    if(password.type === "password"){
        password.type = "text";
        eyeicon.classList.remove("fa-eye-slash");
        eyeicon.classList.add("fa-eye");
    }else{
        password.type = "password";
        eyeicon.classList.remove("fa-eye");
        eyeicon.classList.add("fa-eye-slash");
    }
};