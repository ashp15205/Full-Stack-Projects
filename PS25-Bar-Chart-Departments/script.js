const ctx = document.getElementById('barChart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Engineering', 'Architecture', 'Design', 'Science', 'Arts'],
        datasets: [{
            label: 'Headcount',
            data: [450, 210, 180, 320, 150],
            backgroundColor: '#000000',
            borderColor: '#000000',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});
