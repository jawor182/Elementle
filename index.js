/** @format */

require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const router = express.Router();

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
  const formData = req.body;
  function MockPierwiastek({
    nazwa,
    rodzaj,
    masaAtomowa,
    rokOdkrycia,
    okres,
    elektroujemnosc,
    wartosciowosc,
  }) {
    this.nazwa = nazwa;
    this.rodzaj = rodzaj;
    this.masaAtomowa = masaAtomowa;
    this.rokOdkrycia = rokOdkrycia;
    this.okres = okres;
    this.elektroujemnosc = elektroujemnosc;
    this.wartosciowosc = wartosciowosc;
  }
  const mockPierwiastekInput = new MockPierwiastek({
    nazwa: formData,
    rodzaj: "gaz",
    masaAtomowa: 1,
    rokOdkrycia: 1234,
    okres: 1,
    elektroujemnosc: 1,
    wartosciowosc: 1,
  })
  const mockPierwiastekTodays = new MockPierwiastek({
    nazwa: "Wodór",
    rodzaj: "gaz szlachetny",
    masaAtomowa: 1,
    rokOdkrycia: 1234,
    okres: 1,
    elektroujemnosc: 1,
    wartosciowosc: 1,
  });
  //console.log(mockPierwiastekTodays);
  res.json({ formData, mockPierwiastekInput, mockPierwiastekTodays });
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening on http://localhost:${process.env.PORT}`);
});
