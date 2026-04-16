# Event Portal (MERN Stack)

Developed a complete Full-Stack Event Registration and Management System using the MERN architecture to handle live event bookings, attendee counts, and scheduling.

## Features
- **Booking Management**: Create, update, and remove events from a live dashboard.
- **Attendance Tracking**: Manage maximum attendee counts for each scheduled event.
- **Data Persistence**: Uses MongoDB via Mongoose for robust data storage.
- **Real-time UI**: The frontend grid updates instantly following any backend API calls.
- **Minimalist UX**: Card-based event view with a focused booking sidebar.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (Fetch API)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **API Architecture**: RESTful

## Folder Structure
```text
PS30-Event-Registration-System/
├── server.js      # Express server and MongoDB schema configuration
├── index.html     # Frontend dashboard and booking form
├── style.css      # Minimalist dashboard styles
└── script.js      # Frontend state management and API integration
```

## Setup & Installation

### 1. Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) running on local port `27017`.

### 2. Backend Initialization
1. Open your terminal in the `PS30-Event-Registration-System` folder.
2. Initialize and install core dependencies:
   ```bash
   npm init -y
   npm install express mongoose cors
   ```
3. Launch the server:
   ```bash
   node server.js
   ```

### 3. Frontend Initialization
1. Open `index.html` in your web browser.
2. Ensure the backend server is active to enable data synchronization.

## How it Works
1. **Frontend**: `script.js` manages the global event state and handles asynchronous HTTP requests (GET, POST, PUT, DELETE) to the Node server.
2. **Backend**: `server.js` exposes public endpoints for CRUD operations and interfaces with the MongoDB database using Mongoose.
3. **Database**: Stores event documents with fields for title, date, and attendee capacity.

## Customization
- Add a "Register for Event" feature for users to join specific events.
- Update the date formatting in the `event-card` rendering logic in `script.js`.
- Modify the theme colors via CSS variables in `style.css`.
