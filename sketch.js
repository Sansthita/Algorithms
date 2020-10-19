function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(10, 200, 50, 100);
 movingRect = createSprite(750, 200,50, 100);
 fixedRect.shapeColor = "green";
 movingRect.shapeColor = "lightblue";
 fixedRect.velocityX = 3;
 movingRect.velocityX = -3;
}

function draw() {
  
  background(0);  
  bounceOff();
  

  drawSprites();
}
