const pages = {
  home: `<h1>👋 Hello, I'm a Developer</h1><p>Welcome to my single page portfolio. Navigation happens without page reloads using hash-based client-side routing.</p>`,
  projects: `<h1>🚀 My Projects</h1><div class="proj"><div class="pc">📋 Todo App</div><div class="pc">🛒 Cart Logic</div><div class="pc">📊 Dashboard</div></div>`,
  contact: `<h1>📬 Contact Me</h1><input placeholder="Your Name"><input placeholder="Email"><textarea rows="3" placeholder="Message..."></textarea><button onclick="alert('Sent!')">Send Message</button>`
};

function go(page) { document.getElementById("view").innerHTML = pages[page] || pages.home; }

window.addEventListener("hashchange", () => go(location.hash.slice(1)));
go(location.hash.slice(1) || "home");
