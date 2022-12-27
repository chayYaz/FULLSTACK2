function createUser(){

var userName=document.getElementById("uname").value;
var psw=document.getElementById("psw").value;
const person = {
  score:0,
  password: psw
}
//done here as well so wont save bad password
if(psw.length<8 || psw.length>15){
  //alert("the password is too long or too short");
  return;
}
if ( localStorage.getItem(JSON.stringify(userName)) !== null) {
  alert("this user name already exists. if it is you please try logging in from login page. if you want to change your passwor, you will have to log in first")
}
else{
  document.cookie = "username="+userName+"; expires=Thu, 18 Dec 2025 12:00:00 UTC";
localStorage.setItem(JSON.stringify(userName),JSON.stringify(person));
//just checking cookies are working
// let decodedCookie = decodeURIComponent(document.cookie);
// alert(decodedCookie);
}
;}//
