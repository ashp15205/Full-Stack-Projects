# Responsive Navigation Bar

Designed a reusable Navigation Bar component that features a sticky header, mobile-responsive hamburger menu, and dropdown support.

## Features
- **Sticky Header**: Stays visible at the top of the viewport when scrolling.
- **Mobile Optimized**: Hamburger menu reveals links on smaller screens.
- **Dropdown Support**: Hover-triggered dropdown for organized resource links.
- **Animated Transitions**: Smooth sliding and fading effects for menu interactions.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript

## Folder Structure
```text
PS07-Responsive-Navigation-Bar/
├── index.html    # Navbar structure and hero content
├── style.css     # Responsive and sticky styles
└── script.js    # Mobile toggle and scroll transition logic
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. The script manages the `active` class on the navigation links and menu button for mobile views.
2. It detects the scroll position to add a `scrolled` class to the header for visual depth (subtle shadow).
3. CSS media queries switch the layout from a horizontal flex row to a vertical mobile drawer at 850px.

## Customization
- Modify primary colors and height in the `:root` variables in `style.css`.
- Update the navigation links directly in `index.html`.
