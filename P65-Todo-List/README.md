# Problem 65 – To-Do List

## 🎯 Objective
Task manager with Add, Inline Edit, Delete, Complete toggle — persisted in localStorage.

## 🛠 Tech Stack
`HTML` · `CSS` · `JavaScript` · `localStorage`

## 📁 Files
| File | Purpose |
|------|---------|
| `index.html` | Add row + filter tabs + task list |
| `style.css` | Dark task cards + inline edit styles |
| `script.js` | CRUD: add, edit (inline), delete, toggle, filter, persist |

---

## ✨ Features
- Add task with **priority** (🟢 Low / 🟡 Medium / 🔴 High) using dropdown + Enter key
- **Inline Edit**: Click ✏️ on any task → text field opens in-place → change text + priority → ✓ to save
- ✕ Cancel edit without changes
- Checkbox to mark task done (strikethrough + fade)
- 🗑 Delete with confirm
- Filter tabs: **All / Active / Completed**
- **Clear Completed** button
- Task count display ("X tasks · Y completed")
- **All data persists after page refresh** via `localStorage`

---

## 🔑 Key Concepts

### localStorage Persistence
```javascript
// Save every time data changes
function save() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load on page start
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
```

### Inline Edit Pattern
```javascript
let editingId = null;

function startEdit(id) {
  editingId = id;
  render();   // re-render with edit input visible
}

function saveEdit(id) {
  const t = tasks.find(t => t.id === id);
  t.text     = document.getElementById('editInput_' + id).value;
  t.priority = document.getElementById('editPrio_' + id).value;
  editingId = null;
  save();
  render();
}
```

### Filter
```javascript
const filtered = tasks.filter(t => {
  if (filter === 'active')    return !t.done;
  if (filter === 'completed') return t.done;
  return true;  // 'all'
});
```

---

## 🚀 How to Run
Open `index.html` in browser. Data persists after refresh.

---

## 🎓 Exam Demo Checklist
- [ ] Add task with High priority → red dot appears
- [ ] Press Enter to add task quickly
- [ ] Click checkbox → task gets strikethrough
- [ ] Click ✏️ → inline edit appears with current text + priority dropdown
- [ ] Change text + priority → click ✓ → task updates
- [ ] Press ✕ Cancel → no changes made
- [ ] Click 🗑 → task deleted after confirm
- [ ] Filter "Active" → completed tasks hide
- [ ] Filter "Completed" → only done tasks show
- [ ] Refresh page → all tasks still there (localStorage)
- [ ] Clear Completed → done tasks all removed
