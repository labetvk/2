
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var radius=10;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     var ball_options={
		 isStatic:false,
		 restitution:0.3,
		 friction:0,
		 density:1.2
	 }
    ball = Bodies.circle(80,100,radius,ball_options);
	World.add(world,ball);
    
	groundObj=new Ground(width/2,670,width,20);
	leftside = new Ground(1100,600,20,120);
    rightside = new Ground(1350,600,20,120);
     
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius);
  
  groundObj.display();
  leftside.display();
  rightside.display();

  drawSprites();
  groundObj.display();
}

function keyPressed()
 {
	if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,boll.body.position, {x:15,y:-15})

	}

 }

