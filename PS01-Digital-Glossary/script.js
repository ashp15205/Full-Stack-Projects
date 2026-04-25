const glossaryData = [
    { tag: "<b>", category: "Formatting", desc: "Defines bold text without extra importance.", example: "<b>Bold text</b>" },
    { tag: "<strong>", category: "Formatting", desc: "Defines text with strong importance.", example: "<strong>Important text</strong>" },
    { tag: "<i>", category: "Formatting", desc: "Defines a part of text in an alternate voice.", example: "<i>Italic text</i>" },
    { tag: "<em>", category: "Formatting", desc: "Defines emphasized text.", example: "<em>Emphasized text</em>" },
    { tag: "<div>", category: "Layout", desc: "Defines a division or a section in a document.", example: "<div>A block container</div>" },
    { tag: "<p>", category: "Layout", desc: "Defines a paragraph.", example: "<p>A paragraph of text</p>" },
    { tag: "<span>", category: "Layout", desc: "Defines a container for inline content.", example: "<span>Inline text</span>" },
    { tag: "<h1>", category: "Heading", desc: "Defines a level 1 HTML heading.", example: "<h1>Main Heading</h1>" },
    { tag: "<h3>", category: "Heading", desc: "Defines a level 3 HTML heading.", example: "<h3>Section Heading</h3>" },
    { tag: "<blockquote>", category: "Semantic", desc: "Defines a section that is quoted from another source.", example: "<blockquote>A quoted passage</blockquote>" },
    { tag: "<code>", category: "Semantic", desc: "Defines a piece of computer code.", example: "<code>const x = 10;</code>" },
    { tag: "<hr>", category: "Misc", desc: "Defines a thematic break (horizontal line).", example: "<hr>" },
    { tag: "<br>", category: "Misc", desc: "Defines a single line break.", example: "Line 1<br>Line 2" }
];

const tbody = document.getElementById('glossaryBody');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');

function renderTable(data) {
    tbody.innerHTML = '';
    
    if (data.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }
    
    noResults.classList.add('hidden');
    
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><code>${item.tag.replace('<', '&lt;').replace('>', '&gt;')}</code></td>
            <td>${item.category}</td>
            <td>${item.desc}</td>
            <td class="example-cell"></td>
        `;
        row.querySelector('.example-cell').innerHTML = item.example;
        tbody.appendChild(row);
    });
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = glossaryData.filter(item => 
        item.tag.toLowerCase().includes(term) || 
        item.desc.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
    );
    renderTable(filtered);
});

renderTable(glossaryData);
