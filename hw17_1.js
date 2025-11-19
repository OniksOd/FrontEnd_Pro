class Calculator {
  add(a, b) {
    a + b;
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (a === 0 || b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
}
const calc = new Calculator();
console.log(calc.add(5, 3));
console.log(calc.subtract(10, 4));
console.log(calc.multiply(3, 6));
console.log(calc.divide(8, 0));
