var movingRectangle;
var fixedRectangle;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {

  createCanvas(800,400);
  fixedRectangle = createSprite(400, 200, 50, 50);
  movingRectangle = createSprite(400, 200, 70, 70);
  movingRectangle.shapeColor = "blue";
  fixedRectangle.shapeColor = "red";
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject2 = createSprite(300, 100, 50, 50);
  gameObject3 = createSprite(500, 100, 50, 50);
  gameObject4 = createSprite(700, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "aqua";
  gameObject3.shapeColor = "magenta";
  gameObject4.shapeColor = "black";
}

function draw() {
  background(255,255,255);  
  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;



if(isTouching(movingRectangle,gameObject3)){
  movingRectangle.shapeColor = "magenta";
}
 
  else{
    movingRectangle.shapeColor = "blue";
  }

  drawSprites();
  
}

