function showData(){
    let name = localStorage.getItem("Name");
    let email = localStorage.getItem("Email");
    let contact = localStorage.getItem("Contact");
    let address = localStorage.getItem("Address");
    let gender = localStorage.getItem("Gender");
    let languages = localStorage.getItem("Languages");
    let id_Proof = localStorage.getItem("Identity Proof");

// document.getElementById("output").innerHTML="";
document.getElementById("output").innerHTML+="Name: "+name+"<br>";
document.getElementById("output").innerHTML+="Email: "+email+"<br>";
document.getElementById("output").innerHTML+="Contact: "+contact+"<br>";
document.getElementById("output").innerHTML+="Address: "+address+"<br>";
document.getElementById("output").innerHTML+="Gender: "+gender+"<br>";
document.getElementById("output").innerHTML+="Languages: "+languages+"<br>";
document.getElementById("output").innerHTML+="Identity Proof: "+id_Proof+"<br>";

// alert(name);
}

function saveData(event){
    event.preventDefault();
    let Name=document.getElementById("name").value;
    let Email=document.getElementById("email").value;
    let Contact=document.getElementById("contact").value;
    let Address=document.getElementById("address").value;

    if(document.getElementById("male").checked){
    var Gender=document.getElementById("male").value;
    }
    else {
    var Gender=document.getElementById("female").value;
    }

    let arr = [];
    var Languages = document.getElementsByName('language');
    for (var checkbox of Languages) {
        if (checkbox.checked){
        // document.body.append(checkbox.value + ' ');
        arr.push(checkbox.value);
        }
    }
    // alert(arr);
    let Id_Proof=document.getElementById("proof").value;
    
    localStorage.setItem("Name",Name);
    localStorage.setItem("Email",Email);
    localStorage.setItem("Contact",Contact);
    localStorage.setItem("Address",Address);
    localStorage.setItem("Gender",Gender);
    localStorage.setItem("Languages",arr);
    localStorage.setItem("Identity Proof",Id_Proof);
}