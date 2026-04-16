# Pricing Toggle Interface

Created a toggle interface that switches between Monthly and Yearly subscription plans and updates prices dynamically.

## Features
- **Dynamic Pricing**: Toggle switch updates values instantly.
- **Visual Distinction**: "Featured" plan highlighting.
- **Responsive Grid**: Adapts to different screen sizes.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript

## Folder Structure
```text
PS03-Pricing-Toggle-Interface/
├── index.html    # Pricing tables and toggle structure
├── style.css     # Minimalistic layout and toggle styles
└── script.js    # Logic for price switching
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. The script listens for change events on the checkbox toggle.
2. Based on the state (checked or unchecked), it updates the innerText of the price elements using a predefined mapping for monthly and yearly rates.

## Customization
- Modify the plans and prices in `index.html`.
- Change the toggle color in `style.css` under the `.switch input:checked + .slider` selector.
