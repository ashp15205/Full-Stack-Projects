# PS76 - Appointment Booking (MongoDB)
**Problem:** Form to book appointment (name, date, time) stored in MongoDB.  
**Stack:** Node.js, Express, MongoDB

## Run
```bash
npm install && node server.js
```
Open `index.html` in browser (server must be running on port 3008).

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/appointments` | List all sorted by date |
| POST | `/appointments` | Book new appointment |
| DELETE | `/appointments/:id` | Cancel appointment |
