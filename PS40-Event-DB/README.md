# PS40 - Event Registration
**Problem:** Event Registration form (Name, Email, Event Name) stored in MongoDB.  
**Stack:** Node.js, Express, MongoDB, Mongoose

## Run
```bash
npm install && node server.js
```

## API Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/registrations` | Get all registrations |
| POST | `/registrations` | Register for event |
| DELETE | `/registrations/:id` | Remove a registration |
