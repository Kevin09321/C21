var fixedRect, movingRect, rec1, rec2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rec1 = createSprite(200,200,80,30);
  rec2 = createSprite(600,200,80,30);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(fixedRect, movingRect)) {
    movingRect.x = movingRect.x * -1;
    movingRect.y = movingRect.y* - 1;
  }
  if (isTouching(rec1, movingRect)){
    rec1.velocityX = 5;
  }
  if (isTouching(rec2, movingRect)){
    rec2.velocityX = -5;
  }
  if (isTouching(rec1,rec2)){
  bounceOff(rec1,rec2);
    
  }
  
  drawSprites();
}

