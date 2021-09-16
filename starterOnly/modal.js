function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const form = document.querySelector("form");
const locationBtn = document.querySelectorAll(".location-btn"); // Buttons radio pour l'input "Quelles villes"
const validMessage = document.getElementById("valid-message"); // Message de validation du formulaire
const errorLength = document.querySelectorAll(".errorLength"); // Message d'erreur pour nom et prénom si le nombre de caractères n'est pas respecté
const closeBtn = document.getElementById("close-btn"); // Button fermer, apparaît une fois le formulaire envoyé

//Fonction messages d'erreur
const errorMessage = (i, style) => {
  const error = document.querySelectorAll(".error");
  error[i].style.display = style;
} 

// Listen to click event
close.addEventListener('click', closeModal); 
function closeModal() {
  modalbg.style.display = 'none';
};

closeBtn.addEventListener("click", closeByBtn); // Button fermer, apparaît une fois le formulaire envoyé
function closeByBtn() {
  closeModal();
};

// Function Control
const firstControl = () => {
  if(first.value === ""){ // si la value de "first" est vide
    first.classList.add("input"); // ajoute le style de la classe "input" à "first" (border de input = rouge)
    errorMessage("0", "inline-block"); // fait appraitre le message d'erreur, "0" correspond à l'objet "first" du tableau "error"
  } else if (first.value.length < 2 || first.value.length > 20) { // si la value de first est <2 ou >20
    first.classList.add("input");
    errorLength[0].style.display = "inline-block";
    errorMessage("0", "none");
  } else {
    first.classList.remove("input");
    errorMessage("0", "none");
    errorLength[0].style.display = "none";
    return true;
  }
};

const lastControl = () => {
  if(last.value === "") { 
    last.classList.add("input");
    errorMessage("1", "inline-block");
  } else if (last.value.length < 2 || last.value.length > 20) {
    last.classList.add("input");
    errorLength[1].style.display = "inline-block";
    errorMessage("1", "none");
  } else {
    last.classList.remove("input");
    errorMessage("1", "none");
    errorLength[1].style.display = "none";
    return true;
  }
};

const emailControl = () => {
  if(email.value === "") {
    email.classList.add("input");
    errorMessage("2", "inline-block");
  } else {
    email.classList.remove("input");
    errorMessage("2", "none");
    return true;
  }
};

const birthdateControl = () => {
  if(birthdate.value === "") {
    birthdate.classList.add("input");
    errorMessage("3", "inline-block");
  } else {
    birthdate.classList.remove("input");
    errorMessage("3", "none");
    return true;
  }
};

const quantityControl = () => {
  if(quantity.value === "") {
    quantity.classList.add("input");
    errorMessage("4", "inline-block");
  } else {
    quantity.classList.remove("input");
    errorMessage("4", "none");
    return true;
  }
};

const locationControl = () => {
  for(i=0; i<locationBtn.length; i++) // Boucle qui incrémente i à chaque fois jusqu'à ce que i soit égal à "length", i correspond à chaque ville
    if(locationBtn[i].checked) { // si une ville est "checked"
      errorMessage("5", "none");
      return true;
    } else {
      errorMessage("5", "inline-block");
    };
};

const checkboxControl = () => {
  if(checkbox1.checked) {
    errorMessage("6", "none");
    return true;
  } else {
    errorMessage("6", "inline-block");
  }
};

//Validate form

form.addEventListener('submit', validateForm);
function validateForm(e) {
  e.preventDefault();
  firstControl();
  lastControl();
  emailControl();
  birthdateControl();
  quantityControl();
  locationControl();
  checkboxControl();
  if(firstControl() && lastControl() && emailControl() && birthdateControl() && 
  quantityControl() && locationControl() && checkboxControl() === true) { // si toutes les functions retournent true 
    form.style.display = "none";
    closeBtn.style.display = "inline-block";
    validMessage.style.display = "inline-block";
  };
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};

// close.addEventListener('click', function());

