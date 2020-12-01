
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivalTime=0;


function preload(){
  
  
  monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,90,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)

 
  
}


function draw() {
  background(225);
  if(keyDown("space")){
    monkey.velocityY = -12;
    
  }
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.collide(ground);
   monkey.velocityY = monkey.velocityY + 0.8;
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival time:" +survivalTime,100,50)
  
  spawnbanana();
 // spawnobstacle();
drawSprites();
   
}
function spawnbanana(){
  if(frameCount%80 === 0){  
  banana = createSprite(random(50,(150,200)));
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.scale = 0.1;
}
}
function spawnObstacle(){
 if (frameCount % 300 === 0){
   obstacle.velocityX = -6;
   obstacle.addImage(obstacleImage);
    }          
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
 }






