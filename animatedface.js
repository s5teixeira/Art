function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(127, 179, 213);
  
  //the face//
 strokeWeight(3);
  fill(253, 235, 208 ); //skin color 
  ellipse(200,200,235,250);
  
  //hair
strokeWeight(3);
  fill(110, 44, 0); //brown hair 
  ellipse(195,100, 175,65);
  line(201,81,200,41);
  
  //flagg//
  fill(231, 76, 60  ); //red 
  strokeWeight(2);
  triangle(200,40,201,61,241,51);
  
//glasses moving//
strokeWeight(4);
noFill();
rect(mouseX,mouseY,80,60,20);
line(mouseX+40, mouseY, mouseX+60,mouseY);
rect(mouseX+100, mouseY ,80, 60,20);
  
//left eye//
strokeWeight(2);
fill(253, 254, 254); //white
 ellipse(160, 185, 40, 20); //outer eye
fill(0);
ellipse( 160,185,5); //inner eye

//right eye//
fill(253, 254, 254); //white 
ellipse(250, 185, 40, 20); //outer eye
fill(0); //black
ellipse(250,185,5);  //inner eye 

 //left eyebrow//
 strokeWeight(5);
 line(121,161,181,162);
//right eyebrow
 strokeWeight(5);
 line(226, 160, 281, 161);
  
 //nose
 strokeWeight(3);
 fill(0); //black 
 triangle(181,240,221,240,201,220 );
 
 //smile
 strokeWeight(4);
 curve(161,279,181,293,212,296,240,281);
 }
