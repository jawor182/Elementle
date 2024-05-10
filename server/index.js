require("dotenv").config();
const express = require("express");
const app = express();
const csv = require("csv-parser");
const fs = require("fs");
const cors = require("cors");

let elements = [];
let randomNumber;
let correctElement;
let elementsArray = [];
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
     elementsArray = [...elements];
    console.log(correctElement);
  });

app.use(cors({
  origin:"*"
}))
app.post("/elementle", (req, res) => {
  res.json({correctElement});
});

app.listen(3000, () => {
  console.log(`App is listening on http://localhost:3000`);
});
