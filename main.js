const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(req.body);
});

app.post("/telegram", (req, res) => {
  res.status(200).send("Telegram request received!");
  console.log(req.body);
});

app.listen(port, () => console.log(` Server running on port : port!`));
