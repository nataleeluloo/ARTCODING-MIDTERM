let x, y, rad, xDir, yDir;
let r, g, b;
let angle1, angle2, angle3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
  r = 250;
  g = 200;
  b = 218;
  
  x = random(width);
  y = random(height);
  
  rad = 10;
  
  xDir = random(-1,1);
  yDir = random(-1,1);
  
  angle1 = 0;
  angle2 = 30;
  angle3 = 180;
}

function draw() {
  background(250,140,159);
  
  rad = mapSinAngle(5,15,angle1);
  
  r = mapSinAngle(20,255,angle1);
  g = mapSinAngle(100,255,angle2);
  b = mapSinAngle(100,200,angle3);
  //this number here is numShapes from below in functiondisplay
  display(r,g,b,5);
  //calling function from below
  update(2);
  bounds();
  
  //moving 
  angle1 += 3;
  angle2 += 2;
  angle3 += 4;
}

////////MY FUNCTIONS!!!//////////

//cR as in circleRed
function display(cR,cG,cB,numShapes){
  //where I draw my shape
  
  for(i = numShapes; i > 0; i--)
   {
     let offSetX = mapSinAngle(-5,5,angle2);
     let offSetY = mapSinAngle(-6,6,angle3);
     fill(cR,cB,cG);
     circle(x+offSetX*i, y+offSetY*i, rad*i);
     //doing the xi changes every time
    
    
    }
  
}

function update(speed){
  //where I set movement to my shape
  //where I update my variables
  
  x += xDir*speed;
  y += yDir*speed;
  }

function bounds(){
  //here is where I keep my shape inside the canvas
  if ((x > width)||(x <0))
    {
      xDir = -xDir;
    }
  if ((y > height)||(y <0)) 
  {
    yDir *= -1;
  }
}

function mapSinAngle(newA, newB, myAngle){
  //this is the return function where I map the Sin values to custom values, with a custom angle
  let myMap;
  
  myMap = map(sin(myAngle), -1, 1, newA, newB);
  
  return myMap;
}

