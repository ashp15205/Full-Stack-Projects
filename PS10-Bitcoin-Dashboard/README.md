# PS10 - Bitcoin Price Dashboard

> **Problem:** Dashboard that fetches the current price of Bitcoin from a public API every 30 seconds.
>
> **Stack:** JavaScript, Fetch API

---

## 🛠️ Detailed Setup & Initialization Guide

### 1. Initialize the Frontend Environment
No package manager (`npm`) is strictly required. The project automatically loads external dependencies (like Bootstrap or Chart.js) via CDNs in the HTML.

## 📝 Architecture & What to Write Where

- **`index.html`**: The structural layout of the web page. Import your custom CSS stylesheet inside the `<head>` tag.
- **`style.css`**: Custom visual styling logic.
- **`script.js`**: JavaScript logic for selecting DOM elements (`document.getElementById`), adding interactivity (`addEventListener`), Array Mapping, and performing JSON fetch queries.

## 🚀 How to Run & Start

Simply open the **`index.html`** file inside this folder directly in any web browser.
*(Tip: Using Visual Studio Code's **Live Server** extension is recommended for automatic browser reloading during development edits.)*
---

## 📚 Core Academic Concepts

Key Concept
```js
async function fetchPrice() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();
  document.getElementById("price").innerText = "$" + data.bpi.USD.rate;
}
fetchPrice();
setInterval(fetchPrice, 30000); // Repeat every 30 seconds
```