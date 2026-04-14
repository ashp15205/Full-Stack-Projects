const projectsData = [
    {
        "id": "PS01",
        "title": "Tag Filter",
        "folder": "PS01-Tag-Filter",
        "difficulty": "Simple",
        "desc": "An interactive frontend UI component focused on mastering pure DOM manipulation for Tag Filter."
    },
    {
        "id": "PS02",
        "title": "Skill Bar",
        "folder": "PS02-Skill-Bar",
        "difficulty": "Simple",
        "desc": "An interactive frontend UI component focused on mastering pure DOM manipulation for Skill Bar."
    },
    {
        "id": "PS03",
        "title": "Subscription Toggle",
        "folder": "PS03-Subscription-Toggle",
        "difficulty": "Simple",
        "desc": "An interactive frontend UI component focused on mastering pure DOM manipulation for Subscription Toggle."
    },
    {
        "id": "PS04",
        "title": "MongoDB Schema",
        "folder": "PS04-MongoDB-Schema",
        "difficulty": "Hard",
        "desc": "MongoDB schema for Product & Category with a GET route to fetch all items."
    },
    {
        "id": "PS05",
        "title": "Profile Previewer",
        "folder": "PS05-Profile-Previewer",
        "difficulty": "Simple",
        "desc": "Form inputs instantly reflect on a Business Card UI on the same page."
    },
    {
        "id": "PS06",
        "title": "Line Chart",
        "folder": "PS06-Line-Chart",
        "difficulty": "Medium",
        "desc": "A beautiful visual analytics dashboard actively rendering responsive Line Chart data metrics."
    },
    {
        "id": "PS07",
        "title": "Travel Agency API",
        "folder": "PS07-Travel-Agency-API",
        "difficulty": "Hard",
        "desc": "Express API that performs Add and View operations for a travel agency lead list using MongoDB."
    },
    {
        "id": "PS08",
        "title": "Qty Selector",
        "folder": "PS08-Qty-Selector",
        "difficulty": "Simple",
        "desc": "Plus/Minus quantity selector that updates total price automatically."
    },
    {
        "id": "PS09",
        "title": "SPA Portfolio",
        "folder": "PS09-SPA-Portfolio",
        "difficulty": "Medium",
        "desc": "A highly polished, fully responsive modern web interface tailored for digital showcases."
    },
    {
        "id": "PS10",
        "title": "Bitcoin Dashboard",
        "folder": "PS10-Bitcoin-Dashboard",
        "difficulty": "Medium",
        "desc": "Dashboard that fetches the current price of Bitcoin from a public API every 30 seconds."
    },
    {
        "id": "PS11",
        "title": "Insurance Filter",
        "folder": "PS11-Insurance-Filter",
        "difficulty": "Hard",
        "desc": "Filter Insurance Policies from MongoDB based on premium price limit."
    },
    {
        "id": "PS12",
        "title": "Theme Toggle",
        "folder": "PS12-Theme-Toggle",
        "difficulty": "Simple",
        "desc": "An interactive frontend UI component focused on mastering pure DOM manipulation for Theme Toggle."
    },
    {
        "id": "PS13",
        "title": "JSON Cards",
        "folder": "PS13-JSON-Cards",
        "difficulty": "Simple",
        "desc": "An interactive frontend UI component focused on mastering pure DOM manipulation for JSON Cards."
    },
    {
        "id": "PS14",
        "title": "D3 Bar Chart",
        "folder": "PS14-D3-Bar-Chart",
        "difficulty": "Medium",
        "desc": "Bar Chart showing students enrolled in different college departments."
    },
    {
        "id": "PS15",
        "title": "Login Validation",
        "folder": "PS15-Login-Validation",
        "difficulty": "Simple",
        "desc": "A comprehensive frontend interface that implements strict user input validation and security flows."
    },
    {
        "id": "PS16",
        "title": "Tag Category Filter",
        "folder": "PS16-Tag-Category-Filter",
        "difficulty": "Simple",
        "desc": "Filter and render HTML formatting tags in a table by Inline/Block category."
    },
    {
        "id": "PS17",
        "title": "Form Previewer",
        "folder": "PS17-Form-Previewer",
        "difficulty": "Simple",
        "desc": "A comprehensive frontend interface that implements strict user input validation and security flows."
    },
    {
        "id": "PS18",
        "title": "Flash Sale MongoDB",
        "folder": "PS18-Flash-Sale-MongoDB",
        "difficulty": "Hard",
        "desc": "MongoDB schema for Flash Sale with variable attributes (size, color). GET route by nested attribute."
    },
    {
        "id": "PS19",
        "title": "Stock Polar Chart",
        "folder": "PS19-Stock-Polar-Chart",
        "difficulty": "Medium",
        "desc": "Visualize stock levels using a Polar Area chart with an interactive \"sell\" button."
    },
    {
        "id": "PS20",
        "title": "Coupon Validator",
        "folder": "PS20-Coupon-Validator",
        "difficulty": "Simple",
        "desc": "An interactive frontend UI component focused on mastering pure DOM manipulation for Coupon Validator."
    },
    {
        "id": "PS21",
        "title": "Weather BarChart",
        "folder": "PS21-Weather-BarChart",
        "difficulty": "Medium",
        "desc": "Fetch weather data for two cities simultaneously and visualize temperature difference using a grouped Bar Chart."
    },
    {
        "id": "PS22",
        "title": "Modular UI",
        "folder": "PS22-Modular-UI",
        "difficulty": "Simple",
        "desc": "Modular UI components (Button, Input, Card) assembled as a landing page."
    },
    {
        "id": "PS23",
        "title": "Soft Delete",
        "folder": "PS23-Soft-Delete",
        "difficulty": "Hard",
        "desc": "Express API where deleting only sets `isActive: false`. Toggle view between Active and Archived."
    },
    {
        "id": "PS24",
        "title": "Skill Radar",
        "folder": "PS24-Skill-Radar",
        "difficulty": "Medium",
        "desc": "Radar Chart where \"Level Up\" buttons increase data points dynamically."
    },
    {
        "id": "PS25",
        "title": "Multi Step",
        "folder": "PS25-Multi-Step",
        "difficulty": "Simple",
        "desc": "An interactive frontend UI component focused on mastering pure DOM manipulation for Multi Step."
    },
    {
        "id": "PS26",
        "title": "Gallery Query",
        "folder": "PS26-Gallery-Query",
        "difficulty": "Medium",
        "desc": "Category filter updates `?cat=shoes` in the URL and filters the gallery."
    },
    {
        "id": "PS27",
        "title": "Taskboard Pie",
        "folder": "PS27-Taskboard-Pie",
        "difficulty": "Medium",
        "desc": "Kanban board (To-do/Doing/Done) + live Pie Chart of task counts per stage."
    },
    {
        "id": "PS28",
        "title": "API Key",
        "folder": "PS28-API-Key",
        "difficulty": "Hard",
        "desc": "Express server that serves data only if the correct `x-api-key` header is present."
    },
    {
        "id": "PS29",
        "title": "MongoDB Avg",
        "folder": "PS29-MongoDB-Avg",
        "difficulty": "Hard",
        "desc": "Use `$match` and `$group` to calculate avg price of products via Express route."
    },
    {
        "id": "PS30",
        "title": "Sidebar",
        "folder": "PS30-Sidebar",
        "difficulty": "Simple",
        "desc": "Collapsible sidebar with hamburger menu linking to 3 data visualizations."
    },
    {
        "id": "PS31",
        "title": "Resume",
        "folder": "PS31-Resume",
        "difficulty": "Simple",
        "desc": "Structured resume HTML/CSS page with Career Objective, Education, Skills, Projects, Contact."
    },
    {
        "id": "PS32",
        "title": "Student Form",
        "folder": "PS32-Student-Form",
        "difficulty": "Simple",
        "desc": "A comprehensive frontend interface that implements strict user input validation and security flows."
    },
    {
        "id": "PS33",
        "title": "Timetable",
        "folder": "PS33-Timetable",
        "difficulty": "Simple",
        "desc": "Weekly class timetable using HTML table with `rowspan` and `colspan`."
    },
    {
        "id": "PS34",
        "title": "Blog",
        "folder": "PS34-Blog",
        "difficulty": "Simple",
        "desc": "Blog page with header, sidebar, content area, and footer using CSS layout techniques."
    },
    {
        "id": "PS35",
        "title": "Calculator",
        "folder": "PS35-Calculator",
        "difficulty": "Simple",
        "desc": "Basic calculator supporting +, −, ×, ÷ operations."
    },
    {
        "id": "PS36",
        "title": "Todo",
        "folder": "PS36-Todo",
        "difficulty": "Medium",
        "desc": "To-do list where users can add and delete tasks dynamically."
    },
    {
        "id": "PS37",
        "title": "String Ops",
        "folder": "PS37-String-Ops",
        "difficulty": "Simple",
        "desc": "An interactive frontend UI component focused on mastering pure DOM manipulation for String Ops."
    },
    {
        "id": "PS38",
        "title": "PieChart",
        "folder": "PS38-PieChart",
        "difficulty": "Medium",
        "desc": "A beautiful visual analytics dashboard actively rendering responsive PieChart data metrics."
    },
    {
        "id": "PS39",
        "title": "MongoDB Form",
        "folder": "PS39-MongoDB-Form",
        "difficulty": "Hard",
        "desc": "Register student (Name, Roll No, Branch) → store/display via MongoDB."
    },
    {
        "id": "PS40",
        "title": "Event DB",
        "folder": "PS40-Event-DB",
        "difficulty": "Hard",
        "desc": "Event Registration form (Name, Email, Event Name) stored in MongoDB."
    },
    {
        "id": "PS41",
        "title": "Enrollment",
        "folder": "PS41-Enrollment",
        "difficulty": "Hard",
        "desc": "Students enroll in courses (Student Name, Course Name) with full record management."
    },
    {
        "id": "PS42",
        "title": "Navbar",
        "folder": "PS42-Navbar",
        "difficulty": "Simple",
        "desc": "An interactive frontend UI component focused on mastering pure DOM manipulation for Navbar."
    },
    {
        "id": "PS43",
        "title": "Gallery",
        "folder": "PS43-Gallery",
        "difficulty": "Simple",
        "desc": "Photo gallery with at least 6 images and hover zoom effect."
    },
    {
        "id": "PS44",
        "title": "Dark Mode",
        "folder": "PS44-Dark-Mode",
        "difficulty": "Simple",
        "desc": "Dark/light mode toggle using CSS custom properties and localStorage."
    },
    {
        "id": "PS45",
        "title": "Login",
        "folder": "PS45-Login",
        "difficulty": "Simple",
        "desc": "Login form validating email format and password minimum length with real-time error messages."
    },
    {
        "id": "PS46",
        "title": "Stopwatch",
        "folder": "PS46-Stopwatch",
        "difficulty": "Simple",
        "desc": "An interactive frontend UI component focused on mastering pure DOM manipulation for Stopwatch."
    },
    {
        "id": "PS47",
        "title": "Product List",
        "folder": "PS47-Product-List",
        "difficulty": "Simple",
        "desc": "5-item product list filtered by category using JavaScript."
    },
    {
        "id": "PS48",
        "title": "Quiz",
        "folder": "PS48-Quiz",
        "difficulty": "Simple",
        "desc": "Quiz with 3–5 questions + final score display."
    },
    {
        "id": "PS49",
        "title": "Student Records",
        "folder": "PS49-Student-Records",
        "difficulty": "Medium",
        "desc": "Store and retrieve student Name + Roll No using localStorage."
    },
    {
        "id": "PS50",
        "title": "Feedback",
        "folder": "PS50-Feedback",
        "difficulty": "Medium",
        "desc": "A complete RESTful backend and database architecture mapped directly for the Feedback system."
    },
    {
        "id": "PS51",
        "title": "Drag Drop",
        "folder": "PS51-Drag-Drop",
        "difficulty": "Medium",
        "desc": "A completely responsive application leveraging asynchronous behaviors to power dynamic Drag Drop states."
    },
    {
        "id": "PS52",
        "title": "Glossary",
        "folder": "PS52-Glossary",
        "difficulty": "Simple",
        "desc": "Searchable table of HTML text formatting tags using DOM manipulation."
    },
    {
        "id": "PS53",
        "title": "Portfolio",
        "folder": "PS53-Portfolio",
        "difficulty": "Simple",
        "desc": "Portfolio page with reusable skill bar component using HTML, CSS, Bootstrap."
    },
    {
        "id": "PS54",
        "title": "Pricing",
        "folder": "PS54-Pricing",
        "difficulty": "Simple",
        "desc": "Pricing page with toggle switch to switch Monthly/Yearly prices dynamically."
    },
    {
        "id": "PS55",
        "title": "Weather Dashboard",
        "folder": "PS55-Weather-Dashboard",
        "difficulty": "Medium",
        "desc": "Weather dashboard visualizing weekly temperature data using Chart.js."
    },
    {
        "id": "PS56",
        "title": "Express DB",
        "folder": "PS56-Express-DB",
        "difficulty": "Hard",
        "desc": "Express API with MongoDB schemas for products and categories."
    },
    {
        "id": "PS57",
        "title": "Appointment",
        "folder": "PS57-Appointment",
        "difficulty": "Hard",
        "desc": "Appointment booking form (name, date, time) stored in MongoDB."
    },
    {
        "id": "PS58",
        "title": "Profile Preview",
        "folder": "PS58-Profile-Preview",
        "difficulty": "Simple",
        "desc": "Profile previewer that updates as the user types including avatar initial."
    },
    {
        "id": "PS59",
        "title": "Shopping Cart",
        "folder": "PS59-Shopping-Cart",
        "difficulty": "Medium",
        "desc": "Shopping cart with dynamic quantity and total price updates + coupon."
    },
    {
        "id": "PS60",
        "title": "SPA",
        "folder": "PS60-SPA",
        "difficulty": "Medium",
        "desc": "3-page portfolio navigating without refreshes using client-side routing."
    },
    {
        "id": "PS61",
        "title": "Pricing Card",
        "folder": "PS61-Pricing-Card",
        "difficulty": "Simple",
        "desc": "Pricing cards with monthly/yearly toggle switch."
    },
    {
        "id": "PS62",
        "title": "Line Chart",
        "folder": "PS62-Line-Chart",
        "difficulty": "Medium",
        "desc": "Line chart using static weekly weather data with Chart.js."
    },
    {
        "id": "PS63",
        "title": "Live Profile",
        "folder": "PS63-Live-Profile",
        "difficulty": "Simple",
        "desc": "Profile preview that updates live as user types."
    },
    {
        "id": "PS64",
        "title": "Product Qty",
        "folder": "PS64-Product-Qty",
        "difficulty": "Simple",
        "desc": "Product page with +/- qty buttons that updates total price in real-time."
    },
    {
        "id": "PS65",
        "title": "Todo App",
        "folder": "PS65-Todo-App",
        "difficulty": "Medium",
        "desc": "A highly practical CRUD application handling continuous, persistent user data modification."
    },
    {
        "id": "PS66",
        "title": "Responsive Nav",
        "folder": "PS66-Responsive-Nav",
        "difficulty": "Simple",
        "desc": "Responsive navbar with hamburger menu using Bootstrap."
    },
    {
        "id": "PS67",
        "title": "Quiz Score",
        "folder": "PS67-Quiz-Score",
        "difficulty": "Simple",
        "desc": "An interactive frontend UI component focused on mastering pure DOM manipulation for Quiz Score."
    },
    {
        "id": "PS68",
        "title": "Image Gallery",
        "folder": "PS68-Image-Gallery",
        "difficulty": "Simple",
        "desc": "Image gallery with category-based filtering."
    },
    {
        "id": "PS69",
        "title": "Notes",
        "folder": "PS69-Notes",
        "difficulty": "Medium",
        "desc": "A highly practical CRUD application handling continuous, persistent user data modification."
    },
    {
        "id": "PS70",
        "title": "HTML Tags",
        "folder": "PS70-HTML-Tags",
        "difficulty": "Simple",
        "desc": "Static page demonstrating all HTML text formatting tags."
    },
    {
        "id": "PS71",
        "title": "Portfolio Res",
        "folder": "PS71-Portfolio-Res",
        "difficulty": "Simple",
        "desc": "A highly polished, fully responsive modern web interface tailored for digital showcases."
    },
    {
        "id": "PS72",
        "title": "Mini Ecommerce",
        "folder": "PS72-Mini-Ecommerce",
        "difficulty": "Simple",
        "desc": "Display products with image, price, and Add to Cart button."
    },
    {
        "id": "PS73",
        "title": "Sales Dashboard",
        "folder": "PS73-Sales-Dashboard",
        "difficulty": "Medium",
        "desc": "A beautiful visual analytics dashboard actively rendering responsive Sales Dashboard data metrics."
    },
    {
        "id": "PS74",
        "title": "Homepage",
        "folder": "PS74-Homepage",
        "difficulty": "Simple",
        "desc": "Homepage with navbar, courses section, and contact form."
    },
    {
        "id": "PS75",
        "title": "Travel Packages",
        "folder": "PS75-Travel-Packages",
        "difficulty": "Simple",
        "desc": "Display travel packages with pricing and images."
    },
    {
        "id": "PS76",
        "title": "Appointment DB",
        "folder": "PS76-Appointment-DB",
        "difficulty": "Hard",
        "desc": "Form to book appointment (name, date, time) stored in MongoDB."
    },
    {
        "id": "PS77",
        "title": "Vehicle Portal",
        "folder": "PS77-Vehicle-Portal",
        "difficulty": "Hard",
        "desc": "Used Vehicle Sale Portal — add and view vehicle listings with data stored in MongoDB."
    },
    {
        "id": "PS78",
        "title": "Subject Charts",
        "folder": "PS78-Subject-Charts",
        "difficulty": "Medium",
        "desc": "Display subject-wise marks using Bar, Line, and Doughnut charts."
    },
    {
        "id": "PS79",
        "title": "Dynamic Cart",
        "folder": "PS79-Dynamic-Cart",
        "difficulty": "Hard",
        "desc": "Interactive cart where Total Price updates in real-time as users adjust quantities. Backend persistence via MongoDB."
    },
    {
        "id": "PS80",
        "title": "FAQ Accordion",
        "folder": "PS80-FAQ-Accordion",
        "difficulty": "Simple",
        "desc": "Expandable FAQ section."
    },
    {
        "id": "PS81",
        "title": "Modal Gallery",
        "folder": "PS81-Modal-Gallery",
        "difficulty": "Simple",
        "desc": "Image gallery in grid layout with modal preview on click."
    },
    {
        "id": "PS82",
        "title": "Todo List",
        "folder": "PS82-Todo-List",
        "difficulty": "Medium",
        "desc": "To-Do List that adds and deletes tasks dynamically."
    },
    {
        "id": "PS83",
        "title": "Contact Manager API",
        "folder": "PS83-Contact-Manager-API",
        "difficulty": "Hard",
        "desc": "Create API to add and fetch contacts via Express and MongoDB."
    },
    {
        "id": "PS84",
        "title": "MERN Student Registration",
        "folder": "PS84-MERN-Student-Registration",
        "difficulty": "Hard",
        "desc": "Full CRUD student registration system built on the MERN stack."
    }
];

