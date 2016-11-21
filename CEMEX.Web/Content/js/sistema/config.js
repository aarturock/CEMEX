/*!
 * config.js
 *
 * @version 1.0
 *
 * @author Vanessa Alejandra Muñoz Corbalá
 * @date Mayo 20, 2016
 *
 * @Copyright (c) 2013-2016 Telstock, S.A. de C.V. Todos los Derechos Reservados.
 */

 // Botón Full Screen
function launchFullscreen(element) {
	if(element.requestFullscreen) {
		element.requestFullscreen();
	} else if(element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if(element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen();
	} else if(element.msRequestFullscreen) {
		element.msRequestFullscreen();
	}
}

 // Aside Menu, para desplegar submenus submenus
 $("a.editForm").click(function(event){
	 "use strict";
	 event.preventDefault();
	 $('fieldset').removeAttr("disabled");
	 $('.form-group.disabled').removeClass('disabled');
	 $('.has-switch.deactivate').removeClass('deactivate');
	 $(".select2-results .select2-disabled").removeClass("disabled");
});




// Activa Tooltip
	$('[data-toggle="tooltip"]').tooltip({ html : true });

// Activa Popover
	 $('.popovers').popover({ html : true });

//// Función borrar localStorage
$("#reset").click(function(e) {
	"use strict";
	var $this = $(this);
	resetWidgets($this);
	e.preventDefault();
	$this = null;
	return false;
		function resetWidgets() {
			$.confirm({
				title:"Reiniciar Widgets",
				text: "Deshacer cambios en widgets?",
				confirm: function() {
					localStorage.clear();
					location.reload();
					},
        		cancelButton: "Cancelar",
				confirmButton: "Confirmar"
				});
			}
		});




$('button[data-loading-text]').on('click', function() {
			var btn = $(this);
			btn.button('loading');
			setTimeout(function() {
				btn.button('reset');
				//clear memory reference
				btn = null;
			}, 3000);

		});

//Scroll Notificaciones
$('#notificaciones').slimscroll({
	height: '200px',
	width: '295px',
	disableFadeOut: true,
	distance: 0,
	size: 10,
	railVisible: true,
	railBorderRadius: 0
  });
$('#notificaciones').animate({"top" : "-42px"}, 250);
$('#notificaciones').animate({"top" : "0px"}, 250);



/* ------------------------------------------------------------------- */
	/*	Logout
	/* ------------------------------------------------------------------- */
$('.logout-js').click(function(){
	 $('body').addClass('logout');
	 setTimeout(logout,400)
	 return false;
  });
  function logout(){
	  var linky = $('.logout-js').data('rel');
	  window.location.href = "login.htm";
  }

// Window.resize functions
$(window).resize(function(){ });

// Window.load functions
$(window).load(function(){ });