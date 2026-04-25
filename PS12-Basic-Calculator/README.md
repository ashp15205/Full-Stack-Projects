# Modern Calculator

Developed a clean, grid-based standard Calculator with arithmetic operations, input history tracking, and keyboard support.

## Features
- **Arithmetic Operations**: Handles addition, subtraction, multiplication, and division.
- **History Tracking**: Displays the previous operation for context.
- **Responsive Layout**: Designed for optimal use on mobile and desktop.
- **Minimalist Aesthetic**: High-contrast, black-and-white grid design.

## Tech Stack
- **Frontend**: HTML5, CSS3 (Grid Layout), JavaScript

## Folder Structure
```text
PS12-Basic-Calculator/
├── index.html    # Grid structure for keys and display
├── style.css     # Minimalist calculator design and button states
└── script.js    # Mathematical logic and display management
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. The script maintains a string representing the current expression.
2. Clicking buttons appends values or operators to this string.
3. The `calculate()` function evaluates the expression safely.
4. It handles edge cases like division by zero and multiple consecutive operators.

## Customization
- Change the button grid layout in `style.css` using the `grid-template-columns` property.
- Update the color scheme via the `:root` variables to fit your personal design requirements.
