function setup() {
createCanvas(400, 400); 
}

function draw() {

background(250, 245, 255);
strokeWeight(4)
stroke(98, 255, 51 )

//stem
line(200,400,200,200)

drawPetal(200,200,50,255,0,255)
}

function drawPetal(s,t,d) {

  ellipse(195,200,91,91)
  noStroke()
  fill(255, 221, 51 )
  strokeWeight(3)
  
  //center circle
  ellipse(s,t,d,d)
  fill(255, 51, 208 )

  ellipse(s-50,t,d,d)
  ellipse(s+50,t,d,d)
  ellipse(s-25,t+43,d,d)
  ellipse(s+25,t+43,d,d)
  ellipse(s-25,t-43,d,d)
  ellipse(s+25,t-43,d,d)
}
