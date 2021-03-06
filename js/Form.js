class Form {

    constructor() {
        this.singlePlrButtom = createButton("SinglePlayer");
        this.multiPlrButtom = createButton("MultiPlayer");

        this.Info =  createElement('h2');
        this.greetings = createElement('h2');
        this.name = null
    }


    display() {
        var title = createElement('h1');
        title.html("REVENGE OF THE BLOCKS!");
        title.position(width / 2 + -220, 20);

        var play = createElement('h2');
        play.html("PLAY NOW:");
        play.position(width / 2 + -70, 160);

        let col = color(39, 116, 220);
        let col2 = color(159, 4, 4);
       
        this.singlePlrButtom.position(width / 2 + -150, 360);
        this.singlePlrButtom.size(100, 100)
        this.singlePlrButtom.style('background-color', col);

        
        this.multiPlrButtom.position(width / 2 + 50, 360);
        this.multiPlrButtom.size(100, 100)
        this.multiPlrButtom.style('background-color', col2);


    



        this.singlePlrButtom.mousePressed(() => {
            play.hide();

            this.multiPlrButtom.hide();
            this.singlePlrButtom.hide();

            var singlePlrTitle = createElement('h2');
            singlePlrTitle.position(width / 2 + -70, 160);
            singlePlrTitle.html("Getting ready...");

            var singleName = createInput("Input Name");

            singleName.position(width / 2 + -70, 360);

            var singlePlayButton = createButton("PLAY");
            singlePlayButton.position(width / 2 | + 0, 425);

           

            singlePlayButton.mousePressed(() => {
                gameState = "PLAY";
                this.name = singleName.value()
                singlePlayButton.hide();
                singleName.hide();
                singlePlrTitle.hide();

               
                this.greetings.html("Greetings, " + this.name);
                this.greetings.position(width / 2 + -110, 160);

               
                this.Info.html("Press 'S' to start");
                this.Info.position(width / 2 + -80, 250);
            }

            )


        }

        )

    }
  
    hide(){
      this.Info.hide()
     this.greetings.hide()
    }

}

    //REVENGE OF THE BLOCKS                        Getting started!                     waiting for more player...

        //PLAY:                    ------->         input name(       )   if muti -->        welcome (chosen name)

//SINGLEPLAYER,  MULTIPLAYER                          play