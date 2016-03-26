var chart = c3.generate({
    bindto: '#chart1',
    data: {
        x: 'Year',
        url: '/static/data/population-and-housing-units-by-year.csv',
        type: 'bar'
    },
    color: {
        pattern: ['#003366','#ff0033','#ffcc33']
    }
});