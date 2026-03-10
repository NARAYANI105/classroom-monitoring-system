function login(){

var role = document.getElementById("role").value;
var id = document.getElementById("id").value;
var password = document.getElementById("password").value;

if(id=="" || password==""){
alert("Please enter ID and Password");
return;
}

if(role=="student" && id=="student" && password=="123"){
window.location.href="floors.html";
}

else if(role=="staff" && id=="staff" && password=="123"){
window.location.href="floors.html";
}

else if(role=="admin" && id=="admin" && password=="123"){
window.location.href="floors.html";
}

else{
alert("Invalid Login");
}

}
