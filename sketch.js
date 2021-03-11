var canvas;
var sur1,sur2,sur3,sur4,ball;
var music;
var edges

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
sur1=createSprite(100,500,100,33);
sur2=createSprite(300,500,100,33);
sur3=createSprite(500,500,100,33);
sur4=createSprite(700,500,100,33);
ball=createSprite(100,350,50,50);
ball.shapeColor="white";
sur1.shapeColor="green";
sur2.shapeColor="yellow";
sur3.shapeColor="red";
sur4.shapeColor="blue";
ball.velocityX=5;
ball.velocityY=10;
edges=createEdgeSprites()

    //create box sprite and give velocity

}

function draw() {
    background("black");
    //create edgeSprite
ball.bounceOff(edges);
if(ball.isTouching(sur1)){
    ball.shapeColor="green";
}
if(ball.isTouching(sur2)){
    ball.shapeColor="yellow";
}
if(ball.isTouching(sur3)){
    ball.shapeColor="red";
}
if(ball.isTouching(sur4)){
    ball.shapeColor="blue";
}
music.play();
drawSprites();
    //add condition to check if box touching surface and make it box
}
