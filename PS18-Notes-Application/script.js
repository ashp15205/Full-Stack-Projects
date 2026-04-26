let notes = JSON.parse(localStorage.notes || "[]");
let editIndex = -1;

function save() {
    localStorage.notes = JSON.stringify(notes);
    render();
}

function add() {
    if (!title.value || !note.value) return;

    if (editIndex > -1) {
        // UPDATE
        notes[editIndex] = { t: title.value, n: note.value };
        editIndex = -1;
    } else {
        // CREATE
        notes.push({ t: title.value, n: note.value });
    }

    title.value = note.value = "";
    save();
}

function del(i) {
    notes.splice(i, 1);
    save();
}

// EDIT (fill form)
function edit(i) {
    title.value = notes[i].t;
    note.value = notes[i].n;
    editIndex = i;
}

function render() {
    list.innerHTML = notes.map((e,i)=>`
        <div class="note">
            <h4>${e.t}</h4>
            <p>${e.n}</p>
            <button onclick="edit(${i})">Edit</button>
            <button onclick="del(${i})">Delete</button>
        </div>
    `).join("");
}

render();