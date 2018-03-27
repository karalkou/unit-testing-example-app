const getEmojis = require("../lib/getEmojis");
var assert = require("assert");

describe("getEmojis", () => {
    it.only("should throw an error if result is not an array", (done) => {
        const notArray = () => {
            getEmojis(process.cwd() + "/test/fixtures/emoji-non-array.json");
        };

        assert.throws(notArray, /is not an array/);
        done();
    });

    it("should retun an array", () => {
        const emojiList = getEmojis();

        assert(Array.isArray(emojiList), "did not return an array");
    });

    it("should retun an array with 7 items", () => {
        const emojiList = getEmojis();

        assert.equal(emojiList.length, 7, "did not return 7 items");
    });
});
