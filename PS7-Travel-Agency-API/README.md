# PS7 - Travel Agency Lead Manager
**Problem:** Express API that performs Add and View operations for a travel agency lead list using MongoDB.  
**Stack:** Node.js, Express, MongoDB

## Run
```bash
npm install
node server.js
```
Then open `index.html` in your browser.

## API Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/leads` | Fetch all leads |
| POST | `/leads` | Add a new lead |

## Key Concept
```js
// POST endpoint
app.post('/leads', async (req, res) => {
  const l = new Lead(req.body);
  await l.save();
  res.json(l);
});
```
