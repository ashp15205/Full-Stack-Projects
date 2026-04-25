# Weather Analytics Hub

Developed a multi-dimensional Climate Analytics Hub using Chart.js, featuring varied chart types (Line, Bar, Pie) for a comprehensive view of environmental datasets.

## Features
- **Multi-Chart Logic**: Integrated Line, Bar, and Pie charts within a single synchronized dashboard.
- **Trend Analysis**: Line charts visualize temporal data like temperature fluctuations.
- **Distribution Analysis**: Bar and Pie charts represent categorical data and proportional shares.
- **Responsive Grid**: Adapts from a complex multi-column layout to a single column for mobile accessibility.
- **Minimalist Aesthetic**: Professional, data-first design using high-contrast monochromatic styles.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript
- **Library**: Chart.js (CDN)

## Folder Structure
```text
PS27-Weather-Dashboard-Multiple-Charts/
├── index.html    # Multi-chart layout structure
├── style.css     # Dashboard grid and container styles
└── script.js    # Multi-chart initialization and complex data mapping
```

## Setup & Installation
1. Open `index.html` in your browser. (Requires internet connection for Chart.js).

## How it Works
1. `script.js` handles three separate Chart.js instantiations.
2. It uses unique contexts for temperature (line), precipitation (bar), and conditions (pie).
3. Monochromatic color palettes (shades of gray and black) are programmatically generated or assigned to ensure visual consistency.

## Customization
- Adjust the `grid-template-columns` in `style.css` to reorganize the dashboard layout.
- Update each chart's individual dataset in `script.js` to reflect real-time weather APIs.
