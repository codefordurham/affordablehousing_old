var chart = c3.generate({
    bindto: '#chart1',
    data: {
        x: 'Year',
        url: '/static/data/population-and-housing-units-by-year.csv',
        type: 'line'
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
                text: 'Count of People / Housing Units',
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
                  '#324A63']
    }
});