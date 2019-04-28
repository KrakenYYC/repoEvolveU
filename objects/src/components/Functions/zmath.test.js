import zmath from "../../components/Functions/zmath";

test("Test the math functions", () => {
  expect(zmath.sum(1, 2)).toBe(3);
});

test("Test the math functions", () => {
  expect(zmath.sub(7, 5)).toBe(2);
});

test("Test the math functions", () => {
  expect(zmath.mul(4, 2)).toBe(8);
});

test("Test the math functions", () => {
  expect(zmath.div(10, 2)).toBe(5);
});

test("Test the math functions", () => {
  console.log("Hello World");
  expect(zmath.mod(9, 4)).toBe(1);
});
