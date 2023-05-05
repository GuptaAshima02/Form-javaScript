// function showData(){
//     let name = localStorage.getItem("Name");
//     let email = localStorage.getItem("Email");
//     let contact = localStorage.getItem("Contact");
//     let address = localStorage.getItem("Address");
//     let gender = localStorage.getItem("Gender");
//     let languages = localStorage.getItem("Languages");
//     let id_Proof = localStorage.getItem("Identity Proof");

// document.getElementById("output").innerHTML="";
// document.getElementById("output").innerHTML+="Name: "+name+"<br>";
// document.getElementById("output").innerHTML+="Email: "+email+"<br>";
// document.getElementById("output").innerHTML+="Contact: "+contact+"<br>";
// document.getElementById("output").innerHTML+="Address: "+address+"<br>";
// document.getElementById("output").innerHTML+="Gender: "+gender+"<br>";
// document.getElementById("output").innerHTML+="Languages: "+languages+"<br>";
// document.getElementById("output").innerHTML+="Identity Proof: "+id_Proof+"<br>";

// document.getElementById("output").style.display="block";

// }

// function saveData(event){
//     event.preventDefault();
//     let Name=document.getElementById("name").value;
//     let Email=document.getElementById("email").value;
//     let Contact=document.getElementById("contact").value;
//     let Address=document.getElementById("address").value;

//     let Gender;
//     let genderlist=document.querySelectorAll("#gender");
//     for(let item of genderlist){
//         if(item.checked==true){
//             Gender=(item.value);
//         }
//     }

//     let Languages=""
//     let languagelist=document.querySelectorAll("#language");
//     for(let item of languagelist){
//         if(item.checked==true){
//             Languages=Languages.concat(item.value,",");
//         }
//     }

//     let Id_Proof=document.getElementById("proof").value;
    
//     localStorage.setItem("Name",Name);
//     localStorage.setItem("Email",Email);
//     localStorage.setItem("Contact",Contact);
//     localStorage.setItem("Address",Address);
//     localStorage.setItem("Gender",Gender);
//     localStorage.setItem("Languages",Languages);
//     localStorage.setItem("Identity Proof",Id_Proof);

//     document.getElementById("showdata").style.display="inline";

// }

let record=[];
const form = document.querySelector('form');
const output = document.getElementById('output');

form.addEventListener('submit', (e) => {

  e.preventDefault(); // Prevent HTML refresh
  const formData = new FormData(form); // Converts to array of arrays
  const obj=Object.fromEntries(formData);
  let Languages=""
    let languagelist=document.querySelectorAll("#language");
    for(let item of languagelist){
        if(item.checked==true){
            Languages=Languages.concat(item.value," ");
        }
    }

  obj.Language = Languages;

//   console.log(obj);

  record.push(obj);
  let json=JSON.stringify(record);
  localStorage.setItem('record', json);
    
  // console.log(array);

  document.getElementById("showdata").style.display="inline";

  // let name = document.getElementById("name").value;


  // // Check if the Name field contains only letters and spaces
  // let regex = /^[a-zA-Z ]+$/;
  // if (!regex.test(name)) {
  //   alert("Please enter a valid name.");
  //   return false;
  // }

  // // If the Name field is valid, submit the form
  // document.querySelector("form").submit();


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

//   for(item of formData){
//     console.log(item)
//   }