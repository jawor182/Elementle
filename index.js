require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const csv = require("csv-parser");
const fs = require("fs");
const router = express.Router();

let elements = [];
let randomNumber;
let correctElement;
fs.createReadStream("./elements.csv")
  .pipe(csv())
  .on("data", (row) => {
    elements.push({
      nazwa: row.nazwa,
      rodzaj: row.rodzaj,
      masaAtomowa: parseFloat(row.masaAtomowa),
      rokOdkrycia: parseInt(row.rokOdkrycia),
      okres: parseInt(row.okres),
      elektroujemnosc: row.elektroujemnosc === "brak" ? null : parseFloat(row.elektroujemnosc),
      wartosciowosc: row.wartosciowosc === "brak" ? null : row.wartosciowosc.split(",").map(Number),
    });
  })
  .on("end", () => {
     randomNumber = Math.floor(Math.random() * elements.length);
     correctElement = elements[randomNumber];
    console.log(correctElement);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/src"));
router.get("/", (req, res) => {
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
app.post("/elementle", (req, res) => {
  let userGuess = req.body.element;
  let htmlSnippet = "";
  
  const userGuessElement = elements.find(el => el.nazwa === userGuess);
  if (userGuessElement){
    console.log(`Element znaleziony: ${userGuessElement.nazwa}`)
  }
  else{
    console.log(`Nie znaleziono takiego elementu jak: ${userGuess}`)
  }
  if (userGuessElement) {
    // Generate the HTML snippet for the correct element
    htmlSnippet = `
    <div class="resultsWrapper">
      <div class="result${userGuessElement.nazwa === correctElement.nazwa ? 'Correct' : 'Incorrect'}">${userGuessElement.nazwa}</div>
      <div class="result${userGuessElement.rodzaj === correctElement.rodzaj ? 'Correct' : 'Incorrect'}">${userGuessElement.rodzaj}</div>
      <div class="result${userGuessElement.masaAtomowa === correctElement.masaAtomowa ? 'Correct' : 'Incorrect'}">${userGuessElement.masaAtomowa}</div>
      <div class="result${userGuessElement.rokOdkrycia === correctElement.rokOdkrycia ? 'Correct' : 'Incorrect'}">${userGuessElement.rokOdkrycia}</div>
      <div class="result${userGuessElement.elektroujemnosc === correctElement.elektroujemnosc ? 'Correct' : 'Incorrect'}">${userGuessElement.elektroujemnosc}</div>
      <div class="result${userGuessElement.okres === correctElement.okres ? 'Correct' : 'Incorrect'}">${userGuessElement.okres}</div>
      <div class="result${userGuessElement.wartosciowosc.join(", ") === correctElement.wartosciowosc.join(", ") ? 'Correct' : 'Incorrect'}">${userGuessElement.wartosciowosc.join(", ")}</div>
    </div>
  `;
  res.send(htmlSnippet);
  }
});
app.listen(process.env.PORT, () => {
  console.log(`App is listening on http://localhost:${process.env.PORT}`);
});
