import AccountPOJO from "./AccountPOJO";

class AccountsPOJO {
  constructor() {
    this.accList = [];
<<<<<<< HEAD
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
=======
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
>>>>>>> ce5400e42a445aa09eb8e014d59e7144f3466829
  }

  findMin() {
    //find account with minimum balance
    //return console.log("imfindmin");
    //search array to find the minimum

    let myMinimum = null;
    if (this.accList.length > 0) {
      myMinimum = this.showBalance(0);
<<<<<<< HEAD
      for (let id = 1; id < this.accList.length; id++) {
        if (this.showBalance(id) < myMinimum) {
          myMinimum = this.showBalance(id);
=======
      for (let index = 1; index < this.accList.length; index++) {
        if (this.showBalance(index) < myMinimum) {
          myMinimum = this.showBalance(index);
>>>>>>> ce5400e42a445aa09eb8e014d59e7144f3466829
        }
      }
    }
    return myMinimum;
  }

  findMax() {
    let myMaximum = null;
    if (this.accList.length > 0) {
      myMaximum = this.showBalance(0);
<<<<<<< HEAD
      for (let id = 1; id < this.accList.length; id++) {
        if (this.showBalance(id) > myMaximum) {
          myMaximum = this.showBalance(id);
=======
      for (let index = 1; index < this.accList.length; index++) {
        if (this.showBalance(index) > myMaximum) {
          myMaximum = this.showBalance(index);
>>>>>>> ce5400e42a445aa09eb8e014d59e7144f3466829
        }
      }
    }
    return myMaximum;
  }

  findTotal() {
    let myTotal = null;
    if (this.accList.length > 0) {
      myTotal = this.showBalance(0);
<<<<<<< HEAD
      for (let id = 1; id < this.accList.length; id++) {
        myTotal = myTotal + this.showBalance(id);
=======
      for (let index = 1; index < this.accList.length; index++) {
        myTotal = myTotal + this.showBalance(index);
>>>>>>> ce5400e42a445aa09eb8e014d59e7144f3466829
      }
    }
    return myTotal;
  }
}
export default AccountsPOJO;
