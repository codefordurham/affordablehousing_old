var mymap = L.map('mapid').setView([36.0013, -78.8849], 11);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 11,
    minZoom: 11
}).addTo(mymap);

$.get('/static/data/map-of-durham.geojson',function(data) {
        var myStyle = {
            "color": "#003366",
            "weight": 1,
            "opacity": 1.00,
            "fillColor": '#ff0033',
            "fillOpacity": 0.05
        };
        L.geoJson($.parseJSON(data),{style: myStyle}).addTo(mymap);
});
