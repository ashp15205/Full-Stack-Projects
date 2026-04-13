# PS57 / PS77 - Appointment Booking
**Problem:** Appointment booking form (name, date, time) stored in MongoDB.  
**Stack:** Node.js, Express, MongoDB, Mongoose  
> **Note:** PS77 asks the same thing — this single project covers both.

## Run
```bash
npm install && node server.js
```

## API Endpoints
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/appointments` | List all (sorted by date) |
| POST | `/appointments` | Book an appointment |
| DELETE | `/appointments/:id` | Cancel appointment |
