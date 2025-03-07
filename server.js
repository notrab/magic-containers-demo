const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(
    "Hello from Magic Containers! This app is running on GitHub Container Registry.",
  );
});

// Health check endpoint for container platform
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
