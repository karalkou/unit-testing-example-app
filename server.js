var express = require("express");
var app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { emojis: ["🙃", "🐧", "🦔", "❤️", "🏒", "😉", "👍"] });
});

app.listen(4200, () => {
  console.log("Example app listening on port 4200!");
});
