
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}
var bog1,bog2,bog3,bog4,bog5,roof,chain1,chain2,chain3,chain4,chain5;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	bog1 = new Bog(50,400,30)
	bog2 = new Bog(100,400,30)
	bog3 = new Bog(150,400,30)
	bog4 = new Bog(200,400,30)
	bog5 = new Bog(250,400,30)
	roof = new Ground(600,200,300,20);
	chain1 = new chain(bog1.body,roof.body,200,0)
	chain2 = new chain(bog2.body,roof.body,250,0)
	chain3 = new chain(bog3.body,roof.body,300,0)
	chain4 = new chain(bog4.body,roof.body,350,0)
	chain5 = new chain(bog5.body,roof.body,400,0)
	
   

	Engine.run(engine);
  
}


function draw() {
	background(255);
 
  bog1.display();
  bog2.display();
  bog3.display();
  bog4.display();
  bog5.display();

chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();

  roof.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Body.applyForce(bog1.body,bog1.body.position,{x:60,y:0})
	  
	 }
   }

