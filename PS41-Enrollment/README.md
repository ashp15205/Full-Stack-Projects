# PS41 - Course Enrollment
**Problem:** Students enroll in courses (Student Name, Course Name) with full record management.  
**Stack:** Node.js, Express, MongoDB

## Run
```bash
npm install && node server.js
```

## API — Full CRUD
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/enrollments` | List all |
| POST | `/enrollments` | Enroll student |
| PUT | `/enrollments/:id` | Update enrollment |
| DELETE | `/enrollments/:id` | Remove enrollment |
