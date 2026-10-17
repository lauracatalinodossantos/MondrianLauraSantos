function setup() {
  createCanvas(800, 784);
  background(255, 45, 500);
}

function draw() {
  circle(mouseX, mouseY, 60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