// ----- UI Logic -----
  const grid = document.getElementById('projectsGrid');
  const searchInput = document.getElementById('searchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const noResults = document.getElementById('noResults');
  const resultCount = document.getElementById('resultCount');
  
  let currentFilter = 'All';
  let searchTerm = '';
  
  function renderProjects() {
      grid.innerHTML = '';
      
      const filtered = projectsData.filter(p => {
          const matchesFilter = currentFilter === 'All' || p.difficulty === currentFilter;
          const searchLower = searchTerm.toLowerCase();
          const matchesSearch = p.title.toLowerCase().includes(searchLower) || p.id.toLowerCase().includes(searchLower);
          return matchesFilter && matchesSearch;
      });
  
      resultCount.textContent = `Showing ${filtered.length} projects`;

      if(filtered.length === 0) {
          noResults.classList.remove('hidden');
      } else {
          noResults.classList.add('hidden');
      }
  
      filtered.forEach((p, index) => {
          const card = document.createElement('div');
          card.style.animationDelay = `${index * 0.03}s`;
          card.className = 'card';
          card.innerHTML = `
              <div>
                  <div class="card-header">
                      <span class="ps-id">${p.id}</span>
                      <span class="difficulty-badge difficulty-${p.difficulty}">${p.difficulty}</span>
                  </div>
                  <h3 class="card-title">${p.title}</h3>
                  <p class="card-desc">${p.desc}</p>
              </div>
              <div class="card-actions">
                  <a href="https://github.com/ashp15205/Full-Stack-Projects/tree/main/${p.folder}" target="_blank" class="btn-open">Open Project</a>
              </div>
          `;
          grid.appendChild(card);
      });
  }
  
  // Filtering
  filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentFilter = btn.dataset.filter;
          renderProjects();
      });
  });
  
  // Searching
  searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      renderProjects();
  });
  
  // Utility for hard projects to copy install commands
  function copySetup(btn, folder) {
      const cmd = `cd ${folder} && npm install && node server.js`;
      navigator.clipboard.writeText(cmd).then(() => {
          btn.classList.add('copied');
          setTimeout(() => btn.classList.remove('copied'), 2000);
      });
  }
  
  // Scroll to Top Logic
  const scrollToTopBtn = document.getElementById('scrollToTop');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          scrollToTopBtn.classList.remove('hidden');
      } else {
          scrollToTopBtn.classList.add('hidden');
      }
  });
  
  scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Initial Render
  renderProjects();
