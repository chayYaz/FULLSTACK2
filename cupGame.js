var balls=document.getElementById("balls");

//console.log(element);
function chooseLevel(level){
  for(var i=3;i<level;i++){
    balls.insertAdjacentHTML("afterend",'<div class="ball" id="'+i+ '" draggable="true" ondragstart="drag(event)"/>');
  }

}
chooseLevel(5);