const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box;
var ground;

function setup() {
    var canvas = createCanvas(1000, 600);
    engine = Engine.create();
    world = engine.world;

    var box_options = {
        isStatic: false,
        restitution: 2
    }

    var ground_options = {
        isStatic: true

    }

    box = Bodies.rectangle(200, 390, 50, 50, box_options);
    ground = Bodies.rectangle(500, 590, width, 10, ground_options);
    World.add(world, ground);
    World.add(world, box);

    console.log(ground);
}

function draw() {
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(box.position.x, box.position.y, 50, 50);

    rect(ground.position.x, ground.position.y, width, 10)
}