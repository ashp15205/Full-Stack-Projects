const validators = {
  name: { el: document.getElementById('name'), errEl: document.getElementById('nameErr'),
    fn: v => v.trim().length >= 2 ? '' : 'Name must be at least 2 characters' },
  email: { el: document.getElementById('email'), errEl: document.getElementById('emailErr'),
    fn: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Enter a valid email address' },
  phone: { el: document.getElementById('phone'), errEl: document.getElementById('phoneErr'),
    fn: v => /^\d{10}$/.test(v.replace(/\s/g,'')) ? '' : 'Enter a valid 10-digit phone number' },
  dob: { el: document.getElementById('dob'), errEl: document.getElementById('dobErr'),
    fn: v => { if (!v) return 'Date of birth is required';
      const age = (Date.now() - new Date(v)) / (365.25 * 24 * 3600 * 1000);
      return age >= 13 ? '' : 'You must be at least 13 years old'; } },
};
Object.entries(validators).forEach(([key, vld]) => {
  vld.el.addEventListener('input', () => validateField(vld));
});
function validateField(vld) {
  const msg = vld.fn(vld.el.value);
  vld.errEl.textContent = msg;
  vld.el.classList.toggle('valid', !msg);
  vld.el.classList.toggle('invalid', !!msg);
  return !msg;
}
const pwdEl = document.getElementById('password');
const pwdErr = document.getElementById('passwordErr');
const strengthFill = document.getElementById('strengthFill');
const strengthLabel = document.getElementById('strengthLabel');
pwdEl.addEventListener('input', () => {
  const v = pwdEl.value;
  let score = 0;
  if (v.length >= 8) score++;
  if (/[A-Z]/.test(v)) score++;
  if (/[0-9]/.test(v)) score++;
  if (/[^A-Za-z0-9]/.test(v)) score++;
  const levels = [
    {w:'0%', color:'#f72585', label:''},
    {w:'25%', color:'#f72585', label:'Weak'},
    {w:'50%', color:'#fbbf24', label:'Fair'},
    {w:'75%', color:'#a78bfa', label:'Good'},
    {w:'100%', color:'#4ade80', label:'Strong'},
  ];
  strengthFill.style.width = levels[score].w;
  strengthFill.style.background = levels[score].color;
  strengthLabel.textContent = levels[score].label;
  strengthLabel.style.color = levels[score].color;
  const err = v.length >= 8 ? '' : 'Password must be at least 8 characters';
  pwdErr.textContent = err;
  pwdEl.classList.toggle('valid', !err);
  pwdEl.classList.toggle('invalid', !!err);
});
const confirmEl = document.getElementById('confirm');
const confirmErr = document.getElementById('confirmErr');
confirmEl.addEventListener('input', () => {
  const match = confirmEl.value === pwdEl.value;
  confirmErr.textContent = match ? '' : 'Passwords do not match';
  confirmEl.classList.toggle('valid', match);
  confirmEl.classList.toggle('invalid', !match);
});
document.getElementById('togglePwd').addEventListener('click', () => {
  pwdEl.type = pwdEl.type === 'password' ? 'text' : 'password';
});
document.getElementById('regForm').addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;
  Object.values(validators).forEach(v => { if (!validateField(v)) valid = false; });
  if (!pwdEl.value || pwdEl.value.length < 8) { pwdErr.textContent = 'Password must be at least 8 characters'; valid = false; }
  if (confirmEl.value !== pwdEl.value) { confirmErr.textContent = 'Passwords do not match'; valid = false; }
  if (!document.getElementById('terms').checked) { document.getElementById('termsErr').textContent = 'You must accept the terms'; valid = false; }
  else { document.getElementById('termsErr').textContent = ''; }
  if (valid) {
    document.getElementById('successMsg').classList.remove('hidden');
    document.getElementById('regForm').reset();
    strengthFill.style.width = '0';
    strengthLabel.textContent = '';
    document.querySelectorAll('.valid, .invalid').forEach(el => { el.classList.remove('valid','invalid'); });
  }
});