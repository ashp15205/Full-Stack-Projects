# Digital Glossary

Developed a Digital Glossary that displays HTML formatting tags in a table and allows users to filter the content dynamically using a search bar.

## Features
- **Dynamic Filtering**: Real-time search for HTML tags.
- **Categorized Data**: Tags are organized by their category (formatting, semantic, etc.).
- **Minimalist UI**: Clean, distraction-free design for quick reference.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6)

## Folder Structure
```text
PS01-Digital-Glossary/
├── index.html    # Structure of the table and search bar
├── style.css     # Minimalistic styling for the glossary
└── script.js    # Filtering logic and data dataset
```

## Setup & Installation
1. Clone the repository or copy the `PS01-Digital-Glossary` folder.
2. Open `index.html` in any modern web browser to view the application.

## How it Works
1. The `script.js` file contains an array of objects representing HTML tags.
2. The `renderGlossary()` function populates the table on load.
3. The `searchInput` listener triggers a filter function that matches user input against the tag name or description, re-rendering the table results instantly.

## Customization
- To change the UI, modify the CSS variables in `style.css`.
- To add more tags, update the `tags` array in `script.js`.
