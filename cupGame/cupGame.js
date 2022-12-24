var putScore=document.getElementById("putScore");
var basicBalls=document.getElementById("balls");
"currentUser"
var withSameName=JSON.parse(window.localStorage.getItem(JSON.stringify("currentUser")));
var score=withSameName.score;
console.log(score);
function chooseLevel(level){
  for(var i=3;i<level;i++){
    basicBalls.insertAdjacentHTML("afterend",'<div class="ball" id="'+i+ '" draggable="true" ondragstart="drag(event)"/>');
  }

}
function callChooseLevel(){
  var level=prompt("what level do you want?")
chooseLevel(level);}
function upScore(){
  score++;
  putScore.innerText=score;
  //var currentUser=JSON.parse(withSameName);
  withSameName.score=score;
  localStorage.setItem(JSON.stringify("currentUser"),JSON.stringify(withSameName));
}