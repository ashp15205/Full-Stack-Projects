// Live preview text fields
const textFields = [
  ['fullName',  'prevName'],
  ['jobTitle',  'prevTitle'],
  ['email',     'prevEmail'],
  ['phone',     'prevPhone'],
  ['location',  'prevLocation'],
  ['summary',   'prevSummary'],
];

textFields.forEach(([inputId, previewId]) => {
  const input   = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  if (!input || !preview) return;
  input.addEventListener('input', () => {
    preview.textContent = input.value.trim() || preview.dataset.placeholder || '';
  });
});

// Avatar initials
document.getElementById('fullName').addEventListener('input', function () {
  const initials = this.value.split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2) || 'YN';
  document.getElementById('prevAvatar').textContent = initials;
});

// Skills tags
document.getElementById('skills').addEventListener('input', function () {
  const container = document.getElementById('prevSkills');
  const skills = this.value.split(',').map(s => s.trim()).filter(Boolean);
  container.innerHTML = skills.length
    ? skills.map(s => `<span class="tag">${s}</span>`).join('')
    : '<span class="tag">Add your skills above</span>';
});

/* ── EXPERIENCE CRUD ── */
let experiences = [];
let editExpIdx  = null;

function renderExperiences() {
  const list = document.getElementById('expList');
  list.innerHTML = experiences.length === 0
    ? '<p class="no-entries">No experience added yet</p>'
    : experiences.map((e, i) => `
        <div class="entry-item">
          <div class="entry-info">
            <strong>${e.role}</strong> @ ${e.company}
            <span class="entry-meta">${e.duration}</span>
          </div>
          <div class="entry-actions">
            <button onclick="editExp(${i})">✏</button>
            <button onclick="deleteExp(${i})" class="del">🗑</button>
          </div>
        </div>`).join('');

  // Update preview
  document.getElementById('prevExpSection').innerHTML = experiences.map(e => `
    <div class="exp-block" style="margin-bottom:0.8rem">
      <div class="exp-header">
        <span style="font-weight:600">${e.role}</span>
        <span class="exp-duration">${e.duration}</span>
      </div>
      <div class="exp-company">${e.company}</div>
      <p style="color:#333;font-size:0.85rem;line-height:1.5">${e.desc}</p>
    </div>`).join('') || '<p style="color:#888;font-size:0.88rem">No experience added</p>';
}

function openExpForm(idx) {
  editExpIdx = idx;
  document.getElementById('expForm').classList.remove('hidden');
  document.getElementById('expFormTitle').textContent = idx !== null ? 'Edit Experience' : 'Add Experience';
  if (idx !== null) {
    const e = experiences[idx];
    document.getElementById('expCompany').value  = e.company;
    document.getElementById('expRole').value     = e.role;
    document.getElementById('expDuration').value = e.duration;
    document.getElementById('expDesc').value     = e.desc;
  } else {
    ['expCompany','expRole','expDuration','expDesc'].forEach(id => document.getElementById(id).value = '');
  }
}

function closeExpForm() { document.getElementById('expForm').classList.add('hidden'); editExpIdx = null; }
window.closeExpForm = closeExpForm;

function editExp(i)   { openExpForm(i); }
function deleteExp(i) {
  if (!confirm('Delete this experience?')) return;
  experiences.splice(i, 1);
  renderExperiences();
}
window.editExp = editExp;
window.deleteExp = deleteExp;

document.getElementById('addExpBtn').addEventListener('click', () => openExpForm(null));
document.getElementById('saveExpBtn').addEventListener('click', () => {
  const entry = {
    company:  document.getElementById('expCompany').value.trim(),
    role:     document.getElementById('expRole').value.trim(),
    duration: document.getElementById('expDuration').value.trim(),
    desc:     document.getElementById('expDesc').value.trim(),
  };
  if (!entry.role || !entry.company) { alert('Role and Company are required'); return; }
  if (editExpIdx !== null) experiences[editExpIdx] = entry;
  else experiences.push(entry);
  closeExpForm();
  renderExperiences();
});

/* ── EDUCATION CRUD ── */
let educations = [];
let editEduIdx = null;

function renderEducations() {
  const list = document.getElementById('eduList');
  list.innerHTML = educations.length === 0
    ? '<p class="no-entries">No education added yet</p>'
    : educations.map((e, i) => `
        <div class="entry-item">
          <div class="entry-info">
            <strong>${e.degree}</strong> — ${e.college}
            <span class="entry-meta">${e.year}</span>
          </div>
          <div class="entry-actions">
            <button onclick="editEdu(${i})">✏</button>
            <button onclick="deleteEdu(${i})" class="del">🗑</button>
          </div>
        </div>`).join('');

  document.getElementById('prevEduSection').innerHTML = educations.map(e => `
    <div class="exp-block" style="margin-bottom:0.6rem">
      <div class="exp-header">
        <span style="font-weight:600">${e.degree}</span>
        <span class="exp-duration">${e.year}</span>
      </div>
      <div class="exp-company">${e.college}</div>
    </div>`).join('') || '<p style="color:#888;font-size:0.88rem">No education added</p>';
}

function openEduForm(idx) {
  editEduIdx = idx;
  document.getElementById('eduForm').classList.remove('hidden');
  document.getElementById('eduFormTitle').textContent = idx !== null ? 'Edit Education' : 'Add Education';
  if (idx !== null) {
    const e = educations[idx];
    document.getElementById('eduDegree').value  = e.degree;
    document.getElementById('eduCollege').value = e.college;
    document.getElementById('eduYear').value    = e.year;
  } else {
    ['eduDegree','eduCollege','eduYear'].forEach(id => document.getElementById(id).value = '');
  }
}

function closeEduForm() { document.getElementById('eduForm').classList.add('hidden'); editEduIdx = null; }
window.closeEduForm = closeEduForm;

function editEdu(i)   { openEduForm(i); }
function deleteEdu(i) {
  if (!confirm('Delete this education?')) return;
  educations.splice(i, 1);
  renderEducations();
}
window.editEdu = editEdu;
window.deleteEdu = deleteEdu;

document.getElementById('addEduBtn').addEventListener('click', () => openEduForm(null));
document.getElementById('saveEduBtn').addEventListener('click', () => {
  const entry = {
    degree:  document.getElementById('eduDegree').value.trim(),
    college: document.getElementById('eduCollege').value.trim(),
    year:    document.getElementById('eduYear').value.trim(),
  };
  if (!entry.degree) { alert('Degree is required'); return; }
  if (editEduIdx !== null) educations[editEduIdx] = entry;
  else educations.push(entry);
  closeEduForm();
  renderEducations();
});

// Download
document.getElementById('downloadBtn').addEventListener('click', () => window.print());

const printStyle = document.createElement('style');
printStyle.textContent = `@media print{body{background:#fff;}.form-panel,header{display:none!important;}.container{display:block;}.resume{box-shadow:none;}}`;
document.head.appendChild(printStyle);

// Init
renderExperiences();
renderEducations();
