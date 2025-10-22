let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: {
      fe: [{ name: "Jack", salary: 1300 }],
      be: [{ name: "Jill", salary: 1300 }],
    },
  },
  manegment: [{ name: "Helen", salary: 3000 }],
};
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].salary;
  }
  return sum;
}
function calculateSalaries(company) {
  let totalSalary = 0;
  for (let value of Object.values(company)) {
    if (Array.isArray(value)) {
      totalSalary += calculateSum(value);
    } else if (typeof value === "object") {
      totalSalary += calculateSalaries(value);
    }
  }

  return totalSalary;
}

console.log(calculateSalaries(company));
