var pcn_layers = L.layerGroup([]);

async function updatePCN(){
    
    var data= await fetch('js/parkConnectors2.json').then(res =>res.json());
    
    var pcnConnectorMap = {
        "Central Urban Loop" : "#ffb703",
        "Eastern Coastal Loop" : "#90a955",
        "Northern Explorer Loop" : "#16679a",
        "North Eastern Riverine Loop" : "#ea526f",
        "Southern Ridges Loop" : "#b36a5e",
        "Western Adventure Loop" : "#f94144"
    }
    
    for(var pcnConnector of data["features"]){
        pcnConnectorLine = pcnConnector["properties"]["PCN_Loop"];
        
        pcnLine = L.polyline(pcnConnector["geometry"]["coordinates"], {color: pcnConnectorMap[pcnConnectorLine]}).addTo(pcn_layers);
        
        pcnLine.bindTooltip('<b>' + pcnConnector["properties"]["PCN_Loop"] +'</b>' + '<br>' + pcnConnector["properties"]["Park"]+ '</b>',
                           
        {sticky: true});
    } 
}   
