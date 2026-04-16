const API_URL = "http://localhost:5000/api/students";

const studentForm = document.getElementById('studentForm');
const studentTable = document.getElementById('studentTable');
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

async function fetchStudents() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        renderStudents(data);
    } catch (err) {
        console.error("Backend offline. Loading demo data.");
        renderStudents([
            { _id: '1', name: 'Ashish Patil', rollNo: 'E-2024-001', branch: 'Computer Engineering' }
        ]);
    }
}

function renderStudents(students) {
    if (students.length === 0) {
        studentTable.innerHTML = '';
        noData.classList.remove('hidden');
        return;
    }
    noData.classList.add('hidden');
    studentTable.innerHTML = students.map(s => `
        <tr>
            <td><strong>${s.name}</strong></td>
            <td><code>${s.rollNo}</code></td>
            <td><span class="branch-tag">${s.branch}</span></td>
            <td class="td-actions">
                <button class="edit-btn" onclick="editStudent('${s._id}', '${s.name}', '${s.rollNo}', '${s.branch}')">Edit</button>
                <button class="del-btn" onclick="deleteStudent('${s._id}')">Delete</button>
            </td>
        </tr>
    `).join('');
}

studentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('studentId').value;
    const body = {
        name: document.getElementById('name').value,
        rollNo: document.getElementById('rollNo').value,
        branch: document.getElementById('branch').value
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
            showToast(isEditing ? "Record updated!" : "Student enrolled!");
            resetForm();
            fetchStudents();
        }
    } catch (err) {
        showToast("Server connection error.");
    }
});

window.deleteStudent = async (id) => {
    if (!confirm("Are you sure?")) return;
    try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        showToast("Record removed.");
        fetchStudents();
    } catch (err) {
        showToast("Delete failed.");
    }
};

window.editStudent = (id, name, rollNo, branch) => {
    isEditing = true;
    formTitle.textContent = "Modify Student Record";
    submitBtn.textContent = "Update Information";
    cancelBtn.classList.remove('hidden');
    
    document.getElementById('studentId').value = id;
    document.getElementById('name').value = name;
    document.getElementById('rollNo').value = rollNo;
    document.getElementById('branch').value = branch;
};

function resetForm() {
    isEditing = false;
    formTitle.textContent = "Enroll Student";
    submitBtn.textContent = "Save Enrollment";
    cancelBtn.classList.add('hidden');
    studentForm.reset();
}

cancelBtn.onclick = resetForm;
fetchStudents();
