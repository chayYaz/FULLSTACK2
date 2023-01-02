var putScore=document.getElementById("putScore");
var basicBalls=document.getElementById("balls");
let x = document.cookie;
console.log(x);
userName = /=(.+)/.exec(x)[1];
console.log(userName);
var withSameName=window.localStorage.getItem(JSON.stringify(userName));
console.log(withSameName);
let obj = JSON.parse(withSameName);
console.log(obj);
var score=obj.score;
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
  console.log(score);
  putScore.innerText=score;
  var withSameName2=window.localStorage.getItem(JSON.stringify(userName));//stringify changed the object...
  let obj2 = JSON.parse(withSameName2);
  console.log("obj2");
  console.log(obj2)
  obj2.score=score;
  console.log(score);
  localStorage.setItem(JSON.stringify(userName),JSON.stringify(obj2));

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
    { transform: 'scale(1)', opacity: 1 },
    { transform: 'scale(.5) ', opacity: .7},
    { transform: 'scale(1)', opacity: 1 },
  ], {
    duration: 2000, //milliseconds
    easing: 'linear', //'linear', a bezier curve, etc.
    delay: 5, //milliseconds
    iterations: Infinity, //or a number
    direction: 'alternate', //'normal', 'reverse', etc.
    fill: 'forwards' //'backwards', 'both', 'none', 'auto'
  });}
}
