const getData = () => {
    return ["🙃", "🐧", "🦔", "❤️", "🏒", "😉", "👍"];
};

module.exports = (fetch) => {
    fetch = fetch || getData;
    const dataList = fetch();

    if (!Array.isArray(dataList)) {
        throw new Error("Data is not an array.")
    }

    return dataList;
};
