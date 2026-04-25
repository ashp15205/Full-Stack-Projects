const nameInput = document.getElementById('nameInput');
const jobInput = document.getElementById('jobInput');
const bioInput = document.getElementById('bioInput');

const nameDisplay = document.getElementById('nameDisplay');
const jobDisplay = document.getElementById('jobDisplay');
const bioDisplay = document.getElementById('bioDisplay');
const avatar = document.querySelector('.avatar');

function updateAvatar(name) {
    if (!name) {
        avatar.textContent = '??';
        return;
    }
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    avatar.textContent = initials || name[0].toUpperCase();
}

nameInput.addEventListener('input', (e) => {
    const val = e.target.value;
    nameDisplay.textContent = val || 'John Doe';
    updateAvatar(val);
});

jobInput.addEventListener('input', (e) => {
    jobDisplay.textContent = e.target.value || 'Web Developer';
});

bioInput.addEventListener('input', (e) => {
    bioDisplay.textContent = e.target.value || 'Your bio will appear here as you type in the form.';
});
