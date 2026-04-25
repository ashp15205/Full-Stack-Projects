# Standard Blog Layout

Developed a canonical Blog Layout featuring a responsive header, dual-column main content grid, a widgetized sidebar, and a professional footer.

## Features
- **Responsive Layout**: Uses CSS Grid to transition between a dual-column (desktop) and single-column (mobile) view.
- **Sticky Navigation**: The header remains fixed at the top for easy site navigation.
- **Sidebar Widgets**: Organized areas for "About" information and category links.
- **Clean Aesthetic**: Minimalist black-and-white design focusing on typography and readability.
- **Grayscale Hover**: Images utilize CSS filters to transition from grayscale to full color on hover.

## Tech Stack
- **Frontend**: HTML5, CSS3 (Grid & Flexbox)

## Folder Structure
```text
PS22-Blog-Layout/
├── index.html    # Core structure (Header, Main, Sidebar, Footer)
└── style.css     # Responsive grid and minimalist styling
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. The page is divided into semantic regions: `<header>`, `<main>`, `<aside>`, and `<footer>`.
2. The main layout is managed by `display: grid` on a container with a defined `grid-template-columns`.
3. Media queries adjust the grid structure to `1fr` on screens smaller than 950px to ensure mobile responsiveness.

## Customization
- Update the blog posts and sidebar widgets directly in `index.html`.
- Change the grid gap or sidebar width in `style.css`.
