module.exports = (hex, callback) => {
  setTimeout(() => {
    if (/^#/.test(hex)) {
      hex = hex.slice(1);
    }
  
    if (hex.length !== 3 && hex.length !== 6) {
      callback(new Error("Invalid hex argument"));
      return
    }
  
    let values = hex.split("");
  
    if(values.length === 3) {
      values = [values[0], values[0], values[1], values[1], values[2], values[2]];
    }
  
    var r = parseInt([values[0], values[1]].join(""), 16);
    var g = parseInt([values[4], values[5]].join(""), 16);
    var b = parseInt([values[2], values[3]].join(""), 16);
  
    callback(null, {r, g, b});
  }, 50);
};
