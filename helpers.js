const stopWords = require("./stopWords");

function getConversationTitle(text) {
    const words = text.split(" ");
    const filteredWords = words.filter(
        (word) => word.length >= 3 && !stopWords.includes(word.toLowerCase())
    );
    const title = filteredWords
        .slice(0, Math.floor(Math.random() * 6) + 3)
        .join(" ");
    return title;
}

module.exports = { getConversationTitle };