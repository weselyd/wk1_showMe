/*
// 1. Closure Example

function myBank(amount) {
  return function (balance) {
    return amount + balance;
    };
}

const deposit10 = myBank(10);
const withdraw10 = myBank(-10);

console.log(deposit10(100));
console.log(withdraw10(100));
*/

// 2. Closure Example with custom amounts

function myBank(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function (amount) {
      balance += amount;
      return balance;
    },
    withdraw: function (amount) {
      balance -= amount;
      return balance;
    },
    getBalance: function () {
      return balance;
    }
  };
}

const myAccount = myBank(100);

console.log(myAccount.deposit(50));
console.log(myAccount.withdraw(30));
console.log(myAccount.getBalance());