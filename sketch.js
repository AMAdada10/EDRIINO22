var astronaut=(300,230);



var bath,bath2
var eat1,eat2
var drink1 ,drink2
var gym1,gym2
var brush
var sleep

function setup() {
  createCanvas(400, 400);}
  brush=loadAnimation("images/brush.png");
  gym=loadAnimation("images/gym1.png","images/gym2");
  eat=loadAnimation("images/eat1.png","images/eat2.png");
  bath=loadAnimation("images/bath1.png","images/bath2.png");
  move=loadAnimation("images/move.png","Images/move1.png");
  
  astronaut.addAnimation("bathing",bath)
  astronaut.addAnimation("moving", move)
  astronaut.addAnimation("eating ",eat)
  astronaut.addAnimation("drinking ",drink)
  astronaut.addAnimation("brushing ",brush)
  
  
  
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale=0.1;
  
  







function preload(){





















}












function draw() {
  background(220);
background=loadImages("images/iss.png")

if(keyDown("UP_ARROW")){
astronaut.addAnimation("brushing",brush);
astronaut.changeAnimation("brushing")
astronaut.y=350;
astronaut.velocityX=0;
astronaut.velocityY=0;
}
loadAnimation()
}