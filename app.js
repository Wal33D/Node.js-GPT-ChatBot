const express = require("express");
const path = require("path");
const customMiddleware = require("./middlewares");
const chatRoutes = require("./routes/chatRoutes");
const indexRoutes = require("./routes/indexRoutes");

const app = express();
app.use(express.json());
app.use(customMiddleware.setContentType);
app.use(express.static("public"));

app.use("/", indexRoutes);
app.use("/api/chat", chatRoutes);

app.listen(3000, () => console.log("Server listening on port 3000"));
