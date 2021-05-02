var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(200, 200, 50, 80);
 fixedRect.shapeColor="green"
 movingRect= createSprite(400,200,80,60);
 movingRect.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  movingRect.x= mouseX;
  movingRect.y=mouseY;
  
console.log(movingRect.x-fixedRect.x)
if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2){
  fixedRect.shapeColor="red"
  movingRect.shapeColor="red"
}  
else{
  fixedRect.shapeColor="green"
  movingRect.shapeColor="green"
}
drawSprites();
}