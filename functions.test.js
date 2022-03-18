const { test } = require("@jest/globals");
const { describe } = require("yargs");
const functions = require("./functions.js");

describe("String functions", () => {
  test("Read valid length 1", () => {
    expect(functions.stringLength("Microverse")).toBe(10);
  });
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

test("Read reversed string", () => {
  expect(functions.reverseString("Microverse")).toBe("esrevorciM");
});
