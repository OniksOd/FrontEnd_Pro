let phrase = prompt("Enter your phrase");
let arr = [];
while (true) {
  let letter = prompt("Enter a letter");
  if (!letter) break;
  arr.push(letter);
}
function deleteLetters(phrase, arr) {
  return phrase
    .split("")
    .filter((letter) => !arr.includes(letter))
    .join("");
}
let newPhrase = deleteLetters(phrase, arr);
console.log(newPhrase);
