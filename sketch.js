function setup() {
  createCanvas(400, 400);
  let moverA = new Mover();
  let moverB = new Mover();
}

function draw() {
  background(220);

  let wind = createVector(1,0);

  moverA.applyForce(wind);
  moverB.applyForce(wind);
}
