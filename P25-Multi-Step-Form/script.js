const TOTAL_STEPS = 4;
let currentStep = 1;
const data = {};

function init() {
  renderIndicators();
  showStep(1);
  updateProgress();
}

function renderIndicators() {
  const c = document.getElementById('stepIndicators');
  c.innerHTML = Array.from({length: TOTAL_STEPS}, (_, i) => `
    <div class="step-dot" id="dot${i+1}">${i+1}</div>
  `).join('');
}

function updateProgress() {
  document.getElementById('progressFill').style.width = ((currentStep - 1) / TOTAL_STEPS * 100) + '%';
  for (let i = 1; i <= TOTAL_STEPS; i++) {
    const d = document.getElementById('dot' + i);
    d.className = 'step-dot' + (i === currentStep ? ' active' : i < currentStep ? ' done' : '');
    if (i < currentStep) d.textContent = '✓';
    else d.textContent = i;
  }
  document.getElementById('prevBtn').style.visibility = currentStep === 1 ? 'hidden' : 'visible';
  const nextBtn = document.getElementById('nextBtn');
  if (currentStep === TOTAL_STEPS) { nextBtn.textContent = 'Submit ✓'; }
  else if (currentStep === 5) { document.getElementById('navBtns').style.display = 'none'; }
  else { nextBtn.textContent = 'Next →'; }
}

function showStep(n) {
  document.querySelectorAll('.step').forEach(s => s.classList.add('hidden'));
  document.getElementById('step' + n).classList.remove('hidden');
}

function validateStep() {
  const errs = { firstName:'firstNameErr', lastName:'lastNameErr', dob:'dobErr',
                  email:'emailErr', phone:'phoneErr', city:'cityErr',
                  username:'usernameErr', password:'passwordErr', role:'roleErr' };
  let valid = true;

  function check(id, errId, fn) {
    const el = document.getElementById(id);
    if (!el) return;
    const msg = fn(el.value);
    document.getElementById(errId).textContent = msg;
    el.classList.toggle('invalid', !!msg);
    if (msg) valid = false;
  }

  if (currentStep === 1) {
    check('firstName','firstNameErr', v => v.trim().length >= 2 ? '' : 'Required (min 2 chars)');
    check('lastName','lastNameErr', v => v.trim().length >= 2 ? '' : 'Required (min 2 chars)');
    check('dob','dobErr', v => v ? '' : 'Date of birth is required');
  } else if (currentStep === 2) {
    check('email','emailErr', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Valid email required');
    check('phone','phoneErr', v => /^\d{10}$/.test(v.replace(/\s/g,'')) ? '' : '10-digit phone required');
    check('city','cityErr', v => v.trim() ? '' : 'City is required');
  } else if (currentStep === 3) {
    check('username','usernameErr', v => v.trim().length >= 3 ? '' : 'Min 3 characters');
    check('password','passwordErr', v => v.length >= 8 ? '' : 'Min 8 characters');
    check('role','roleErr', v => v ? '' : 'Please select a role');
  }
  return valid;
}

function collectData() {
  const fields = ['firstName','lastName','dob','email','phone','city','username','role'];
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) data[id] = el.value;
  });
}

function renderReview() {
  collectData();
  const labels = { firstName:'First Name', lastName:'Last Name', dob:'Date of Birth',
    email:'Email', phone:'Phone', city:'City', username:'Username', role:'Role' };
  document.getElementById('reviewGrid').innerHTML = Object.entries(labels).map(([k, label]) => `
    <div class="review-item">
      <div class="review-label">${label}</div>
      <div class="review-value">${data[k] || '—'}</div>
    </div>
  `).join('');
}

function nextStep() {
  if (!validateStep()) return;
  if (currentStep < TOTAL_STEPS) {
    currentStep++;
    if (currentStep === TOTAL_STEPS) renderReview();
    showStep(currentStep);
    updateProgress();
  } else {
    // Submit
    showStep(5);
    document.getElementById('navBtns').style.display = 'none';
    document.getElementById('progressFill').style.width = '100%';
  }
}

function prevStep() {
  if (currentStep > 1) { currentStep--; showStep(currentStep); updateProgress(); }
}

function restart() {
  currentStep = 1;
  document.getElementById('multiForm').reset();
  document.getElementById('navBtns').style.display = 'flex';
  showStep(1);
  renderIndicators();
  updateProgress();
}

init();
