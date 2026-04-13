# Problem 73 – Monthly Sales Dashboard

## 🎯 Objective
Build a dashboard showing sales using bar, line, and pie charts with a CRUD records table. Admin can add/edit/delete records — charts update live.

## 🛠 Tech Stack
`HTML` · `CSS` · `JavaScript` · `Chart.js`

## 📁 Files
| File | Purpose |
|------|---------|
| `index.html` | KPI cards + 4 chart canvases + CRUD table + admin form |
| `style.css` | Dark dashboard layout + table + form styles |
| `script.js` | Chart.js setup + CRUD logic + KPI recalculation |

---

## ⚠️ IMPORTANT — Chart.js Setup

Chart.js is loaded from a CDN in `index.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

### If you have internet:
Just open `index.html` — it loads automatically ✅

### If you have NO internet (exam offline):
1. **Before exam**, go to: https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js
2. Save the file as `chart.js` inside the `P73-Monthly-Sales-Dashboard/` folder
3. Change the script tag in `index.html` to:
```html
<script src="chart.js"></script>
```

---

## ✨ Features

### Dashboard
- 4 KPI cards: Total Revenue, Record Count, Best Month, Average Monthly
- Bar chart (monthly sales — best month highlighted in pink)
- Line chart (sales trend with green fill)
- Pie chart (category breakdown)
- Doughnut chart (quarterly Q1–Q4)

### Admin CRUD (Click "Admin Login" to unlock)
- Sales records table with Month, Category, Amount, Orders
- **Add** new record via form
- **Edit** existing record (form pre-fills)
- **Delete** record with confirmation
- **All charts and KPIs update instantly** after any change

---

## 🔑 Key Concepts

### Chart.js Basic Usage
```javascript
// Create chart
const myChart = new Chart(document.getElementById('myCanvas'), {
  type: 'bar',          // 'line', 'pie', 'doughnut'
  data: {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{
      label: 'Sales',
      data: [82000, 95000, 78000],
      backgroundColor: '#6c63ff',
      borderRadius: 6,
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: { ticks: { color: '#888' } },
      y: { ticks: { color: '#888' } }
    }
  }
});

// Update chart after data change
myChart.data.datasets[0].data = newDataArray;
myChart.update();
```

### CRUD Pattern Used
```javascript
// Add
records.push({ id: nextId++, month, category, amount, orders });

// Edit
const r = records.find(r => r.id === editingId);
Object.assign(r, { month, category, amount, orders });

// Delete
records = records.filter(r => r.id !== id);

// After any change:
renderAll();   // → updateKPIs() + renderTable() + updateCharts()
```

---

## 🚀 How to Run
Open `index.html` in browser — needs Chart.js CDN (or save locally).

---

## 🎓 Checklist
- [ ] Show KPI cards with calculated totals
- [ ] Show all 4 charts rendering
- [ ] Click "Admin Login" — admin panel unlocks
- [ ] Add a new record → table row appears + charts update
- [ ] Edit an existing record → values change → charts update
- [ ] Delete a record → row gone + charts update
- [ ] Click "Admin Logout" → admin controls hide
