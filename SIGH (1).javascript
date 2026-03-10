function login(){

var role=document.getElementById("role").value;
var id=document.getElementById("id").value;
var password=document.getElementById("password").value;

if(id=="" || password==""){
alert("Enter ID and Password");
return;
}

window.location.href="floors.html";

}
