# Attendance Overview

Developed an Attendance Visualizer using Chart.js to display presence trends through a clear, modern Doughnut Chart representation.

## Features
- **Doughnut Visualization**: Provides a proportional view of Present, Absent, and Late records.
- **Custom Legend**: A clean, external legend system for better data mapping.
- **Responsive Dashboard**: Adapts its layout for optimal viewing on any device.
- **Minimalist Design**: High-contrast, monochromatic theme for professional reports.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript
- **Library**: Chart.js (CDN)

## Folder Structure
```text
PS26-Attendance-Pie-Doughnut-Chart/
├── index.html    # Dashboard layout and legend structure
├── style.css     # Minimalist chart and legend styles
└── script.js    # Doughnut chart logic and data config
```

## Setup & Installation
1. Open `index.html` in your browser. (Requires internet connection for Chart.js).

## How it Works
1. The script initializes a `doughnut` chart type via Chart.js.
2. Custom color arrays are passed to the dataset to match the minimalist theme.
3. The display includes tooltips that show percentage values on hover for precise data reading.

## Customization
- Update the `data` array in `script.js` with your attendance figures.
- Change the chart type to `pie` for a different visual representation.
