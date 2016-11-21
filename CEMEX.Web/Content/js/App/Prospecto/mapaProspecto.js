/*!
 * mapaProspecto.js
 *
 * @version 1.0
 *
 * @author Vanessa Alejandra Muñoz Corbalá
 * @date Agosto 12, 2016
 *
 * @Copyright (c) 2013-2016 Telstock, S.A. de C.V. Todos los Derechos Reservados.
 */

 //Obtiene la ubicación del mapa atraves de una dirección.
//Inicializa un mapa atraves de una dirección especificada
function SetMapaByAdress(address) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK)
        {
            var coordenadas = results[0].geometry.location;
            lat = coordenadas.lat();
            lng = coordenadas.lng();

            var mapCanvas = document.getElementById('map-canvas');

            // Center
            var center = new google.maps.LatLng(lat, lng);

            // Map Options		
            var mapOptions = {
                zoom: 13,
                center: center,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [
                    { stylers: [{ visibility: 'simplified' }] },
                    { elementType: 'labels', stylers: [{ visibility: 'off' }] }
                ]
            };

            // Create the Map
            map = new google.maps.Map(mapCanvas, mapOptions);

            var marker1 = new Marker({
                map: map,
                position: new google.maps.LatLng(lat, lng),
                icon: {
                    path: MAP_PIN,
                    fillColor: '#004ab1',
                    fillOpacity: 1,
                    strokeColor: '',
                    strokeWeight: 0
                },
                map_icon_label: '<span class="map-icon map-icon-prospectoMoral"></span>',
                title: 'Ubicación Prospecto',
                draggable: true
            });

            google.maps.event.addListener(marker1, 'dragend', function ()
            {
                var coords = marker1.getPosition();
                document.getElementById('InptNmbrLatitud').value = coords.lat();
                document.getElementById('InptNmbrLongitud').value = coords.lng();
            });

            function geocodePosition(pos) {
                geocoder = new google.maps.Geocoder();
                geocoder.geocode
                 ({
                     latLng: pos
                 },
                     function (results, status) {
                         if (status == google.maps.GeocoderStatus.OK)
                         {
                             //Hacer algo en el script si se requiere que se decodifique la poscisión
                         }
                         else
                         {
                             // Si existe error en la decodificación la poscisión
                         }
                     }
                 );
            }

            document.getElementById('InptNmbrLatitud').value = lat;
            document.getElementById('InptNmbrLongitud').value = lng;
        }
        else {
            alertify.log('Imposible obtener la ubicación especificada');
        }
    });
}
//Inicializa por primera vez el mapa.

function initialise() {
    var mapCanvas = document.getElementById('map-canvas');

    // Center
    var center = new google.maps.LatLng(28.788232, -100.9646581);

    // Map Options		
    var mapOptions = {
        zoom: 3,
        center: center,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
			{ stylers: [{ visibility: 'simplified' }] },
			{ elementType: 'labels', stylers: [{ visibility: 'off' }] }
        ]
    };

    // Create the Map
    map = new google.maps.Map(mapCanvas, mapOptions);
}

//Inicializa un mapa atraves de Latitud y Longitud
function SetMapa(Latitud, Longitud) {
    var mapCanvas = document.getElementById('map-canvas');

    // Center
    var center = new google.maps.LatLng(Latitud, Longitud);

    // Map Options		
    var mapOptions = {
        zoom: 13,
        center: center,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            { stylers: [{ visibility: 'simplified' }] },
            { elementType: 'labels', stylers: [{ visibility: 'off' }] }
        ]
    };

    // Create the Map
    map = new google.maps.Map(mapCanvas, mapOptions);

    var marker1 = new Marker({
        map: map,
        position: new google.maps.LatLng(Latitud, Longitud),
        icon: {
            path: MAP_PIN,
            fillColor: '#004ab1',
            fillOpacity: 1,
            strokeColor: '',
            strokeWeight: 0
        },
        map_icon_label: '<span class="map-icon map-icon-prospectoMoral"></span>',
        title: 'Ubicación Prospecto',
        draggable: true
    });

    google.maps.event.addListener(marker1, 'dragend', function () {
        var coords = marker1.getPosition();
        document.getElementById('InptNmbrLatitud').value = coords.lat();
        document.getElementById('InptNmbrLongitud').value = coords.lng();
    });

    function geocodePosition(pos) {
        geocoder = new google.maps.Geocoder();
        geocoder.geocode
         ({
             latLng: pos
         },
             function (results, status) {
                 if (status == google.maps.GeocoderStatus.OK) {
                     //Hacer algo en el script si se requiere que se decodifique la poscisión
                 }
                 else {
                     // Si existe error en la decodificación la poscisión
                 }
             }
         );
    }

    document.getElementById('InptNmbrLatitud').value = Latitud;
    document.getElementById('InptNmbrLongitud').value = Longitud;
}

//google.maps.event.addDomListener(window, 'load', initialise);