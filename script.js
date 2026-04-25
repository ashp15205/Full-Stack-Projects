const projectsData = [
  {
    id: "PS01",
    title: "Digital Glossary",
    folder: "PS01-Digital-Glossary",
    group: "UI + DOM + Interactivity",
    desc: "Displays HTML formatting tags in a table and filters them dynamically with a search bar.",
  },
  {
    id: "PS02",
    title: "Skill Bar Component",
    folder: "PS02-Skill-Bar-Component",
    group: "UI + DOM + Interactivity",
    desc: "Reusable skill bar component that accepts a skill name and proficiency percentage.",
  },
  {
    id: "PS03",
    title: "Pricing Toggle Interface",
    folder: "PS03-Pricing-Toggle-Interface",
    group: "UI + DOM + Interactivity",
    desc: "Switches between monthly and yearly subscription plans and updates prices dynamically.",
  },
  {
    id: "PS04",
    title: "Real-Time Profile Previewer",
    folder: "PS04-Real-Time-Profile-Previewer",
    group: "UI + DOM + Interactivity",
    desc: "Reflects user input instantly inside a live profile card layout.",
  },
  {
    id: "PS05",
    title: "Theme Switcher",
    folder: "PS05-Theme-Switcher",
    group: "UI + DOM + Interactivity",
    desc: "Toggles dark and light mode while saving the preference with localStorage.",
  },
  {
    id: "PS06",
    title: "Product Gallery",
    folder: "PS06-Product-Gallery",
    group: "UI + DOM + Interactivity",
    desc: "Builds product cards from JSON data and includes a Buy Now interaction.",
  },
  {
    id: "PS07",
    title: "Responsive Navigation Bar",
    folder: "PS07-Responsive-Navigation-Bar",
    group: "UI + DOM + Interactivity",
    desc: "Responsive navigation with a dropdown menu built using HTML, CSS, and JavaScript.",
  },
  {
    id: "PS08",
    title: "Photo Gallery",
    folder: "PS08-Photo-Gallery",
    group: "UI + DOM + Interactivity",
    desc: "Six-image gallery with hover effects such as zoom or overlay.",
  },
  {
    id: "PS09",
    title: "Drag-and-Drop List",
    folder: "PS09-Drag-and-Drop-List",
    group: "UI + DOM + Interactivity",
    desc: "Lets users reorder list items dynamically with drag-and-drop.",
  },
  {
    id: "PS10",
    title: "FAQ Accordion",
    folder: "PS10-FAQ-Accordion",
    group: "UI + DOM + Interactivity",
    desc: "Expands and collapses answer sections when a question is clicked.",
  },
  {
    id: "PS11",
    title: "Shopping Cart System",
    folder: "PS11-Shopping-Cart-System",
    group: "Logic-Based JavaScript Problems",
    desc: "Updates quantities and total price automatically as cart values change.",
  },
  {
    id: "PS12",
    title: "Basic Calculator",
    folder: "PS12-Basic-Calculator",
    group: "Logic-Based JavaScript Problems",
    desc: "Performs addition, subtraction, multiplication, and division.",
  },
  {
    id: "PS13",
    title: "To-Do List Application",
    folder: "PS13-To-Do-List-Application",
    group: "Logic-Based JavaScript Problems",
    desc: "Allows users to add and delete tasks dynamically.",
  },
  {
    id: "PS14",
    title: "String Operations",
    folder: "PS14-String-Operations",
    group: "Logic-Based JavaScript Problems",
    desc: "Reverses text, changes case, and calculates string length.",
  },
  {
    id: "PS15",
    title: "Stopwatch Application",
    folder: "PS15-Stopwatch-Application",
    group: "Logic-Based JavaScript Problems",
    desc: "Includes start, stop, and reset functionality.",
  },
  {
    id: "PS16",
    title: "Quiz Application",
    folder: "PS16-Quiz-Application",
    group: "Logic-Based JavaScript Problems",
    desc: "Shows multiple questions and calculates the final score after submission.",
  },
  {
    id: "PS17",
    title: "Product Filtering System",
    folder: "PS17-Product-Filtering-System",
    group: "Logic-Based JavaScript Problems",
    desc: "Filters products based on category selection.",
  },
  {
    id: "PS18",
    title: "Notes Application",
    folder: "PS18-Notes-Application",
    group: "Logic-Based JavaScript Problems",
    desc: "Adds and deletes notes with localStorage persistence.",
  },
  {
    id: "PS19",
    title: "Structured Resume Webpage",
    folder: "PS19-Structured-Resume-Webpage",
    group: "HTML + CSS Design-Based",
    desc: "Includes objective, education, skills, projects, and contact sections.",
  },
  {
    id: "PS20",
    title: "Student Registration Form",
    folder: "PS20-Student-Registration-Form",
    group: "HTML + CSS Design-Based",
    desc: "Styled student form with fields like name, email, gender, course, and address.",
  },
  {
    id: "PS21",
    title: "Weekly Timetable",
    folder: "PS21-Weekly-Timetable",
    group: "HTML + CSS Design-Based",
    desc: "HTML table layout using rowspan and colspan correctly.",
  },
  {
    id: "PS22",
    title: "Blog Layout",
    folder: "PS22-Blog-Layout",
    group: "HTML + CSS Design-Based",
    desc: "Classic blog page with header, sidebar, content area, and footer.",
  },
  {
    id: "PS23",
    title: "Personal Portfolio Webpage",
    folder: "PS23-Personal-Portfolio-Webpage",
    group: "HTML + CSS Design-Based",
    desc: "Portfolio page with About, Skills, Projects, and Contact sections.",
  },
  {
    id: "PS24",
    title: "Image Gallery with Category Filtering",
    folder: "PS24-Image-Gallery-Category-Filtering",
    group: "HTML + CSS Design-Based",
    desc: "Image gallery that filters items by category using JavaScript.",
  },
  {
    id: "PS25",
    title: "Bar Chart for Departments",
    folder: "PS25-Bar-Chart-Departments",
    group: "Data Visualization / Charts",
    desc: "Visualizes the number of students in different departments with a bar chart.",
  },
  {
    id: "PS26",
    title: "Attendance Pie / Doughnut Chart",
    folder: "PS26-Attendance-Doughnut-Chart",
    group: "Data Visualization / Charts",
    desc: "Represents attendance distribution across present, absent, and leave.",
  },
  {
    id: "PS27",
    title: "Weather Dashboard",
    folder: "PS27-Weather-Dashboard",
    group: "Data Visualization / Charts",
    desc: "Displays weekly weather data using line, bar, and pie charts.",
  },
  {
    id: "PS28",
    title: "Student Performance Charts",
    folder: "PS28-Student-Performance-Charts",
    group: "Data Visualization / Charts",
    desc: "Visualizes marks, attendance, and progress using multiple chart types.",
  },
  {
    id: "PS29",
    title: "Student Record Management System",
    folder: "PS29-Student-Record-Management-System",
    group: "Backend / Database",
    desc: "MongoDB-backed CRUD app to store and manage student details.",
  },
  {
    id: "PS30",
    title: "Event Registration System",
    folder: "PS30-Event-Registration-System",
    group: "Backend / Database",
    desc: "MongoDB-backed CRUD app to manage participant event registrations.",
  },
];

