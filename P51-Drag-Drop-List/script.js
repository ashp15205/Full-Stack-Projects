let items = [
  {id:'task-1', text:'Design the homepage layout', priority:'high'},
  {id:'task-2', text:'Write unit tests for API', priority:'medium'},
  {id:'task-3', text:'Update project documentation', priority:'low'},
  {id:'task-4', text:'Fix responsive navbar bug', priority:'high'},
  {id:'task-5', text:'Optimize image loading', priority:'medium'},
  {id:'task-6', text:'Review pull requests', priority:'low'},
];

let doneItems = [];
let dragSrc = null;

function renderLists() {
  renderList(document.getElementById('taskList'), items, false);
  renderList(document.getElementById('doneList'), doneItems, true);
  renderOrder();
  document.getElementById('doneHint').style.display = doneItems.length ? 'none' : 'block';
}

function renderList(ul, arr, isDone) {
  ul.innerHTML = arr.map(item => `
    <li class="drag-item ${isDone ? 'done-item' : ''}" draggable="true" data-id="${item.id}">
      <span class="drag-handle">⠿</span>
      <span class="priority-dot ${item.priority}"></span>
      <span class="item-text">${item.text}</span>
      ${!isDone ? `<button class="check-btn" onclick="markDone('${item.id}')" title="Complete">✓</button>` : 
                  `<button class="check-btn" onclick="markUndone('${item.id}')" title="Restore">↩</button>`}
      <button class="del-btn" onclick="deleteItem('${item.id}', ${isDone})">✕</button>
    </li>
  `).join('');

  // Attach drag events
  ul.querySelectorAll('.drag-item').forEach(li => {
    li.addEventListener('dragstart', e => {
      dragSrc = li;
      li.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', li.dataset.id + '|' + (isDone ? 'done' : 'todo'));
    });
    li.addEventListener('dragend', () => li.classList.remove('dragging','over'));
    li.addEventListener('dragover', e => { e.preventDefault(); li.classList.add('over'); });
    li.addEventListener('dragleave', () => li.classList.remove('over'));
    li.addEventListener('drop', e => {
      e.preventDefault();
      li.classList.remove('over');
      const [srcId, srcList] = e.dataTransfer.getData('text/plain').split('|');
      const targetId = li.dataset.id;
      if (srcId === targetId) return;

      // Reorder within same list
      const arr2 = isDone ? doneItems : items;
      const srcIdx = arr2.findIndex(i => i.id === srcId);
      const tgtIdx = arr2.findIndex(i => i.id === targetId);
      if (srcIdx !== -1 && tgtIdx !== -1) {
        const [moved] = arr2.splice(srcIdx, 1);
        arr2.splice(tgtIdx, 0, moved);
        renderLists();
      }
    });
  });

  // Drop on empty area of list
  ul.addEventListener('dragover', e => { e.preventDefault(); ul.classList.add('dragover'); });
  ul.addEventListener('dragleave', () => ul.classList.remove('dragover'));
  ul.addEventListener('drop', e => {
    ul.classList.remove('dragover');
    const [srcId, srcList] = e.dataTransfer.getData('text/plain').split('|');
    const targetIsDone = isDone;
    if ((srcList === 'done') === targetIsDone) return; // same list

    // Move between lists
    if (targetIsDone) {
      const idx = items.findIndex(i => i.id === srcId);
      if (idx !== -1) { doneItems.unshift(items.splice(idx, 1)[0]); renderLists(); }
    } else {
      const idx = doneItems.findIndex(i => i.id === srcId);
      if (idx !== -1) { items.unshift(doneItems.splice(idx, 1)[0]); renderLists(); }
    }
  });
}

function markDone(id) {
  const idx = items.findIndex(i => i.id === id);
  if (idx !== -1) { doneItems.unshift(items.splice(idx, 1)[0]); renderLists(); }
}

function markUndone(id) {
  const idx = doneItems.findIndex(i => i.id === id);
  if (idx !== -1) { items.unshift(doneItems.splice(idx, 1)[0]); renderLists(); }
}

function deleteItem(id, isDone) {
  if (isDone) doneItems = doneItems.filter(i => i.id !== id);
  else items = items.filter(i => i.id !== id);
  renderLists();
}

document.getElementById('addTask').addEventListener('click', addTask);
document.getElementById('newTask').addEventListener('keydown', e => { if (e.key === 'Enter') addTask(); });

function addTask() {
  const input = document.getElementById('newTask');
  const text = input.value.trim();
  if (!text) return;
  items.unshift({ id: 'task-' + Date.now(), text, priority: 'medium' });
  input.value = '';
  renderLists();
}

function renderOrder() {
  const all = [...items.map(i => i.id.replace('task-','#')), ...doneItems.map(i => '✓' + i.id.replace('task-','#'))];
  document.getElementById('orderDisplay').innerHTML = all.map(id => `<span class="order-id-tag">${id}</span>`).join('');
}

renderLists();
