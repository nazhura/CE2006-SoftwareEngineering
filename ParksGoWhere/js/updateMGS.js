var mgs_layers = L.layerGroup([]);


async function updateMGS(){
    
    var data= await fetch('js/MGS.json').then(res =>res.json());
    var visitorship = (await fetchVisitorshipStatus());
    
    var lightIcon = L.icon({
        iconUrl : "assets/img/parkiconv2.png",
        iconSize : [30,30]  
    });
    
    var moderateIcon = L.icon({
        iconUrl : "assets/img/medium.png",
        iconSize : [30,30]  
    });
    
    var heavyIcon = L.icon({
        iconUrl : "assets/img/high.png",
        iconSize : [30,30]  
    });
    
    var closedIcon = L.icon({
        iconUrl : "assets/img/closed.png",
        iconSize : [30,30]  
    });
    
    var lightPoints, moderatePoints, heavyPoints, closedPoints;
    
    var visitorshipLevelMap = {
        "Light": [lightIcon, lightPoints],
        "Moderate": [moderateIcon, moderatePoints],
        "Heavy": [heavyIcon, heavyPoints],
        "Closed": [closedIcon, closedPoints]
    }
    
    for (parks of data["features"]){
        
        parks["properties"]["Visitorship"] = [];
        
        for (visitorshipLocation of visitorship["features"]){
            
            if(parks["properties"]["VisitorshipName"] == visitorshipLocation["attributes"]["Location_Name"]){
                
                parks["properties"]["Visitorship"] = visitorshipLocation["attributes"]["Visitorship_Status"];
                
                var visitorshipLevel = parks["properties"]["Visitorship"];
                        
                visitorshipLevelMap[visitorshipLevel][1] = L.marker([parks["geometry"]["coordinates"][1], parks["geometry"]["coordinates"][0]], {icon: visitorshipLevelMap[visitorshipLevel][0]}).addTo(mgs_layers);

                visitorshipLevelMap[visitorshipLevel][1].bindPopup(`<b>${parks.properties.Name}</b><br>Click <a href="parks.php?id=${parks.properties.Name}" target="_blank">here</a> for more info!`).openPopup();
            }
        }
    }
    
//    for (parks of data["features"]){
//        
//        parks["properties"]["Visitorship"] = [];
//        
//        for (visitorshipLocation of visitorship["features"]){
//            
//            if(parks["properties"]["VisitorshipName"] == visitorshipLocation["attributes"]["Location_Name"]){
//                
//                parks["properties"]["Visitorship"] = visitorshipLocation["attributes"]["Visitorship_Status"];
//                
//                var visitorshipLevel = parks["properties"]["Visitorship"];
////                var mgsPoints2;
//                
//                switch(visitorshipLevel){
//                    case "Light": 
//                        var mgsLightPoints = L.marker([parks["geometry"]["coordinates"][1], parks["geometry"]["coordinates"][0]], {icon: lightIcon}).addTo(mgs_layers);
//                        
//                        mgsLightPoints.bindPopup(`<b>${parks.properties.Name}</b><br>Click <a href="parks.php?id=${parks.properties.Name}" target="_blank">here</a> for more info!`).openPopup();
//                        break;
//                        
//                    case "Moderate":
//                        var mgsModeratePoints = L.marker([parks["geometry"]["coordinates"][1], parks["geometry"]["coordinates"][0]], {icon: moderateIcon}).addTo(mgs_layers);
//                        
//                        mgsModeratePoints.bindPopup(`<b>${parks.properties.Name}</b><br>Click <a href="parks.php?id=${parks.properties.Name}" target="_blank">here</a> for more info!`).openPopup();
//                        
//                        break;
//                        
//                    case "Heavy":
//                        var mgsHeavyPoints = L.marker([parks["geometry"]["coordinates"][1], parks["geometry"]["coordinates"][0]], {icon: heavyIcon}).addTo(mgs_layers);
//                        
//                        mgsHeavyPoints.bindPopup(`<b>${parks.properties.Name}</b><br>Click <a href="parks.php?id=${parks.properties.Name}" target="_blank">here</a> for more info!`).openPopup();
//                        break;
//                        
//                    case "Closed":
//                        var mgsClosedPoints = L.marker([parks["geometry"]["coordinates"][1], parks["geometry"]["coordinates"][0]], {icon: closedIcon}).addTo(mgs_layers);
//                        
//                        mgsClosedPoints.bindPopup(`<b>${parks.properties.Name}</b><br>Click <a href="parks.php?id=${parks.properties.Name}" target="_blank">here</a> for more info!`).openPopup();
//                        break;
//                        
//                }
                
//                var mgsPoints = L.marker([parks["geometry"]["coordinates"][1], parks["geometry"]["coordinates"][0]], {icon: lightIcon}).addTo(mgs_layer);
                
//                mgsPoints2.bindPopup('<b>' + parks["properties"]["Name"] + '</b>' + '<br>'+ "Visitorship Status: " + parks["properties"]["Visitorship"] + '</b>' + '<br>' + parks["geometry"]["coordinates"][1] + " " + parks["geometry"]["coordinates"][0] + '</b>').openPopup();
//            }
//        }
//    }
//    console.log(data);
}
                
 