export class Cards {
  constructor(id, accName, accBalance) {
    this.id = id;
    this.accName = accName;
    this.accBalance = accBalance;
  }
  //life and birth of component account
  //what it needs:
  //call acctcontainer component
  //close acctcontainer component
  //look at the array of [card], iterate through and find the min
  //look at the array of [card], iterate through and find the max

  onOpen = () => {
    //open account
    return console.log("imopen");
  };

  onClose = () => {
    //close account
    return console.log("imclosed");
  };

  onRename = () => {
    //renames target account
    return console.log("imrename");
  };

  findMin = () => {
    //find account with minimum balance
    return console.log("imfindmin");
  };

  findMax = () => {
    //find account with maximum balance
    return console.log("imfindmax");
  };
}

export class Card {
  constructor(id, oldName, accBalance) {
    this.id = id;
    this.oldName = oldName;
    this.accBalance = accBalance;
  }

  onDeposit = amount => {
    console.log("____________________imdeposit", this.accBalance, amount);
    this.accBalance = this.accBalance + Number(amount);
    return this.accBalance;
  };

  onWithdraw(amount) {
    //   return (this.accBalance = parseInt(this.accBalance - this.amount));
    console.log("____________________imwithdraw", this.accBalance, amount);
    this.accBalance = this.accBalance - Number(amount);
    return this.accBalance;
  }

  onRename(amount) {
    //   return (this.oldName = this.newName);
    console.log("____________________imrename", this.accBalance, amount);
    this.accBalance = this.accBalance - Number(amount);
    return this.accBalance;
  }
}
