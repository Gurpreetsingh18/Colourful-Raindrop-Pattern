const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var player;  
var raindrop1 ;
var player2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    player = new Player(200,30,20,20);
    raindrop1 = new Raindrop(40,20,10,10);
    raindrop2 = new Raindrop(50,50,10,10);
    raindrop3 = new Raindrop(60,80,10,10);
    raindrop4 = new Raindrop(70,110,10,10);
    raindrop5 = new Raindrop(90,140,10,10);
    raindrop6 = new Raindrop(70,170,10,10);
    raindrop7 = new Raindrop(60,200,10,10);
    raindrop8 = new Raindrop(50,230,10,10);
    raindrop9 = new Raindrop(40,260,10,10);
    raindrop10 = new Raindrop(20,290,10,10);
    raindrop11 = new Raindrop(100,320,10,10);
    raindrop12 = new Raindrop(120,350,10,10);
    raindrop13 = new Raindrop(140,30,10,10);
    raindrop14 = new Raindrop(170,60,10,10);
    raindrop15 = new Raindrop(190,90,10,10);
    raindrop16 = new Raindrop(210,120,10,10);
    raindrop17 = new Raindrop(230,150,10,10);
    raindrop18 = new Raindrop(210,180,10,10);
    raindrop19 = new Raindrop(190,210,10,10);
    raindrop20 = new Raindrop(170,240,10,10);
    raindrop21 = new Raindrop(140,270,10,10);
    raindrop22 = new Raindrop(120,300,10,10);
    raindrop23 = new Raindrop(100,330,10,10);
    raindrop24 = new Raindrop(300,360,10,10);
    raindrop25 = new Raindrop(320,360,10,10);
    raindrop26 = new Raindrop(340,360,10,10);
    raindrop27 = new Raindrop(360,360,10,10);
    raindrop28 = new Raindrop(380,360,10,10);
    raindrop29 = new Raindrop(360,360,10,10);
    raindrop30 = new Raindrop(340,360,10,10);
    raindrop31 = new Raindrop(320,360,10,10);
    raindrop32 = new Raindrop(310,360,10,10);
    raindrop33 = new Raindrop(200,360,10,10);
    raindrop34 = new Raindrop(210,360,10,10);
    raindrop35 = new Raindrop(210,360,10,10);
    raindrop36 = new Raindrop(210,360,10,10);

    player2 = new Raindrop(100,20,10,10);

}

function draw(){
    background("black");
    player.display(); 
    raindrop1.display();
    raindrop2.display();
    raindrop3.display();
    raindrop4.display();
    raindrop5.display();
    raindrop6.display();
    raindrop7.display();
    raindrop8.display();
    raindrop9.display();
    raindrop10.display();
    raindrop11.display();
    raindrop12.display();
    raindrop13.display();
    raindrop14.display();
    raindrop15.display();
    raindrop16.display();
    raindrop17.display();
    raindrop18.display();
    raindrop19.display();
    raindrop20.display();
    raindrop22.display();
    raindrop23.display();
    raindrop24.display();
    raindrop25.display();
    raindrop26.display();
    raindrop27.display();
    raindrop28.display();
    raindrop29.display();
    raindrop30.display();
    raindrop31.display();
    raindrop32.display();
    raindrop33.display();
    raindrop34.display();
    raindrop35.display();
    raindrop36.display();
    player2.display();
    text("Take the ball to y = 20,to change to red ",10,200);
    textSize(15);
    text("Take the ball to x = 200,to change to green",60,250);
}
