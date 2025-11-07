  let moverA, moverB;

function setup() {
  createCanvas(800, 400);
  moverA = new Mover(200, 30, 10);
  moverB = new Mover(600, 30, 2);
}

function draw() {
  background(220);

  let gravity = createVector(0, 0.1);
  moverA.applyForce(gravity);
  moverB.applyForce(gravity);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    moverA.applyForce(wind);
    moverB.applyForce(wind);
  }

  moverA.checkEdges();
  moverA.update();
  moverA.show();

  moverB.checkEdges();
  moverB.update();
  moverB.show();
}
