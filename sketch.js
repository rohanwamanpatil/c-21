function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="blue"
  movingRect.debug=true;

  apple=createSprite(100,160,50,70);
  apple.shapeColor="red";
  
orange=createSprite(300,150,60,80);
orange.shapeColor="orange";
}

function draw() {
  background(255,255,255);
  movingRect.x= World.mouseX;
  movingRect.y=World.mouseY;
  
  if(isTouching(orange,movingRect)){
    orange.shapeColor="blue";
    movingRect.shapeColor="pink";
  }

 else{
  orange.shapeColor="pink";
  movingRect.shapeColor="blue";
}



  
  if(isTouching(apple,movingRect)){
    apple.shapeColor="yellow";
    movingRect.shapeColor="purple";
  }
  else{
    apple.shapeColor="red";
    movingRect.shapeColor="blue";
  }

  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor="yellow";
    movingRect.shapeColor="purple";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="blue";
  }



  drawSprites();  
}






























































