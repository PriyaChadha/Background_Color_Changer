var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  
  btn_red = createButton("Misty Rose");
  btn_red.position(100,50);
  btn_red.mousePressed(rose_bg);

  btn_green = createButton("Brown Rose")
  btn_green.position(250,50);
  btn_green.mousePressed(brown_bg)
}

function draw() {
  background(r,g,b);
}  
function rose_bg()
{
    r = 255;
    g = 228; 
    b =225;
}

function brown_bg() 
{
  r = 188;
  g = 143;
  b = 143;
}




