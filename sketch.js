
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world

var ball;
var ground;
var ls,rs;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var option={
		isStatic:false,
		restitution:0.5,
		friction:0.1,
		density:1
	}

	var goption={
		isStatic:true
	}

	ball=Bodies.circle(200,50,20,option)
	World.add(world,ball)
	ground=Bodies.rectangle(400,600,800,10,goption)
	World.add(world,ground)

	ls=new Sides(550,550,10,100)
	rs=new Sides(700,550,10,100)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //Engine.update(engine);

  if(keyDown("RIGHT_ARROW")){
	Body.applyForce(ball, {x:0,y:0},{x:5,y:-5})
}
	ellipseMode(RADIUS)
	ellipse(ball.position.x,ball.position.y,20,20)
	rect(ground.position.x,ground.position.y,800,10)
	drawSprites();
	ls.display()
	rs.display()
	
}



