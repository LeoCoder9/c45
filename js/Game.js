class Game {
    constructor() {
      
    }



    start() {
        form = new Form();
        form.display();

        bg = createSprite(100, 100, width, height);
        bg.addImage("BG1", bgIm);
        bg.scale = 2.5
        block = createSprite(200, 100, 70, 70);

        block.shapeColor = "red";
        floor = createSprite(750, height + 351, width, height);
        floor.shapeColor = "lightgreen"

        block.velocityY = block.velocityY + 4;
        block.collide(floor);



    }

    play() {
        background("white")
        
        

        block.velocityY = block.velocityY + 9
        block.collide(floor)

        if (keyDown("S")) {
            bg.velocityX = -8
            form.hide()
            keyS = true

        }

        if (keyS === true) {
            Monster1()
        }

        if (bg.x < 0) {
            bg.x = width / 2
        }

        if (keyDown("space")) {
            block.velocityY = -35
        }

       for(var i = 0; i < hyenaGroup.length; i++){
           if(hyenaGroup.get(i).isTouching(block)){
               hyenaGroup.get(i).destroy()
               lives = lives-1
           }
       }
      
  

        function Monster1() {
            if (frameCount % 160 === 0) {
                var hyena = createSprite(width, height - 78, 30, 30);
                hyena.velocityX = -15;
                hyena.addAnimation("HyenaRun", hyenaIm);
                hyena.scale = 1.5
                hyena.lifetime = 200
                hyenaGroup.add(hyena)
            }

        }
        drawSprites();
        textSize(20)
        fill("white")
        if( lives >= 1){ text(form.name, block.x-50 , block.y- 41)}
       
        textSize(30)
        fill("red")
        stroke(25)
        text("Lives: " + lives, 100, 70)
        text("Kills: " + kills, 1200, 70)









        if(lives < 1){
            console.log("GAME OVER")
 
            hyenaGroup.destroyEach()
            bg.velocityX = 0
            block.destroy()
            
 
            stroke(100)
            textSize(30)
            text("Oh No.. ", 700, 120)
            text("GAME OVER!", 680, 220)
        }

    }


}


