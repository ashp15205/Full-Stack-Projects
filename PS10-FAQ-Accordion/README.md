# FAQ Accordion

Developed a Frequently Asked Questions (FAQ) Accordion with smooth height transitions and state-managed toggle logic.

## Features
- **Smooth Animation**: Utilizes CSS transitions on `max-height` for a fluid opening/closing experience.
- **State Management**: Only one item stays open at a time (configurable in logic).
- **Interactive Icons**: Visual feedback using rotating indicators.
- **Minimalist Design**: Clean, border-based layout with subtle hover states.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript

## Folder Structure
```text
PS10-FAQ-Accordion/
├── index.html    # FAQ list structure
├── style.css     # Minimalist transition and layout styles
└── script.js    # Accordion toggle logic
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. Each `.faq-btn` is paired with a `.faq-content` container.
2. The script listens for clicks on buttons.
3. When clicked, it toggles the `active` class on the parent `.faq-item`.
4. CSS handles the animation by transitioning `max-height` from `0` to a specific value (e.g., `200px`).

## Customization
- Adjust the transition speed in the `.faq-content` class in `style.css`.
- Change the icons or interaction logic in `script.js` to allow multiple items to be open simultaneously.
