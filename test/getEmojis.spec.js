const getEmojis = require("../lib/getEmojis");
var assert = require("assert");

describe("getEmojis", () => {
    it("should retun an array", () => {
        const emojiList = getEmojis();

        assert(Array.isArray(emojiList), "did not return an array");
    });

    it("should retun an array with 7 items", () => {
        const emojiList = getEmojis();

        assert.equal(emojiList.length, 7, "did not return 7 items");
    });
});
