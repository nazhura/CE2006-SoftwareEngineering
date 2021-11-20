async function regionalPSIReading(){
    
    var data = await fetch('https://api.data.gov.sg/v1/environment/pm25').then(res=>res.json());
    
    var psiMap = {
        "north" : data.items[0].readings.pm25_one_hourly.north,
        "south" : data.items[0].readings.pm25_one_hourly.south,
        "east" : data.items[0].readings.pm25_one_hourly.east,
        "west" : data.items[0].readings.pm25_one_hourly.west,
        "central" : data.items[0].readings.pm25_one_hourly.central
    }
    
    var max = Object.keys(psiMap).reduce((a,b)=>psiMap[a]>psiMap[b] ? a:b);
    var min = Object.keys(psiMap).reduce((a,b)=>psiMap[a]<psiMap[b] ? a:b);
    
    psiMap["max"] = psiMap[max];
    psiMap["min"] = psiMap[min];

    return psiMap;
    
//    return fetch('https://api.data.gov.sg/v1/environment/pm25')
//            .then(function (response) {
//                return response.json();
//            })
//            .then(function (data) {
//                var northPSI = data.items[0].readings.pm25_one_hourly.north;
//                var eastPSI = data.items[0].readings.pm25_one_hourly.east;
//                var westPSI = data.items[0].readings.pm25_one_hourly.west;
//                var southPSI = data.items[0].readings.pm25_one_hourly.south;
//                var centralPSI = data.items[0].readings.pm25_one_hourly.central;
//                var minPSI = Math.min(northPSI,eastPSI,westPSI,southPSI,centralPSI);
//                var maxPSI = Math.max(northPSI,eastPSI,westPSI,southPSI,centralPSI);
//                var psiList = [northPSI, eastPSI, westPSI, southPSI, centralPSI, minPSI, maxPSI];
//        
//                return psiList;
//            })
//            .catch(function (err) {
//                console.log('error: ' + err);
//            });
}

