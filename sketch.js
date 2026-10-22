function setup() {
  createCanvas(800, 740);
  background(245)

fill(205,40,4)
  quad(0, 0, 365, 0, 365, 278, 0, 278)

  fill(250,200,3)
  quad(0, 740, 77, 740, 77, 470, 0, 470)

  fill(10,35,92)
  quad(365, 705, 613, 705, 613, 470, 365, 470)

  strokeWeight(10);
  line(365, 0, 365, height);

  line(0, 278, width, 278);
  line(0, 470, width, 470);

  line(77, 470, 77, height);
  line(613, 470, 613, height);

  line(365, 705, 613, 705);

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
 
}

