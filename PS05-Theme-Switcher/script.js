let theme = localStorage.theme || 
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
document.body.className = theme;

function toggle() {
    theme = theme === "light" ? "dark" : "light";
    document.body.className = theme;
    localStorage.theme = theme;
}
