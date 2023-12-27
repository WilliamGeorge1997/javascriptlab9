class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    let perimeter = this.sides * this.sideLength;
    console.log(`Perimeter of ${this.name}: ${perimeter}`);
  }
}

let square = new Shape("square", 4, 5);
square.calcPerimeter();

let triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();
class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  calcArea() {
    let area = this.sideLength ** 2;
    console.log(`Area of square: ${area}`);
  }
}

let squareInstance = new Square(5);
squareInstance.calcPerimeter();
squareInstance.calcArea();
class Triple {
  static customName = "Tripler";
  static description = "I triple any number you provide";

  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static description = "Square the triple of any number you provide";
  static longDescription;

  static calculate(n) {
    let tripleResult = super.calculate(n);
    return tripleResult * tripleResult;
  }
}

// Example test
console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18

console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); // 'Tripler'
