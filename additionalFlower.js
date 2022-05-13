function setup() {
  createCanvas(400, 400);
}

function draw() {
background(223, 255, 249 );
  
//center circle //
stroke(255);
fill(249, 145, 246);
ellipse(175,175,20,20);
  
//stem //
strokeWeight(2);
stroke(129, 254, 149);
line(180,275,180,400);

translate(175, 175); 
DrawPetal();
}

function DrawPetal(a,b,c,d,n) {
if (n > 12) {
DrawPetal(a,b,c,d);
rotate(radians(45));
}
else {
stroke(255);
fill(255, 244, 25);
ellipse(a,b,c,d);   
rotate(radians(30));
DrawPetal(55, 0, 100, 25);    
  }    
}