
var monkey , monkeyImage
var backImage,backgr;
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  
  backImage=loadImage("jungle.jpg");
  monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("stone.png");
 
}



function setup() {

   
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;

  //monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkeyImage);
  monkey.scale = 0.1;
  
  //ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  console.log(ground.x);
  //group
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  createCanvas(400,400);
background("white");


  
  if (ground.x<0){
    
    ground.x=ground.width/2;
      
      }
  
  monkey.collide(ground);
  
  if (keyDown("space")&& monkey.y >= 100)
    {
    monkey.velocityY = -10;
    
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime =Math.round(frameCount/frameRate());
  text("SurvivalTime:"+survivalTime,100,50);
  
  if(obstacleGroup.isTouching(monkey)) 
  {
      ground.velocityX = 0;
   monkey.velocityY = 0;
   obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0); 
    obstacleGroup.setLifetimeEach(-1);
     bananaGroup.setLifetimeEach(-1);
  }
  
  
  
  bananas();
  obstacles();
  drawSprites();
}

function bananas ()
{
 if (World.frameCount%80==0)
 {
    banana = createSprite(180,random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 100;
    bananaGroup.add(banana);
  }
   
}

function obstacles ()
{
 if (World.frameCount%300==0)
 {
    obstacle = createSprite(random(120,200),315);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
   
}


