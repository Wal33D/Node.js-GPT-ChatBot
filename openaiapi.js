if (process.env.OPENAI_API_KEY) {
console.log("Your OpenAI API key is:", process.env.OPENAI_API_KEY);
} else {
console.log("Please get and set your OpenAI API key. Here's the link to obtain it: https://platform.openai.com/account/api–keys");
}

const { OpenAIApi, Configuration } = require("openai");
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

module.exports = openai;