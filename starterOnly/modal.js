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
const locationBtn = document.querySelectorAll(".location-btn"); // Button radio pour l'input "Quelles villes"
const validMessage = document.getElementById("valid-message"); // Message de validation du formulaire
const closeBtn = document.getElementById("close-btn"); // Button fermer, apparaît une fois le formulaire envoyé

//Fonction messages d'erreur 
// Le paramètre selector permet de déclarer une constante error correspondant au bon id, style permet d'ajouter le style correspondant "none" "inline-block" 
const errorMessage = (selector, style) => {
  const error = document.getElementById(selector);
  error.style.display = style;
} 

// Listen to click event
close.addEventListener('click', closeModal); // Au clic la function close Modal est lancé
function closeModal() { // Permet de fermer la modal en ajoutant le style "none" à modalbg
  modalbg.style.display = 'none';
};

closeBtn.addEventListener("click", closeByBtn); // Button fermer, apparaît une fois le formulaire envoyé
function closeByBtn() { // Ferme la modal en cliquant sur le button "fermer"
  closeModal();
};

// Function Control
const firstControl = () => {
  if(first.value === ""){ // si la value de "first" est vide
    first.classList.add("input"); // ajoute le style de la classe "input" à "first" (border de input = rouge (voir css))
    errorMessage("firstError", "inline-block"); // fait appraitre le message d'erreur avec la function errorMessage
  } else { // sinon retire 'input' et fait disparaitre le message d'erreur + return true
    first.classList.remove("input");
    errorMessage("firstError", "none");
    return true;
  }
};

const lastControl = () => {
  if(last.value === "") { 
    last.classList.add("input");
    errorMessage("lastError", "inline-block");
  } else {
    last.classList.remove("input");
    errorMessage("lastError", "none");
    return true;
  }
};

const emailControl = () => {
  if(email.value === "") {
    email.classList.add("input");
    errorMessage("emailError", "inline-block");
  } else {
    email.classList.remove("input");
    errorMessage("emailError", "none");
    return true;
  }
};

const birthdateControl = () => {
  if(birthdate.value === "") {
    birthdate.classList.add("input");
    errorMessage("birthdateError", "inline-block");
  } else {
    birthdate.classList.remove("input");
    errorMessage("birthdateError", "none");
    return true;
  }
};

const quantityControl = () => {
  if(quantity.value === "") {
    quantity.classList.add("input");
    errorMessage("quantityError", "inline-block");
  } else {
    quantity.classList.remove("input");
    errorMessage("quantityError", "none");
    return true;
  }
};

const locationControl = () => {
  for(i=0; i<locationBtn.length; i++) // Boucle qui incrémente i à chaque fois jusqu'à ce que i soit égal à "length", i correspond à chaque ville
    if(locationBtn[i].checked) { // si une ville est "checked"
      errorMessage("locationError", "none");
      return true;
    } else {
      errorMessage("locationError", "inline-block");
    };
};

const checkboxControl = () => {
  if(checkbox1.checked) {
    errorMessage("checkboxError", "none");
    return true;
  } else {
    errorMessage("checkboxError", "inline-block");
  }
};

//Validate form
// La soumission du formulaire lance la function validateForm
form.addEventListener('submit', validateForm);
function validateForm(e) {
  e.preventDefault(); // Retire le comportement par défaut, la page ne s'actualise pas
  firstControl(); // Toutes les functions précédentes sont jouées 
  lastControl();
  emailControl();
  birthdateControl();
  quantityControl();
  locationControl();
  checkboxControl();
  if(firstControl() && lastControl() && emailControl() && birthdateControl() && 
  quantityControl() && locationControl() && checkboxControl()) { // si toutes les functions retournent true 
    form.style.display = "none"; // Le form disparaît 
    closeBtn.style.display = "inline-block"; // Le button fermer apparaît
    validMessage.style.display = "inline-block"; // Le message de validation apparaît
  };
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};

// close.addEventListener('click', function());

