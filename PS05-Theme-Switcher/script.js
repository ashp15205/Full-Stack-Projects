const themeToggle = document.getElementById('themeToggle');
const btnText = document.getElementById('btnText');
const themeTitle = document.getElementById('themeTitle');

const THEME_KEY = 'ps05-theme';

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    btnText.textContent = isDark ? 'Enable Light Mode' : 'Enable Dark Mode';
    themeTitle.textContent = isDark ? 'Dark Minimalist Theme' : 'Minimalist Theme Switcher';
    localStorage.setItem(THEME_KEY, theme);
}

const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
});
