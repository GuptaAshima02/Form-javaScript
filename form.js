let record = JSON.parse(localStorage.getItem("record")) ?? [];
const form = document.querySelector("form");
let isFormValid = false;

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent HTML refresh

  // Validate the form inputs
  validateName();
  validateEmail();
  validateContact();
  validateAddress();

  if (form.querySelectorAll(".success").length === 4) {
    isFormValid = true;
  }

  if (isFormValid) {
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
    localStorage.setItem("record", json);

    // Show the "Show Data" button
    document.getElementById("showdata").style.display = "inline";
  } else {
    // Hide the "Show Data" button
    document.getElementById("showdata").style.display = "none";
  }
});

function showData() {
  let string = localStorage.getItem("record");
  let output = document.getElementById("output");
  let empty = document.getElementById("empty");

  let records = JSON.parse(string);
  empty.innerHTML = "";

  for (let i = 0; i < records.length; i++) {
    let table = document.createElement("table");
    let tableHead = document.createElement("thead");
    let tableBody = document.createElement("tbody");
    table.style.border = "1px solid black"; // add border


    // Create table rows
    let record = records[i];
    for (let field in record) {
      let row = document.createElement("tr");
      let nameCell = document.createElement("td");
      let valueCell = document.createElement("td");
      nameCell.textContent = field;
      valueCell.textContent = record[field];
      row.appendChild(nameCell);
      row.appendChild(valueCell);
      tableBody.appendChild(row);
    }

    // Add table to container
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    empty.appendChild(table);
  }

  output.style.display = "block";
}

const namee = document.getElementById("name");
const email = document.getElementById("email");
const contact = document.getElementById("contact");
const address = document.getElementById("address");

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
  const regx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
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

namee.addEventListener("blur", validateName);
email.addEventListener("blur", validateEmail);
contact.addEventListener("blur", validateContact);
address.addEventListener("blur", validateAddress);

document.querySelector(".search").addEventListener("keyup", function () {
  let value = document.getElementById("search").value;
  let output = document.getElementById("output");
  let empty = document.getElementById("empty");
  let string = JSON.parse(localStorage.getItem("record"));
  empty.innerHTML = "";

  let filterData = string.filter((item) => {
    if (item.Name.includes(value)) {
      return item;
    }
  });

  for (eachrecord of filterData) {
    let table = document.createElement("table");
    let tableHead = document.createElement("thead");
    let tableBody = document.createElement("tbody");
    table.style.border = "1px solid black"; // add border

    // Create table rows
    for (field in eachrecord) {
      let row = document.createElement("tr");
      let nameCell = document.createElement("td");
      let valueCell = document.createElement("td");
      nameCell.textContent = field;
      valueCell.textContent = eachrecord[field];
      row.appendChild(nameCell);
      row.appendChild(valueCell);
      tableBody.appendChild(row);
    }

    // Add table to container
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    empty.appendChild(table);
  }

  // output.style.display = "block";
});
