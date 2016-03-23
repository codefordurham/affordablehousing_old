var chart = c3.generate({
    bindto: '#chart',
    data: {
        x: 'Year',
        url: '/static/data/population-and-housing-units-by-year.csv',
        type: 'bar'
    },
    color: {
        pattern: ['#ffcb05','#00274c']
    }
});