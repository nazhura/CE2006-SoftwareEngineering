var regionsMap = {
    "north": [1.443557, 103.826257],
    "east": [1.352636, 103.929198],
    "west": [1.371024, 103.711885],
    "south": [1.298500, 103.821013],
    "central": [1.354022, 103.828709]
}


// This is for First Page (Index.PHP)
// Uncomment document.getElementByID when ID has been added to Page
async function displayOverallWeather(){
    var allWeather = (await regionalWeatherReading());
    
    document.getElementById("NorthWeather").innerHTML = "Weather: " + allWeather["north"].toFixed(1) + "°C";
    document.getElementById("EastWeather").innerHTML = "Weather: " + allWeather["east"].toFixed(1) + "°C";
    document.getElementById("WestWeather").innerHTML = "Weather: " + allWeather["west"].toFixed(1) + "°C";
   document.getElementById("SouthWeather").innerHTML = "Weather: " + allWeather["south"].toFixed(1) + "°C";
   document.getElementById("CentralWeather").innerHTML = "Weather: " + allWeather["central"].toFixed(1) + "°C";
    document.getElementById("OverallWeather").innerHTML = allWeather["min"].toFixed(1) + " - " + allWeather["max"].toFixed(1) + "°C";
}


// This is for Second Page (Parks.PHP)
// Uncomment document.getElementByID when ID has been added to Page
async function displayRegionalWeather(parkLatitude, parkLongitude){
    var regionalWeather = (await regionalWeatherReading());
    for (var regions in regionsMap){
        if(haversine(parkLatitude, parkLongitude, regionsMap[regions][0], regionsMap[regions][1])<9){
            return document.getElementById("RegionalWeather").innerHTML = regionalWeather[regions].toFixed(1);
            break;
        }
    }
}


// This is for First Page (Index.PHP)
// Uncomment document.getElementByID when ID has been added to Page
async function displayOverallWeatherStatus(){
    var weatherStatus = (await regionalWeatherStatus());

    document.getElementById("NorthWF").innerHTML = "Status: " + weatherStatus["north"];
    document.getElementById("EastWF").innerHTML = "Status: " + weatherStatus["east"];
    document.getElementById("WestWF").innerHTML = "Status: " + weatherStatus["west"] ;
    document.getElementById("SouthWF").innerHTML = "Status: " + weatherStatus["south"];
    document.getElementById("CentralWF").innerHTML = "Status: " + weatherStatus["central"];
}


// This is for Second Page (Parks.PHP)
// Uncomment document.getElementByID when ID has been added to Page
async function displayRegionalWeatherStatus(parkLatitude, parkLongitude){
    var weatherForecast  = (await regionalWeatherStatus());
    
    for (var regions in regionsMap){
        if(haversine(parkLatitude, parkLongitude, regionsMap[regions][0], regionsMap[regions][1])<9){
                return document.getElementById("RegionalForecast").innerHTML = weatherForecast[regions];
            break;
        }
    }
}


// This is for First Page (Index.PHP)
// Uncomment document.getElementByID when ID has been added to Page
async function displayOverallPSI(){
    var overallPSI = (await regionalPSIReading());
    
    var str = new String("2.5");
    
    document.getElementById("NorthPSI").innerHTML = "PSI: " + overallPSI["north"] + " PM" + str.sub();
    document.getElementById("EastPSI").innerHTML = "PSI: " + overallPSI["east"] + " PM" + str.sub();
    document.getElementById("WestPSI").innerHTML = "PSI: " + overallPSI["west"] + " PM" + str.sub();
    document.getElementById("SouthPSI").innerHTML = "PSI: " + overallPSI["south"] + " PM" + str.sub();
    document.getElementById("CentralPSI").innerHTML = "PSI: " + overallPSI["central"] + " PM" + str.sub();
    document.getElementById("OverallPSI").innerHTML =  overallPSI["min"] + " - " + overallPSI["max"] + " PM" + str.sub() ;
}


// This is for Second Page (Parks.PHP)
// Uncomment document.getElementByID when ID has been added to Page
async function displayRegionalPSI(parkLatitude, parkLongitude){
    var regionalPSI = (await regionalPSIReading());
    
    for (var regions in regionsMap){
        if(haversine(parkLatitude, parkLongitude, regionsMap[regions][0], regionsMap[regions][1])<9){
                return document.getElementById("RegionalPSI").innerHTML = regionalPSI[regions];
            break;
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