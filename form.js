let record=[];
const form = document.querySelector('form');
const output = document.getElementById('output');

form.addEventListener('submit', (e) => {

  e.preventDefault(); // Prevent HTML refresh
 // Validate inputs
 const isValid = validateInputs();

 if (isValid) {
   // Submit the form
   const formData = new FormData(form);
   const obj = Object.fromEntries(formData);
   let Languages = "";
   let languagelist = document.querySelectorAll("#language");
   for (let item of languagelist) {
     if (item.checked == true) {
       Languages = Languages.concat(item.value, " ");
     }
   }

   obj.Language = Languages;

   record.push(obj);
   let json = JSON.stringify(record);
   localStorage.setItem('record', json);

   document.getElementById("showdata").style.display = "inline";

  //  showData();
 }
});

function showData(){

  let string = localStorage.getItem("record");
   array = JSON.parse(string);
  let data=document.getElementById("output")
  data.innerHTML="";
  for(eachrecord of array){
    for(item in eachrecord){
      data.innerHTML += item +" : "+eachrecord[item] + "<br>";

    }
  }
}

//form validation
const namee = document.getElementById('name');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const address = document.getElementById('address');

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

// Function to check if an email address is valid
const isValidEmail = email => {
  const regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regx.test(String(email).toLowerCase());
}

// Function to check if a phone number is valid
const isValidPhoneNumber = phoneNumber => {
  const regx = /^\d{10}$/;
  return regx.test(phoneNumber);
}

// Function to check if an address is valid
const isValidAddress = address => {
  const regx = /^[a-zA-Z0-9\s,'-]*$/;
  return regx.test(address);
}

const validateInputs = () => {
  const nameValue = namee.value.trim();
  const emailValue = email.value.trim();
  const contactValue = contact.value.trim();
  const addressValue = address.value.trim();

  if (nameValue === '') {
    setError(namee, 'Name is required');
  } else {
    setSuccess(namee);
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }

  if (contactValue === '') {
    setError(contact, 'Contact is required');
  } else if (!isValidPhoneNumber(contactValue)) {
    setError(contact, 'Provide a valid contact');
  } else {
    setSuccess(contact);
  }

  if (addressValue === '') {
    setError(address, 'Address is required');
  } else if (!isValidAddress(addressValue)) {
    setError(address, 'Provide a valid address');
  } else {
    setSuccess(address);
  }

  // Check if any input control has the 'error' class applied to it
  const hasErrors = document.querySelectorAll('.form-group.error').length > 0;

  if (hasErrors) {
    // Stop form submission
    return false;
  } else {
    // Allow form submission
    return true;
  }
};
