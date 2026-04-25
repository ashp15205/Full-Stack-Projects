# Department Analytics

Developed a professional data visualization dashboard using Chart.js to track workforce distribution across various organizational departments.

## Features
- **Dynamic Bar Chart**: Visualizes complex numerical data using Chart.js.
- **Key Metrics Dashboard**: Displays high-level stats alongside visual data.
- **Responsive Canvas**: The chart container scales perfectly across desktop and mobile browsers.
- **Minimalist Aesthetic**: Professional black-and-white theme prioritizing data clarity.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript
- **Library**: Chart.js (CDN)

## Folder Structure
```text
PS25-Bar-Chart-for-Departments/
├── index.html    # Dashboard layout and chart container
├── style.css     # Minimalist dashboard styles
└── script.js    # Chart.js initialization and data configuration
```

## Setup & Installation
1. Ensure you have an active internet connection (to load Chart.js from CDN).
2. Open `index.html` in your browser.

## How it Works
1. `index.html` initializes a `<canvas>` element.
2. `script.js` retrieves the canvas context and creates a new `Chart` instance.
3. The data is parsed into labels and datasets, with custom styling applied for the monochromatic theme.
4. Chart.js handles the rendering and entry animations automatically.

## Customization
- Update the `labels` and `data` arrays in `script.js` to reflect your specific datasets.
- Modify the chart type (e.g., to `line` or `horizontalBar`) in the Chart configuration object.
