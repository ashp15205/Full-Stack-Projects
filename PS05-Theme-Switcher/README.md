# Theme Switcher

Implemented a Theme Switcher that allows users to toggle between Dark and Light modes, with preference stored using `localStorage`.

## Features
- **Persistence**: Remembers your theme preference across browser sessions.
- **Smooth Transitions**: Uses CSS transitions for a pleasing theme change effect.
- **Clean UI**: Minimalist card-based layout.

## Tech Stack
- **Frontend**: HTML5, CSS3 (Custom Properties), JavaScript

## Folder Structure
```text
PS05-Theme-Switcher-Application/
├── index.html    # Simple toggle interface
├── style.css     # Dual-mode CSS variables and transitions
└── script.js    # Theme switching and storage logic
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. The script checks `localStorage` on load for a `theme` key.
2. If found, it applies that theme to the `document.documentElement`.
3. The button click listener toggles the `data-theme` attribute and updates `localStorage` accordingly.

## Customization
- Add more themes (e.g., "Blue", "Retro") by adding extra CSS variable blocks and updating the JavaScript logic.
- Change transition speeds in the `*` selector in `style.css`.
