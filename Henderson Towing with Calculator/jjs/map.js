		var x=new google.maps.LatLng(42.430109,-83.206088);
        var cord0=new google.maps.LatLng(42.63860600000001, -83.188934);
        var cord1=new google.maps.LatLng(42.721391000000004, -83.257599);
        var cord2=new google.maps.LatLng(42.689098, -83.529511);
        var cord3 = new google.maps.LatLng(42.30433099999999, -83.565216);
        var cord4 = new google.maps.LatLng(42.29417399999999, -83.101044);
        var cord5 = new google.maps.LatLng(42.363212, -82.884064);
        var cord6 = new google.maps.LatLng(42.48891, -82.873077);

        function initialize()
        {
        var mapProp = {
          center: new google.maps.LatLng(42.430109,-83.206088),
          zoom:9,
		  scrollwheel: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          
        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

        var myTrip=[cord0,cord1,cord2,cord3,cord4,cord5,cord6, cord0];
        var flightPath=new google.maps.Polygon({
          path:myTrip,
          strokeColor:"#000",
          strokeOpacity:0.8,
          strokeWeight:2,
          fillColor:"#ff0000",
          fillOpacity:0.4
          });

        flightPath.setMap(map);
        }

        google.maps.event.addDomListener(window, 'load', initialize);