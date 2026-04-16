# Real-Time Profile Previewer

Developed a Real-Time Profile Previewer where user input in a form is instantly reflected in a profile card layout.

## Features
- **Live Updates**: Changes in the form update the preview card immediately using input events.
- **Minimalist Design**: A clean, black-and-white card layout.
- **Responsive Layout**: Works seamlessly on both desktop and mobile devices.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript

## Folder Structure
```text
PS04-Real-Time-Profile-Previewer/
├── index.html    # Layout for form and preview card
├── style.css     # Minimalistic styles for inputs and card
└── script.js    # Logic for syncing input values with display elements
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. The script identifies all input fields and their corresponding display targets in the card.
2. It attaches `input` event listeners to each field.
3. As the user types, the `textContent` of the display elements is updated with the current field values.

## Customization
- Modify the `profile-card:hover` styles in `style.css` to change the interaction effect.
- Add more fields (like social media links) by adding extra inputs and display elements.
