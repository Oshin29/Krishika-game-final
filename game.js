  
class Game{
    constructor(){
        this.choice=0;
        this.button1 = createButton("Select");
        this.button2 = createButton("Select");
       // this.button3 = createButton("Select");
        this.button4 = createButton("START");
    }

    start(){

        if (gameState === 0){
        this.button1.show();
        this.button2.show();
        //this.button3.show();
        this.button4.show();
        form = new Form();
        form.display();    
    }
    
}
choosePlayer(){
    image(player1_img,300,50,300,400);
    image(player2_img,800,50,300,450);

   
    
    this.button1.position(400,500);
    this.button2.position(900,500);
    //this.button3.position(1100,500);
    this.button4.position(620,580);
    this.button4.style('height', '40px');
    this.button4.style('width', '200px');
    this.button4.style('background', 'pink');
    if(this.choice===1){
       
        this.button1.style("backgroundColor","red");
        
    }
    if(this.choice===2){
        this.button2.style("backgroundColor","red");
    }
    


    this.button1.mousePressed(()=>{
        
        this.choice=1;  
    }) 
    this.button2.mousePressed(()=>{
        
        this.choice=2;
    })
    
    
   
    this.button4.mousePressed(()=>{
        this.button1.hide();
        this.button2.hide();
        
        this.button4.hide();
        if(this.choice===1){
            player.addImage(player1_img);
        }
        else if(this.choice===2){
            player.addImage(player2_img);
         
        }

        gameState = 2;
       
    })
    
}

play(){
    
  background("white")
    
   
    
   if(keyDown(LEFT_ARROW)){
    player.x=player.x-5;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x=player.x+5;
  } 
  if(keyDown(UP_ARROW)){
    player.y=player.y-5;
  }
  if(keyDown(DOWN_ARROW)){
    player.y=player.y+5;
  }
  
  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall8);
  player.collide(wall9);
  player.collide(wall10);
  player.collide(wall11);
  player.collide(wall12);
  player.collide(wall13);
  player.collide(wall14);
  player.collide(wall15);
  player.collide(wall16);
  player.collide(wall17);
  player.collide(wall18);
  player.collide(wall19);
  player.collide(wall20);
  player.collide(wall21);
  player.collide(wall22);
  player.collide(wall23);
  player.collide(wall24);
  player.collide(wall25);
  player.collide(wall26);
  player.collide(wall27);
  player.collide(wall28);
  player.collide(wall29);
  player.collide(wall30);
  player.collide(wall31);
  player.collide(wall32);
  player.collide(wall33);
  player.collide(wall34);
  player.collide(wall35);
  player.collide(wall36);
  player.collide(wall37);
  player.collide(wall38);
  player.collide(wall39);
  player.collide(wall40);
  player.collide(wall41);
  player.collide(wall42);
  player.collide(wall43);
  player.collide(wall44);
  player.collide(wall45);
  player.collide(wall46);
  player.collide(wall47);
  player.collide(wall48);
  player.collide(wall49);
  player.collide(wall50);
  player.collide(wall51);
  player.collide(wall52);
  player.collide(wall53);
  player.collide(wall54);
  player.collide(wall55);
  
  obs1.bounceOff(edges);
  obs2.bounceOff(edges);
  obs3.bounceOff(edges);
  obs4.bounceOff(edges);
  obs5.bounceOff(edges);
  
   console.log(mouseX,mouseY);
  
    drawSprites();
  }
}