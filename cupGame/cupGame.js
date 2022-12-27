var putScore=document.getElementById("putScore");
var basicBalls=document.getElementById("balls");
"currentUser"
var withSameName=JSON.parse(window.localStorage.getItem(JSON.stringify("currentUser")));
var score=withSameName.score;
console.log(score);
function chooseLevel(level){
  for(var i=1;i<=level;i++){
    basicBalls.insertAdjacentHTML("afterend",'<div class="ball" id="'+i+ '" draggable="true" ondragstart="drag(event)"/>');
  }

}
function callChooseLevel(){
  //maybe it changed since????
  var basicBalls=document.getElementById("div1");
  while (basicBalls.firstChild) {
    basicBalls.removeChild(basicBalls.lastChild);
  }
  var level=prompt("what level do you want?")
chooseLevel(level);}
function upScore(){
  score++;
  putScore.innerText=score;
  withSameName.score=score;
  localStorage.setItem(JSON.stringify("currentUser"),JSON.stringify(withSameName));
  let x = document.cookie;
  //let userName = decodeURIComponent(document.cookie);
  console.log("user name");
  console.log(x);
  let userData=withSameName.person;//JSON.parse(withSameName.person);
  userData.score=score;
  console.log(userData);
  localStorage.setItem(JSON.stringify(userName),JSON.stringify(userData));

}