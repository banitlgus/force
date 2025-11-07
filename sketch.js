  // let moverA, moverB;
  let movers = [];

function setup() {
  createCanvas(800, 400);
  // moverA = new Mover(200, 30, 5);
  // moverB = new Mover(600, 30, 2);
}

function draw() {
  background(220);

  for (let m of movers) {

    let gravity = createVector(0, 0.1);
    m.applyForce(gravity);

    m.checkEdges()
    m.update()
    m.show();
  }
  

  // let gravity = createVector(0, 0.1);
  // moverA.applyForce(gravity);
  // moverB.applyForce(gravity);

  // if (mouseIsPressed) {
  //   let wind = createVector(0.1, 0);
  //   moverA.applyForce(wind);
  //   moverB.applyForce(wind);
  // }

  // moverA.checkEdges();
  // moverA.update();
  // moverA.show();

  // moverB.checkEdges();
  // moverB.update();
  // moverB.show();
}

function keyPressed() {
  if (key === '0'){
    let m = new Mover();
    movers.push(m);
  }
}