var region_layers = L.layerGroup([]);

async function updateRegion(){
    
    var data= await fetch('js/regionSingapore.json').then(res =>res.json());
    
    var regionPoly;
    
    var str = new String("2.5");
    
    var regionMap = {
        "North": ["#F94144", 1],
        "South": ["#f7b801", 5],
        "West" : ["#0081a7", 5],
        "East" : ["#90BE6D", 5],
        "Central" : ["#b100e86", 5]
     }
    
    var regionalWeather = await regionalWeatherReading();
    var regionalStatus = await regionalWeatherStatus();
    var regionalPSI = await regionalPSIReading();
    
    for(var regions of data["features"]){
        var regionName = regions["properties"]["Name"];
        regionPoly = L.polygon(regions["geometry"]["coordinates"], {color: regionMap[regionName][0], opacity: regionMap[regionName][1]}).addTo(region_layers);
        
        regionPoly.bindPopup('<b>' + regions["properties"]["Name"] +'</b>' + '<br>' + regionName +" Temperature: " + regionalWeather[regionName.toLowerCase()].toFixed(1) + "°C" + '</b>' +'<br>' + regionName +" Weather Status: " + regionalStatus[regionName.toLowerCase()] + '</b>' + '<br>' + regionName +" PSI: " + regionalPSI[regionName.toLowerCase()]+ "PM" + str.sub() +'</b>');
    }
}
