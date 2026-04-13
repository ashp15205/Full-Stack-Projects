# PS78 - Used Vehicle Sale Portal (Backend)
**Problem:** Used Vehicle Sale Portal — add and view vehicle listings with data stored in MongoDB.  
**Stack:** Node.js, Express, MongoDB  
> **Note:** PS79 (frontend only) uses in-memory JS arrays. This PS78 version adds MongoDB persistence.

## Run
```bash
npm install && node server.js
```

## API Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/vehicles` | All listings (latest first) |
| POST | `/vehicles` | Add a listing |
| DELETE | `/vehicles/:id` | Remove a listing |
