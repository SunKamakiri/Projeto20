
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400,400);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var plane_options ={
		isStatic: true
	}

	var block1_options ={
		restitution: 0.90,
		friction: 0.6
	}

	var block2_options ={
		restitution: 1.0,
		friction: 0.1
	}

	var block3_options ={
		restitution: 0.95,
		friction: 0.5,
		frictionAir: 0.1
	}


	plane = Bodies.rectangle(200,390,400,50,plane_options);
	World.add(world,plane);
	block1 = Bodies.rectangle(50,100,50,50,block1_options);
	World.add(world,block1);
	block2 = Bodies.circle(200,100,40,block2_options);
	World.add(world,block2);
	block3 = Bodies.rectangle(325,100,80,50,block3_options);
	World.add(world,block3);

	Engine.run(engine);
  	Engine.update(engine);

}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("grey");
  
  fill("darkblue")
  rect(plane.position.x,plane.position.y,400,50);
  fill("purple")
  rect(block1.position.x,block1.position.y,50,50);
  fill("pink")
  ellipse(block2.position.x,block2.position.y,40,);
  fill("lightblue")
  rect(block3.position.x,block3.position.y,90,50);

  drawSprites();
 
}



