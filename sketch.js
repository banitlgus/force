let movers = [];

function setup() {
  createCanvas(800, 400);
  noStroke();
}

function draw() {
  background(255);

  for (let m of movers) {

    let gravity = createVector(0, 0.1);
    m.applyForce(gravity);

    m.checkEdges()
    m.update()
    m.show();
  }

  // if (mouseIsPressed) {
  //   let wind = createVector(0.1, 0);
  //   moverA.applyForce(wind);
  //   moverB.applyForce(wind);
  // }

}

function keyPressed() {
  if (key === '0'){
    let m = new Mover();
    movers.push(m);
  }
}