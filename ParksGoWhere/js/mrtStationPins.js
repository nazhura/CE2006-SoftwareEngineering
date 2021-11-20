var mrtStation_layer = L.layerGroup([]);

async function loadMrtStationMarkers() {
  var data = await fetch("js/mrtStationInfoFull.json").then((res) => res.json());
  var mrtStationIcons = L.icon({
    iconUrl: "assets/img/mrtIconv2.png",
    iconSize: [30, 30]
  });
      
      for (var mrtStation of data["features"]) {
          if(mrtStation["geometry"]["type"] == "LineString"){
              var mrtLat = (mrtStation["geometry"]["coordinates"][0][1] + mrtStation["geometry"]["coordinates"][1][1])/2;
              var mrtLong = (mrtStation["geometry"]["coordinates"][0][0] + mrtStation["geometry"]["coordinates"][1][0])/2;
          }
          else{
              var mrtLat = mrtStation["geometry"]["coordinates"][1];
              var mrtLong = mrtStation["geometry"]["coordinates"][0];
          }
          if(haversine(lat,long, mrtLat,mrtLong)<1){ 
            var mrtStationPoints = L.marker([mrtLat, mrtLong], { icon: mrtStationIcons}).addTo(mrtStation_layer);

            mrtStationPoints.bindPopup(`<b>${mrtStation.properties.Name}</b><br>Click <a href= "https://landtransportguru.net/${mrtStation.properties.LinkName}-station" target="_blank">here</a> for more info!`).openPopup();
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
