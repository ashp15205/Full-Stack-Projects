const glossaryData = [
    { tag: "<b>", category: "Formatting", desc: "Defines bold text without extra importance." },
    { tag: "<strong>", category: "Formatting", desc: "Defines text with strong importance." },
    { tag: "<i>", category: "Formatting", desc: "Defines a part of text in an alternate voice." },
    { tag: "<em>", category: "Formatting", desc: "Defines emphasized text." },
    { tag: "<div>", category: "Layout", desc: "Defines a division or a section in a document." },
    { tag: "<p>", category: "Layout", desc: "Defines a paragraph." },
    { tag: "<span>", category: "Layout", desc: "Defines a container for inline content." },
    { tag: "<h1>", category: "Heading", desc: "Defines a level 1 HTML heading." },
    { tag: "<h3>", category: "Heading", desc: "Defines a level 3 HTML heading." },
    { tag: "<blockquote>", category: "Semantic", desc: "Defines a section that is quoted from another source." },
    { tag: "<code>", category: "Semantic", desc: "Defines a piece of computer code." },
    { tag: "<hr>", category: "Misc", desc: "Defines a thematic break (horizontal line)." },
    { tag: "<br>", category: "Misc", desc: "Defines a single line break." }
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
        `;
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
