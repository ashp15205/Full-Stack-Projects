# Filterable Image Gallery

Developed a dynamic Visual Gallery with category-based filtering and a full-screen image preview system.

## Features
- **Category Filtering**: Sort images by tags like Technology, Nature, and Architecture.
- **Interactive States**: Images transition from grayscale to full color on hover.
- **Expandable Preview**: Click any item to view a full-screen high-resolution version.
- **Fluid Grid**: Responsive layout that adjusts automatically to different browser widths.
- **Minimalist UI**: Clean, black-and-white management controls.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript

## Folder Structure
```text
PS24-Image-Gallery-with-Category-Filtering/
├── index.html    # Filter controls and gallery grid
├── style.css     # Minimalist gallery and modal styles
└── script.js    # Filtering logic and modal management
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. `script.js` contains a dataset of image objects with categories.
2. The `renderGallery()` function clears and repopulates the DOM based on the active category.
3. Event delegation is used to handle clicks on individual gallery items for opening the modal.
4. CSS handles the visual filtering animations and the modal's fixed positioning.

## Customization
- Update the images and categories in `script.js`.
- Modify the transition timings in `style.css`.
