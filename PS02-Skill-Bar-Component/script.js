const skillNameInput = document.getElementById('skillName');
const skillValueInput = document.getElementById('skillValue');
const addSkillBtn = document.getElementById('addSkillBtn');
const skillsContainer = document.getElementById('skillsContainer');

let skills = [
];

function createSkillItem(skill) {
    const div = document.createElement('div');
    div.className = 'skill-item';
    div.innerHTML = `
        <div class="skill-info">
            <span>${skill.name}</span>
            <div class="skill-actions">
                <span>${skill.percent}%</span>
                <button class="delete-skill-btn" type="button" data-id="${skill.id}">Delete</button>
            </div>
        </div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: 0%"></div>
        </div>
    `;
    
    setTimeout(() => {
        const fill = div.querySelector('.progress-fill');
        fill.style.width = `${skill.percent}%`;
    }, 100);
    
    return div;
}

function renderSkills() {
    skillsContainer.innerHTML = '';
    skills.forEach(skill => {
        const skillElement = createSkillItem(skill);
        skillsContainer.appendChild(skillElement);
    });
}

skillsContainer.addEventListener('click', (event) => {
    const deleteButton = event.target.closest('.delete-skill-btn');
    if (!deleteButton) return;

    const skillId = Number(deleteButton.dataset.id);
    skills = skills.filter(skill => skill.id !== skillId);
    renderSkills();
});

addSkillBtn.addEventListener('click', () => {
    const name = skillNameInput.value.trim();
    const percent = parseInt(skillValueInput.value);
    
    if (name && !isNaN(percent) && percent >= 0 && percent <= 100) {
        const newSkill = {
            id: Date.now(),
            name,
            percent
        };
        skills.push(newSkill);
        renderSkills();
        skillNameInput.value = '';
        skillValueInput.value = '';
    } else {
        alert('Please enter a valid skill name and percentage (0-100).');
    }
});

renderSkills();
