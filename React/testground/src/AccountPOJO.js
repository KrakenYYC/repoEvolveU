class AccountPOJO {
    constructor(initialBalance, accountName, accountId) {
        this.balance = initialBalance;
        this.name = accountName;
        this.id = accountId;
    }

    deposit(dollar) {
        this.balance = this.balance + dollar;
    }

    withdraw(dollar) {
        if (typeof(dollar) === "number") {
            if (dollar <= this.balance && dollar > 0) {
                this.balance = this.balance - dollar;
            }
        } 

    }
     
    getBalance() {
        return this.balance;
    }
}

export default AccountPOJO;
