let t = JSON.parse(localStorage.tasks || "[]");

function save() {
    localStorage.tasks = JSON.stringify(t);
    render();
}

function add() {
    let v = task.value;
    if (!v) return;
    t.push({ text: v, done: false });
    task.value = "";
    save();
}

function render() {
    list.innerHTML = t.map((e,i)=>`
        <li>
            <input type="checkbox" ${e.done?"checked":""} onclick="toggle(${i})">
            <span style="text-decoration:${e.done?"line-through":"none"}">${e.text}</span>
            <button onclick="del(${i})">X</button>
        </li>
    `).join("");
}

function del(i){ t.splice(i,1); save(); }

function toggle(i){ t[i].done = !t[i].done; save(); }

render();