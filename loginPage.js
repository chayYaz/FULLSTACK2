var canTry=3;

function checkUserExists(){
 
  var userName=document.getElementById("idLogin").value;
  var psw=document.getElementById("pswLogin").value;
 
  var withSameName=window.localStorage.getItem(JSON.stringify(userName));

  let obj = JSON.parse(withSameName);
  console.log("a");
  if(obj && psw==obj["password"])
  {
    console.log("yes");
  }
  else{
    console.log("no");
    
    --canTry;
    
    if(canTry<=0){
      count();
    }
    else{
      document.getElementById("demo").innerHTML="you have only "+canTry+" more attempts. if you are new here please go to the create new user page";
    }
 
  }
}
function callCheckUser(){
  if(canTry!==0){
    
    checkUserExists();
  }
  else{
  }
}
function count(){
  var countDownDate = new Date().getTime()+31000;
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (distance <= 0) {
    clearInterval(x);
    canTry=3;
    document.getElementById("demo").innerHTML="";
  }
  else{
    document.getElementById("demo").innerHTML = "please wait "+(seconds) + " seconds before attempting again. if you are new here please go to the create new user page";
  }
}, 1000);
}