const grid = document.getElementById("projectsGrid");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");
const resultCount = document.getElementById("resultCount");
const scrollToTopBtn = document.getElementById("scrollToTop");

let currentFilter = "All";
let searchTerm = "";

function toGroupClass(group) {
  return `group-${group.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

function renderProjects() {
  grid.innerHTML = "";

  const filtered = projectsData.filter((project) => {
    const term = searchTerm.toLowerCase();
    const matchesFilter = currentFilter === "All" || project.group === currentFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(term) ||
      project.id.toLowerCase().includes(term) ||
      project.desc.toLowerCase().includes(term);

    return matchesFilter && matchesSearch;
  });

  resultCount.textContent = `Showing ${filtered.length} projects`;

  filtered.forEach((project, index) => {
    const card = document.createElement("a");
    card.href = `./${project.folder}/index.html`;
    card.className = "card";
    card.style.animationDelay = `${index * 0.03}s`;

    card.innerHTML = `
      <div class="card-header">
        <span class="ps-id">${project.id}</span>
        <span class="difficulty-badge ${toGroupClass(project.group)}">${project.group}</span>
      </div>
      <h3 class="card-title">${project.title}</h3>
      <p class="card-desc">${project.desc}</p>
      <div class="btn-open">View Project →</div>
    `;

    grid.appendChild(card);
  });
}

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderProjects();
  });
});

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value.trim();
  renderProjects();
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.remove("hidden");
  } else {
    scrollToTopBtn.classList.add("hidden");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Focus search on '/' key
document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        searchInput.focus();
    }
});

function refreshStarsBadge() {
  const badge = document.getElementById("githubStarsBadge");
  if (!badge) return;

  const baseUrl =
    "https://img.shields.io/github/stars/ashp15205/Full-Stack-Projects?style=for-the-badge&color=2ea043&logo=github&logoColor=white&cacheSeconds=60";
  badge.src = `${baseUrl}&t=${Date.now()}`;
}

renderProjects();
setInterval(refreshStarsBadge, 60000);
