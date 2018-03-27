const getEmojis = require("../lib/getEmojis");
var assert = require("assert");
var fs = require("fs");

const configFile = process.cwd() + "/config.json";

function writeConfig(config, callback) {
    fs.writeFile(configFile, JSON.stringify(config), callback)
}

describe("getEmojis", () => {
    let config = {};

    before((done) => {
        fs.readFile(configFile, (error, content) => {
            config = JSON.parse(content.toString());
            done();
        });
        
    });

    afterEach((done) => {
        writeConfig(config, done);
    });

    it("should throw an error if result is not an array", (done) => {
        writeConfig({ "emojis": ":)" }, () => {
            assert.throws(getEmojis, /is not an array/);
            done();
        })
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
