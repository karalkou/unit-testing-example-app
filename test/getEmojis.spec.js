const getEmojis = require("../lib/getEmojis");
var expect = require("chai").expect;

describe("getEmojis", () => {
    it("should throw an error if result is not an array", () => {
        const notArray = () => {
            getEmojis(process.cwd() + "/test/fixtures/emoji-non-array.json");
        };

        expect(notArray).to.throw(/is not an array/);
    });

    it("should retun an array", () => {
        const emojiList = getEmojis();

        expect(emojiList).to.be.an("array");
    });

    it("should retun an array with 7 items", () => {
        const emojiList = getEmojis();

        expect(emojiList).to.be.an("array").with.length(7);
    });
});
