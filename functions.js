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
};

module.exports = functions;
