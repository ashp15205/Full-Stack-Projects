# Performance Hub

Developed a sophisticated Student Performance Analytics dashboard using Chart.js, featuring Radar, Polar Area, and Horizontal Bar variants to provide a multi-faceted view of student competencies.

## Features
- **Radar Competency Map**: Visualizes multi-variable data (e.g., Coding, Math, Logic) on a single web.
- **Polar Activity View**: Represents categorical data with differentiated radii for emphasis.
- **Comparative Performance**: Horizontal bar charts for clear linear comparisons between semesters.
- **Monochromatic Styling**: Uses a professional black-and-white theme to ensure data integrity.
- **Fluid Layout**: Responsive grid system that reorganizes chart cards for mobile devices.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript
- **Library**: Chart.js (CDN)

## Folder Structure
```text
PS28-Student-Performance-Charts-Multiple/
├── index.html    # Analytics hub layout and chart containers
├── style.css     # Minimalist dashboard and card styles
└── script.js    # Multi-chart initialization with academic datasets
```

## Setup & Installation
1. Open `index.html` in your browser. (An active internet connection is required for Chart.js).

## How it Works
1. The dashboard uses three distinct Chart.js instances with non-overlapping canvas contexts.
2. `radarChart` handles multi-variable competency data.
3. `polarAreaChart` manages distribution data.
4. `horizontalBarChart` compares performance across fixed intervals.
5. CSS handled the column spanning and card elevation.

## Customization
- Replace the `scores` array in `script.js` to visualize different student performances.
- Modify the chart aspect ratios in the Chart configuration object for custom sizing.
