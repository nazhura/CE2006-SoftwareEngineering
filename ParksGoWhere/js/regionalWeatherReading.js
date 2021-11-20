
//var globalNorthTemp = 0, globalEastTemp = 0, globalWestTemp = 0, globalSouthTemp = 0, globalCentralTemp = 0;

async function regionalWeatherReading(){
    
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().substr(0,10);
    var data = await fetch('https://api.data.gov.sg/v1/environment/air-temperature?date=' + localISOTime).then(res =>res.json());

    var weatherReading;
    
    for (var weatherRead of data["items"].reverse()){
        if(weatherRead["readings"].length == 16)
        {
            weatherReading = weatherRead;
            break;
        }            
    }
    
    var tempMap = {};

    for (var reading of weatherReading["readings"]){
        tempMap[reading["station_id"]] = reading["value"];
    }

    var stationMap = {
        "north": ["S100", "S104"],
        "south": ["S60", "S108"],
        "east": ["S24", "S106", "S107"],
        "west": ["S44", "S50", "S115", "S116", "S117", "S121"],
        "central": ["S43", "S109", "S111"]
    }

    var temps = {};

    for (var region in stationMap) {
        var sum = 0;
        for (var station of stationMap[region]) {
            sum += tempMap[station];
        }

        temps[region] = sum / stationMap[region].length;
    }
    
    var max = Object.keys(temps).reduce((a,b)=>temps[a]>temps[b] ? a:b);
    var min = Object.keys(temps).reduce((a,b)=>temps[a]<temps[b] ? a:b);
    temps["max"] = temps[max];
    temps["min"] = temps[min];
    
    return temps;
    
//    return fetch('https://api.data.gov.sg/v1/environment/air-temperature')
//            .then(function (response) {
//                return response.json();
//            })
//            .then(function (data) {
//
//                var northSideCount = 0, westSideCount = 0, eastSideCount = 0, southSideCount = 0, centralSideCount = 0;
//                var northSide = 0, westSide = 0, eastSide = 0, southSide = 0, centralSide = 0;
//                var northTemp = 0, westTemp = 0, eastTemp = 0, southTemp = 0, centralTemp = 0, overallTemp = 0;
//
//
//                for (var i = 0; i < data.metadata.stations.length; i++) {
//                    if(data.metadata.stations[i].id == "S100" || data.metadata.stations[i].id == "S104" ){
//                        northSideCount++;
//                        northSide += data.items[0].readings[i].value;
//                    }
//                    else if (data.metadata.stations[i].id == "S44" || data.metadata.stations[i].id == "S50" || data.metadata.stations[i].id == "S115" || data.metadata.stations[i].id == "S116" || data.metadata.stations[i].id == "S117" || data.metadata.stations[i].id == "S121" ){
//                        westSideCount++;
//                        westSide += data.items[0].readings[i].value;
//                    }
//                    else if(data.metadata.stations[i].id == "S24" || data.metadata.stations[i].id == "S106" || data.metadata.stations[i].id == "S107"){
//                        eastSideCount++;
//                        eastSide += data.items[0].readings[i].value;
//                    }
//                    else if(data.metadata.stations[i].id == "S60" || data.metadata.stations[i].id == "S108"){
//                        southSideCount++;
//                        southSide += data.items[0].readings[i].value;
//                    }
//                    else if(data.metadata.stations[i].id == "S43" || data.metadata.stations[i].id == "S109" || data.metadata.stations[i].id == "S111"){
//                        centralSideCount++;
//                        centralSide += data.items[0].readings[i].value;
//                    }
//                }  
//
//                northTemp = northSide/northSideCount;
//                if(northTemp != NaN){
//                    globalNorthTemp = northTemp;
//                }
//                else{
//                    northTemp = globalNorthTemp;
//                }
//
//                eastTemp = eastSide/eastSideCount;
//                if(eastTemp != NaN){
//                    globalNorthTemp = eastTemp;
//                }
//                else{
//                    eastTemp = globalEastTemp;
//                }
//
//                westTemp = westSide/westSideCount;
//                if(westTemp != NaN){
//                    globalWestTemp = westTemp;
//                }
//                else{
//                    westTemp = globalWestTemp;
//                }
//
//                southTemp = southSide/southSideCount;
//                if(southTemp != NaN){
//                    globalSouthTemp = southTemp;
//                }
//                else{
//                    southTemp = globalSouthTemp;
//                }
//
//                centralTemp = centralSide/centralSideCount;
//                if(centralTemp != NaN){
//                    globalCentralTemp = centralTemp;
//                }
//                else{
//                    centralTemp = globalCentralTemp;
//                }
//                
//                
//                var maxTemp = Math.max(...[northTemp,eastTemp,westTemp,southTemp,centralTemp].filter((val) => !isNaN(val)));
//                var minTemp = Math.min(...[northTemp,eastTemp,westTemp,southTemp,centralTemp].filter((val) => !isNaN(val)));
//                
//                var weatherReadingJson = [northTemp, eastTemp, westTemp, southTemp, centralTemp, maxTemp, minTemp];
//
//                return weatherReadingJson;
//            })
//            .catch(function (err) {
//                console.log('error: ' + err);
//            });
}