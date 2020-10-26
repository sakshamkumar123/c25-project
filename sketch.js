
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,200,30)
  ground=new Ground(400,670,800,100)
  
  d1= new bottom (600,546,150,25)
  d2= new Dustbin (540,550,25,150)
  d3= new Dustbin (660,550,25,150)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(200);
 
 
  paper.display();
  d2.display();
  d3.display();
  d1.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position, {x:120,y:-170})
    }
}


