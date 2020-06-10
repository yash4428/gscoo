var car,wall,car2,wall2;
var speed,weight;




function setup() {
  createCanvas(1600,400);
 // createSprite(400, 200, 50, 50);

speed= random(55,90)
weight= random(400,1500)

car=createSprite(50,200,50,50)
wall=createSprite(width-300,200,60,height/2)
car2=createSprite(50,100,50,50)
wall2=createSprite(width-300,100,60,height/2)



car.velocityX= speed
car2.velocityX=speed



}





function draw() {
  background(255,255,255);  


if(wall.x-car.x<(car.width+wall.width)/2){

car.velocityX=0;
var deformation = 0.5* weight* speed*speed/22509;
if(deformation>180){
car.shapeColor=color(0,51,102);
}
if(deformation<180 && deformation>180){
  car.shapeColor=color(230,230,0);
}
if(deformation<100){
  car.shapeColor=color(0,255,0);
}

}
if(wall2.x-car2.x<(car2.width+wall2.width)/2){

  car2.velocityX=0;
  var deformation = 0.5* weight* speed*speed/22509;
  if(deformation>180){
  car2.shapeColor=color(128,255,0);
  }
  if(deformation<180 && deformation>180){
    car2.shapeColor=color(0,128,255);
  }
  if(deformation<100){
    car2.shapeColor=color(255,0,127);
  }
  
  }











  drawSprites();
}