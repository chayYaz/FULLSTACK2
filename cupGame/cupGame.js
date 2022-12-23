var basicBalls=document.getElementById("balls");

function chooseLevel(level){
  for(var i=3;i<level;i++){
    basicBalls.insertAdjacentHTML("afterend",'<div class="ball" id="'+i+ '" draggable="true" ondragstart="drag(event)"/>');
  }

}
function callChooseLevel(){
  var level=prompt("what level do you want?")
chooseLevel(level);}
/*
// var currentUser=JSON.parse(localStorage.getItem(JSON.stringify("currentUser")));
// var currentUserObj = JSON.parse(currentUser);
// document.getElementById("enterScore").innerText=currentUserObj.score;
// var currentScore=currentUserObj.score;
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  // currentScore++;
  // //change score
  // document.getElementById("enterScore").innerText=score;
  // currentUser.person
  // localStorage.setItem(currentUserObj.uname,JSON.stringify(currentUser.person));
  ev.preventDefault();

  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
*/