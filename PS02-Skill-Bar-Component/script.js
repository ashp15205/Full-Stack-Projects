const skillNameInput = document.getElementById('skillName');
const skillValueInput = document.getElementById('skillValue');
const addSkillBtn = document.getElementById('addSkillBtn');
const skillsContainer = document.getElementById('skillsContainer');

let skills = [
    { id: 1, name: 'Frontend Development', percent: 90 },
    { id: 2, name: 'UI / UX Design', percent: 75 },
    { id: 3, name: 'Node.js Backend', percent: 65 }
];

function createSkillItem(skill) {
    const div = document.createElement('div');
    div.className = 'skill-item';
    div.innerHTML = `
        <div class="skill-info">
            <span>${skill.name}</span>
            <span>${skill.percent}%</span>
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
        skillsContainer.appendChild(createSkillItem(skill));
    });
}

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
