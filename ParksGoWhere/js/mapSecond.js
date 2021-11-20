window.onload = () => {
    
    // Load ParkIcon
    var parkIcon = L.icon({
    iconUrl: 'assets/img/parkiconv2.png',
    iconSize: [60, 62]
    }); 
    
    map = new L.Map('mapid',{ zoomControl: false });
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibW9kZXJhdGVseW9rYXkiLCJhIjoiY2tnY2Z5ZWYzMHFrZjJ0czU3dWd0Z3gxeCJ9.QPsbMIWPUjxUxsGJV_oN7w'
    }).addTo(map);
    
    //only to show map, no layers, no markers, nothing just the map
    map.setView([lat, long], 17);
    
    L.marker([lat, long], {icon: parkIcon}).addTo(map);
    
    L.control.layers(null,{
    "Bus Stops": busStops_layer,
    "Mrt Station": mrtStation_layer
    }).addTo(map);
    
    loadBusStopsMarkers();
    loadMrtStationMarkers();  
}
          

          
          

            
     