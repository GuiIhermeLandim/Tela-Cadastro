  /* Atribuições */

let form = document.querySelector("#register-form");
let submit = document.querySelector("#register");

const loginDiv = document.querySelector("#login-container");
const registerDiv = document.querySelector("#register-container");

const login = document.querySelector("#login");
const registerLink = document.querySelector("#registerLink");

const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#name");
const lastNameInput = document.querySelector("#lastname");
const passwordInput = document.querySelector("#password");
const confPassInput = document.querySelector("#confirmpassword");
const checkBox = document.querySelector("#checkbox");

const emailLogin = document.querySelector("#emailLogin");
const passwordLogin = document.querySelector("#passwordLogin");

const emailLogSpan = document.querySelector("#emailLogSpan");
const passwordLogSpan = document.querySelector("#passwordLogSpan");
const emailSpan = document.querySelector("#emailSpan");
const nameSpan = document.querySelector("#nameSpan");
const lastnameSpan = document.querySelector("#lastnameSpan");
const passwordSpan = document.querySelector("#passwordSpan");
const confpassSpan = document.querySelector("#confpassSpan");
const checkSpan = document.querySelector("#checkSpan");

    /* Funções */

function validateInputs() {

    let check = 0;

    if(emailInput.value == "") {
        emailSpan.classList.remove("hide");
    }   else if (!emailInput.value == ""){
        emailSpan.classList.add("hide");
        check += 1
    }    
    
    if(nameInput.value == "") {
        nameSpan.classList.remove("hide");
    }   else if(!nameInput.value == ""){
        nameSpan.classList.add("hide");
        check += 1
    }
    
    if(lastNameInput.value == "") {
        lastnameSpan.classList.remove("hide");
    }   else if(!lastNameInput.value == ""){
        lastnameSpan.classList.add("hide");
        check += 1
    }    
    
    if(passwordInput.value == "" || passwordInput.value != confPassInput.value) {
        passwordSpan.classList.remove("hide");
    }   else if(!passwordInput.value == "" && passwordInput.value == confPassInput.value){
        passwordSpan.classList.add("hide");
        check += 1
    }     
    
    if(confPassInput.value == "") {
        confpassSpan.classList.remove("hide");
    }   else if(!confPassInput.value == ""){
        confpassSpan.classList.add("hide");
        check += 1
    }     
    
    if(!checkBox.checked) {
        checkSpan.classList.remove("hide");
    }   else if(checkBox.checked){
        checkSpan.classList.add("hide");
        check += 1
    }   
    
    if(check == 6) {
        loginDiv.classList.remove("hide");
        registerDiv.classList.add("hide");
    }

    console.log(check)

}

function validateLogin() {

    if(emailLogin.value == "" || emailLogin.value != emailInput.value) {
        emailLogSpan.classList.remove("hide");
    } else if (!emailLogin == "" && emailLogin.value == emailInput.value) {
        emailLogSpan.classList.add("hide")
    }

    if(passwordLogin.value == "" || passwordLogin.value != passwordInput.value) {
        passwordLogSpan.classList.remove("hide");
    } else if (!passwordLogin.value == "" && passwordLogin.value == passwordInput.value) {
        passwordLogSpan.classList.add("hide")
    }

}

    /* Eventos */

// evento que dispara as validações
submit.addEventListener("click", function(e) {

    e.preventDefault();
    validateInputs();

})

login.addEventListener("click", function(e) {

    e.preventDefault();
    validateLogin();

})

registerLink.addEventListener("click", function(e) {
    loginDiv.classList.add("hide");
    registerDiv.classList.remove("hide");


})


