
var sea, ship;
var seaImg, shipImg;
 
function preload(){
  
  seaImg = loadImage ("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-1.png","ship-2.png" ,"ship-2.png","ship-3.png","ship-4.png");

}
""
function setup(){
  createCanvas(400,400);
  background("blue");

  sea = createSprite(400,200);
  sea.addImage(seaImg);
  
  sea.velocityX = -4;
  sea.scale = 0.4;
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingship",shipImg);
  ship.scale = 0.30;
  
}

function draw() {
  background(0);
sea.velocityX=-3;
 if (sea.x <0){
  sea.x = sea.width/2;
 }
drawSprites();
}