

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