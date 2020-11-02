var z1,z1img;
var backgroundimg;
var s1,s1img;
var t1,t1img;
var ghostimg;
var catimg
function preload(){
z1img=loadAnimation("zombie1.png","zombie2.png","zombie4.png","zombie5.png","zombie6.png","zombie7.png","zombie8.png","zombie9.png","zombie10.png")  
  backgroundimg=loadImage("background.jpg")
  s1img=loadAnimation("simba1.png","simba2.png","simba3.png","simba4.png","simba5.png","simba6.png","simba7.png")
 // t1img=loadAnimation("t1.gif")
ghostimg=loadImage("ghost.png")
catimg=loadImage("cat.png")
}











function setup() {
  createCanvas(800, 800);
  z1=createSprite(-550,550,10,100);
  z1.addAnimation("zombie",z1img);
  z1.scale=0.5;
  s1=createSprite(-400,550,10,10);
  s1.addAnimation("simba",s1img);
  s1.scale=0.8;
  //t1=createSprite(200,200,10,10);
  //t1.addAnimation("t1",t1img);
}










function draw() {
  background( backgroundimg);
  drawSprites();
  z1.velocityX=5;
  s1.velocityX=5;
  spawnGhost();
  spawnCat();
}

function spawnGhost(){
if(frameCount % 120===0) {
var ghost=createSprite(300,400,10,10);
ghost.addImage("ghost",ghostimg);
ghost.velocityX=-3;
ghost.scale=0.5;
ghost.lifetime=100;

}
}

function spawnCat(){
  if(frameCount % 120===0) {
  var cat=createSprite(300,600,10,10);
  cat.addImage("cat",catimg);
  cat.velocityX=3;
  cat.scale=0.25;
  cat.lifetime=200;
  
  }

}





















