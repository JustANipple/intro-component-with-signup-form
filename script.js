// Variables
const submit = document.querySelector(".claim");
const namePat = new RegExp("[a-zA-Z0-9]+");
const emailPat = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-z]+$");
const passPat = new RegExp("[a-zA-Z0-9]+$");
const inputs = document.querySelectorAll(".input-block > div");

// Events
submit.addEventListener("click", validateForm);

// Functions
function validateForm() {
    if(!namePat.test(inputs[0].children[0].value) || inputs[0].children[0].value === "") {
        inputs[0].children[1].style.visibility = "visible";
        inputs[0].children[1].style.opacity = "1";
        inputs[0].parentElement.lastElementChild.style.display = "block";
    }
    if(!namePat.test(inputs[1].children[0].value) || inputs[1].children[0].value === "") {
        inputs[1].children[1].style.visibility = "visible";
        inputs[1].children[1].style.opacity = "1";
        inputs[1].parentElement.lastElementChild.style.display = "block";
    }
    if(!emailPat.test(inputs[2].children[0].value) || inputs[2].children[0].value === "") {
        inputs[2].children[1].style.visibility = "visible";
        inputs[2].children[1].style.opacity = "1";
        inputs[2].parentElement.lastElementChild.style.display = "block";
    }
    if(!passPat.test(inputs[3].children[0].value) || inputs[3].children[0].value === "") {
        inputs[3].children[1].style.visibility = "visible";
        inputs[3].children[1].style.opacity = "1";
        inputs[3].parentElement.lastElementChild.style.display = "block";
    }
    if(namePat.test(inputs[0].children[0].value) &&
    namePat.test(inputs[1].children[0].value) &&
    emailPat.test(inputs[2].children[0].value) &&
    passPat.test(inputs[3].children[0].value)) {
        window.location.reload();
    }
}