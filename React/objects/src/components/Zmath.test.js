import Zmath from "../../components/Functions/zmath";

test("Test the math functions", () => {
  expect(Zmath.sum(1, 2)).toBe(3);
});

test("Test the math functions", () => {
  expect(Zmath.sub(7, 5)).toBe(2);
});

test("Test the math functions", () => {
  expect(Zmath.mul(4, 2)).toBe(8);
});

test("Test the math functions", () => {
  expect(Zmath.div(10, 2)).toBe(5);
});

test("Test the math functions", () => {
  console.log("Hello World");
  expect(Zmath.mod(9, 4)).toBe(1);
});
