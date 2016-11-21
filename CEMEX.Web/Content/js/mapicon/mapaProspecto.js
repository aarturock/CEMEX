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

 // Inicia Mapa
function initialise() {
	var mapCanvas = document.getElementById('map-canvas');

	// Center
	var center = new google.maps.LatLng(25.6515413, -100.1932763);

	// Map Options
	var mapOptions = {
		zoom: 17,
		center: center,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [
			{stylers: [{ visibility: 'simplified' }]},
			{elementType: 'labels', stylers: [{ visibility: 'off' }]}
		]
	};

	// Create the Map
	map = new google.maps.Map(mapCanvas, mapOptions);

	var marker1 = new Marker({
		map: map,
		position: new google.maps.LatLng(25.6515413, -100.1932763),
		icon: {
			path: MAP_PIN,
			fillColor: '#004ab1',
			fillOpacity: 1,
			strokeColor: '',
			strokeWeight: 0
		},
		map_icon_label: '<span class="map-icon map-icon-prospectoMoral"></span>',
		title: 'Ubicación Prospecto'
	});
};

google.maps.event.addDomListener(window, 'load', initialise);