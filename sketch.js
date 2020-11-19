const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  var option={
    isStatic:true
  }

  object1=Bodies.rectangle(200,100,50,50,option)
  World.add(world,object1);
  
  console.log(object1);
}

function draw() {
  background("black");  

  Engine.update(engine);

  rect(object1.position.x,object1.position.y,50,50)


  
}