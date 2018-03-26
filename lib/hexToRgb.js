module.exports = (hex) => {
  if (/^#/.test(hex)) {
    hex = hex.slice(1);
  }

  if (hex.length !== 3 && hex.length !== 6) {
    throw new Error("Invalid hex argument");
  }

  let values = hex.split("");

  if(values.length === 3) {
    values = [values[0], values[0], values[1], values[1], values[2], values[2]];
  }

  var r = parseInt([values[0], values[1]].join(""), 16);
  var g = parseInt([values[4], values[5]].join(""), 16);
  var b = parseInt([values[2], values[3]].join(""), 16);

  return {r, g, b};
};
