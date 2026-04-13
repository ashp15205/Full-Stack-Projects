# PS83 - Contact Manager API
**Problem:** Create API to add and fetch contacts via Express and MongoDB.  
**Stack:** Node.js, Express, MongoDB, Mongoose  

## Run
```bash
npm install && node server.js
```
Open `index.html` to test frontend logic calling backend endpoints.

## Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/contacts` | Fetch all contacts |
| POST | `/contacts` | Add new contact |
| DELETE | `/contacts/:id` | Drop a contact |
