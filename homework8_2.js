function currySum(a) {
  return function (b) {
    return a * b;
  };
}
console.log(currySum(5)(2));
