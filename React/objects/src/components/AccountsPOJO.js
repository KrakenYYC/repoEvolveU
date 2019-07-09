import AccountPOJO from "./AccountPOJO";

class AccountsPOJO {
  constructor() {
    this.accList = [];
    // this.counter = 1;
  }

  onOpen(name, amount) {
    //let id = this.counter;
    const newAccount = new AccountPOJO(name, amount); //id was added
    this.accList.push(newAccount);
  }

  onClose(index) {
    console.log("inthepojo", index);
    this.accList.splice(index, 1);
  }
  // .
  // .
  // .
  // .
  // .
  onDeposit(index, amount) {
    console.log("im here in accountspojo");
    this.accList[index].onDeposit(amount);
  }

  onWithdraw(index, amount) {
    this.accList[index].onWithdraw(amount);
  }

  onRename(index, name) {
    //switch
    console.log("pojo on accounts", name, this.account);
    this.accList[index].onRename(name);
  }
  // onRename(name) {
  //   this.accName = name;
  // }

  // .
  // .
  // .
  // .
  // .

  showBalance(index) {
    return this.accList[index].showBalance();
  }

  showName(index) {
    return this.accList[index].showName();
  }

  showId(index) {
    return this.accList[index];
  }

  findMin() {
    //find account with minimum balance
    //return console.log("imfindmin");
    //search array to find the minimum

    let myMinimum = null;
    if (this.accList.length > 0) {
      myMinimum = this.showBalance(0);
      for (let index = 1; index < this.accList.length; index++) {
        if (this.showBalance(index) < myMinimum) {
          myMinimum = this.showBalance(index);
        }
      }
    }
    return myMinimum;
  }

  findMax() {
    let myMaximum = null;
    if (this.accList.length > 0) {
      myMaximum = this.showBalance(0);
      for (let index = 1; index < this.accList.length; index++) {
        if (this.showBalance(index) > myMaximum) {
          myMaximum = this.showBalance(index);
        }
      }
    }
    return myMaximum;
  }

  findTotal() {
    let myTotal = null;
    if (this.accList.length > 0) {
      myTotal = this.showBalance(0);
      for (let index = 1; index < this.accList.length; index++) {
        myTotal = myTotal + this.showBalance(index);
      }
    }
    return myTotal;
  }
}
export default AccountsPOJO;
