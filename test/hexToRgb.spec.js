let hexToRgb = require("../lib/hexToRgb");
let assert = require("chai").assert;

describe("hexToRgb", () => {
    it("should return an error when value is not a hex code", (done) => {
        hexToRgb("blue", (error, result) => {
            assert(error);
            done();
        });
    });

    it("should convert hex to rgb", (done) => {
        const hex = {
            r: 255,
            g: 255,
            b: 255,
        };

        hexToRgb("#FFF", (error, rgb) => {
            assert.strictEqual(error, null);
            assert.deepEqual(rgb, hex);
            done();
        });
    });
});
