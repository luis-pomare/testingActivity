const functions = requiere("./funtions.js");

test("Read string length", () => {
  expect(functions.stringLength("Microverse")).tobe(10);
});
