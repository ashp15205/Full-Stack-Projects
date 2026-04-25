# Notes Dashboard

Developed a functional Notes Application with a grid-based dashboard, localStorage persistence, and a multi-color tagging system.

## Features
- **Persistence**: Notes are saved in `localStorage`, preserving data across browser sessions.
- **Dynamic Search**: Filter your notes by title or content in real-time.
- **Color Tagging**: Organize notes with different background themes.
- **Minimalist UI**: Modern grid layout with clean typography.
- **Note Management**: Create, view, and delete notes through an interactive interface.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript

## Folder Structure
```text
PS18-Notes-Application/
├── index.html    # Main dashboard and note creation modal
├── style.css     # Minimalist dashboard and card styles
└── script.js    # Logic for note storage and search
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. `script.js` manages an array of note objects.
2. The UI is re-rendered whenever a note is added or deleted.
3. The search function uses the `filter()` method to match substrings against the note's title and text content.
4. CSS handles the modal visibility and the grid layout responsiveness.

## Customization
- Add more colors to the `color-picker` in `index.html`.
- Modify the card transition timings in `style.css`.
