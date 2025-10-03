const numbers = prompt("Please, enter 3 number");
const firstNum = numbers[0];
const secondNum = numbers[1];
const thirdNum = numbers[2];

if (numbers.length > 3) {
  console.log("You entered more than 3 numbers");
} else if (firstNum === secondNum && secondNum === thirdNum) {
  console.log("All numbers are the same");
} else if (
  firstNum === secondNum ||
  secondNum === thirdNum ||
  firstNum === thirdNum
) {
  console.log("Two numbers are equal");
} else {
  console.log("All numbers are different");
}
