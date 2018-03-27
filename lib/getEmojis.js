let fs = require("fs");

function getConfig() {
    return JSON.parse(fs.readFileSync(process.cwd() + "/config.json").toString());
}

module.exports = function () {
    const dataList = getConfig().emojis;

    if (!Array.isArray(dataList)) {
        throw new Error("Data is not an array.")
    }

    return dataList;
};
