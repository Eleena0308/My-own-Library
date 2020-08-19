var fixedRect, movingRect;
var rect1, rect2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect1 = createSprite(100,400,20,50);
  rect2 = createSprite(600,400,60,30);
  rect1.velocityX = 4;
  rect2.velocityX = -4;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect, fixedRect);

  bounceOff(rect1,rect2);

  drawSprites();
}

