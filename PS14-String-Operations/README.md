# String Utilities

Developed a clean text-manipulation dashboard that performs common string operations like length calculation, string reversal, and case transformation in real-time.

## Features
- **Real-time Processing**: Listen to input events to update results instantly as you type.
- **Multiple Transformations**: View length, reversed text, and case changes simultaneously.
- **Minimalist Dashboard**: Focused UI for text analysis.
- **Copy-Friendly**: Results are displayed clearly for quick selection.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript

## Folder Structure
```text
PS14-String-Operations/
├── index.html    # Text area and output grid
├── style.css     # Minimalist utility styles and hover states
└── script.js    # Logic for real-time text manipulation
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. The script selects the `textarea` and all individual output result elements.
2. It attaches an `input` event listener to the `textarea`.
3. In the callback, it performs standard JavaScript string operations:
   - Length: `.length`
   - Reverse: `.split('').reverse().join('')`
   - Case: `.toUpperCase()` and `.toLowerCase()`
4. The display is updated immediately to reflect the current state of the text.

## Customization
- Add more utilities (e.g., Word Count, Vowel Count) by adding new cards to the grid and logic to the script.
- Modify the responsive grid columns in `style.css` for different layouts.
