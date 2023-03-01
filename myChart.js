const ctx = document.getElementById('myChart');
const earning = document.getElementById('earning');

new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Facebook', 'Youtube', 'Amazon',],
        datasets: [{
            label: '#Traffic source',
            data: [1270, 1840, 2500],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgb(255,159,64)'
            ],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'october', 'November', 'December'],
        datasets: [{
            label: 'Earning',
            data: [1223, 3089, 4530, 2344, 5632, 1233, 1400, 7622, 2454, 4760, 3423, 1234],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgb(255,159,64)',
                'rgb(75,192,192)',
                'rgb(153,102,255)',
                'rgb(255,205,86)',
                'rgb(201,203,207)'
            ],
            borderWidth: 1
        }]
    },
    options: {
    responsive: true,
    }
});



// ['January', 'February', 'March', 'April', 'May', 'June' , 'July' , 'August' , 'September' , 'october' , 'November' , 'December'],
