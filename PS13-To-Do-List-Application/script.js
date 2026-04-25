const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const itemsLeft = document.getElementById('itemsLeft');
const filterBtns = document.querySelectorAll('.filter-btn');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateStats();
}

function updateStats() {
    const activeCount = tasks.filter(t => !t.completed).length;
    itemsLeft.textContent = activeCount;
}

function renderTasks(filter = 'all') {
    taskList.innerHTML = '';
    
    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'done' : ''}`;
        li.innerHTML = `
            <div class="check-box" onclick="toggleTask(${task.id})"></div>
            <span>${task.text}</span>
            <button class="delete-task" onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

window.toggleTask = (id) => {
    tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    saveTasks();
    renderTasks(document.querySelector('.filter-btn.active').dataset.filter);
};

window.deleteTask = (id) => {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    renderTasks(document.querySelector('.filter-btn.active').dataset.filter);
};

addBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({ id: Date.now(), text, completed: false });
        taskInput.value = '';
        saveTasks();
        renderTasks();
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderTasks(btn.dataset.filter);
    });
});

// Initial Render
renderTasks();
updateStats();
