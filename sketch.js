const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, plane;
var iron1, iron2;
var stone1, stone2;
var rubber1, rubber2, rubber3;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    iron1 = new Iron(300,550,50,20)
    iron2 = new Iron(1100, 500, 30, 40)

    stone1 = new Stone(500, 540, 60, 15)
    stone2 = new Stone(100, 560, 40, 45)
  
    rubber1 = new Rubber(200, 570, 50)
    rubber2 = new Rubber(900, 475, 70)
    rubber3 = new Rubber(700, 580, 40)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    iron1.display();
    iron2.display();

    stone1.display();
    stone2.display();

    rubber1.display();
    rubber2.display();
    rubber3.display();

    
 
}