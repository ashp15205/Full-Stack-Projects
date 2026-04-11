# Problem 7 – Contact Manager API
## Complete MERN Setup Guide From Scratch

---

## 📦 What is MERN?

| Letter | Technology | Purpose |
|--------|------------|---------|
| **M** | MongoDB | Database (stores contact records) |
| **E** | Express.js | Backend framework (Node server & REST API) |
| **R** | React | Frontend UI components |
| **N** | Node.js | JavaScript runtime for the server |

**How it works:**
```
React (Browser) ──fetch POST/GET──▶ Express (Node.js) ──mongoose──▶ MongoDB
      ◀──JSON data──                    ◀──data──
```

---

## 🖥 System Requirements

- Windows 10 / 11
- Internet (only required initially for `npm install`)
- ~500MB disk space

---

## STEP 1 — Install Node.js & npm

1. Go to **https://nodejs.org**
2. Download the **LTS version** (e.g., 20.x.x)
3. Run the installer → click Next → Next → Install
4. After install, open **Command Prompt** and verify the installation:

```bash
node -v      # should print v20.x.x
npm -v       # should print 10.x.x
```

> **npm (Node Package Manager)** comes bundled with Node.js automatically.

---

## STEP 2 — Install & Start MongoDB Locally

1. Go to **https://www.mongodb.com/try/download/community**
2. Select: Version → Latest, Platform → Windows, Package → `.msi`
3. Click Download and carefully run the installer.
4. During install → choose **"Complete"** → Make sure you check **"Install MongoDB as a Service"** ✅ (this ensures it runs automatically).
5. Also install **MongoDB Compass** (GUI UI for your database) when prompted ✅

**Verify MongoDB is running:**
```bash
# Open Command Prompt
mongod --version     # should print db version v7.x.x
```
If your server later gives an `ECONNREFUSED` error, it means MongoDB isn't running. You can start it via Windows Services or by opening the MongoDB Compass app.

---

## STEP 3 — Understand the Architecture

```
P7-Contact-Manager-API/
│
├── server/                    ← Node.js + Express backend
│   ├── server.js              ← API routes + MongoDB connection
│   └── package.json           ← Backend dependencies
│
└── client/                    ← React frontend
    ├── package.json           ← Frontend React dependencies
    ├── public/
    │   └── index.html         ← Base HTML where React injects
    └── src/
        ├── index.js           ← React root logic
        ├── App.jsx            ← Contains Form and List Components
        └── App.css            ← Glassmorphism Styling
```

---

## STEP 4 — Set Up and Run the Backend Server

Open **Command Prompt** or Terminal:

```bash
# 1. Navigate exactly to the server folder
cd "C:\Users\Ashish Patil\Desktop\practice\P7-Contact-Manager-API\server"

# 2. Install dependencies (creates node_modules folder)
npm install

# (This installs express framework, mongoose for DB modeling, and cors for cross-origin requests)

# 3. Start the server
node server.js
```

**Expected terminal output:**
```
✅ MongoDB connected — database: contactDB
🚀 Server running on http://localhost:5000
```
> ⚠️ **Keep this terminal window running in the background!** The database API must be alive for the frontend to fetch data.

---

## STEP 5 — Set Up and Run the React Frontend

Open a **NEW (second)** Command Prompt window:

```bash
# 1. Navigate strictly to the client folder
cd "C:\Users\Ashish Patil\Desktop\practice\P7-Contact-Manager-API\client"

# 2. Install React dependencies
npm install

# 3. Start the React development server
npm start
```
**Expected outcome:**
The browser will automatically launch and open your app at **`http://localhost:3000`**.

> **How the app talks to the server:**  
> In `client/package.json` we have set `"proxy": "http://localhost:5000"`. When React fetches `/api/contacts`, it automatically routes the request to your backend at port 5000 bypassing any CORS errors.

---

## 🔑 Key Code Concepts to Memorize

### 1. Defining the Mongoose Schema & Model
This is the blueprint for how contacts are stored in the database.
```javascript
const contactSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);
// Automatically creates a collection called "contacts" in MongoDB
```

### 2. Express Backend Routes (server.js)
```javascript
// FETCH ALL CONTACTS (GET)
app.get('/api/contacts', async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 }); // newest top
  res.json(contacts);
});

// CREATE NEW CONTACT (POST)
app.post('/api/contacts', async (req, res) => {
  const contact = new Contact(req.body);
  const saved = await contact.save(); // Saves to MongoDB
  res.status(201).json(saved);
});

// DELETE CONTACT (DELETE)
app.delete('/api/contacts/:id', async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});
```

### 3. React Connect (App.jsx)
Using `useEffect` to fetch data the moment the page loads:
```jsx
const [contacts, setContacts] = useState([]);

useEffect(() => {
  fetch('/api/contacts')
    .then(r => r.json())
    .then(data => setContacts(data));
}, []);
```

Using `fetch` to add data on form submit:
```jsx
const res = await fetch('/api/contacts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),  // Convert form state to JSON
});
const newContact = await res.json();
setContacts([newContact, ...contacts]); // Add directly to UI immediately
```

---

## 🐛 Common Errors & Troubleshooting

| Error | Cause | Fix |
|-------|-------|-----|
| `ECONNREFUSED` or `MongoServerError` | MongoDB is not running | Open MongoDB Compass, or run `net start MongoDB` as Administrator. |
| `Cannot connect to server` on Frontend | Node Backend isn't active | Make sure you run `node server.js` in the server folder and leave it open. |
| `npm: command not found` | Node.js wasn't successfully installed | Re-install Node.js from their official website. |
| `Module not found: express` | Packages were not installed | You skipped `npm install` in the server folder. Run it. |
| Blank white page | React port conflict | If asked to run on a different port (like 3001), type `Y` and press Enter. |

---

## ⚡ Super Quick Exam Reference

```bash
# Terminal 1 - The Backend
cd server
npm install
node server.js

# Terminal 2 - The Frontend
cd client
npm install
npm start
```

---

## 📋 Checklist

- [ ] Stop and restart the server to show the examiner the **`✅ MongoDB connected`** console message.
- [ ] Open the React app at **`http://localhost:3000`**.
- [ ] Fill out the "Add New Contact" form fields completely.
- [ ] Click "Add Contact". Show how the new contact **instantly** appears in the "Contacts Directory" list on the right.
- [ ] **Crucial Proof:** Hit Refresh/F5 on your browser. The data remains showing that you successfully persisted data to MongoDB and aren't just storing it in memory!
- [ ] Click the "Del" button next to a contact and demonstrate that the database correctly removes the row.
