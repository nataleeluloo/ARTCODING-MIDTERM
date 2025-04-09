let x, y, radius;
let xDir, yDir, speed;
let numNotes;

function setup() {
  createCanvas(400, 400);
  
  //position start for head is random
  x = random(width);
  y = random(height);
    
  //bunny head: size of circle
  radius = 50;
  
  //bunny direction
  xDir = random(-2,2);
  yDir = random(-2,2);
  
  //bunny speed
  speed = 1.5;
  
  //number of music notes for the loop
  numNotes = 5;
}


function draw() {
  background(255,199,202);
 
  // can change number of notes
  for (let i = 0; i < numNotes; i++) {
    let xPos = 50+i*70;
    let yPos = 200; 
    //MUSIC NOTE DRAWING
    strokeWeight(4);
    ellipse(xPos,yPos,15,10);
    line(xPos+7.5,yPos,xPos+7.5,yPos-30);
    line(xPos+7.5,yPos-30, xPos+15,yPos-22);
  }
  
  //DRAWING THE BUNNY
  noStroke();
  fill(255,255,255);
  ellipse(x-15,y-20,20,65); //left ear
  ellipse(x+15,y-20,20,65); //right ear
  circle(x,y,radius); //bunny head
  
  fill(107,43,0);
  stroke(107,43,0);
  strokeWeight(1.5)
  circle(x-15,y+2,7); //left eye
  circle(x+15,y+2,7); //right eye
  circle(x,y+7,9); //nose
  line(x-5,y+15,x,y+10) //left mouth
  line(x+5,y+15,x,y+10) //right mouth
  
  //CALLING THE FUNCTIONS
  updateBunny(speed); //move the bunny
  
  //keeping bunny in the canvas
  if (x - radius / 2 < 0 || x + radius / 2 > width) {
    xDir *= -1; }
  if (y - radius / 2 < 0 || y + radius / 2 > height) {
    yDir *= -1; }

}

/// MY FUNCTIONS !!! //

// move the bunny
function updateBunny(speed) {
  x += xDir * speed;
  y += yDir * speed;
}
