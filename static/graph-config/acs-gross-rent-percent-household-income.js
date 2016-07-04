var chart = c3.generate({
    bindto: '#chart2',
    data: {
        x: 'Year',
        url: '/static/data/acs-gross-rent-percent-household-income.csv',
        type: 'line',
        groups: [["Less than 10.0 percent","10.0 to 14.9 percent","15.0 to 19.9 percent","20.0 to 24.9 percent","25.0 to 29.9 percent","30.0 to 34.9 percent","35.0 to 39.9 percent","40.0 to 49.9 percent","50.0 percent or more"]]
    },
    axis: {
        x: {
            label: {
                text: 'Year',
                position: 'outer-center'
            }
        },
        y: {
            label: {
                text: 'Number of Households',
                position: 'outer-middle'
            },
            min: 0,
            padding: {
                bottom: 0
            }
        }
    },
    color: {
        pattern: ['#986246',
                  '#986246',
                  '#987746',
                  '#2F6553',
                  '#E3B7A0',
                  '#6C7F94',
                  '#E3C8A0',
                  '#6B9788',
                  '#59280F']
    }
});