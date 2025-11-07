class Mover {
    constructor() {
        this.mass = random(1,10);

        this.position = createVector(random(0,width), random(0, height/2));
        this.velocity = createVector();
        this.acceleration = createVector();

    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    show() {
        fill(175);

        circle(this.position.x, this.position.y, this.mass*16);
    }

    checkEdges() {
        if (this.position.x + this.mass*8 > width) {
            this.position.x = width - this.mass*8;
            this.velocity.x *= -1;
        } else if (this.position.x - this.mass*8 < 0) {
            this.velocity.x *= -1;
            this.position.x = 0 + this.mass*8;
        }

        if (this.position.y + this.mass*8 > height) {
            this.velocity.y *= -1;
            this.position.y = height - this.mass*8;
        }
    }

}