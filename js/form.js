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
  // validateLanguage();

  if (form.querySelectorAll(".success").length === 4) {
    isFormValid = true;
  }

  if (isFormValid) {
    // Submit the form
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);
    let languagelist = formData.getAll("Language");
    console.log(languagelist)
    obj.Language = languagelist;

    record.push(obj);
    let json = JSON.stringify(record);
    localStorage.setItem("record", json);
  form.reset();


    alert("Data is getting stored in local storage")

    // Show the "Show Data" button
    document.getElementById("showdata").style.display = "inline";
  } else {
    // Hide the "Show Data" button
    document.getElementById("showdata").style.display = "none";
  }
});

