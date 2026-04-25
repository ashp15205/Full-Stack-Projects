# Skill Bar Component

Design a reusable Skill Bar Component that accepts a skill name and proficiency percentage as input and visually represents it.

## Features
- **Dynamic Input**: Users can add new skills via a form.
- **Visual Feedback**: Animated progress bars showing the skill level.
- **Clean Layout**: A minimalistic list view for the skills.

## Tech Stack
- **Frontend**: HTML5, CSS3 (Flexbox), JavaScript (ES6)

## Folder Structure
```text
PS02-Skill-Bar-Component/
├── index.html    # Layout for inputs and skills list
├── style.css     # Minimalistic bar and form styles
└── script.js    # Logic for adding and animating skill bars
```

## Setup & Installation
1. Navigate to the `PS02-Skill-Bar-Component` directory.
2. Open `index.html` in a browser.

## How it Works
1. The script manages a list of skill objects.
2. When the "Add Skill" button is clicked, a new skill object is created and added to the UI.
3. The width of the `.progress-fill` element is updated dynamically to create the animation effect from 0% to the specified value.

## Customization
- To change progress bar colors, modify `--bar-fill` in `style.css`.
- The animation timing can be adjusted in the `.progress-fill` transition property.
