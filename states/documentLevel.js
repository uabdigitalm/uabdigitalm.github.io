 /******************************************************************
    
    This Level covers Slides 26 through 29.  
    
    Item: Paper document.
    Details: Porous item.  
    Fingerprints? Yes.
    Collect? Yes.
    
 ******************************************************************/
    
BasicGame.documentLevel = function(game) {
 this.background;
 this.image; //image for the level
 this.returnStar; //return to the Menu
 
};
BasicGame.documentLevel.prototype = {
    
   create: function () {
        //adding the images to the canvas
        background = this.add.image(0,0, 'sky');
        image = this.add.sprite(this.world.centerX/2,this.world.centerY/2,'firstaid');
        option1 = this.add.sprite(this.world.centerX, this.world.centerY, 'star');
        option2 = this.add.sprite(this.world.centerX, this.world.centerY+50, 'star');
        option3 = this.add.sprite(this.world.centerX, this.world.centerY+100, 'star');
        option4 = this.add.sprite(this.world.centerX, this.world.centerY+150, 'star');
        returnStar = this.add.image(0,0, 'star');
        
        //Input enabled for images
        returnStar.inputEnabled = true;
        option1.inputEnabled = true;
        option2.inputEnabled = true;
        option3.inputEnabled = true;
        option4.inputEnabled = true;  
        
        // When the user clicks on the image, return the method with the message
        returnStar.events.onInputDown.addOnce(this.returnToMenu,this);
        option1.events.onInputDown.addOnce(this.usePowder,this);
        option2.events.onInputDown.addOnce(this.useSuperGlue,this);
        option3.events.onInputDown.addOnce(this.useNinhydrin,this);
        option4.events.onInputDown.addOnce(this.collectItem,this);
       
        
        //How the text will look
        this.response = this.add.text(this.world.centerX,this.world.centerY-75, '', { font: "12px Arial", wordWrap: true, wordWrapWidth: 200, fill: '#fffff' });
        
    },
    update: function () {
        
       
    },
   returnToMenu: function (pointer) {
         this.state.start('Game');   
    },
    
    usePowder: function () {  
      
    this.response.setText("Super glue works best on nonporous items.  Besides, you are not able to fume an item at the crime scene.  Try something else.");
    this.response.addColor('#B00000',0);
    },
    
    useSuperGlue: function () {
    option2.sprite = this.add.sprite(this.world.centerX, this.world.centerY+50,'incorrect');
    this.response.setText("Oils from fingerprints are absorbed into porous materials like paper.  A brush and black powder is not very good at developing prints on porous items.  Try something else.");
    this.response.addColor('#B00000',0);
    },
    
    useNinhydrin: function () {
    option3.sprite = this.add.sprite(this.world.centerX, this.world.centerY+100,'incorrect');
    this.response.setText("Ninhydrin does work best on porous items, but ninhydrin is difficult to apply to items at the scene.  Try something else.");
    this.response.addColor('#B00000',0);
        
    },
    collectItem: function () {  
      BasicGame.levelCounter++;
        //  This will stop the user from visiting the other options
        //  Also, it will stop them from clicking option 1 and incrementing the levelCounter by an infinite amount
    option1.inputEnabled = false;
    option2.inputEnabled = false;
    option3.inputEnabled = false;
    option4.inputEnabled = false;
    BasicGame.documentLevelComplete = false;
    option4.sprite = this.add.sprite(this.world.centerX, this.world.centerY+150,'incorrect');
    this.response.setText("Good idea!  The paper can be removed from the crime scene and this porous item can more easily be processed back at the lab.");
    this.response.addColor('#009900',0);
    },


}