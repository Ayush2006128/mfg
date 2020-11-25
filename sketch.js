
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var peper,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
box1=createSprite(700,680,90,20)
box2=createSprite(650,645,20,90)
box3=createSprite(750,645,20,90)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	peper=new ball(150,680,35);
ground=new Ground(0,700,1900,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  peper.display();
  ground.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(peper.body,peper.body.position,{x:45,y:-45});
	}
}


