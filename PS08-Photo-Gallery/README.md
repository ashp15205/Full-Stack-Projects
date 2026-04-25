# Photo Gallery

Created a Photo Gallery with a minimalist masonry-style layout, utilizing CSS column properties for advanced grid behavior.

## Features
- **Masonry Layout**: Uses the `columns` property to create a fluid, staggered grid without JavaScript.
- **Grayscale Effect**: Images remain grayscale until hovered, providing a modern visual aesthetic.
- **Interactive Overlays**: Titles slide up from the bottom on hover.
- **Responsive Design**: Automatically switches columns for tablets and mobile devices.

## Tech Stack
- **Frontend**: HTML5, CSS3

## Folder Structure
```text
PS08-Photo-Gallery/
├── index.html    # Gallery structure and images
└── style.css     # Masonry grid and interaction styles
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. The `.gallery-grid` container uses `columns: 3` and `column-gap` for the staggered layout.
2. Individual `.gallery-item` elements use `break-inside: avoid` to prevent images from splitting across columns.
3. Pure CSS transitions handle the grayscale filters and overlay animations.

## Customization
- Adjust the number of columns in `style.css` for different layouts.
- Change the `grayscale(100%)` value to adjust the initial saturation.
