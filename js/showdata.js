let records;
function showData() {
  let string = localStorage.getItem("record");
  let output = document.getElementById("output");
  let table = document.getElementById("table");

  records = JSON.parse(string);

  table.innerHTML = "";
  let tr = document.createElement("tr");
  table.appendChild(tr);

  for (let item of records) {
    for (let field in item) {
      let th = document.createElement("th");
      th.textContent = field;
      tr.appendChild(th);
    }
    let th = document.createElement("th");
    th.textContent = "Edit/Delete";
    tr.appendChild(th);
    break;
  }

  records.forEach((eachRecord, index) => {
    let row = document.createElement("tr");
    table.appendChild(row);
    for (let field in eachRecord) {
      let valueCell = document.createElement("td");
      valueCell.textContent = eachRecord[field];
      row.appendChild(valueCell);
    }
    let buttonCell = document.createElement("td");
    let edit = document.createElement("button");
    let Delete = document.createElement("button");
    edit.innerHTML = "Edit";
    Delete.innerHTML = "Delete";
    buttonCell.appendChild(edit);
    buttonCell.appendChild(Delete);
    edit.setAttribute("value", index);
    row.appendChild(buttonCell);
    edit.onclick = (e) => {
      let value = e.target.value;
      Try(value);
      let updateButton = document.createElement("button");
      updateButton.innerHTML = "Update";
      updateButton.onclick = () => {
        updateRecord(value);
      };
      buttonCell.appendChild(updateButton);
      edit.style.display = "none";

    };
    Delete.onclick = (e) => {
      let value = e.target.value;
      deleteRecord(value);
    };
  });

  output.style.display = "block";
}

function Try(v) {
  let eachRecord = records[v];
  let inputtag = document.querySelectorAll(
    "input[type='text'],input[type='email'],input[type='address'],input[type='tel'],select"
  );
  let form= document.querySelector("form");
  form.reset();
  let inputgender = document.querySelectorAll("input[type='radio']");
  let inputlanguage = document.querySelectorAll("input[type='checkbox']");
  for (let item in eachRecord) {
    inputtag.forEach((input) => {
      if (input.name == item) {
        input.value = eachRecord[item];
      }
      if (item == "Language") {
        for (let element in eachRecord[item]) {
          inputlanguage.forEach((input) => {
            if (input.value == eachRecord[item][element]) {
              input.checked = true;
            }
          });
        }
      }
      if (item == "Gender") {
        inputgender.forEach((input) => {
          if (input.value == eachRecord[item]) {
            input.checked = true;
          }
        });
      }
    });
  }
}
function updateRecord(v) {
  let inputtag = document.querySelectorAll(
    "input[type='text'],input[type='email'],input[type='address'],input[type='tel'],select"
  );
  let inputgender = document.querySelectorAll("input[type='radio']");
  let inputlanguage = document.querySelectorAll("input[type='checkbox']");
  let updatedRecord = {};
  for (let input of inputtag) {
    updatedRecord[input.name] = input.value;
  }
  for (let input of inputgender) {
    if (input.checked) {
      updatedRecord["Gender"] = input.value;
      break;
    }
  }
  let selectedLanguages = [];
  for (let input of inputlanguage) {
    if (input.checked) {
      selectedLanguages.push(input.value);
    }
  }
  updatedRecord["Language"] = selectedLanguages;
  records[v] = updatedRecord;
  localStorage.setItem("record", JSON.stringify(records));
  showData();
}

function deleteRecord(v) {
  records.splice(v, 1);
  localStorage.setItem("record", JSON.stringify(records));
  showData();
}
