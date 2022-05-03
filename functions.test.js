const { test } = require('@jest/globals');
const functions = require('./functions.js');

describe('String tests', () => {
  test('Read valid length 1', () => {
    expect(functions.stringLength('Microverse')).toBe(10);
  });

  test('Read valid length 2', () => {
    expect(functions.stringLength('Coding')).toBe(6);
  });

  test('Read unvalid length 1', () => {
    expect(functions.stringLength('JavaScript develop')).toBe('Error');
  });

  test('Read unvalid length 2', () => {
    expect(functions.stringLength('')).toBe('Error');
  });

  test('Read reversed string', () => {
    expect(functions.reverseString('Microverse')).toBe('esrevorciM');
  });

  test('Read capitalize string', () => {
    expect(functions.capitalize('microverse')).toBe('Microverse');
  });
});

describe('Numeric tests', () => {
  describe('Add', () => {
    test('Read added number 1', () => {
      expect(functions.calculator.add(2, 2)).toBe(4);
    });

    test('Read added number 2', () => {
      expect(functions.calculator.add(-1, 0)).toBe(-1);
    });

    test('Read added number 3', () => {
      expect(functions.calculator.add(2, 2)).toBe(4);
    });
  });

  describe('Subtract', () => {
    test('Read subtracted number 1', () => {
      expect(functions.calculator.subtract(-1, 0)).toBe(-1);
    });

    test('Read subtracted number 2', () => {
      expect(functions.calculator.subtract(-100, -100)).toBe(0);
    });

    test('Read subtracted number 3', () => {
      expect(functions.calculator.subtract(-100, 100)).toBe(-200);
    });
  });
  describe('Multiply', () => {
    test('Read multiplied number 1', () => {
      expect(functions.calculator.multiply(1, 0)).toBe(0);
    });

    test('Read multiplied number 2', () => {
      expect(functions.calculator.multiply(-100, -100)).toBe(10000);
    });

    test('Read multiplied number 3', () => {
      expect(functions.calculator.multiply(-100, 100)).toBe(-10000);
    });
  });
  describe('Divide', () => {
    test('Read divided number 1', () => {
      expect(functions.calculator.divide(-1, 2)).toBe(-0.5);
    });

    test('Read divided number 2', () => {
      expect(functions.calculator.divide(-100, -100)).toBe(1);
    });

    test('Read divided number 3', () => {
      expect(functions.calculator.divide(-100, 100)).toBe(-1);
    });
  });
});
