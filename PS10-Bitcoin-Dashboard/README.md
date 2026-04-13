# PS10 - Bitcoin Price Dashboard
**Problem:** Dashboard that fetches the current price of Bitcoin from a public API every 30 seconds.  
**Stack:** JavaScript, Fetch API

## Key Concept
```js
async function fetchPrice() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();
  document.getElementById("price").innerText = "$" + data.bpi.USD.rate;
}
fetchPrice();
setInterval(fetchPrice, 30000); // Repeat every 30 seconds
```
