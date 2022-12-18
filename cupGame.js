
//the ball does not need to move only cup(and will move both?)
document.getElementsByClassName("chosen")[0].style.opacity=0.5;
document.getElementsByClassName("ball")[0].style.display="initial";
const ball=document.getElementsByClassName("ball");
const chosen=document.getElementsByClassName("chosen")[0];
console.log("chosen is "+chosen)
function swapDom(a,b) 
{
     var aParent = a.parentNode;
     var bParent = b.parentNode;

     var aHolder = document.createElement("div");
     var bHolder = document.createElement("div");

     aParent.replaceChild(aHolder,a);
     bParent.replaceChild(bHolder,b);

     aParent.replaceChild(b,aHolder);
     bParent.replaceChild(a,bHolder);    
}
function mixTwo(){
	var x1 = Math.floor((Math.random() * 3));
	var x2;
	do
	{
		console.log(x1+" "+x2);

		x2=Math.floor((Math.random() * 3));
	}
	while(x1==x2)
	//console.log("chosen "+x1+" "+x2);
	var firstObject=chosen.parentElement.childNodes[x1+1];//???? is there a better way
	var secondObject=chosen.parentElement.childNodes[x2+1];
	//console.log("the objects are "+firstObject+" "+secondObject);
	swapDom(firstObject,secondObject);
}
function mixThem()
{
	for (var i = 0; i < 10; i++) {
    setTimeout(mixTwo, 500 * i);
}
}