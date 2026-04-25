# Drag and Drop List

Implemented a Task Manager where users can dynamically add tasks and reorder them using the native HTML5 Drag and Drop API.

## Features
- **Dynamic Tasks**: Add new items to the list via the top input field.
- **Native Reordering**: Use drag-and-drop gestures to organize items.
- **Visual States**: Clear feedback for dragging, hovering, and placeholder states.
- **Minimalist UI**: Focused, distraction-free task list design.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript

## Folder Structure
```text
PS09-Drag-and-Drop-List/
├── index.html    # List structure and input row
├── style.css     # Minimalist list styles and drag states
└── script.js    # Drag and drop logic and item management
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. Each list item has the `draggable="true"` attribute.
2. The script attaches `dragstart`, `dragend`, `dragover`, and `drop` event listeners.
3. When dragging, the script calculates the target insertion point based on the cursor's Y-position relative to other list items.
4. Native `insertBefore` DOM manipulation is used to live-reorder the elements during the drag process.

## Customization
- Adjust the `.task-item.dragging` styles in `style.css` to change the drop-target appearance.
- Add "Delete" buttons to items by updating the task creation logic in `script.js`.
