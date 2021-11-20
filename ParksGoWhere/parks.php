<?php
 $parkName = urldecode($_GET["id"]);
?>

<?php
$conn = mysqli_connect("localhost", "root", "" , "parkhub"); // Initiate database connection
//echo $conn->host_info; // Displays the host info
mysqli_close($conn); //Terminate the database connection






?>


<?php

$conn = mysqli_connect("localhost", "root", "", "parkhub" );
     
     
$parkDesc = mysqli_query($conn,"SELECT * FROM park WHERE NAME = '$parkName'");
    
//echo $parkName.'<br>';
     
while ($row = $parkDesc->fetch_assoc()) {
  $desc = $row ['DESCRIPTION']."<br>";
    $lat = $row ['latitude'];
    $long = $row ['longitude'];
    
}


     mysqli_close($conn);     
     
?>
   
<html>
 <head>
     
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>ParksGoWhere - <?php echo $parkName ?> </title>
        <link rel="icon" type="image/x-icon" href="../ParksGoWhere/assets/img/parkicon.png" />
        <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" crossorigin="anonymous"></script>
         <link href="css/park.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="crossorigin=""/>
        <!-- Make sure you put this AFTER Leaflet's CSS -->
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
        
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet-src.js"></script>

        <link rel="stylesheet" href="https://unpkg.com/leaflet-search@2.3.7/dist/leaflet-search.src.css" />
        <script src="https://unpkg.com/leaflet-search@2.3.7/dist/leaflet-search.src.js"></script>
     
        <script src = js/mapSecond.js></script>
        <script src ="js/busStopPins.js"></script>
        <script src ="js/mrtStationPins.js"></script>
        <script src=js/regionalPSIReading.js></script>
        <script src=js/regionalWeatherReading.js></script>
        <script src=js/regionalWeatherStatus.js></script>
        <script src="js/apiManager.js"></script>
     
     <script type="text/javascript">
        var map;
        var lat = '<?php echo $lat; ?>';
        var long = '<?php echo $long; ?>';

   </script>  
     <script type="text/javascript"></script>
     
     
     
     
 </head>
    <style>
    

    </style>
    
 <body>
 
  
     
     
      <body id="page-top">
        <!-- Navigation-->
           <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="index.php">ParksGoWhere.sg</a>
                
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
<!--                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#map">Map</a></li>-->
                    </ul>
                </div>
            </div>
        </nav>
          
          
          <header class="masthead">
            <div class="container-fluid">
               <br><br><br>
                    <h1 class="display-4 text-center" id="parkname"><?php echo $parkName; ?></h1>
                    
<!--                </div>-->
                    <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                           <!-- Container Left-->
                            
                            
                            
                            <div class="container pt-3" id="aboutcont"><br>
                              <div class="card">
                                  <div class="card-body">
                                    <h3 class="card-title">About the park</h3>
                                     
                                      <hr>
                                    <div class="scrollable">
                                      <p class="card-text"><?php echo nl2br($desc); ?></p>
                                    </div>
                                  </div>
                                </div>
                             
                            </div>
                            
                            
                            
                        </div>
                        <div class="col-lg-6">
                            <!--Container Right-->
                            <marquee>
                            
                           It is currently
                            <p id="RegionalForecast"></p> at <p id="RegionalWeather"></p>&deg;C, with a PSI Level of
                            
                                <p id="RegionalPSI"></p> PM<sub>2.5</sub>
                            </marquee>
                            <div id="mapid" ></div>
                            
                        </div>
                    </div>
                </div>
                    
    
            </div>
        </header>
          
       
      <!-- Contact-->
        <section class="contact-section">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 mb-1 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Address</h4>
                                <hr class="my-4" />
                                <div class="small text-black-50">Nanyang Technological University<br>School of Computer Science and Engineering<br>50 Nanyang Ave, <br>Singapore 639798</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 mb-2 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Email</h4>
                                <hr class="my-4" />
                                <div class="small text-black-50"><a href="#!">hello@parkhub.com</a></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <!-- Footer-->
        <footer class="footer small text-center"><div class="container">
            <p class="foot">Designed and created by:</p>
            <img src="assets/img/logo.png" alt="logo" style="width: 15%;">
            <p class="foot">A startup initiative</p>
            <br>Copyright © ParkHub 2020</div></footer>
        
      
          <script>
          displayRegionalWeatherStatus(lat, long)</script>
          <script>
          displayRegionalPSI(lat, long)</script>
          <script>
          displayRegionalWeather(lat,long)
          </script>

</body>
</html>