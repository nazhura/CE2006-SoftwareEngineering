window.onload = () => {
    
    
    // Load ParkIcon
    var parkIcon = L.icon({
    iconUrl: 'assets/img/parkicon.png',
    iconSize: [40, 42],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
    }); 
    
    // Generate Map
    map = new L.Map('mapid');
    
    // Call Map
    L.tileLayer('https://api.mapbox.com/styles/v1/moderatelyokay/ckgv4vias0bio19l9abcb63bf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibW9kZXJhdGVseW9rYXkiLCJhIjoiY2tnY2Z2ejU5MHFvczJ5b2p5eTlrYmJrcyJ9.-KPX6221q5i9O_TApYcMGQ', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    }).addTo(map);
    
    
    //only to show map, no layers, no markers, nothing just the map
   map.setView([1.37,  103.83], 11.5);
    
    
    // Call and generate all parks pin on the map
    var allParks_layers = L.geoJSON(parks, {
            onEachFeature: function(feature, layer) {
            
            layer.bindPopup(`<b>${feature.properties.Name}</b><br>Click <a href="parks.php?id=${feature.properties.Name}" target="_blank">here</a> for more info!`);
                
            layer.setIcon(parkIcon);    
        }
    });
    
    
    var baseMaps = {
    "All Parks": allParks_layers,
    "Major Parks": mgs_layers
};
    var overlayMaps = {
    "Park Connectors": pcn_layers,
    "Regions of Singapore": region_layers
};
    
    
    // Set the filter layer of All Parks and MGS
    L.control.layers(baseMaps, overlayMaps).addTo(map);
    

    
    // Update MGS parks with Visitorship status
    updateMGS();
    updatePCN();
    updateRegion();
    
    // Create the search function for All Parks
    L.control.search({
          layer: allParks_layers,
          initial: false,
          propertyName: 'Name', // Specify which property is searched into.
        zoom: 16
    }).addTo(map);
    
    
    // Draw the 5 regions of Singapore
//    L.geoJSON(mapp, {
//        style: function(feature) {
//            switch (feature.properties.Name) {
//                 case 'North': return {color: "#F94144", opacity:1};
//                case 'East': return {color: "#90BE6D", opacity:5};
//                case 'West': return {color: "#0081a7", opacity:5};
//                case 'South': return {color: "#f7b801", opacity:5};
//                 case 'Central': return {color: "#E8914F", opacity:5};
//            }
//        }
//    }).addTo(map);
//
    

}

// Load Red Icon for user location
var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
    
    
});

        // Functions for Detecting and updating user locations
    function onLocationFound(e) {
        var radius = e.accuracy / 2;
        var location = e.latlng
        var marker = L.marker(location,{icon: redIcon}).addTo(map)
        L.circle(location, radius).addTo(map);
        marker.bindPopup("<b>You are currently here!</b>").openPopup();
    }

    function onLocationError(e) {
        alert(e.message);
    }

    function getLocationLeaflet() {
        map.on('locationfound', onLocationFound);
        map.on('locationerror', onLocationError);

        map.locate({setView: true, zoom: 20});

    }







          

          
          

            
     