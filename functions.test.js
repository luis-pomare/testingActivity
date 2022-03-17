const functions = require("./functions.js");

test("Read string length", () => {
  expect(functions.stringLength("Microverse")).toBe(10);
});
