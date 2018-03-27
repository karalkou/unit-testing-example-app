const getEmojis = require("../lib/getEmojis");
const should = require("chai").should();

describe("getEmojis", () => {
    it("should throw an error if result is not an array", () => {
        const notArray = () => {
            getEmojis(process.cwd() + "/test/fixtures/emoji-non-array.json");
        };

        should.Throw(notArray, /is not an array/);
    });

    it("should retun an array", () => {
        const emojiList = getEmojis();

        emojiList.should.be.an("array");
    });

    it("should retun an array with 7 items", () => {
        const emojiList = getEmojis();

        emojiList.should.be.an("array").with.length(7);
    });
});
