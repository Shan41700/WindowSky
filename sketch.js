//Image Variables
var backSkyA;
var backSkyB;
var cloud1;
var cloud2;
var cloud3;

var c1x = 500; //Cloud1 x pos
var c2x = 500;// Cloud2 x pos
var c3x = 500;// Cloud3 x pos

//Night Button Variables
var Nx =10; //Top left x pos of box
var Ny =470; //Bottom left y pos of box
var Nw =20; //Width of box
var Nh =20; //Height of box
var Nx2 = Nx+Nw; //Top right x pos of box
var Ny2 = Ny+Nh; //Bottom right pos of box

//Day Button Variables
var Dx =50; //Top left x pos of box
var Dy =470; //Bottom left y pos of box
var Dw =20; //Width of box
var Dh =20; //Height of box
var Dx2 = Dx+Dw; //Top right x pos of box
var Dy2 = Dy+Dh; //Bottom right pos of box

var theTime;

var currentBG = 1;


function preload(){
    backSkyA = loadImage("images/back1a.png");
    backSkyB = loadImage("images/back2a.png");
    cloud1 = loadImage("images/cloud1.png");
    cloud2 = loadImage("images/cloud2.png");
    cloud3 = loadImage("images/cloud3.png");
}

function setup() {
    createCanvas(500,500);
}

function draw() {

    if (currentBG == 1)
    {
        background(backSkyA,500,500);
    }
    else
    {
        background(backSkyB,500,100);
    }
    
    theTime = millis()%42000;
    
    clouds();
    drawWindow();
    
    bttn();
}

function mousePressed(){
  if(mouseX>Nx && mouseX<Nx2 && mouseY>Ny && mouseY <Ny2){ 
  //If the mouse is to the right of Nx, to the left of Nx2, below Ny, and above Ny2
      
    currentBG = 1;
  }
  
  else if (mouseX>Dx && mouseX<Dx2 && mouseY>Dy && mouseY<Dy2){
      
    currentBG = 2;
  }
}