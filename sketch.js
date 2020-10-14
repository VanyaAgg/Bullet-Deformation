var car1,car2,car3;
var wall1,wall2,wall3;

function setup() {
  createCanvas(1200,800);
  bullet=createSprite(200, 400, 60, 30);
  bullet.shapeColor="white";

  wall1=createSprite(900,400,40,70);
  wall1.shapeColor="white";

  speed = random(50,90);
  weight = random(30,52);
  thickness = random(22,83);

  bullet.velocityX = speed;
  
}

function draw() {
  background(0,0,0); 

  var deformation = 0.5 * weight * speed * speed / (thickness * thickness * thickness)
 
  if(hasCollided(bullet,wall1)){
    bullet.velocityX = 0;
    if(deformation > 10){
      bullet.shapeColor = "red";
    }else if(deformation<10){
      bullet.shapeColor = "green";
    }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true;
	}
	return false;
}