const express = require("express");
const app = express();
app.use(express.static(__dirname + "/src"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

app.get("/elementle", (req, res) => {
  res.sendFile(__dirname + "/src/elementle.html");
});
app.get("/uzupelnianie", (req, res) => {
  res.sendFile(__dirname + "/src/uzupelnianie.html");
});
app.get("/wlasciwosci", (req, res) => {
  res.sendFile(__dirname + "/src/wlasciwosci.html");
});
app.get("/znajdowanie", (req, res) => {
  res.sendFile(__dirname + "/src/znajdowanie.html");
});
app.listen(3000, () => {
  console.log("App is listening on http://localhost:3000");
});
//