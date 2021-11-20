async function regionalWeatherStatus(){
    var data =  await fetch('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast').then(res =>res.json());
    
    var weatherMap = {
        "north" : data.items[0].forecasts[2].forecast,
        "south" : data.items[0].forecasts[39].forecast,
        "east" : data.items[0].forecasts[38].forecast,
        "west" : data.items[0].forecasts[16].forecast,
        "central" : data.items[0].forecasts[2].forecast
    }
    return weatherMap;
//    return fetch('https://api.data.gov.sg/v1/environment/2-hour-weather-forecast')
//            .then(function (response) {
//                return response.json();
//            })
//            .then(function (data) {
//
//                var CentralIndicator = data.items[0].forecasts[2].forecast;
//
//                var EastIndicator = data.items[0].forecasts[38].forecast;
//                    
//                var NorthIndicator = data.items[0].forecasts[45].forecast;
//                    
//                var WestIndicator = data.items[0].forecasts[16].forecast;
//
//                var SouthIndicator = data.items[0].forecasts[39].forecast;
//
//                var IndicatorList = [CentralIndicator, EastIndicator, NorthIndicator, WestIndicator, SouthIndicator];
//
//                return IndicatorList;
//            })
//            .catch(function (err) {
//                console.log('error: ' + err);
//            });
}
                
            
                