# Problem 84 – MERN Student Registration
## Complete Setup Guide From Scratch

---

## 📦 What is MERN?

| Letter | Technology | Purpose |
|--------|------------|---------|
| **M** | MongoDB | Database (stores student records) |
| **E** | Express.js | Backend framework (REST API) |
| **R** | React | Frontend (UI components) |
| **N** | Node.js | JavaScript runtime for the server |

**How it works:**
```
React (Browser) ──fetch──▶ Express (Node.js) ──mongoose──▶ MongoDB
      ◀──JSON──                 ◀──data──
```

---

## 🖥 System Requirements

- Windows 10 / 11
- Internet (for first-time npm install only)
- ~500MB disk space

---

## STEP 1 — Install Node.js & npm

1. Go to **https://nodejs.org**
2. Download the **LTS version** (e.g. 20.x.x)
3. Run the installer → click Next → Next → Install
4. After install, open **Command Prompt** and verify:

```bash
node -v      # should print v20.x.x
npm -v       # should print 10.x.x
```

> npm (Node Package Manager) comes bundled with Node.js automatically.

---

## STEP 2 — Install MongoDB (Community Edition)

### Option A: Local MongoDB (Exam Safe — No Internet Needed After Install)

1. Go to **https://www.mongodb.com/try/download/community**
2. Select: Version → Latest, Platform → Windows, Package → .msi
3. Click Download and run the installer
4. During install → choose **"Complete"** → check **"Install MongoDB as a Service"** ✅
5. Also install **MongoDB Compass** (GUI) when prompted ✅

**Verify MongoDB is running:**
```bash
# Open Command Prompt as ADMINISTRATOR
mongod --version     # should print db version v7.x.x
```

MongoDB runs as a Windows Service — it starts automatically on boot.

### Option B: MongoDB Atlas (Cloud — Needs Internet)

1. Go to **https://cloud.mongodb.com** → Sign up free
2. Create a Cluster → Free Tier (M0)
3. Create a database user (username + password)
4. Whitelist IP → click "Add My Current IP"  
5. Click "Connect" → "Connect your application" → copy the URI
6. Replace the connection string in `server.js`:
```javascript
// Replace this:
mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
// With Atlas URI:
mongoose.connect('mongodb+srv://username:password@cluster.mongodb.net/studentDB')
```

---

## STEP 3 — Understand the Project Structure

```
P84-MERN-Student-Registration/
│
├── server/                    ← Node.js + Express backend
│   ├── server.js              ← API routes + MongoDB connection
│   └── package.json           ← Backend dependencies
│
└── client/                    ← React frontend
    ├── package.json           ← Frontend dependencies
    ├── public/
    │   └── index.html         ← HTML shell (React mounts here)
    └── src/
        ├── index.js           ← Entry point (renders <App/>)
        ├── App.jsx            ← Main component (form + table CRUD)
        └── App.css            ← Styles
```

---

## STEP 4 — Set Up and Run the Backend

Open **Command Prompt** / Terminal:

```bash
# 1. Navigate to the server folder
cd "C:\Users\Ashish Patil\Desktop\practice\P84-MERN-Student-Registration\server"

# 2. Initialize npm (creates node_modules folder)
npm install

# This installs:
#   express   → web server framework
#   mongoose  → MongoDB object modelling
#   cors      → allows React (port 3000) to call API (port 5000)

# 3. Start the server
node server.js

# You should see:
# ✅ MongoDB connected
# 🚀 Server running on http://localhost:5000
```

> **Keep this terminal open.** The server must run alongside the frontend.

### Test the API (optional)
Open browser and go to: `http://localhost:5000/api/students`  
You should see: `[]` (empty array — no students yet)

---

## STEP 5 — Set Up and Run the Frontend

Open a **NEW** Command Prompt window (keep server running in first one):

```bash
# 1. Navigate to the client folder
cd "C:\Users\Ashish Patil\Desktop\practice\P84-MERN-Student-Registration\client"

# 2. Install React and dependencies
npm install

# This installs:
#   react            → UI library
#   react-dom        → DOM rendering
#   react-scripts    → build tools (CRA)

# 3. Start the React development server
npm start

# Browser opens automatically at http://localhost:3000
```

