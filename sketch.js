
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900,400 );


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1 = new paper(200,200,20,20);
dustbin1 = new dustbin(700,350,200,20);
dustbin2 = new dustbin(810,320,20,100);
dustbin3 = new dustbin(610,320,20,100);
ground1 = new Ground(450,370,900,20);
ground1.shapeColor= "white";

  Engine.run(engine);
  
  
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();

  
    console.log(paper1)

    if (keyCode === UP_ARROW) {
    
      Matter.Body.applyForce(paper1.body,paper1.body.position,{x:2,y:-3});
    
    }
    

    drawSprites();
  }

function keypressed(){
  
  

}

