# PS39 - Student Registration (MongoDB)

> **Problem:** Register student (Name, Roll No, Branch) → store/display via MongoDB.
>
> **Stack:** Node.js, Express, MongoDB, Mongoose

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

## 🔌 Database Setup & Connection (MongoDB)

### Installation
To perform CRUD operations with MongoDB, install the **Mongoose** Object Data Modeling (ODM) library:
```bash
npm install mongoose
```
*(**Note:** Ensure you have [MongoDB Community Server](https://www.mongodb.com/try/download/community) installed and running locally on your system, or have a MongoDB Atlas cloud URI ready).*

### Connection Logic
Inside your `server.js` or database config file, connect to your local Mongo instance:
```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/PS39-MongoDB-Form')
   .then(() => console.log('✅ MongoDB Connected successfully!'))
   .catch((err) => console.error('❌ MongoDB Connection Error:', err));
```

## 📝 Architecture & What to Write Where

- **`server.js` / `index.js`**: The core entry point. This file requires `express`, handles `app.use(express.json())`, and defines your operational endpoints.
- **Schemas**: Defines the Mongoose models (e.g., `const Student = mongoose.model(...)`).
- **`public/`** (if serving static files): Stores your frontend `index.html`, `style.css`, and `script.js`. Served via `app.use(express.static('public'))`.

## 🚀 How to Run & Start

1. **Start the Express API Server**:
   ```bash
   node server.js
   ```
   *(The server is typically mapped to localhost:3000 or localhost:5000)*
2. **Open the Frontend UI**: Either visit `http://localhost:3000` if Express is directly serving the HTML, or manually open the `index.html` file located in your project folder in the browser.
