var form, game, player;

var gameState = "START"

var block

var bg, bgIm

var floor

var keyS = false

var hyenaIm, hyenaGroup
var lives = 1
var kills = 0


function preload() {
 
  bgIm = loadImage("images/bg9.png");
  
  hyenaIm = loadAnimation("images/Hyena/hyenaWalk1.png", "images/Hyena/hyenaWalk2.png", "images/Hyena/hyenaWalk3.png", "images/Hyena/hyenaWalk4.png", "images/Hyena/hyenaWalk5.png", "images/Hyena/hyenaWalk6.png")
  
}

function setup() {
  createCanvas(windowWidth , windowHeight );

  hyenaGroup = new Group()
  
  game = new Game();
  game.start();
  
}

function draw() {
  




if(gameState === "PLAY"){
  game.play()
}


  
}




/* 
      
   improve the game over texts
   make a restart button (working)
   make levels for more monsters
   create the monsters functions(more)
   improve multi and single player buttons (from start)
   logic for multi player
   */


   // button properties:

//this.singlePlrButtom.size(100,100);
// this.singlePlrButtom.style("font-family", "Bodoni");
  //this.singlePlrButtom.style("font-size", "48px");
   //this.singlePlrButtom.style('color', '#ff0000'); 
   //let col = color(25, 23, 200, 50);
   // this.singlePlrButtom.style('background-color', col);
