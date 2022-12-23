var basicBalls=document.getElementById("balls");

function chooseLevel(level){
  for(var i=3;i<level;i++){
    basicBalls.insertAdjacentHTML("afterend",'<div class="ball" id="'+i+ '" draggable="true" ondragstart="drag(event)"/>');
  }

}
function callChooseLevel(){
  var level=prompt("what level do you want?")
chooseLevel(level);}
