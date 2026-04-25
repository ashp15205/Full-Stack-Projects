const API_URL = "http://localhost:5000/api/registrations";

const regForm = document.getElementById('regForm');
const regTable = document.getElementById('regTable');
const regCount = document.getElementById('regCount');
const toast = document.getElementById('toast');
const noData = document.getElementById('noData');
const cancelBtn = document.getElementById('cancelBtn');
const submitBtn = document.getElementById('submitBtn');
const formTitle = document.getElementById('formTitle');

let isEditing = false;

function showToast(msg) {
    toast.textContent = msg;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
}

async function fetchRegistrations() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        renderRegistrations(data);
    } catch (err) {
        console.error("Backend offline. Showing sample registration.");
        renderRegistrations([
            { _id: '1', name: 'Ashish Patil', email: 'ashish@example.com', eventName: 'Tech Summit 2024' }
        ]);
    }
}

function renderRegistrations(data) {
    regCount.textContent = `${data.length} Total`;
    if (data.length === 0) {
        regTable.innerHTML = '';
        noData.classList.remove('hidden');
        return;
    }
    noData.classList.add('hidden');
    regTable.innerHTML = data.map(r => `
        <tr>
            <td>
                <div style="font-weight: 700">${r.name}</div>
                <div style="font-size: 0.8rem; color: #666">${r.email}</div>
            </td>
            <td><span class="event-badge">${r.eventName}</span></td>
            <td class="td-actions">
                <button class="edit-btn" onclick="editReg('${r._id}', '${r.name}', '${r.email}', '${r.eventName}')">Edit</button>
                <button class="del-btn" onclick="deleteReg('${r._id}')">Delete</button>
            </td>
        </tr>
    `).join('');
}

regForm.onsubmit = async (e) => {
    e.preventDefault();
    const id = document.getElementById('participantId').value;
    const body = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        eventName: document.getElementById('eventName').value
    };

    try {
        const method = isEditing ? 'PUT' : 'POST';
        const url = isEditing ? `${API_URL}/${id}` : API_URL;
        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        if (res.ok) {
            showToast(isEditing ? "Registration updated!" : "Successfully registered!");
            resetForm();
            fetchRegistrations();
        }
    } catch (err) {
        showToast("Database connection failed.");
    }
};

window.deleteReg = async (id) => {
    if (!confirm("Cancel this registration?")) return;
    try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        showToast("Registration removed.");
        fetchRegistrations();
    } catch (err) {
        showToast("Action failed.");
    }
};

window.editReg = (id, name, email, eventName) => {
    isEditing = true;
    formTitle.textContent = "Modify Registration";
    submitBtn.textContent = "Save Changes";
    cancelBtn.classList.remove('hidden');
    
    document.getElementById('participantId').value = id;
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('eventName').value = eventName;
};

function resetForm() {
    isEditing = false;
    formTitle.textContent = "Register Participant";
    submitBtn.textContent = "Register Now";
    cancelBtn.classList.add('hidden');
    regForm.reset();
}

cancelBtn.onclick = resetForm;
fetchRegistrations();
