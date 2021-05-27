var tower, towerImg;
var door, doorImg;
var ghost, ghostImg;
var climber, climberImg
var blocks;

var doorG, blockG, climberG;

var Sound;
var gameState = "play";

function preload(){

towerImg = loadImage("tower.png");
ghostImg = loadImage("ghost-standing.png");
doorImg = loadImage("door.png");
climberImg = loadImage("climber.png");

}

function setup(){

createCanvas(600,600);

tower = createSprite(300,300,10,10);
tower.addImage("tower",towerImg);
tower.velocityY = 2.5;

ghost = createSprite(250,250,20,20);
ghost.addImage("ghost",ghostImg);
ghost.scale = 0.5;

doorG = createGroup();
blockG = createGroup();
climberG = createGroup();

}

function draw() {

background(0);

  if(gameState === "play"){
    
    if(keyDown("space")){
       ghost.velocityY = -3;

   }

    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 3;

   }
 
  if(keyDown("left_arrow")){
      ghost.x = ghost.x - 3;

   }
   
   ghost.velocityY = ghost.velocityY + 0.6;
   
   if(tower.y > 600){
      tower.y = 300;
   }
   
   spawnDoors();

  if(blockG.isTouching(ghost) || ghost.y >600){
  
  gameState = "end";
  }
  
  if (climberG.isTouching(ghost)){
  ghost.velocityY = 0
  }


drawSprites();

} if(gameState === "end"){

ghost.destroy();

textSize(35)
fill("lightBlue");
text("Game Over", 220,300);

textSize(25)
fill("lightBlue");
text("You touched an invisble block and died ", 100,330);




}
    
    
    

}


function spawnDoors(){

if(frameCount % 200 === 0){



door = createSprite(Math.round(random(100,500)),-50);
door.addImage("door", doorImg);

climber = createSprite(200,20);
climber.addImage("climber", climberImg);

block = createSprite(200,15)
block.debug = true;
block.visible = false;

block.height = 2;

climber.x = door.x
block.width  = climber.width;
block.x = door.x

climber.velocityY = 2;
door.velocityY = 2;
block.velocityY = 2;

ghost.depth = door.depth;
ghost.depth += 1;

door.lifetime = 700;
climber.lifetime = 700;
block.lifetime = 700;

doorG.add(door);
climberG.add(climber);
blockG.add(block);

}
}