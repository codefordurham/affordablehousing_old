var chart = c3.generate({
    bindto: '#chart4',
    data: {
        x: 'Year',
        url: '/static/data/acs-gross-rent-percent-household-income.csv',
        type: 'bar',
        groups: [["Less than 10.0 percent","10.0 to 14.9 percent","15.0 to 19.9 percent","20.0 to 24.9 percent","25.0 to 29.9 percent","30.0 to 34.9 percent","35.0 to 39.9 percent","40.0 to 49.9 percent","50.0 percent or more"]]
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