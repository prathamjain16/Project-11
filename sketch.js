var ship, ship_running;
var sea, seaImage;

function preload(){
	ship_running = loadAnimation("ship-1.png", "ship-2.png","ship-3.png", "ship-4.png");
	seaImage = loadImage("sea.png");
}

function setup(){
	createCanvas(1000,500);
	sea = createSprite(100,100,100,100);
	sea.addImage(seaImage);
	sea.velocityX = -4;

	ship = createSprite(200,250,20,50);
	ship.addAnimation("running", ship_running);
	ship.scale = 0.5;
}

function draw() {
	background("blue");

	if (sea.x < 0){
    sea.x = sea.width/2;
  }

	drawSprites();
}