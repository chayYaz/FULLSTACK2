function createUser(){

var userName=document.getElementById("uname").value;

var psw=document.getElementById("psw").value;
const person = {
  password: psw
}
//alert(localStorage.getItem((userName)));
if (localStorage.getItem(JSON.stringify(userName)) !== null) {
  alert("this user name already exists. if it is you please try logging in from login page. if you want to change your passwor, you will have to log in first")
}
else{
document.cookie = userName;
localStorage.setItem(JSON.stringify(userName),JSON.stringify(person));
}
;}//
