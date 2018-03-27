var hexToRgb = require("../lib/hexToRgb");
var expect = require("chai").expect;
var sinon = require("sinon");

describe.only("hexToRgb", () => {
  describe("convert method", () => {
    it("should call parse once", (done) => {
      sinon.spy(hexToRgb, "parse");

      hexToRgb.convert("#ffffff", (err, result) => {
        expect(hexToRgb.parse.calledOnce).to.be.true;
        expect(hexToRgb.parse.args[0][0]).to.have.length(6);

        hexToRgb.parse.restore();
        done();
      });
    });

    it("should return an error if the value is not a hex code", (done) => {
      hexToRgb.convert("blue", (error, result) => {
        expect(error).to.exist;
        done();
      });
    });

    it("should return a correctly converted rgb value", (done) => {
      hexToRgb.convert("#fff", (error, result) => {
        expect(error).to.not.exist;
        expect(result).to.deep.equal({ r: 255, g: 255, b:255});

        done();
      });
    });
  });
});
