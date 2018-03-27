const getEmojis = require("../lib/getEmojis");
var assert = require("chai").assert;

describe("getEmojis", () => {
    it("should throw an error if result is not an array", (done) => {
        const notArray = () => {
            getEmojis(process.cwd() + "/test/fixtures/emoji-non-array.json");
        };

        assert.throws(notArray, /is not an array/);
        done();
    });

    it("should retun an array", () => {
        const emojiList = getEmojis();

        assert.isArray(emojiList, "did not return an array");
    });

    it("should retun an array with 7 items", () => {
        const emojiList = getEmojis();

        assert.lengthOf(emojiList, 7, "did not return 7 items");
    });
});
