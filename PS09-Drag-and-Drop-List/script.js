const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');

let draggedItem = null;

function createTaskItem(text) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.draggable = true;
    li.textContent = text;

    li.addEventListener('dragstart', () => {
        draggedItem = li;
        setTimeout(() => li.classList.add('dragging'), 0);
    });

    li.addEventListener('dragend', () => {
        setTimeout(() => {
            li.classList.remove('dragging');
            draggedItem = null;
        }, 0);
    });

    return li;
}

taskList.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(taskList, e.clientY);
    if (afterElement == null) {
        taskList.appendChild(draggedItem);
    } else {
        taskList.insertBefore(draggedItem, afterElement);
    }
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.task-item:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

addTaskBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text) {
        taskList.appendChild(createTaskItem(text));
        taskInput.value = '';
    }
});

// Initialize listeners for static items
document.querySelectorAll('.task-item').forEach(item => {
    item.addEventListener('dragstart', () => {
        draggedItem = item;
        setTimeout(() => item.classList.add('dragging'), 0);
    });
    item.addEventListener('dragend', () => {
        setTimeout(() => {
            item.classList.remove('dragging');
            draggedItem = null;
        }, 0);
    });
});
