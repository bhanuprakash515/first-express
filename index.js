const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.send("Hello World Iam Bhanu Prakash K.");
  console.log(response);
});

app.get("/date", (req, res) => {
  let date = new Date();
  res.send(`Today date is ${date}`);
});
app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});

app.listen(3000);
