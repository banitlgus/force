class Mover {
    constructor() {
        this.position = createVector();
        this.velocity = createVector();
        this.acceleration = createVector();
        this.mass = 10;
    }

    applyForce(force) {
        let f = force.copy();

        f.div(this.mass);
        this.acceleration.add(f);
    }

    show() {
        circle(this.position.x, this.position.y, 10);
    }

}