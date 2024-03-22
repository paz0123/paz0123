var  container= document.getElementById("container");
var world=document.getElementById("world");
var x=0;
var y=500;
var z=0;
let dir;
document.addEventListerner("keydown",direction);

function direction(event){ 
   if(document.getElementById('button'),clicked==true)
     else if (event.keycode ==87){
  dir="up";
 }else if (event.keycode ==83){
	 dir="down";
 }else if (event.keycode ==68){
	 dir="right";
 }else if (event.keycode ==65){
	 dir="left";

}
 }

 timer=setInterval(update,100);
