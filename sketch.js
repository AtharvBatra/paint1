var posX = mouseX;
var posY = mouseY;
var database

function setup() {
  createCanvas(400,400);
  database = firebase.database();
}

function draw() {
  background(0);
  console.log(mouseX);
  console.log(mouseY); 
   database.ref('/').update({
				posX: this.mouseX
 })
   database.ref('/').update({
					posY: this.mouseY
 })


} 