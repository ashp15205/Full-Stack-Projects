const API = "http://localhost:5000";

f.onsubmit = async e => {
    e.preventDefault();

    let data = {
        name: name.value,
        roll: roll.value,
        branch: branch.value
    };

    if (id.value) {
        await fetch(`${API}/update/${id.value}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
    } else {
        await fetch(`${API}/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
    }

    f.reset();
    load();
};

// READ
async function load() {
    let res = await fetch(`${API}/all`);
    let data = await res.json();

    list.innerHTML = "";
    data.forEach(d => {
        list.innerHTML += `
        <li>
        ${d.name} ${d.roll} ${d.branch}
        <button onclick="edit('${d._id}','${d.name}','${d.roll}','${d.branch}')">E</button>
        <button onclick="del('${d._id}')">D</button>
        </li>`;
    });
}

// DELETE
async function del(id) {
    await fetch(`${API}/delete/${id}`, { method: "DELETE" });
    load();
}

// UPDATE
function edit(i,n,r,b){
    id.value=i; name.value=n; roll.value=r; branch.value=b;
}