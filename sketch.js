var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(300,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1=createSprite(100,100,50,50)
  gameObject1.shapeColor= "pink";
  gameObject2=createSprite(200,100,50,50)
  gameObject2.shapeColor= "pink";
  gameObject3=createSprite(300,100,50,50)
  gameObject3.shapeColor= "pink";
  gameObject4=createSprite(400,100,50,50)
  gameObject4.shapeColor= "pink";
  movingRect.velocityY=-5
gameObject3.velocityY=5
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  bounceOff(movingRect,gameObject3)

 if(isTouching(movingRect,gameObject2)) {
  movingRect.shapeColor = "red";
  gameObject2.shapeColor = "red"; 
 }

 else{
  movingRect.shapeColor = "blue";
  gameObject2.shapeColor = "blue";
 }

  drawSprites();
}

