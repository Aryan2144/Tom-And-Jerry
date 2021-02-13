var garden, gardenImg;

var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3;

function preload() 
{
    gardenImg = loadImage("images/garden.png");

    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");

    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup()
{
    createCanvas(1000,800);

    garden = createSprite(500, 400);
    garden.addImage("garden", gardenImg);
    garden.scale = 1.15;

    cat = createSprite(900, 700);
    cat.addAnimation("cat1", catImg1);
    cat.scale = 0.15;

    mouse = createSprite(75, 700);
    mouse.addAnimation("mouse1", mouseImg1);
    mouse.scale = 0.15;

}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    if(keyDown(LEFT_ARROW))
    {
        cat.velocityX = -3;

        cat.addAnimation("cat2", catImg2);
        cat.changeAnimation("cat2");

        mouse.addAnimation("mouse2", mouseImg2);
        mouse.changeAnimation("mouse2");
    }

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        cat.velocityX = 0;

        cat.addAnimation("catLastImage", catImg3);
        cat.changeAnimation("catLastImage");

        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.changeAnimation("mouseLastImage");
    }

    drawSprites();

    fill("black");
    textSize(20);
    text(mouseX + "," + mouseY, 10, 45)
}

