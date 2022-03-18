const functions = {
  stringLength: (string) => {
    const length = string.length;
    let output;
    if (length > 0 && length <= 10) {
      output = length;
    } else {
      output = "Error";
    }
    return output;
  },
  reverseString: (string) => {
    const length = string.length;
    let output = "";
    for (let i = length - 1; i >= 0; i -= 1) {
      output += string[i];
    }
    return output;
  },
  calculator: {
    add: (num1, num2) => {
      return num1 + num2;
    },
    subtract: (num1, num2) => {
      return num1 - num2;
    },
    divide: (num1, num2) => {
      return num1 / num2;
    },
    multiply: (num1, num2) => {
      return num1 * num2;
    },
  },
};

module.exports = functions;
