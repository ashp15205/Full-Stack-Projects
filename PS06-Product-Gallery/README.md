# Product Gallery

Developed a Product Gallery that dynamically displays products from a JSON dataset using cards and includes a "Buy Now" feedback system.

## Features
- **Dynamic Content**: Products are rendered from a JavaScript array (simulating a JSON API).
- **Interactive Feedback**: A custom toast notification appears when a product is clicked.
- **Responsive Grid**: Automatically adjusts the number of columns based on screen width.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript

## Folder Structure
```text
PS06-Product-Gallery/
├── index.html    # Core structure and layout
├── style.css     # Minimalist card and grid styles
└── script.js    # Data source and dynamic rendering logic
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. `script.js` contains a list of product objects (name, description, price, image).
2. The `initGallery()` function iterates through this list to create HTML templates for each card.
3. DOM fragment injection is used for optimal performance.
4. A simple toast system manages the "Buy Now" button click events.

## Customization
- Update the `products` array in `script.js` to change the gallery items.
- Change the hover transition effects in `style.css` for different interactions.
