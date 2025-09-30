//HW 3.1
const value = 14;
console.log(typeof value);

const value2 = "14";
console.log(typeof value2);

const value3 = true;
console.log(typeof value3);

const value4 = null;
console.log(typeof value4);

const value5 = undefined;
console.log(typeof value5);

const value6 = Symbol("id");
console.log(typeof value6);

const value7 = BigInt(1234567890123456789012345678901234567890n);
console.log(typeof value7);

//HW 3.2
const name = prompt("Please, enter your name");
const surname = prompt("Please, enter your surname");
const city = prompt("Please, enter your city");
console.log(`Hello ${name} ${surname} from ${city}, we are glad to see you.`);

//HW 3.3
const num = "10369".split("");
console.log(num);
