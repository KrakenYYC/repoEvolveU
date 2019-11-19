import AccountPOJO from "./AccountPOJO";

test("Testing Account", () => {
  let test2 = new AccountPOJO("mark", 4);
  expect(test2.showName()).toBe("mark");
  expect(test2.showBalance()).toBe(4);

  test2.onDeposit(2);
  expect(test2.showBalance()).toBe(6);

  test2.onDeposit(3);
  expect(test2.showBalance()).toBe(9);

  console.log("imhere in testing for account functions 2");

  test2.onWithdraw(2);
  expect(test2.showBalance()).toBe(7);

  test2.onWithdraw(9);
  expect(test2.showBalance()).toBe(-2);

  test2.onRename("carrie");
  expect(test2.showName()).toBe("carrie");

  test2.onRename("roman");
  expect(test2.showName()).toBe("roman");

  // test2.onClose("carrie");
  // expect(test2.showName()).toBe("");

  // test2.onClose("carrie");
  // expect(test2.showName()).toBe("");
});
