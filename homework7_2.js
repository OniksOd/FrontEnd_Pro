const arr = [2, true, "Hello", 15, false, 10, null];
function averageOfNumbers(arr) {
  const numbers = arr.filter((item) => typeof item === "number");
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
console.log(averageOfNumbers(arr));

// let sum = numbers.reduce((acc, curr) => acc + curr, 0);
// let average = sum / numbers.length;
// console.log(average);
