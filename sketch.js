var tom,tomImg;
var jerry,jerryImg;

function preload() {
    //load the images here
     
    gardenImg = loadImage ("garden.png")

    tomImg = loadImage("tomOne.png,tomTwo.png,tomThree.png,tomFour.png")

    tomOne.png = loadImage ("tomOne.png")

    jerryImg =loadImage("jerryOne.png,jerryTwo.png,jerryThree.png,jerryFour.png")
}

function setup(){
    createCanvas(500,600);
    //create tom and jerry sprites here

    garden = createSprite (500,600)
    garden.addImage(gardenImg);


    tom = createSprite(300,500,10,10)
    tom.addImage=(tomImg,moving);
    tom.scale=0.1;

    jerry = createSprite (100,400,10,10);
    jerry.addImage = (jerryImg,"moving")
   jerry.scale = 0.1;
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if (tom.x - jerry.x < (tom.width - jerry.width)/2){
        
        tom.addImage(tomThree.png);
    }
    drawSprites();

    text (mouseX = ',' + mouseY , 10,45)
}


function keyPressed(){

  //For moving and changing animation write code here
  
     if (keyCode === LEFT_ARROW){
          tom.velocityX = -5;   
          tom.addImage("catRunning",tomOne.png);
          tom.changeAnimation("tomRunning")

     }

     if (keyCode === RIGHT_ARROW){
        tom.velocityX = 5;   
        tom.addImage("tomRunning",tomOne.png);
        tom.changeAnimation("tomRunning")

   }


}
