const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var engine,world,bg;

function preload(){
  bg=loadImage("images/GamingBackground.png");
}

function setup(){

createCanvas(1200,700);
  engine=Engine.create();
  world=engine.world;

  ground=new GROUND(450,590,900,10);
  block1=new BOX(700,200,50,50);
  block2=new BOX(700,200,50,50);
  block3=new BOX(700,200,50,50);
  block4=new BOX(700,200,50,50);
  block5=new BOX(700,200,50,50);
  block6=new BOX(700,200,50,50);
  block7=new BOX(600,200,50,50);
  block8=new BOX(600,200,50,50);
  block9=new BOX(600,200,50,50);
  block10=new BOX(600,200,50,50);
  block11=new BOX(500,200,50,50);
  block12=new BOX(500,200,50,50);
  block13=new BOX(500,200,50,50);
  block14=new BOX(500,200,50,50);
  block15=new BOX(500,200,50,50);
  block16=new BOX(500,200,50,50);
  block17=new BOX(400,200,50,50);
  block18=new BOX(400,200,50,50);
  block19=new BOX(400,200,50,50);
  block20=new BOX(400,200,50,50);
  superhero=new HERO(200,200,200,80);
  enemi=new ENEMY(850,500,200,200);
  sling=new SLING(superhero.body,{x:200,y:300});
}

function draw(){
  Engine.update(engine);

  background(bg);

  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  superhero.show();
  sling.display();
  enemi.show();
  
}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
  sling.fly();
}


