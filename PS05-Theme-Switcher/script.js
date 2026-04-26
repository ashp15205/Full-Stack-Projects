let theme = localStorage.theme || "light";
document.body.className = theme;

function toggle() {
    theme = theme === "light" ? "dark" : "light";
    document.body.className = theme;
    localStorage.theme = theme;
}