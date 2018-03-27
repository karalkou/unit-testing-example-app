let fs = require("fs");

function getConfig(path) {
    return JSON.parse(fs.readFileSync(path).toString());
}

module.exports = function (configPath) {
    configPath = configPath || process.cwd() + "/config.json";
    const dataList = getConfig(configPath).emojis;

    if (!Array.isArray(dataList)) {
        throw new Error("Data is not an array.")
    }

    return dataList;
};
