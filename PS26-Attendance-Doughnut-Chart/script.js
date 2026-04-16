const ctx = document.getElementById('attendanceChart').getContext('2d');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Present', 'Absent', 'Late'],
        datasets: [{
            data: [75, 15, 10],
            backgroundColor: [
                '#000000', // Present
                '#666666', // Absent
                '#cccccc'  // Late
            ],
            borderColor: '#ffffff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        cutout: '70%'
    }
});
