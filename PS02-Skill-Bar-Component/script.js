function addSkill() {
    let n = document.getElementById("name").value.trim();
    let p = document.getElementById("percent").value;
    let skills = document.getElementById("skills");

    // validation
    if (!n) {
        alert("Enter skill name");
        return;
    }

    if (p === "" || isNaN(p) || p < 0 || p > 100) {
        alert("Enter percentage between 0 and 100");
        return;
    }

    // add skill
    skills.innerHTML += `
        <div class="skill">
            <b>${n}</b>
            <div class="bar">
                <div class="fill" style="width:${p}%">${p}%</div>
            </div>
        </div>
    `;

    // clear input
    document.getElementById("name").value = "";
    document.getElementById("percent").value = "";
}