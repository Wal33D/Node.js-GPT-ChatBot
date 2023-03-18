const inputForm = document.getElementById("input-form");
const inputText = document.getElementById("input-text");
const chatMessages = document.getElementById("chat-messages");
const chatTitle = document.getElementById("chat-title");
let conversationTitle;

// List of stop words to filter out from conversation titles
const stopWords = [
  "a", "an", "the", "and", "or", "but", "not", "is", "are",
  "was", "were", "be", "being", "been", "have", "has", "had",
  "do", "does", "did", "will", "would", "should", "can", "could",
  "may", "might", "must",
];
