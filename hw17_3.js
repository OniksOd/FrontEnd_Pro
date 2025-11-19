class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return console.log("Insufficient funds");
    }
    this.balance -= amount;
  }
  getBalance() {
    return this.balance;
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(111100);

console.log(account1.getBalance());
