var fixedrect , movingrect,body1,body2
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(200,200,40,40);
  body1=createSprite(100,100,60,50);
  body2=createSprite(500,100,30,30);
  body1.velocityX=3
  body2.velocityX=-3
  fixedrect.debug=true;
  movingrect.debug=true;
}

function draw() { 
  background(0);
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  istouching();
  bounce();
  drawSprites();
}
function istouching(){
if( movingrect.x- fixedrect.x<=movingrect.width/2+fixedrect.width/2&&fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2
  &&movingrect.y- fixedrect.y<=movingrect.height/2+fixedrect.height/2&&fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2){
  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";
}
else{
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
  
}
}
function bounce(){
  if( body1.x-body2.x<=body1.width/2+body2.width/2&&body2.x-body1.x<=body1.width/2+body2.width/2){
   body1.velocityX=body1.velocityX*(-1)
   body2.velocityX=body2.velocityX*(-1)
  }
}






