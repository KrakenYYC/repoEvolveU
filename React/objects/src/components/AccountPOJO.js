class AccountPOJO {
  constructor(accName, accBalance) {
    this.accName = accName;
    this.accBalance = accBalance;
    // this.accId = accId;

    //will it be necessary to add id in state
  }

  onDeposit(amount) {
    this.accBalance = this.accBalance + amount;
    console.log("im in the single pojo");
  }

  onWithdraw(amount) {
    this.accBalance = this.accBalance - amount;
  }

  onRename(name) {
    this.accName = name;
  }

  // onClose(id) {
  //   this.accList.splice(id, 1);
  // }

  //   for (var i = 0; i < this.state.value.length; i++) {
  //     if (this.state.value[i] === id) {
  //       delete this.state.value[i];
  //     }
  //   }
  //   this.setState({
  //     value: this.state.value
  //   });
  //   console.log(this.state.value);
  // }

  showBalance() {
    return this.accBalance;
  }

  showName() {
    return this.accName;
  }
}

export default AccountPOJO;
