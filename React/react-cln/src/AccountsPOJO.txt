import AccountPOJO from "./AccountPOJO";

class AccountsPOJO {
  constructor() {
    this.arrControl = [];
    this.counter = 1;
  }

  addAccounts(balance, name) {
    let id = this.counter;
    const tempAccount = new AccountPOJO(balance, name, id);
    this.arrControl.push(tempAccount);
    this.counter++;
  }

  deleteAccount = id => {
    const tempArray = this.arrControl.filter(item => item.id !== Number(id));
    this.arrControl = tempArray;
  };

  minAccount = () => {
    //if statement
    let tempArray = [];

    for (let i = 0; i < this.arrControl.length; i++) {
      tempArray.push(this.arrControl[i].balance);
    }

    const minValue = Math.min.apply(Math, tempArray);

    return Number(minValue);
  };

  maxAccount = () => {
    //if statement
    let tempArray = [];

    for (let i = 0; i < this.arrControl.length; i++) {
      tempArray.push(this.arrControl[i].balance);
    }

    const maxValue = Math.max.apply(Math, tempArray);

    return Number(maxValue);
  };

  totalAccount = () => {
    let tempTotal = 0;

    for (let i = 0; i < this.arrControl.length; i++) {
      tempTotal += this.arrControl[i].balance;
    }

    return Number(tempTotal);
  };
}

export default AccountsPOJO;
