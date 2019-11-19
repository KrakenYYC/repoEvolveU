import AccountFunctions from "./AccountFunctions";

test("Testing Account", () => {
  const accountTest = new AccountFunctions(0, "carrie", 25);
  expect(accountTest.id).toBe(0);
  expect(accountTest.oldName).toBe("carrie");
  expect(accountTest.accBalance).toBe(25);

  console.log("imhere");
  // expect(accountTest.onDeposit(2)).toBe(27);
  // expect(accountTest.onDeposit(8)).toBe(27);

  // expect(accountTest.onWithdraw(8)).toBe(27);
});
