const express = require("express");
const { OpenAIApi, Configuration } = require("openai");
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;
  const response = await openai.createChatCompletion({
    model: "gpt-4", 
    messages: [{ role: "user", content: userMessage }],
  });

  res.json({ reply: response.data.choices[0].message.content });
});

app.listen(3000, () => console.log("Server listening on port 3000"));