function createUser(){

var userName=document.getElementById("uname").value;
//!!!!!!!make here changes to check length is ok
var psw=document.getElementById("psw").value;
const person = {
  score:0,
  password: psw
}
if (localStorage.getItem(JSON.stringify(userName)) !== null) {
  alert("this user name already exists. if it is you please try logging in from login page. if you want to change your passwor, you will have to log in first")
}
else{
document.cookie = userName;
localStorage.setItem(JSON.stringify(userName),JSON.stringify(person));
//just checking cookies are working
// let decodedCookie = decodeURIComponent(document.cookie);
// alert(decodedCookie);
}
;}//
