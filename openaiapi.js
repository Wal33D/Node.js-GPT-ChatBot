const { OpenAIApi, Configuration } = require("openai");

const configuration = new Configuration({
    apiKey: "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"
});

const openai = new OpenAIApi(configuration);

module.exports = openai;
