var c3Json = d3.json("https://opendurham.nc.gov/api/records/1.0/search/?dataset=poverty-status-in-families&facet=label&refine.label=Total+of+families+living+in+poverty%3A",
                       function (error, data) {
//                            // Transform Data
                            var sheet = [];
                            var row = [];
                            row.push("white");
                            row.push(data.records[0].fields.white);
                            sheet.push(row);

                            var row = [];
                            row.push("black_or_african_american");
                            row.push(data.records[0].fields.black_or_african_american);
                            sheet.push(row);

                            var row = [];
                            row.push("asian");
                            row.push(data.records[0].fields.asian);
                            sheet.push(row);

                            var row = [];
                            row.push("two_or_more_races");
                            row.push(data.records[0].fields.two_or_more_races);
                            sheet.push(row);

                            var row = [];
                            row.push("some_other_race");
                            row.push(data.records[0].fields.some_other_race);
                            sheet.push(row);

                            var row = [];
                            row.push("american_indian_and_alaska_native");
                            row.push(data.records[0].fields.american_indian_and_alaska_native);
                            sheet.push(row);

                            //Chart Data
                            var chart = c3.generate({
                                bindto: '#chart3',
                                data: {
                                    columns: sheet,
                                    type: 'pie'
                                },
                                color: {
                                    pattern: ['#003366','#ff0033','#ffcc33']
                                }
                            });
                       });