// Variables
const submit = document.querySelector(".claim");
const namePat = "[a-zA-Z0-9]+";
const emailPat = "^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-z]+$";
const passPat = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$";

// Events
submit.addEventListener("click", validateForm);

// Functions
function validateForm() {
    
}