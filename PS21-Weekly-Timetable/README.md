# Academic Timetable

Developed a structured Weekly Timetable utilizing advanced HTML table attributes like `rowspan` and `colspan` for managing overlapping schedules.

## Features
- **Complex Layout**: Correct usage of row and column spans for breaks and long lab sessions.
- **Clear Annotations**: Distinctive styles for time slots, lunch breaks, and practical sessions.
- **Responsive Table**: A scrollable wrapper ensures visibility on smaller devices.
- **Minimalist Aesthetic**: High-contrast, black-and-white grid layout for focus.

## Tech Stack
- **Frontend**: HTML5, CSS3

## Folder Structure
```text
PS21-Weekly-Timetable/
├── index.html    # Table structure and weekly data
└── style.css     # Minimalist table and break styles
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. The `<table>` element forms the core of the project.
2. `colspan="5"` is used to span a single row across all working days (for breaks).
3. `rowspan` would be used for sessions that cover multiple time blocks.
4. CSS handles the border collapse and cell padding for a professional appearance.

## Customization
- Update subjects and timings directly in the `index.html` table rows.
- Change highlighting colors for specific subjects in `style.css`.
