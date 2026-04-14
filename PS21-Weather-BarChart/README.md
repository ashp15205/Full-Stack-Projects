# PS21 - Two-City Weather Comparison (Grouped Bar Chart)

> **Problem:** Fetch weather data for two cities simultaneously and visualize temperature difference using a grouped Bar Chart.
>
> **Stack:** JavaScript ES6, Chart.js

---

## 🛠️ Detailed Setup & Initialization Guide

### 1. Initialize the Frontend Environment
No package manager (`npm`) is strictly required. The project automatically loads external dependencies (like Bootstrap or Chart.js) via CDNs in the HTML.

## 📝 Architecture & What to Write Where

- **`index.html`**: The structural layout of the web page. Import your custom CSS stylesheet inside the `<head>` tag.
- **`style.css`**: Custom visual styling logic.
- **`script.js`**: JavaScript logic for selecting DOM elements (`document.getElementById`), adding interactivity (`addEventListener`), Array Mapping, and passing processed data into new Chart() blocks.

## 🚀 How to Run & Start

Simply open the **`index.html`** file inside this folder directly in any web browser.
*(Tip: Using Visual Studio Code's **Live Server** extension is recommended for automatic browser reloading during development edits.)*
---

## 📚 Core Academic Concepts

Key Concept
```js
// Simulated simultaneous fetch
Promise.all([fetch(city1API), fetch(city2API)])
  .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
  .then(([dataA, dataB]) => { /* render chart */ });
```
- Uses `Promise.all` to handle multiple async requests in parallel  
- Data normalization: computing averages and temperature difference  
- Chart.js grouped bar chart with two datasets side-by-side