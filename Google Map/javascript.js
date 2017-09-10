function initMap(){
      // Map options
      var options = {
        zoom:10,
        center:{lat:-35.021,lng:138.5679}
      }

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);

      /*
      // Listen for click on map
      google.maps.event.addListener(map, 'click', function(event){
        // Add marker
        addMarker({coords:event.latLng});
      });

      /*
      // Add marker
      var marker = new google.maps.Marker({
        position:{lat:42.4668,lng:-70.9495},
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      });

      var infoWindow = new google.maps.InfoWindow({
        content:'<h1>Lynn MA</h1>'
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
      */

      // Array of markers
      var markers = [
        {
          coords:{lat:-35.021,lng:138.5679},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<div id="iw-container">' +
                    '<div class="iw-title">Bedford Park</div>' +
                    '<div class="iw-content">' +
                    '<div class="iw-subTitle">Flinders</div>' +
            
             '<iframe width="424" height="238" src="https://www.youtube.com/embed/8n0egY2dssc" frameborder="0" allowfullscreen></iframe>' +
                      '<img src="https://www.flinders.edu.au/content/dam/images/galleries/bedford-park/bedford-gallery-7.jpg.flinders-image.970.low.jpg" alt="Flinders image" height="200" width="300">' +
                      '<p>Founded in ....</p>' +
                      '<div class="iw-subTitle">Contacts</div>' +
                      '<p>paragraph<br>text<br>'+
                      '<br>more text<br>www: www.flinders.edu.au</p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'
            
            
        },
        {
          coords:{lat:-35.009589,lng:138.571},
          content:'<div id="iw-container">' +
                    '<div class="iw-title">Tonsley</div>' +
                    '<div class="iw-content">' +
                    '<div class="iw-subTitle">Another Flinders Campus</div>' +
             '<img src="https://www.flinders.edu.au/content/dam/images/galleries/bedford-park/bedford-gallery-7.jpg.flinders-image.970.low.jpg" alt="Flinders image" height="200" width="300">' +
                      '<p>Paragraph1</p>' +
                      '<div class="iw-subTitle">Contacts</div>' +
                      '<p>paragraph2<br>text<br>'+
                      '<br>more text<br>www: www.flinders.edu.au</p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'
        },
        {
          coords:{lat:-34.9295,lng:138.5972},
          content: '<div id="iw-container">' +
                    '<div class="iw-title">Market</div>' +
                    '<div class="iw-content">' +
                    '<div class="iw-subTitle">Market in City</div>' +
             '<img src="" alt="Market image" height="115" width="83">' +
                      '<p>Paragraph1</p>' +
                      '<div class="iw-subTitle">Contacts</div>' +
                      '<p>paragraph2<br>text<br>'+
                      '<br>more text<br>www: www.flinders.edu.au</p>'+
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>'
        }
      ];

      // Loop through markers
      
      for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
      }

      // Add Marker Function
      function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          //icon:props.iconImage
        });

        // Check for customicon
        if(props.iconImage){
          // Set icon image
          marker.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        }
      }
    }


      //info.window



  // A new Info Window is created and set content

   

google.maps.event.trigger(map, 'resize');
