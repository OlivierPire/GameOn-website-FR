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
const locationBtn = document.querySelectorAll(".location-btn");
const validMessage = document.getElementById("validation");

//Fonction messages d'erreur
const errorMessage = (i, style) => {
  const error = document.querySelectorAll(".error");
  error[i].style.display = style;
}

// Listen to click event
close.addEventListener('click', closeModal);
function closeModal() {
  modalbg.style.display = 'none';
}

// Function Control
const firstControl = () => {
  if(first.value === "") {
    errorMessage("0", "inline-block")
  } else {
    errorMessage("0", "none");
    return true;
  }
};

const lastControl = () => {
  if(last.value === "") {
    errorMessage("1", "inline-block")
  } else {
    errorMessage("1", "none");
    return true
  }
};

const emailControl = () => {
  if(email.value === "") {
    errorMessage("2", "inline-block")
  } else {
    errorMessage("2", "none");
    return true
  }
};
const birthdateControl = () => {
  if(birthdate.value === "") {
    errorMessage("3", "inline-block")
  } else {
    errorMessage("3", "none");
    return true
  }
};
const quantityControl = () => {
  if(quantity.value === "") {
    errorMessage("4", "inline-block")
  } else {
    errorMessage("4", "none");
    return true
  }
};
const locationControl = () => {
  for(i=0; i<locationBtn.length; i++)
    if(locationBtn[i].checked) {
      errorMessage("5", "none");
      return true;
    } else {
      errorMessage("5", "inline-block");
    };
};
const checkboxControl = () => {
  if(checkbox1.checked) {
    errorMessage("6", "none");
    return true
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
  if(firstControl() && lastControl() && emailControl() && birthdateControl()
  && quantityControl() && locationControl() && checkboxControl()=== true) {
    closeModal();
    validMessage.style.display = "block";
    
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close.addEventListener('click', function());