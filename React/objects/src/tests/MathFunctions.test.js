import MathFunctions from "../components/MathFunctions";

test("Test the math functions", () => {
  expect(MathFunctions.Sum(1, 2)).toBe(3);
});

test("Test the math functions", () => {
  expect(MathFunctions.Sub(7, 5)).toBe(2);
});

test("Test the math functions", () => {
  expect(MathFunctions.Mul(4, 2)).toBe(8);
});

test("Test the math functions", () => {
  expect(MathFunctions.Div(10, 2)).toBe(5);
});
