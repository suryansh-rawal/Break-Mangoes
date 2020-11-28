
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy1;
var Mango,Mango2,Mango3,Mango4,Mango5,Mango6,Mango7,Mango8,Mango9,Mango11,Mango12,Mango13;
var stone1;
var backImg;
var Ground;
var slingshot;



function preload()
{
	backImg=loadImage("back.jpg");
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	Mango= new mangoes(840,100,40,40);
	Mango2= new mangoes(1000,200,40,40);
	Mango3= new mangoes(940,150,40,40);
	Mango4= new mangoes(1100,300,50);
	Mango5= new mangoes(800,300,50);
	Mango6= new mangoes(760,140,50);
	Mango7= new mangoes(700,270,50);
	Mango8= new mangoes(870,200,50);
	

	
	boy1 = new Boy(0,-100,0,0);
	stone1 = new Stone(200,300,10,10);

	slingshot = new SlingShot(stone1.body,{x:200, y:230});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backImg);
 
  //Ground.display();
  boy1.display();
  
  slingshot.display();
  stone1.display();
  Mango.display();
  Mango2.display();

  Mango3.display();

  Mango4.display();
  Mango5.display();
  Mango6.display();
  Mango7.display();
  Mango8.display();

  drawSprites();

  detectcollision(stone1,Mango); 
  detectcollision(stone1,Mango2); 
  detectcollision(stone1,Mango3); 
  detectcollision(stone1,Mango4); 
  detectcollision(stone1,Mango5); 
  detectcollision(stone1,Mango6); 
  detectcollision(stone1,Mango7); 
  detectcollision(stone1,Mango8); 
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=100)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		slingshot.attach(stone1.body);
	}
	}
	