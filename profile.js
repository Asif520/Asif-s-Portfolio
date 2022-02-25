function validateForm(){
let x = document.forms["asifform"]["fname"].value;
let y = document.forms["asifform"]["email"].value;
if (x== ""){
    alert("Name is missing");
    return false;
}
if (y== ""){
    alert("please fill out e-mail");
    return false;
}
alert( "Message Send Successfully.");
}
