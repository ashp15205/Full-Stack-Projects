# Digital Stopwatch

Developed a high-precision Digital Stopwatch with millisecond tracking, lap recording, and UI state management.

## Features
- **Precision Timing**: Tracks hours, minutes, seconds, and milliseconds with high accuracy.
- **Lap System**: Record intermediate times without stopping the main timer.
- **Dynamic Controls**: Buttons adapt based on the timer state (Start/Pause).
- **Tabular Numerics**: Uses specialized font settings to prevent text jumping during timer updates.
- **Minimalist UI**: Focused, high-contrast digital display.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript

## Folder Structure
```text
PS15-Stopwatch-Application/
├── index.html    # Timer display and control buttons
├── style.css     # Minimalist typography and lap list styles
└── script.js    # Time calculation and interval management logic
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. The script uses `requestAnimationFrame` or `setInterval` for smooth updates.
2. It calculates elapsed time by subtracting a `startTime` timestamp from the current `Date.now()`.
3. The display string is formatted using padding logic for consistency.
4. Laps are stored in an array and rendered as a scrollable list.

## Customization
- Adjust the update frequency in `script.js` for higher or lower precision.
- Customize the lap item layout in `style.css`.
