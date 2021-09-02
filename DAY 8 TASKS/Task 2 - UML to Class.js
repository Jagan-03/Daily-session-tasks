class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return this.radius;
  }
  getColor() {
    return this.color;
  }
  setRadius(value) {
    this.radius = value;
  }
  setColor(value) {
    this.color = value;
  }
  get area() {
    return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
  }
  get circumference() {
    return (2 * Math.PI * this.radius).toFixed(2);
  }
  toString() {
    return `Circle[radius = ${this.radius}, color = ${this.color}]`;
  }
}

let circle1 = new Circle(5, "red");

console.log(circle1.getRadius()); // Prints the radius of the circle => 5
circle1.setRadius(10); // Sets the Value of the radius to 10
console.log(circle1.getColor()); // Prints the color of the circle => red
circle1.setColor("blue"); // Sets the color of the circle to blue
console.log(circle1.area); // Prints the area of the circle => 314.16
console.log(circle1.circumference); // Prints the circumference of the circle => 62.83
console.log(circle1.toString()); // Converts the details to string => Circle[radius = 10, color = blue]
