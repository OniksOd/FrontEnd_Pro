const counter = () => {
  let count = 0;
  return (numb) => {
    count += numb;
    return count;
  };
};

const sum = counter();

console.log(sum(4));

console.log(sum(6));

console.log(sum(10));
console.log(sum(7));
