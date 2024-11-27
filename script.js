// API key (preferably should be handled more securely in a real application)
const apiKey = "MF2AcrRvTn5VB5mtwpfDdA==N1FFsj8M4YTAj2Q1";

async function getQuote() {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Quote Could Not Be Fetched");
    }

    const data = await response.json();

    const quote = document.getElementById("quote");
    quote.textContent = data[0].quote;
  } catch (error) {
    console.error("Error:", error);
    const quote = document.getElementById("quote");
    quote.textContent = "Failed to generate quote. Please try again.";
  }
}
//SAVE THE DATA
var num = 1;
function saveQuote() {
  const quote = document.getElementById("quote").textContent;
  const saveQuote = document.getElementById("save-quote");
  try {
    if (!quote.ok) {
      throw new Error("Please generate a quote to save!!");
    }
    saveQuote.innerHTML += `${num}) ` + quote;
    saveQuote.innerHTML += "<br>";
    num = num + 1;
  } catch (error) {
    saveQuote.innerHTML = `<p class="error">${error.message}</p>`;
  }
  // const storage = window.localStorage;
  // storage.setItem('quote', quote);
  // alert('Quote saved to local storage.');
}
