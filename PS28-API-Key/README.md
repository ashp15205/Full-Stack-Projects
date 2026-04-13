# PS28 - Secure API Middleware
**Problem:** Express server that serves data only if the correct `x-api-key` header is present.  
**Stack:** Node.js, Express

## Run
```bash
npm install && node server.js
```

## Key Concept — Custom Middleware
```js
function apiKeyMiddleware(req, res, next) {
  const key = req.headers['x-api-key'];
  if (!key) return res.status(401).json({ error: 'Missing key' });
  if (key !== VALID_KEY) return res.status(403).json({ error: 'Invalid key' });
  next(); // Only called if key is valid
}

// Apply middleware to a specific protected route
app.get('/secure-data', apiKeyMiddleware, (req, res) => { ... });
```
