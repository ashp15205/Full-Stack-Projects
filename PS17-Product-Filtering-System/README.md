# Product Filter Hub

Designed a robust Product Filtering System with multi-criteria search (Text, Category Selection, Price Range Slider) and real-time grid updates.

## Features
- **Multi-Layered Filters**: Filter by name, specific category, or a minimum price threshold.
- **Combined Logic**: Filters work together to narrow down results efficiently.
- **Real-time Updates**: The grid re-renders instantly as any filter state changes.
- **Minimalist UI**: Sidebar-content layout with high-contrast text and inputs.
- **Empty State**: Visual notification when no products match the selected criteria.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript

## Folder Structure
```text
PS17-Product-Filtering-System/
├── index.html    # Layout for sidebar filters and product grid
├── style.css     # Minimalist layout and interaction styles
└── script.js    # Multi-criteria filtering logic
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. `script.js` contains a list of products with attributes like `name`, `category`, and `price`.
2. Event listeners are attached to the search input, select dropdown, and price range slider.
3. Every change triggers a combined filter function that checks all three criteria simultaneously to produce the final visible list.
4. CSS handles the grid layout and hover feedback.

## Customization
- Update the default categories and products in `script.js`.
- Modify the price range bounds in `index.html` (min/max/step).
