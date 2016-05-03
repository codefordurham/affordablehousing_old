var chart = c3.generate({
    bindto: '#chart5',
    data: {
        x: 'Year',
        url: '/static/data/acs-gross-rent-percent-household-income2.csv',
        type: 'bar',
        groups: [["Less than 24.9 percent"],["25.0 to 49.9 percent"],["50.0 percent or more"]]
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