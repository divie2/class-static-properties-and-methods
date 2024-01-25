class MathOperations {
  // property
  static pi = 3.14159;

  //  method
  static square(num) {
    return num * num;
  }


  static cube(num) {
    return num * num * num;
  }
}

// Access class property
console.log(MathOperations.pi);

// Access class methods
const squaredValue = MathOperations.square(5);
console.log(squaredValue);

const cubedValue = MathOperations.cube(3);
console.log(cubedValue);