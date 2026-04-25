const lineCtx = document.getElementById('lineChart').getContext('2d');
const barCtx = document.getElementById('barChart').getContext('2d');
const pieCtx = document.getElementById('pieChart').getContext('2d');

const commonOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
        y: { grid: { display: false } },
        x: { grid: { display: false } }
    }
};

// Line Chart
new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            data: [22, 24, 21, 27, 30, 28],
            borderColor: '#000',
            backgroundColor: '#000',
            tension: 0.3,
            fill: false
        }]
    },
    options: commonOptions
});

// Bar Chart
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['City A', 'City B', 'City C'],
        datasets: [{
            data: [120, 95, 150],
            backgroundColor: '#000'
        }]
    },
    options: commonOptions
});

// Pie Chart
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Sunny', 'Cloudy', 'Rainy'],
        datasets: [{
            data: [60, 25, 15],
            backgroundColor: ['#000', '#666', '#ccc']
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } }
    }
});
