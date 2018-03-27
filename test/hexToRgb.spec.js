let hexToRgb = require("../lib/hexToRgb");
let assert = require("assert");

describe("hexToRgb", () => {
    it("should throw an error when value is not a hex code", () => {
        assert.throws(() => { hexToRgb("blue"); }, /Invalid hex argument/);
    });

    it("should convert hex to rgb", () => {
        const hex = {
            r: 255,
            g: 255,
            b: 255,
        };

        const rgb = hexToRgb("#FFF");

        assert.deepEqual(rgb, hex)
    });
});
