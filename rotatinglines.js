let z = 0.0; //angle
let zcolor = 0.0; //color


function setup() {
  createCanvas(400, 400);
   angleMode(DEGREES);
}

function draw() {
background(46, 64, 83); 
let step = 0.001;
for(let y=0; y<=height; y+=20){
  for(let x=0; x<=width; x+=20){
    
     strokeWeight(2);
     let noiseValue = noise(x*step, y*step, z); 
     let angle = map(noiseValue,0,1,-360,360,z  );
     push();
     translate(x,y);
     rotate(angle);
     line(-10,0,10,0);
     pop();
    
    //setting color with noise
    let r = 255* noise(zcolor +10);
    let g = 255* noise(zcolor +15);
    let b = 255* noise(zcolor +20);
    
     z = z + 0.00001;
     zcolor = zcolor + 0.00001; 
     stroke(r,g,b);
    
   }
 }
  addz();
}   //function to put the colors 0 to 255 & 255 to 0 

function addz(){
    let r = 255 * noise(zcolor +10);  //(compiler said needed to define r,g,b in function, so I put it again here) 
    let g = 255 * noise(zcolor +15);
    let b = 255 * noise(zcolor +20);
  
  if(r ==255){
    g=g+1;
  }
  else{
    r=r+1;
  }
  if(g==255){
    g=0;
    r=0; 
  }
}
  
  
