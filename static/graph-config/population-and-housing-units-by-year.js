var chart = c3.generate({
    bindto: '#chart1',
    data: {
        x: 'Year',
        url: '/static/data/population-and-housing-units-by-year.csv',
        type: 'bar'
    },
    color: {
        pattern: ['rgba(245, 205, 86, 0.95)',
                   'rgba(206, 58, 69, 0.93)',
                   'rgba(4, 90, 139, 0.93)',
                   'rgba(166, 86, 245, 0.95)',
                   'rgba(68, 206, 58, 0.93)',
                   'rgba(139, 49, 4, 0.93)']
    }
});