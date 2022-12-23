const games=document.getElementsByClassName("stillCreating");

var currentUser=JSON.parse(localStorage.getItem(JSON.stringify("currentUser")));
var currentUserObj = JSON.parse(currentUser);
document.getElementById("enterScore").innerText=currentUserObj.score;
for(var i=0;i<games.length ;i++){
  //console.log(games[i]);
  games[i].insertAdjacentHTML("afterend"," <span class='centered'>In progress</span>");
}