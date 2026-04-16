const notesGrid = document.getElementById('notesGrid');
const addNoteBtn = document.getElementById('addNoteBtn');
const noteModal = document.getElementById('noteModal');
const cancelBtn = document.getElementById('cancelBtn');
const saveBtn = document.getElementById('saveBtn');
const searchInput = document.getElementById('searchInput');

const noteTitle = document.getElementById('noteTitle');
const noteText = document.getElementById('noteText');
const colors = document.querySelectorAll('.color');

let notes = JSON.parse(localStorage.getItem('notes')) || [];
let activeColor = '#ffffff';

function saveToLocal() {
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
}

function renderNotes() {
    const term = searchInput.value.toLowerCase();
    const filtered = notes.filter(n => 
        n.title.toLowerCase().includes(term) || 
        n.text.toLowerCase().includes(term)
    );

    notesGrid.innerHTML = filtered.map(note => `
        <div class="note-card" style="background: ${note.color}">
            <button class="del-note" onclick="deleteNote(${note.id})">&times;</button>
            <h3>${note.title}</h3>
            <p>${note.text}</p>
            <div class="date">${new Date(note.id).toLocaleDateString()}</div>
        </div>
    `).join('');
}

window.deleteNote = (id) => {
    notes = notes.filter(n => n.id !== id);
    saveToLocal();
};

addNoteBtn.onclick = () => {
    noteModal.classList.remove('hidden');
    noteTitle.value = '';
    noteText.value = '';
};

cancelBtn.onclick = () => noteModal.classList.add('hidden');

colors.forEach(c => {
    c.onclick = () => {
        colors.forEach(item => item.classList.remove('active'));
        c.classList.add('active');
        activeColor = c.dataset.color;
    };
});

saveBtn.onclick = () => {
    if (noteTitle.value && noteText.value) {
        notes.unshift({
            id: Date.now(),
            title: noteTitle.value,
            text: noteText.value,
            color: activeColor
        });
        saveToLocal();
        noteModal.classList.add('hidden');
    }
};

searchInput.oninput = renderNotes;

renderNotes();
