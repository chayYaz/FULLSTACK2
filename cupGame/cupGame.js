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


  addAnimation();
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
/* Animation */

function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}

function addAnimation(){
var items = document.getElementsByClassName("ball");
for(var i=0;i<items.length;i++){
items[i].animate([
    { transform: 'scale(1)', background: 'red', opacity: 1, offset: 0 },
    { transform: 'scale(.5) rotate(270deg)', background: 'blue', opacity: .5, offset: .2 },
    { transform: 'scale(1) rotate(0deg)', background: 'red', opacity: 1, offset: 1 },
  ], {
    duration: 2000, //milliseconds
    easing: 'ease-in-out', //'linear', a bezier curve, etc.
    delay: 10, //milliseconds
    iterations: Infinity, //or a number
    direction: 'alternate', //'normal', 'reverse', etc.
    fill: 'forwards' //'backwards', 'both', 'none', 'auto'
  });}
}