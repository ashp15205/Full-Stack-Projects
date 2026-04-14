# PS28 - Secure API Middleware

> **Problem:** Express server that serves data only if the correct `x-api-key` header is present.
>
> **Stack:** Node.js, Express

---

## 🛠️ Detailed Setup & Initialization Guide

### 1. Initialize the Node Environment
Navigate into the project folder and install the required modules:
```bash
npm install
```

## 🌐 Express Framework Setup

Express is a minimal Node.js web application framework used to build APIs.

### Installation
```bash
npm install express cors dotenv
```
### Basic Boilerplate (`server.js`)
```javascript
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware to parse JSON and allow cross-origin requests
app.use(cors());
app.use(express.json());

// Basic GET Route
app.get('/api', (req, res) => {
    res.json({ message: 'API is running successfully!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server started on port ${PORT}`));
```

## 📝 Architecture & What to Write Where

- **`server.js` / `index.js`**: The core entry point. This file requires `express`, handles `app.use(express.json())`, and defines your operational endpoints.
- **`public/`** (if serving static files): Stores your frontend `index.html`, `style.css`, and `script.js`. Served via `app.use(express.static('public'))`.

## 🚀 How to Run & Start

1. **Start the Express API Server**:
   ```bash
   node server.js
   ```
   *(The server is typically mapped to localhost:3000 or localhost:5000)*
2. **Open the Frontend UI**: Either visit `http://localhost:3000` if Express is directly serving the HTML, or manually open the `index.html` file located in your project folder in the browser.
---

## 📚 Core Academic Concepts

Key Concept — Custom Middleware
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