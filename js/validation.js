const namee = document.getElementById("name");
const email = document.getElementById("email");
const contact = document.getElementById("contact");
const address = document.getElementById("address");
// const languages = document.querySelectorAll('input[name="language"]');
// const identityProof = document.getElementById('identity-proof');

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

// Function to check if an email address is valid
const isValidEmail = (email) => {
  const regx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regx.test(String(email).toLowerCase());
};

// Function to check if a phone number is valid
const isValidPhoneNumber = (phoneNumber) => {
  const regx = /^\d{10}$/;
  return regx.test(phoneNumber);
};

// Function to check if an address is valid
const isValidAddress = (address) => {
  const regx = /^[a-zA-Z0-9\s,'-]*$/;
  return regx.test(address);
};

const validateName = () => {
  const nameValue = namee.value.trim();

  if (nameValue === "") {
    setError(namee, "Name is required");
  } else {
    setSuccess(namee);
  }
};

const validateEmail = () => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }
};

const validateContact = () => {
  const contactValue = contact.value.trim();

  if (contactValue === "") {
    setError(contact, "Contact is required");
  } else if (!isValidPhoneNumber(contactValue)) {
    setError(contact, "Provide a valid contact");
  } else {
    setSuccess(contact);
  }
};

const validateAddress = () => {
  const addressValue = address.value.trim();

  if (addressValue === "") {
    setError(address, "Address is required");
  } else if (!isValidAddress(addressValue)) {
    setError(address, "Provide a valid address");
  } else {
    setSuccess(address);
  }
};

// const validateLanguage = () => {
//    const selectedLanguages = [...languages].filter(lang => lang.checked);
//   if (selectedLanguages.length === 0) {
//     setError(languages[0], "Please select at least one language");
//   } else {
//     setSuccess(languages[0]);
//   }
// };
namee.addEventListener("blur", validateName);
email.addEventListener("blur", validateEmail);
contact.addEventListener("blur", validateContact);
address.addEventListener("blur", validateAddress);

