class ZacctFunctions {
  constructor(initialBalance, acctName) {
    this.acctBalance = initialBalance;
    this.acctName = acctName;
  }

  deposit(amount) {
    this.acctBalance += amount;
  }

  withdraw(amount) {
    this.acctBalance -= amount;
  }

  balance() {
    return this.acctBalance;
  }
}

export default ZacctFunctions;
