var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect.debug = true;

  rect1 = createSprite(450,300,60,90);
  rect1.shapeColor = "yellow";
  rect1.velocityX = 2;
  rect2 = createSprite(900,300,60,90);
  rect2.shapeColor = "blue";
  rect2.velocityX = -2;
}

function draw() {
  background(0);  
  
  if(fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 && movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 && movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y<fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  } else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(rect1.x - rect2.x < rect1.width/2 + rect2.width/2 && rect2.x - rect1.x < rect1.width/2 - rect2.width/2){
  rect1.velocityX = rect1.velocityX * (-1);
  rect2.velocityX = rect2.velocityX * (-1);
  }

  drawSprites();
}