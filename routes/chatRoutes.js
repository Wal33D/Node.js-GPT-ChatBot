const express = require("express");
const { getConversationTitle } = require("../helpers");
const openai = require("../openaiapi");
const stopWords = require("../stopWords");

const router = express.Router();
let conversationTitle = "";

router.post("/", async (req, res) => {
    const userMessage = req.body.message;
    const response = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [
            {
                role: "user",
                content: userMessage,
            },
        ],
    });

    if (!conversationTitle) {
        conversationTitle = getConversationTitle(response.data.choices[0].message.content);
    }

    res.json({
        reply: response.data.choices[0].message.content,
        conversationTitle: conversationTitle,
    });
});

module.exports = router;
