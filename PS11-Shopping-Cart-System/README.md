# Shopping Cart System

Developed a functional Shopping Cart System that handles item quantities, real-time calculations (subtotal, tax, grand total), and dynamic item removal.

## Features
- **Real-time Totals**: Calculations update instantly as quantities change or items are removed.
- **Quantity Management**: Increment and decrement controls with input validation.
- **Empty State**: Visual feedback when the cart has no items.
- **Clean Interface**: A dual-pane layout separating the item list from the cost summary.

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript

## Folder Structure
```text
PS11-Shopping-Cart-System/
├── index.html    # Layout for cart and summary sidebar
├── style.css     # Minimalist table and sidebar styles
└── script.js    # Calculation logic and item management
```

## Setup & Installation
1. Open `index.html` in your browser.

## How it Works
1. `script.js` maintains an array of cart items.
2. The `updateCart()` function re-renders the table and triggers the `calculateTotal()` function.
3. Tax is calculated dynamically as a percentage (defined in logic) and added to the subtotal.
4. Event delegation is used for performance when handling quantity clicks and item removals.

## Customization
- Adjust the tax rate in `script.js`.
- Modify the currency symbol or decimal precision in the total display logic.
