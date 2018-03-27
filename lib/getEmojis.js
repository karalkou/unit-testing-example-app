const getData = () => {
    // return ["🙃", "🐧", "🦔", "❤️", "🏒", "😉", "👍"];
    return "👍";
};

module.exports = () => {
    const dataList = getData();

    if (!Array.isArray(dataList)) {
        throw new Error("Data is not an array.")
    }

    return dataList;
};
