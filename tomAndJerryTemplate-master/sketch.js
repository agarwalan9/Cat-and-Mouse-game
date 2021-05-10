//var garden,gardenImg;
var cat,catImg;
var mouse,mouseImg;
var catImg2;
var mouseImg2;

function preload() {
    //load the images here
    //gardenImg = loadImage("garden.png");
    catImg = loadAnimation("images/cat1.png");
    mouseImg = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");

}

function setup(){
    createCanvas(1000,800);

    //garden = createSprite(1000,800);
   //garden.addImage(gardenImg);

    cat = createSprite(200,200,20,20);
    cat.addImage(catImg,catImg2);

    mouse = createSprite(500,500);
    mouse.addImage(mouseImg,mouseImg2);
    //create tom and jerry sprites here


}

function draw() {

    background("white");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
