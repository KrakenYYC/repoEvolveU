import AccountPOJO from "./AccountPOJO";

class AccountsPOJO {
  constructor() {
    this.accList = [];
    this.counter = 1;
  }

  onOpen(name, amount) {
    let id = this.counter;
    const newAccount = new AccountPOJO(name, amount, id); //id was added
    this.accList.push(newAccount);
    this.counter++;
  }

  onClose(id) {
    const removeArray = this.accList.filter(item => item.id !== Number(id));
    this.accList = removeArray;
    // this.accList.splice(id, 1);
  }

  //these items were not on this file but the Accountfile only
  onDeposit(id, amount) {
    this.accList[id].onDeposit(amount);
  }

  onWithdraw(id, amount) {
    this.accList[id].onWithdraw(amount);
  }

  onRename(id, name) {
    this.accList[id].onRename(name);
  }

  showBalance(id) {
    return this.accList[id].showBalance();
  }

  showName(id) {
    return this.accList[id].showName();
  }

  showId(id) {
    return this.accList[id];
  }

  findMin() {
    //find account with minimum balance
    //return console.log("imfindmin");
    //search array to find the minimum

    let myMinimum = null;
    if (this.accList.length > 0) {
      myMinimum = this.showBalance(0);
      for (let id = 1; id < this.accList.length; id++) {
        if (this.showBalance(id) < myMinimum) {
          myMinimum = this.showBalance(id);
        }
      }
    }
    return myMinimum;
  }

  findMax() {
    let myMaximum = null;
    if (this.accList.length > 0) {
      myMaximum = this.showBalance(0);
      for (let id = 1; id < this.accList.length; id++) {
        if (this.showBalance(id) > myMaximum) {
          myMaximum = this.showBalance(id);
        }
      }
    }
    return myMaximum;
  }

  findTotal() {
    let myTotal = null;
    if (this.accList.length > 0) {
      myTotal = this.showBalance(0);
      for (let id = 1; id < this.accList.length; id++) {
        myTotal = myTotal + this.showBalance(id);
      }
    }
    return myTotal;
  }
}
export default AccountsPOJO;
