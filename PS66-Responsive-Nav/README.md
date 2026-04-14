# PS66 - Responsive Navbar (Bootstrap)

> **Problem:** Responsive navbar with hamburger menu using Bootstrap.
>
> **Stack:** HTML, CSS, Bootstrap 5

---

## 🛠️ Detailed Setup & Initialization Guide

### 1. Initialize the Frontend Environment
No package manager (`npm`) is strictly required. The project automatically loads external dependencies (like Bootstrap or Chart.js) via CDNs in the HTML.

## 📝 Architecture & What to Write Where

- **`index.html`**: The structural layout of the web page. Import Bootstrap CSS via the CDN inside the `<head>` tag.
- **`style.css`**: Custom visual styling logic.
- **`script.js`**: JavaScript logic for selecting DOM elements (`document.getElementById`), adding interactivity (`addEventListener`), Array Mapping, and performing JSON fetch queries.

## 🚀 How to Run & Start

Simply open the **`index.html`** file inside this folder directly in any web browser.
*(Tip: Using Visual Studio Code's **Live Server** extension is recommended for automatic browser reloading during development edits.)*
---

## 📚 Core Academic Concepts

Key Concept
- Bootstrap `navbar-expand-lg` collapses to hamburger on screens < 992px  
- `data-bs-toggle="dropdown"` handles dropdowns without custom JS  
- Two dropdown menus: **Services** and **About**