const games=document.getElementsByClassName("stillCreating");

var currentUser=JSON.parse(localStorage.getItem(JSON.stringify("currentUser")));

document.getElementById("enterScore").innerText=currentUser.score;
for(var i=0;i<games.length ;i++){
  games[i].insertAdjacentHTML("afterend"," <span class='centered'>In progress</span>");
}