class BankAccount {
  #balance = 0;
  static #totalNumberOfAccounts = 0;
  constructor(accountNumber, ownerName) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    BankAccount.#totalNumberOfAccounts++;
  }

  deposit(amount) {
    // this.balance += amount; *** Balance is private
    this.#balance += amount // fix
    console.log(`Deposited $${amount}. New balance: $${this.#balance}`); // fixed private fields
    return this.#balance; // fixed private fields
  }

  withdraw(amount) {
    if (amount > this.#balance) { // fixed private fields no # next to balance again
      console.log(`Withdrawal failed. Insufficient funds.`);
    } else {
      this.#balance -= amount; // fixed private fields 
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    }
    return this.#balance; // fixed private fields
  }

  getBalance() {
    // return #balance;
    return this.#balance
  }

  static getTotalNumberOfAccounts() {
    return BankAccount.#totalNumberOfAccounts;
  }
}

class Bank {
  accounts = [];
  constructor(name) {
    this.name = name;
  }

  addAccount(account) {
    // accounts.push(account);
    this.accounts.push(account);
  }

  getTotalBalance() {
    let total = 0;
    this.accounts.forEach((account) => {
      // total += account.balance;
      total += account.getBalance();
    });
    return total;
  }

  findAccount(accountNumber) {
    // return accounts.find((account) => account.accountNumber = accountNumber);
    return this.accounts.find((account) => account.accountNumber === accountNumber)
  }
}

// TEST YOUR CODE HERE


// DO NOT REMOVE
module.exports = { BankAccount, Bank };
