class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// Example usage
const myCircle = new Circle(5);
console.log(myCircle.toString());
console.log("Area:", myCircle.calculateArea());
console.log("Circumference:", myCircle.calculateCircumference());