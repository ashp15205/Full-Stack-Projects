# Task Planner

Developed a feature-rich To-Do Application (Task Planner) with localStorage persistence, dynamic filtering, and a progress tracking system.

## Features
- **Persistence**: Tasks are saved in the browser's `localStorage` and persist after page refreshes.
- **Dynamic Filtering**: Filter tasks by "All", "Active", and "Completed" states.
- **Live Statistics**: Real-time counter showing the remaining active tasks.
- **Minimalist UX**: Clean list entry and hover-trigger actions for task deletion.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript

## Folder Structure
```text
PS13-To-Do-List-Application/
├── index.html    # Task input and filtered list container
├── style.css     # Minimalist planner design and state styles
└── script.js    # LocalStorage logic and filtering functionality
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. The script maintains an internal array of task objects `{ id, text, completed }`.
2. It synchronizes this array with `localStorage` on every change (Add/Toggle/Delete).
3. The `renderTasks()` function dynamically filters the array based on the active tab and generates HTML elements.
4. CSS handles the visual completion state (strikethrough and checkbox fill).

## Customization
- Update the `currentDate` logic in `script.js` to show custom date formats.
- Change task priority levels by adding extra properties to the task objects.
