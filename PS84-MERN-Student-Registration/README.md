# PS84 - MERN Student Registration System
**Problem:** Full CRUD student registration system built on the MERN stack.  
**Stack:** MongoDB, Express, React (Vite), Node.js

## Project Structure
```
PS84-MERN-Student-Registration/
├── client/              ← React (Vite) frontend
│   ├── src/
│   │   ├── App.jsx      ← Full CRUD component
│   │   └── App.css      ← Dark glassmorphism theme
│   └── package.json
└── server/              ← Node.js + Express backend
    ├── server.js        ← REST API + Mongoose schema
    └── package.json
```

## Run (2 terminals)
```bash
# Terminal 1 - Backend (port 5000)
cd server && npm install && node server.js

# Terminal 2 - Frontend (port 5173)
cd client && npm install && npm run dev
```
Then open http://localhost:5173

## API Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/students` | List all (sorted newest first) |
| GET | `/api/students/:id` | Get single student |
| POST | `/api/students` | Create new student |
| PUT | `/api/students/:id` | Update student |
| DELETE | `/api/students/:id` | Delete student |

## Student Schema
```js
{ name, email, rollNo, branch, year, phone, timestamps }
```

## Key React Concepts
- `useState` for form + students state
- `useEffect` to fetch on mount
- `fetch` with PUT/POST/DELETE for CRUD
- Conditional rendering: Edit mode vs Create mode
- Search/filter via `.filter()` on local state
