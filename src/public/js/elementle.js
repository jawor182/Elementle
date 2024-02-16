const resultItemRodzaj = document.getElementById("resultItemRodzaj");
const resultItemMasaAtomowa = document.getElementById("resultItemMasaAtomowa");
const resultItemRokOdkrycia = document.getElementById("resultItemRokOdkrycia");
const resultItemOkres = document.getElementById("resultItemOkres");
const resultItemElektroujemnosc = document.getElementById(
  "resultItemElektroujemnosc"
);
const resultItemRodzajWartosciowosc = document.getElementById(
  "resultItemRodzajWartosciowosc"
);
const elementinput = document.getElementById("elementinput");
const resultsBlock = document.getElementById("resultsBlock");
async function fetchData(event) {
  event.preventDefault();
  const elementInput = document.getElementById("elementinput");
  const formData = elementInput.value;
  await fetch("/elementle", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formData }),
  })
    .then((response) => response.json())
    .then((data) => {
      //resultsBlock.textContent = JSON.stringify(data.formData);
      const formData = JSON.stringify(data.formData);
      const formDataObject = JSON.parse(formData);
      const input = formDataObject.formData; // Corrected variable name
      const answer = data.mockPierwiastekTodays;
      const guess = data.mockPierwiastekInput;
      guess.nazwa = input;
      console.log(input);
      console.log("Guess:", guess.nazwa);
      console.log("Answer:", answer.nazwa);

      
      
      if (guess.nazwa.toLowerCase() === answer.nazwa.toLowerCase()) {
        console.log("Works");
      } else {
        console.log("Not works");
      }

      //elementInput.value = "";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
