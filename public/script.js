inputForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const userMessage = inputText.value;
  addMessage("user", userMessage);
  inputText.value = "";
  
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: userMessage,
    }),
  });
  
  const data = await response.json();
  addMessage("assistant", data.reply);
});

function addMessage(role, text) {
  const messageContainer = document.createElement("li");
  messageContainer.classList.add(role + "-message");
  
  const messageText = document.createElement("p");
  messageText.classList.add("message-text");
  
  if (role === "assistant") {
    const codeBlockRegex = /^```([^`]+)```$/gs;
    const codeBlocks = text.split(codeBlockRegex);
    
    codeBlocks.forEach((codeBlock, index) => {
      if (index % 2 === 0) {
        // Not a code block, just add the text
        messageText.innerHTML += codeBlock
          .replace(/\n/g, "<br>") // replace newlines with <br> tags
          .replace(/\|/g, "&vert;") // replace vertical bars with HTML entity
          .replace(/-/g, "&ndash;"); // replace hyphens with HTML entity
      } else {
        // Code block, create a <pre> element with appropriate class and language
        const language = codeBlocks[index - 1].trim();
        const code = codeBlock.trim();
        const codeBlockElement = document.createElement("pre");
        codeBlockElement.classList.add("language-" + language);
        codeBlockElement.innerHTML = Prism.highlight(
          code,
          Prism.languages[language]
        );
        messageText.appendChild(codeBlockElement);
      }
    });
    
    // set conversation title on bot's first response
    if (!conversationTitle) {
      setConversationTitle(getConversationTitle(text));
    }
  } else {
    messageText.textContent = text;
  }
  
  messageContainer.appendChild(messageText);
  chatMessages.appendChild(messageContainer);
}

function getConversationTitle(text) {
  // split the response into words
  const words = text.split(" ");
  
  // filter out words that are less than 3 characters long
  const filteredWords = words.filter((word) => word.length >= 3);
  
  // take the first 3-8 words as the conversation title
  const title = filteredWords
    .slice(0, Math.floor(Math.random() * 6) + 3)
    .join(" ");
    
  return title;
}

function setConversationTitle(title) {
  conversationTitle = title;
  chatTitle.textContent = title;
}
