# Student CRM Hub (MERN Stack)

Developed a complete Full-Stack Student Record Management System (CRM) utilizing the MERN (MongoDB, Express, React/Vanilla JS, Node.js) architecture.

## Features
- **Full CRUD Support**: Create, Read, Update, and Delete student records with real-time backend synchronization.
- **Persistent Storage**: Data is stored securely in a MongoDB database.
- **Edit Mode Handling**: Seamlessly transition between adding new students and editing existing records via a single form.
- **Contextual Notifications**: Toast feedback for all database interactions (Success/Error).
- **Minimalist Dual-Pane UI**: Efficient split-screen layout for form entry and record viewing.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6 Fetches)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **API Architecture**: RESTful

## Folder Structure
```text
PS29-Student-Record-Management-System/
├── server.js      # Backend Express application and MongoDB connection
├── index.html     # Frontend structure and dual-pane layout
├── style.css      # Minimalist dashboard styles
└── script.js      # Frontend logic and API interaction (Fetches)
```

## Setup & Installation

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running on the default port `27017`.

### 2. Backend Initialization
1. Open your terminal in the `PS29-Student-Record-Management-System` directory.
2. Initialize and install dependencies:
   ```bash
   npm init -y
   npm install express mongoose cors
   ```
3. Start the server:
   ```bash
   node server.js
   ```

### 3. Frontend Initialization
1. In a browser, open `index.html`.
2. Ensure the backend is running to allow the frontend to connect with the API endpoints.

## How it Works
1. **Frontend**: `script.js` uses `async/await` fetch calls to interact with the `/api/students` endpoints.
2. **Backend**: `server.js` defines a Mongoose schema and sets up Express routes for GET, POST, PUT, and DELETE.
3. **Database**: MongoDB stores documents representing individual students in a `student_management` collection.

## Customization
- Modify the `Student` schema in `server.js` to add more fields like "Attendance" or "Address".
- Change the frontend API URL in `script.js` if deploying the backend remotely.
