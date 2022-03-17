const functions = require("./functions.js");

test("Read valid length 1", () => {
  expect(functions.stringLength("Microverse")).toBe(10);
});

test("Read valid length 2", () => {
  expect(functions.stringLength("Coding")).toBe(6);
});

test("Read unvalid length 1", () => {
  expect(functions.stringLength("JavaScript develop")).toBe("Error");
});

test("Read unvalid length 2", () => {
  expect(functions.stringLength("")).toBe("Error");
});
