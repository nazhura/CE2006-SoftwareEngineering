var busStops_layer = L.layerGroup([]);

async function loadBusStopsMarkers() {
  var data = await fetch("js/busStopInfoFullGeoJson2").then((res) => res.json()); 
      
      var busStopIcons = L.icon({
        iconUrl: "assets/img/busIconv2.png",
        iconSize: [40, 40]
      });
      for (var busStop of data["features"]) {
          if(haversine(lat,long, busStop["geometry"]["coordinates"][1], busStop["geometry"]["coordinates"][0])<0.4)
             {
                var busStopPoints = L.marker([busStop["geometry"]["coordinates"][1], busStop["geometry"]["coordinates"][0]], { icon: busStopIcons }).addTo(busStops_layer);
                                 
                busStopPoints.bindPopup('<b>' + busStop["properties"]["Description"] +'</b>'+ '<br>' +"Bus Stop Code: " +  busStop["properties"]["Name"] +'</b>'+ '<br>' +"Bus Numbers: " +  busStop["properties"]["Busses"] , {maxWidth : "auto"}).openPopup();
             }
      }
}

// Haversine Function taken from https://www.geeksforgeeks.org/haversine-formula-to-find-distance-between-two-points-on-a-sphere/
// The function is used to calculate the distance between two points on a sphere
function haversine(lat1,lon1,lat2,lon2){

    // distance between latitudes and longitudes
    var dLat = (Math.PI / 180) * (lat2 - lat1);
    var dLon = (Math.PI / 180) * (lon2 - lon1);

    // convert to radians
    lat1 = (Math.PI/ 180)* (lat1);
    lat2 = (Math.PI/ 180)* (lat2);

    //apply formulae
    var a = Math.pow(Math.sin(dLat / 2), 2) +
            Math.pow(Math.sin(dLon / 2), 2) * 
            Math.cos(lat1) * Math.cos(lat2);
    var rad = 6371;
    var c = 2 * Math.asin(Math.sqrt(a));
    return rad * c;
}
