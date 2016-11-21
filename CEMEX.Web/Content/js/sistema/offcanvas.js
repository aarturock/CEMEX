//$(document).ready(function () {
//  $('[data-toggle=offcanvas]').click(function () {
//    $('.row-offcanvas').toggleClass('active')
//  });
//});

	//$(document).ready(function () {  
//	  $('[data-toggle=offcanvas]').click( function(){		  
//		if ( ($('#main').hasClass('active')) &&  !($('#main').hasClass('icons'))) {
//			$('#main').addClass('icons');
//		} else if ( ($('#main.dock').hasClass('active')) &&  ($('#main').hasClass('icons'))) {
//			$("#main.dock").removeClass("active").removeClass("icons");   
//		} else {
//			$('#main.dock').addClass('active');
//		}
//		
//	});
//  
//});

$(document).ready(function () {  
	  $('[data-toggle=offcanvas]').click( function(){		  
		if ( ($('#main').hasClass('active')) &&  !($('#main').hasClass('icons'))) {
			$('#main').addClass('icons');
		} else if ( ($('#main').hasClass('active')) &&  ($('#main').hasClass('icons'))) {
			$("#main").removeClass("active").removeClass("icons");   
		} else {
			$('#main').addClass('active');
		}
		
	});
  
});