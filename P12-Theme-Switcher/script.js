// Read saved theme from localStorage
const saved = localStorage.getItem('theme') || 'dark';
applyTheme(saved);

document.getElementById('themeToggle').addEventListener('click', () => {
  const isLight = document.body.classList.contains('light');
  applyTheme(isLight ? 'dark' : 'light');
});

function applyTheme(theme) {
  document.body.classList.toggle('light', theme === 'light');
  document.getElementById('themeIcon').textContent  = theme === 'light' ? '☀️' : '🌙';
  document.getElementById('themeLabel').textContent = theme === 'light' ? 'Light Mode' : 'Dark Mode';
  document.getElementById('currentThemeDisplay').textContent = theme === 'light' ? 'Light' : 'Dark';
  localStorage.setItem('theme', theme);
}
