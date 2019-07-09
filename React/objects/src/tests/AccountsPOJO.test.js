import AccountsPOJO from "../components/AccountsPOJO";

test("Testing Account", () => {
  let test1 = new AccountsPOJO();

  test1.onOpen("marilou", 10);
  expect(test1.showName(0)).toBe("marilou");
  expect(test1.showBalance(0)).toBe(10);

  test1.onDeposit(0, 10);
  expect(test1.showBalance(0)).toBe(20);

  test1.onDeposit(0, 4);
  expect(test1.showBalance(0)).toBe(24);

  test1.onWithdraw(0, 2);
  expect(test1.showBalance(0)).toBe(22);

  test1.onWithdraw(0, 7);
  expect(test1.showBalance(0)).toBe(15);
  // .
  // .
  // .
  // .
  // .
  test1.onOpen("carrie", 9);
  expect(test1.showName(1)).toBe("carrie");
  expect(test1.showBalance(1)).toBe(9);

  test1.onDeposit(1, 10);
  expect(test1.showBalance(1)).toBe(19);

  test1.onDeposit(1, 4);
  expect(test1.showBalance(1)).toBe(23);

  test1.onWithdraw(1, 2);
  expect(test1.showBalance(1)).toBe(21);

  test1.onWithdraw(1, 4);
  expect(test1.showBalance(1)).toBe(17);
  // .
  // .
  // .
  // .
  // .
  test1.onOpen("george", 15);
  expect(test1.showName(2)).toBe("george");
  expect(test1.showBalance(2)).toBe(15);

  test1.onWithdraw(2, 2);
  expect(test1.showBalance(2)).toBe(13);
  // .
  // .
  // .
  // .
  // .
  test1.onRename(0, "roman");
  expect(test1.showName(0)).toBe("roman");

  //test1.findMin();
  expect(test1.findMin()).toBe(13);

  expect(test1.findMax()).toBe(17);

  // expect(test1.findTotal()).toBe(27);
  //expect challenges the return value
  // test1.onClose(0);
  // expect(test1.findMin()).toBe(19);

  // expect(test1.id).toBe(0);
  // expect(test1.accName).toBe("carrie");
  // expect(test1.accBalance).toBe(25);

  // console.log("imhere in testing for account functions 1");
  // expect(test1.onOpen(2)).toBe(27);
  // expect(accountTest.onDeposit(8)).toBe(27);

  // expect(accountTest.onWithdraw(8)).toBe(27);
});
