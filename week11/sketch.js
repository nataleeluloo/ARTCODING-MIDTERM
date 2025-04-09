let circleSize, posX, posY, offSet, numShapes, space;
//this is the array for changing colors
let myColor = ['#DE8DF2','#F2B8C2','#CCAAF2','#F096DB','#F0A297','#F2B3E4','#DE8DF2','#F2B8C2','#CCAAF2','#F096DB',];


function setup() {
  createCanvas(400, 400);
  
  numShapes = 10;
  circleSize = width-50;
  space = circleSize/numShapes;
  offSet = 10;
  
  posX = width/2; //center
  posY = height/2; //center
  
}

function draw() {
  background('#FED7DF');
  
  //loop
  for (i=0 ;i < numShapes; i++) {
    fill(myColor[i]);
    strokeWeight(3);
    stroke('white');
    circle(posX+offSet*i, posY, circleSize-space*i);
  }

  mysignature();
}

function mysignature(){
  textSize(20);
  strokeWeight(6);
  stroke('pink');
  fill('white');
  text('Natalee Park',width-150, height-30);
}


