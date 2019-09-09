function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
  background(0);
  var diameter = 500

  // Draw hour ticks
  strokeWeight(12);
  beginShape(POINTS);
  for (let a = 0; a < hour(); a += 1) {
    stroke('red')
    let angle = radians(a*15-90);

    let x = width / 2 + cos(angle) * (diameter/2 - 50);
    let y = height / 2 + sin(angle) * (diameter/2 - 50);
    vertex(x, y);
  }
  endShape();

  // Draw minute ticks
  strokeWeight(8);
  beginShape(POINTS);
  for (let b = 0; b < minute(); b += 1) {
    stroke('orange')
    let angle = radians(b*6-90);
    let x = width / 2 + cos(angle) * (diameter/2 - 100);
    let y = height / 2 + sin(angle) * (diameter/2 - 100);
    vertex(x, y);
  }
  endShape();

  // Draw second ticks
  strokeWeight(3);
  beginShape(POINTS);
  for (let c = 0; c < second(); c += 1) {
    stroke('yellow')
    let angle = radians(c*6+90);
    let x = width / 2 + cos(angle) * (diameter/2 - 300);
    let y = height / 2 + sin(angle) * (diameter/2 - 300);
    vertex(x, y);
  }
  endShape();
}
