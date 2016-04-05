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
                                    type: 'line'
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
                                    pattern: ['rgba(245, 205, 86, 0.95)',
                                              'rgba(206, 58, 69, 0.93)',
                                              'rgba(4, 90, 139, 0.93)',
                                              'rgba(166, 86, 245, 0.95)',
                                              'rgba(68, 206, 58, 0.93)',
                                              'rgba(139, 49, 4, 0.93)']
                                }
                            });
                       });