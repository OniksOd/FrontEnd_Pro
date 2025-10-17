function lastNumber() {
  let number = 0;
  for (let i = 0; i < 10; i++) {
    number = +prompt("Enter a number more than 100");
    if (number > 100) {
      console.log("The last number you entered is " + number);
      break;
    }
  }
}
lastNumber();
