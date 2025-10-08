const num = prompt("Enter a number");
for (i = 2; i < num; i++) {
  if (num % i === 0) {
    console.log("Not a prime number");
    break;
  }
  if (i === num - 1) {
    console.log("Is a prime number");
  }
}
