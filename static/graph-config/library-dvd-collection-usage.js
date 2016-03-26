var c3Json = d3.json("https://opendurham.nc.gov/api/records/1.0/search/?dataset=library-dvd-collection-usage",
                       function (error, data) {
                            // Transform Data
                            var sheet = [];
                            var header = [];
                            header.push("month");
                            header.push("Adults");
                            header.push("Children");
                            sheet.push(header);
                            data.records.forEach(function (d,i) {
                                var row = [];
                                row.push(d.fields.month);
                                row.push(d.fields.adult);
                                row.push(d.fields.children_s);
                                sheet.push(row);
                            });

                            //Chart Data
                            var chart = c3.generate({
                                bindto: '#chart2',
                                data: {
                                    x: 'month',
                                    rows: sheet,
                                    type: 'bar'
                                },
                                axis: {
                                    x: {
                                        type: 'timeseries',
                                        tick: {
                                            format: '%Y-%m-%d'
                                        }
                                    }
                                },
                                color: {
                                    pattern: ['#003366','#ff0033','#ffcc33']
                                }
                            });
                       });