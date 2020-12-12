var game;
var form;
var bgimage;
var gameState = 0;
var bgimage1;
var player1_img;
var player2_img;
var player3_img;
var player;
var wall1,wall2,wall3,wall4,wall6,wall7,wall8,wall9,wall10,wall11,wall5,wall12,wall13,wall14,wall15,wall116,wall17,wall18,wall19,wall20,wall21;
var obstacle_img;
var obs1,obs2,obs3,obs4,obs5;
var wall;

function preload(){
  bgimage = loadImage("pictures/bg.jpg")
  bgimage1 = loadImage("pictures/maze.png")
 
  player1_img = loadImage("pictures/player1.png");
  player2_img = loadImage("pictures/player2.png");
 
 obstacle_img = loadImage("pictures/ghost.png");
 
 
}

function setup() {
  createCanvas(displayWidth,displayHeight-100);

  //player = createSprite()

  game = new Game();
  game.start();


  wall = createGroup();
 
    player = createSprite(677,30,20,20);
    player.scale = 0.09;
  
    obs1 = createSprite(760,60,20,20);
    obs1.addImage(obstacle_img);
    obs1.scale = 0.1;
    obs1.velocityY = random(1,5);
    obs1.velocityX = random(-5,5);
  
    obs2 = createSprite(560,200,20,20);
    obs2.addImage(obstacle_img);
    obs2.scale = 0.1;
    obs2.velocityY = random(1,5);
    obs2.velocityX = random(-5,5);
  
      obs3 = createSprite(290,340,20,20);
    obs3.addImage(obstacle_img);
    obs3.scale = 0.1;
    obs3.velocityY = random(1,5);
    obs3.velocityX = random(-5,5);
  
    obs4 = createSprite(1120,340,20,20);
    obs4.addImage(obstacle_img);
    obs4.scale = 0.1;
    obs4.velocityY = random(1,5);
    obs1.velocityX = random(-5,5);
  
    obs5 = createSprite(1400,625,20,20);
    obs5.addImage(obstacle_img);
    obs5.scale = 0.1;
    obs5.velocityY = random(1,5);
    obs5.velocityX = random(-5,5);
  
  wall1 = createSprite(80,displayHeight/2-60,10,720);
  
  wall2 = createSprite(540,730,930,10);
  
  wall3 = createSprite(360,20,560,10);
  
  wall4 = createSprite(1455,380,10,720);
  
  wall5 = createSprite(1087,20,745,10);
  
  wall6 = createSprite(175,120,10,75);
  
  wall7 = createSprite(400,160,460,10);
  
  wall8 = createSprite(355,55,10,70);
  
  wall9 = createSprite(220,87,100,10);
  
  wall10 = createSprite(445,120,10,80);
  
  wall11 = createSprite(310,232,470,10);
  
  wall12 = createSprite(540,415,10,370);
  
  wall13 = createSprite(585,595,100,10);
  
  wall14 = createSprite(630,516,10,150);
  
  wall15 = createSprite(720,445,190,10);
  
  wall16 = createSprite(815,410,10,80);
  
  wall17 = createSprite(995,375,370,10);
  
  wall18 = createSprite(310,305,280,10);
  
  wall19 = createSprite(1177,378,10,440);
  
  wall20 = createSprite(1270,593,200,10);
  
  wall21 = createSprite(1270,480,10,220);
  
  wall22 = createSprite(1315,375,100,10);
  
  wall23 = createSprite(1360,485,10,80);
  
  wall24 = createSprite(1405,520,95,10);
  
  wall25 = createSprite(1170,90,560,10);
  
  wall26 = createSprite(1085,160,560,10);
  
  wall27 = createSprite(811,118,10,75);
  
  wall28 = createSprite(720,125,10,220);
  
  wall29 = createSprite(1358,305,185,10);
  
  wall30 = createSprite(1270,265,10,70);
  
  wall31 = createSprite(1315,235,100,10);
  
  wall32 = createSprite(535,55,10,80);
  
  wall33 = createSprite(630,160,10,150);
  
  wall34 = createSprite(725,230,200,10);
  
  wall35 = createSprite(905,235,10,155);
  
  wall36 = createSprite(955,230,100,10);
  
  wall36 = createSprite(765,305,275,10);
  
  wall37 = createSprite(630,345,10,80);
  
  wall38 = createSprite(680,380,100,10);
  
  wall39 = createSprite(1085,270,10,80);
  
  wall40 = createSprite(1038,305,100,10);
  
  wall41 = createSprite(994,343,10,80);
  
  wall42 = createSprite(994,450,10,150);
  
  wall43 = createSprite(1265,735,370,10);
  
  wall44 = createSprite(1085,697,10,80);
  
  wall45 = createSprite(905,664,930,10);
  
  wall46 = createSprite(950,590,290,10);
  
  wall47 = createSprite(1090 ,515,10,160);
  
  wall48 = createSprite(905,520,10,150);
  
  wall49 = createSprite(815,520,190,10);
  
  wall50 = createSprite(720,589,10,150);
  
  wall51 = createSprite(446,550,10,220);
  
  wall52 = createSprite(310,448,280,10);
  
  wall53 = createSprite(175,373,10,150);
  
  wall54 = createSprite(445,340,10,80);
  
  wall55 = createSprite(350,378,200,10);
  
  wall56 = createSprite(356 ,620,10,210);
  
  wall57 = createSprite(265 ,652,10,150);
  
  wall58 = createSprite(262 ,520,180,10);
  
  wall59 = createSprite(171,590,10,150);
  
}

function draw() {
  if (gameState === 0){
   background(bgimage);
  }
  if(gameState === 1){
    background("white");
    game.choosePlayer();
  }
  if(gameState==2){
    edges = createEdgeSprites();
    game.play();
  }
  
  
}