/* ── P65 Todo: Updated script with inline Edit ── */
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let filter = 'all';
let editingId = null;

function save() { localStorage.setItem('tasks', JSON.stringify(tasks)); }

function render() {
  const filtered = tasks.filter(t => {
    if (filter === 'active') return !t.done;
    if (filter === 'completed') return t.done;
    return true;
  });

  const list = document.getElementById('taskList');
  const empty = document.getElementById('emptyMsg');

  if (filtered.length === 0) {
    list.innerHTML = '';
    empty.classList.remove('hidden');
  } else {
    empty.classList.add('hidden');
    list.innerHTML = filtered.map(t => {
      if (editingId === t.id) {
        // Inline edit mode
        return `
          <li class="task-item editing" data-id="${t.id}">
            <span class="priority-dot ${t.priority}"></span>
            <input type="text" class="inline-edit-input" id="editInput_${t.id}" value="${t.text}"/>
            <select class="inline-edit-select" id="editPrio_${t.id}">
              <option value="low" ${t.priority==='low'?'selected':''}>🟢 Low</option>
              <option value="medium" ${t.priority==='medium'?'selected':''}>🟡 Medium</option>
              <option value="high" ${t.priority==='high'?'selected':''}>🔴 High</option>
            </select>
            <button class="save-edit-btn" onclick="saveEdit('${t.id}')">✓</button>
            <button class="cancel-edit-btn" onclick="cancelEdit()">✕</button>
          </li>`;
      }
      return `
        <li class="task-item ${t.done ? 'done' : ''}" data-id="${t.id}">
          <span class="priority-dot ${t.priority}"></span>
          <input type="checkbox" class="task-checkbox" ${t.done ? 'checked' : ''} onchange="toggleDone('${t.id}')"/>
          <span class="task-text">${t.text}</span>
          <button class="edit-btn" onclick="startEdit('${t.id}')" title="Edit">✏️</button>
          <button class="delete-btn" onclick="deleteTask('${t.id}')" title="Delete">🗑</button>
        </li>`;
    }).join('');
  }

  const total = tasks.length;
  const done = tasks.filter(t => t.done).length;
  document.getElementById('taskCount').textContent = `${total} tasks · ${done} completed`;
}

function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!text) { input.focus(); return; }
  const priority = document.getElementById('prioritySelect').value;
  tasks.unshift({ id: Date.now().toString(), text, done: false, priority });
  save(); render();
  input.value = ''; input.focus();
}

function toggleDone(id) {
  const t = tasks.find(t => t.id === id);
  if (t) { t.done = !t.done; save(); render(); }
}

function deleteTask(id) {
  if (!confirm('Delete this task?')) return;
  tasks = tasks.filter(t => t.id !== id);
  save(); render();
}

function startEdit(id) {
  editingId = id;
  render();
  document.getElementById('editInput_' + id)?.focus();
}

function saveEdit(id) {
  const newText = document.getElementById('editInput_' + id)?.value.trim();
  const newPrio = document.getElementById('editPrio_' + id)?.value;
  if (!newText) return;
  const t = tasks.find(t => t.id === id);
  if (t) { t.text = newText; t.priority = newPrio; }
  editingId = null;
  save(); render();
}

function cancelEdit() { editingId = null; render(); }

document.getElementById('addBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keydown', e => { if (e.key === 'Enter') addTask(); });

document.querySelectorAll('.filt').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filter = btn.dataset.f;
    render();
  });
});

document.getElementById('clearCompleted').addEventListener('click', () => {
  tasks = tasks.filter(t => !t.done);
  save(); render();
});

render();
