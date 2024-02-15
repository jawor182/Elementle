async function fetchData(event) {
  console.log("Fetch works!")
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
    const resultsBlock = document.getElementById("resultsBlock");
    resultsBlock.textContent = JSON.stringify(data.formData);
    console.log(data.formData); 
    console.log(data.mockPierwiastekInput); 
    console.log(data.mockPierwiastekTodays); 
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}
