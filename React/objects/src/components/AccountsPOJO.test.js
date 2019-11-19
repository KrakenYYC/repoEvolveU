import AccountsPOJO from "./AccountsPOJO";

test("Testing Account", () => {
  let test1 = new AccountsPOJO();

  test1.onOpen("marilou", 10);
  expect(test1.showName(0)).toBe("marilou");
  expect(test1.showBalance(0)).toBe(10);

  test1.onOpen("carrie", 9);
  expect(test1.showName(1)).toBe("carrie");
  expect(test1.showBalance(1)).toBe(9);
  console.log(test1.showName(1));

  test1.onDeposit(1, 10);
  expect(test1.showBalance(1)).toBe(19);

  test1.onWithdraw(0, 2);
  expect(test1.showBalance(0)).toBe(8);

  test1.onRename(0, "roman");
  expect(test1.showName(0)).toBe("roman");

  //test1.findMin();
  expect(test1.findMin()).toBe(8);

  expect(test1.findMax()).toBe(19);

  expect(test1.findTotal()).toBe(27);
  //expect challenges the return value
  test1.onClose(0);
  expect(test1.findMin()).toBe(19);

  // expect(test1.id).toBe(0);
  // expect(test1.accName).toBe("carrie");
  // expect(test1.accBalance).toBe(25);

  // console.log("imhere in testing for account functions 1");
  // expect(test1.onOpen(2)).toBe(27);
  // expect(accountTest.onDeposit(8)).toBe(27);

  // expect(accountTest.onWithdraw(8)).toBe(27);
});
