# Problem 51 – Drag & Drop List

## 🎯 Objective
Draggable task list for reordering items using the HTML5 Drag & Drop API — with two panels (Todo ↔ Done).

## 🛠 Tech Stack
`HTML5 Drag & Drop API` · `JavaScript` · `CSS`

## 📁 Files  
| File | Purpose |
|------|---------|
| `index.html` | Two-panel layout + add task input |
| `style.css` | Dark cards + drag highlight + done list styles |
| `script.js` | Drag & Drop events + CRUD (add, complete, restore, delete) |

---

## ✨ Features
- **Drag items** up/down within Todo list to reorder
- **Drag items** from Todo panel → Done panel (marks complete)
- **Drag back** from Done panel → Todo panel (restores)
- **⠿ drag handle** visual indicator
- **✓ Check button** → moves item to Done
- **↩ Restore button** → moves back to Todo
- **✕ Delete** on both panels
- **Add new tasks** via text input + Enter or + button
- Priority color dots (🔴 High / 🟡 Medium / 🟢 Low)
- **Current order display** (ID tags update live)
- Fastest lap highlighted green, slowest red

---

## 🔑 Key Concepts

### HTML5 Drag & Drop — 5 Events
```javascript
item.draggable = true;

// When drag starts
item.addEventListener('dragstart', e => {
  e.dataTransfer.setData('text/plain', `${item.dataset.id}|todo`);
  item.classList.add('dragging');
});

// While hovering over a target
target.addEventListener('dragover', e => {
  e.preventDefault();         // MUST preventDefault to allow drop
  target.classList.add('over');
});

// When dropped
target.addEventListener('drop', e => {
  const [srcId, srcList] = e.dataTransfer.getData('text/plain').split('|');
  // reorder or move between lists
});
```

### Reorder by Splice
```javascript
const srcIdx = arr.findIndex(i => i.id === srcId);
const tgtIdx = arr.findIndex(i => i.id === targetId);
const [moved] = arr.splice(srcIdx, 1);    // remove from old position
arr.splice(tgtIdx, 0, moved);              // insert at new position
renderLists();
```

### Move Between Lists
```javascript
// Todo → Done
const idx = items.findIndex(i => i.id === srcId);
doneItems.unshift(items.splice(idx, 1)[0]);
```

---

## 🚀 How to Run
Open `index.html` in browser — no dependencies.

---

## 🎓 Checklist
- [ ] Drag task up/down within Todo list → order changes
- [ ] Current order display updates after every drag
- [ ] Drag task to Done panel → moves to completed section
- [ ] Drag from Done back to Todo → restored
- [ ] Click ✓ check button → moves to Done
- [ ] Click ↩ in Done → restores to Todo
- [ ] Click ✕ Delete → item removed from either panel  
- [ ] Type new task + press Enter → appears at top of Todo
- [ ] Add a task via + button
