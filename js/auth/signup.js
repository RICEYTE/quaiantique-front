const inputNom = document.getElementById("nomInput");
const inputPreNom = document.getElementById("prenomInput");
const inputEmail = document.getElementById("emailInput");
const inputPassword = document.getElementById("passwordInput");

inputNom.addEventListener("keyup", validateForm);
inputPreNom.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);


//Function permettant de valider tout le formulaire
function validateForm() {
    validateRequired(inputNom);
    validateRequired(inputPreNom);
    validateEmail(inputEmail);
    validatePassword(inputPassword);
}

function validateRequired(input) {
    if (input.value != '') {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");


    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");

    }
}

function validateEmail(input) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = input.value;

    if (email.match(emailRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}



function validatePassword(input) {

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const password = input.value;

    if (password.match(passwordRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}   