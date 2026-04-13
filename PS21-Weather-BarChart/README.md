# PS21 - Two-City Weather Comparison (Grouped Bar Chart)
**Problem:** Fetch weather data for two cities simultaneously and visualize temperature difference using a grouped Bar Chart.  
**Stack:** JavaScript ES6, Chart.js

## Key Concept
```js
// Simulated simultaneous fetch
Promise.all([fetch(city1API), fetch(city2API)])
  .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
  .then(([dataA, dataB]) => { /* render chart */ });
```
- Uses `Promise.all` to handle multiple async requests in parallel  
- Data normalization: computing averages and temperature difference  
- Chart.js grouped bar chart with two datasets side-by-side
