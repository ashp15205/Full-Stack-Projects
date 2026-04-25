const radarCtx = document.getElementById('radarChart').getContext('2d');
const polarCtx = document.getElementById('polarAreaChart').getContext('2d');
const barCtx = document.getElementById('horizontalBarChart').getContext('2d');

// Radar
new Chart(radarCtx, {
    type: 'radar',
    data: {
        labels: ['Code', 'Design', 'Math', 'Logic', 'Comms'],
        datasets: [{
            label: 'Skills',
            data: [90, 75, 85, 95, 70],
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderColor: '#000',
            pointBackgroundColor: '#000'
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            r: { angleLines: { display: false }, suggestedMin: 0 }
        }
    }
});

// Polar
new Chart(polarCtx, {
    type: 'polarArea',
    data: {
        labels: ['Tasks', 'Projects', 'Labs'],
        datasets: [{
            data: [45, 25, 30],
            backgroundColor: ['#000', '#666', '#ccc']
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } }
    }
});

// Horizontal Bar
new Chart(barCtx, {
    type: 'bar',
    indexAxis: 'y',
    data: {
        labels: ['S1', 'S2', 'S3', 'S4'],
        datasets: [{
            data: [8.5, 9.2, 8.8, 9.5],
            backgroundColor: '#000'
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            x: { beginAtZero: true, grid: { display: false } },
            y: { grid: { display: false } }
        }
    }
});
