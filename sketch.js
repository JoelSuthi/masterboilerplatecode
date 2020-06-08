	var paper,ground,trash1;
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	const Render = Matter.Render;

	function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,60,50,50);
	trash1 = new Trash(550,600,100,100);
	ground = new Ground(400,660,800,10);

	Engine.run(engine);
	}


	function draw() {
	rectMode(CENTER);

	background(0);

	drawSprites();

	keyPressed();

	paper.display();
	trash1.display();
	ground.display(); 
	keyPressed();	
	}
	function keyPressed(){
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x : 6 , y : -10});
	
	}
    }
