
var monkey , monkey_running, ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;

function preload(){
  
  
  
  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  
monkey = createSprite(80, 315, 20, 20);
monkey.addAnimation("running", monkey_running);
monkey.scale = 0.1;
  
ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width /2;
console.log(ground.x); 
  
FoodGroup = new Group();
obstacleGroup = new Group();
}


function draw() {
background("white")
  ground.x = ground.width /2;
  
 if (keyDown("space")) {
   monkey.velocityY = -6;
 }
  
  monkey.velocityY = monkey.velocityY + 0.10;
  monkey.collide(ground);
  
 
  Banana();
  Obstacles();
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  
  drawSprites();
}

function Banana() {
if (frameCount % 80 === 0) {
banana = createSprite(600,(Math.round(random (100, 120))), 20, 20); 
banana.addImage(bananaImage);
banana.scale = 0.1;
banana.velocityX = -5;
banana.lifetime = 120;

FoodGroup.add(banana);
 }
}

function Obstacles() {
if (frameCount % 300 === 0) {
obstacles = createSprite(600,320, 20, 20); 
obstacles.addImage(obstacleImage);
obstacles.scale = 0.2;
obstacles.velocityX = -7;
obstacles.lifetime = 85.7;
}


}