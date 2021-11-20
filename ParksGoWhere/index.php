<!DOCTYPE html> 
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>ParksGoWhere - Home</title>
        <link rel="icon" type="image/x-icon" href="assets/img/parkicon.png" />
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/index.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="crossorigin=""/>
        <!-- Make sure you put this AFTER Leaflet's CSS -->
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
        
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet-src.js"></script>

        <link rel="stylesheet" href="https://unpkg.com/leaflet-search@2.3.7/dist/leaflet-search.src.css" />
        <script src="https://unpkg.com/leaflet-search@2.3.7/dist/leaflet-search.src.js"></script>

        <script src= js/mapFirst2.js></script>
        <script src=js/parksv2.json></script>
        <script src= js/updateMGS.js></script>
        <script src= js/visitorship.js></script>
        <script src="js/apiManager.js"></script>   
        <script src=js/regionalPSIReading.js></script>
        <script src=js/regionalWeatherReading.js></script>
        <script src=js/regionalWeatherStatus.js></script>
        <script src=js/pcnLine.js></script>
        <script src=js/regionSingapore.js></script>

        
    </head>
    <body id="page-top">
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">ParksGoWhere.sg</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#map">Map</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Masthead-->
        <header class="masthead">
            <div class="container d-flex h-100 align-items-center">
                <div class="mx-auto text-center"><br><br><br>
                    <img src="../ParksGoWhere/assets/img/pgw6.png" class="img-fluid" alt="Responsive image">
                    <!--<h1 class="mx-auto my-0 text-uppercase">Grayscale</h1>--><br><br><br><br><br>
                    <a class="btn btn-primary js-scroll-trigger" href="#info">View all parks!</a>
                </div>
            </div>
        </header>
        <!-- About-->
        
        
         <section class="info-section" id="info">
            <div class="container-fluid">
                
                <div class="row">
                    <div class="col-xl-3 mx-auto" id="btnDiv">
                   
                             <input type="button" value="    SHOW PARKS NEAR ME!     " onClick="javascript:getLocationLeaflet();" id="locateBtn" class="btn btn-primary" >
                           </div>
                    <div class="col-xl-9 mx-auto"> </div>
          
                    
                                
<!--
                                <div id = "OverallWeather" class="col-xs-6"></div>
                            <div id = "OverallPSI" class="col-xs-6"></div>
                            </div>
-->
                    
                </div>
            </div>
        </section>
       
        
        <section class="about-section text-center" id="map">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-9">
                        <div class="mapcont">
                         <div id="mapid"></div>
                       
        
                        </div>
                    </div>
                    
                    <div class="col-xl-3">
                        <div class="row-cols-1">
                            <div class="mapcont2">
                                
                                
                             <i class='fas fa-cloud-sun-rain'></i> Hourly Weather Forecast <i class='fas fa-cloud-sun-rain'></i><B><div id = "OverallWeather"></div></B>
                            <i class='fas fa-wind'></i> Hourly PSI Reading <i class='fas fa-wind'></i><b><div id = "OverallPSI"></div></b>
                            </div>
                            
                    </div>
                        
                        
                        <div class="mapcont2"><i class="fas fa-user-alt"></i> Visitorship status legend <i class="fas fa-user-alt"></i>
                       <!-- <div class="row-cols-1">-->
                        <div class="container-fluid">
                            <div class="row">
                               
                            <div class="col-2">
                                
                               <div class="high"> <img src="assets/img/high.png" style="width: 40px;"></div>
                                <div class="moderate"><img src="assets/img/medium.png" style="width: 40px;"></div>
                                <div class="light"><img src="assets/img/parkiconv2.png" style="width: 40px;"></div>
                                <div class="closed"><img src="assets/img/closed.png" style="width: 40px;"></div>
                                  </div>
                        
                    
                          
                            

                            
                            <div class="col-10 text-left">
                                <div class="visitorInfo">
                                <div class="high"> <b>Heavy</b> </div>
                                
                                
                                <div class="moderate"><b>Moderate</b></div>
                                <div class="light"><b>Light</b> </div>
                                <div class="closed"><b>Closed</b></div>
                                </div>
<!--
                                
                            
                     
                         
                        <div class="east">
                            
                                    </div>
                                    
                                    
                        <div class="west">
                           
                                    </div>
                                    
                                    
                        <div class="central">
                            
                                    </div>
                         
                            </div>
-->
                            </div>
                            </div>
                    </div>
                    </div>
                    </div>
                        
                        
                        
                        </div>
                <div class="row row-fluid">
                <div class="col-xl-12">
                    <div class="mapcont2">
                        
                        
                        <div class="container-fluid text-left">
                            
                            <div class="row">
                            
                        <div class="col-xs-2" id="north">
                         <div class="square" id="northSq" style="background-color: #F94144;"></div>
                        <b>Northern Information:</b>
                        <div id="NorthWeather"></div>
                        <div id="NorthWF"></div>
                        <div id="NorthPSI"></div>
                        
                        </div>
                     
                                
                          <div class="col-xs-2 col-half-offset" id="south">      
                         <div class="square" id="southSq" style="background-color: #f7b801;"></div>
                              
                         <b>Southern Information:</b>           
                        <div id="SouthWeather"></div>
                        <div id="SouthWF"></div>
                        <div id="SouthPSI"></div>
                        </div>
                            
                            
                           
                                
                          <div class="col-xs-2 col-half-offset" id="east">       
                         <div class="square" id="eastSq" style="background-color: #90BE6D;"></div>
                        
                              <b>Eastern Information:</b> 
                        <div id="EastWeather"></div>
                         <div id="EastWF"></div>
                         <div id="EastPSI"></div>
                            </div>
                                
                         <div class="col-xs-2 col-half-offset" id="west">
                         <div class="square" id="westSq" style="background-color: #0081a7;"></div>
                             <b>Western Information:</b> 
                        <div id="WestWeather"></div>
                        <div id="WestWF"></div>
                         <div id="WestPSI"></div>
                            
                            
                            </div>
                                
                        <div class="col-xs-2 col-half-offset" id="central">
                         <div class="square" id="centralSq" style="background-color: #8C5F66;"></div>
                        
                        <b>Central Information:</b> 
                        <div id="CentralWeather"></div>
                        <div id="CentralWF"></div>
                         <div id="CentralPSI"></div>
                        
                    </div>
                       </div>
        
                        </div>
                    </div>
                    </div>
                
                </div>
                        
                    
                </div>
               
            
        </section>
    
        
        
        
        
       
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
        <!-- Bootstrap core JS-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
        <!-- Third party plugin JS-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <!-- Core theme JS-->
        <script src="js/scripts.js"></script>
        <script src="js/apiManager.js"></script>

          <script language="javascript">
     
   </script>   
    

    
      
    
        <script>displayOverallWeather()</script>
        <script>displayOverallPSI()</script>
        <script>displayOverallWeatherStatus()</script>
    </body>
</html>