**How the proxy works:**  
In `client/package.json` there is:
```json
"proxy": "http://localhost:5000"
```
This means when React calls `/api/students`, it automatically forwards to `http://localhost:5000/api/students` — no CORS issues.

---

## STEP 6 — Verify Everything Works

| Check | Expected Result |
|-------|----------------|
| `http://localhost:5000/api/students` | `[]` in browser |
| `http://localhost:3000` | React app loads |
| Fill form + click Register | New row appears in table |
| Click Edit → change name → Update | Row updates |
| Click Del | Row disappears |
| Refresh page | Data persists (MongoDB) |

---

## 🔑 API Endpoints Quick Reference

```
GET    /api/students          → Returns all students as JSON array
GET    /api/students/:id      → Returns one student by MongoDB _id
POST   /api/students          → Creates new student (send JSON body)
PUT    /api/students/:id      → Updates student (send JSON body)
DELETE /api/students/:id      → Deletes student
```

---

## 🔑 Key Code Concepts to Memorize

### 1. Mongoose Schema + Model
```javascript
const studentSchema = new mongoose.Schema({
  name:   { type: String, required: true },
  email:  String,
  rollNo: String,
  branch: String,
  year:   Number
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);
// Creates "students" collection in MongoDB automatically
```

### 2. Express CRUD Routes
```javascript
// READ ALL
app.get('/api/students', async (req, res) => {
  const students = await Student.find().sort({ createdAt: -1 });
  res.json(students);
});

// CREATE
app.post('/api/students', async (req, res) => {
  const student = new Student(req.body);
  const saved   = await student.save();
  res.status(201).json(saved);
});

// UPDATE
app.put('/api/students/:id', async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
app.delete('/api/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});
```

### 3. React: useEffect + useState
```jsx
const [students, setStudents] = useState([]);
const [form, setForm]         = useState({ name:'', email:'', rollNo:'', branch:'', year:1 });

// Fetch on mount
useEffect(() => {
  fetch('/api/students').then(r => r.json()).then(setStudents);
}, []);
```

### 4. React: Create (POST)
```jsx
const res  = await fetch('/api/students', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form)
});
const newStudent = await res.json();
setStudents([newStudent, ...students]);
```

### 5. React: Update (PUT) — prefill then send
```jsx
// When Edit clicked:
function handleEdit(student) {
  setEditId(student._id);
  setForm({ name: student.name, email: student.email, ... });
}

// On submit with editId:
const res = await fetch(`/api/students/${editId}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form)
});
```

### 6. React: Delete (DELETE)
```jsx
await fetch(`/api/students/${id}`, { method: 'DELETE' });
setStudents(prev => prev.filter(s => s._id !== id));
```

### 7. Spread operator for form state
```jsx
// Update one field without losing others
const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
```

---

## 🐛 Common Errors & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `Cannot connect to MongoDB` | MongoDB service not running | Run `net start MongoDB` as Admin, or open MongoDB Compass |
| `ECONNREFUSED localhost:5000` | Server not started | Run `node server.js` in server folder |
| `npm: command not found` | Node.js not installed | Install from nodejs.org |
| `Module not found: express` | npm install not run | Run `npm install` in server folder |
| React blank page | Port conflict | Change React port: `set PORT=3001 && npm start` |
| CORS error | Missing cors middleware | Make sure `app.use(cors())` is in server.js |
| `_id` not found | Wrong ID format | MongoDB uses `_id` not `id` — check `s._id` in React |

---

## ⚡ Super Quick Run (Exam Cheatsheet)

```bash
# Terminal 1 — Backend
cd server && npm install && node server.js

# Terminal 2 — Frontend  
cd client && npm install && npm start
```

Then visit: **http://localhost:3000**

---

## 📋 Checklist

- [ ] Show MongoDB running (mongod or Compass open)
- [ ] Show server terminal with "MongoDB connected" message
- [ ] Open React app at localhost:3000
- [ ] Register a new student → appears in table
- [ ] Click Edit → change a field → Update → shows change
- [ ] Click Delete → row disappears
- [ ] Refresh page → data still there (proves MongoDB persistence)
- [ ] Search/filter students by name or roll number
