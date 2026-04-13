const pages = {
  home: "<h1>Home Phase</h1><p>Welcome to the single page client routing setup! Click the links above to swap views without refreshing.</p>",
  about: "<h1>About Me</h1><p>I am a full-stack developer dedicated to minimal, performant application logic.</p>",
  work: "<h1>My Work</h1><p>Projects include Form validation, E-commerce hubs, and SPAs.</p>"
};
function route() { 
  let hash = window.location.hash.slice(1) || "home"; 
  document.getElementById("view").innerHTML = pages[hash] || "<h1>404</h1><p>Route not found</p>"; 
}
window.addEventListener("hashchange", route);
route();
