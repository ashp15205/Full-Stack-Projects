# Student Registration Form

Developed a functional Student Registration Form with input validation, selection logic, and a completion feedback modal.

## Features
- **Responsive Form Grid**: Adapts to different screen sizes for easy data entry.
- **Dynamic Feedback**: Success modal appears upon valid form submission.
- **Minimalist Aesthetic**: Clean, high-contrast design focusing on form usability.
- **Browser-Native Validation**: Uses HTML5 validation attributes for a seamless user experience.

## Tech Stack
- **Frontend**: HTML5, CSS3 (Grid Layout), JavaScript

## Folder Structure
```text
PS20-Student-Registration-Form/
├── index.html    # Form structure and result modal
├── style.css     # Minimalist form styles and interaction states
└── script.js    # Logic for form submission and modal management
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. The form layout uses CSS Grid to manage row and column spans for different fields.
2. The script attaches a `submit` event listener to the form.
3. Upon submission, it prevents the default reload, extracts field values for any post-registration logic, and triggers the visibility of the success modal.

## Customization
- Modify the fields in `index.html` to capture different student metadata.
- Adjust the grid columns in `style.css` for more complex form layouts.
