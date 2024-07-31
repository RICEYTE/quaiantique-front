const inputNom = document.getElementById("nomInput");
const inputPreNom = document.getElementById("prenomInput");
const inputEmail = document.getElementById("emailInput");
const inputPassword = document.getElementById("passwordInput");
inputNom.addEventListener("keyup", validateForm);

//Function permettant de valider tout le formulaire
function validateForm() {
    validateRequired(inputNom);
    validateRequired(inputPreNom);
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