	enableJarvisWidgets = true,
	localStorageJarvisWidgets = true,
	sortableJarvisWidgets = true,
	enableMobileWidgets = false,	
	


/*! SmartAdmin - v1.5.2 - 2015-04-23 */
	$.fn.jarvisWidgets&&enableJarvisWidgets&&$("#widget-grid").jarvisWidgets({
		"grid":"article",
		"widgets":".jarviswidget",
		"localStorage":localStorageJarvisWidgets,
		"deleteSettingsKey":"#deletesettingskey-options",
		"settingsKeyLabel":"Reset settings?",
		"deletePositionKey":"#deletepositionkey-options",
		"positionKeyLabel":"Reset position?",
		"sortable":sortableJarvisWidgets,
		"buttonsHidden":!1,
		"toggleButton":!0,
		"toggleClass":"fa fa-minus | fa fa-plus",
		"toggleSpeed":200,
		"onToggle":function(){},
		"deleteButton":!0,
		"deleteMsg":"Warning: This action cannot be undone!",
		"deleteClass":"fa fa-times",
		"deleteSpeed":200,
		"onDelete":function(){},
		"editButton":!0,
		"editPlaceholder":".jarviswidget-editbox",
		"editClass":"fa fa-cog | fa fa-save",
		"editSpeed":200,
		"onEdit":function(){},
		"colorButton":!0,
		"fullscreenButton":!0,
		"fullscreenClass":"fa fa-expand | fa fa-compress",
		"fullscreenDiff":3,
		"onFullscreen":function(){},
		"customButton":!1,
		"customClass":"folder-10 | next-10",
		"customStart":function(){
			alert("Hello you, this is a custom button...")},
		"customEnd":function(){
			alert("bye, till next time...")},
		"buttonOrder":"%refresh% %custom% %edit% %toggle% %fullscreen% %delete%",
		"opacity":1,
		"dragHandle":"> header",
		"placeholderClass":"jarviswidget-placeholder",
		"indicator":!0,
		"indicatorTime":600,
		"ajax":!0,
		"timestampPlaceholder":".jarviswidget-timestamp",
		"timestampFormat":"Last update: %m%/%d%/%y% %h%:%i%:%s%",
		"refreshButton":!0,
		"refreshButtonClass":"fa fa-refresh",
		"labelError":"Sorry but there was a error:",
		"labelUpdated":"Last Update:",
		"labelRefresh":"Refresh",
		"labelDelete":"Delete widget:",
		"afterLoad":function(){},
		"rtl":!1,
		"onChange":function(){},
		"onSave":function(){}
		});

function setup_widgets_mobile(){enableMobileWidgets&&enableJarvisWidgets&&setup_widgets_desktop()}

// Función borrar localStorage
//$("#reset").click(function() {
//	resetWidget();
//	return false;
//		function resetWidget() {
//			$.confirm({
//				title:"Deshacer cambios",
//				text: "Quieres deshacer los últimos cambios?",
//				confirm: function() {
//					localStorage.clear();
//					location.reload();
//					},
//        		cancelButton: "Cancelar",
//				confirmButton: "Confirmar"
//				});			
//			}
//		});
		
//'[data-action="resetWidgets"]',function(b){var c=$(this);a.resetWidgets(c),b.preventDefault(),c=null}
	
$('#reset').click(function (e) {
	"use strict";
	var $this = $(this);
	resetWidgets ($this);
	e.preventDefault();
	$this = null;
		function resetWidgets () {
			$.confirm({
				title: 'Deshacer cambios',
				text: 'Quieres deshacer los últimos cambios?',
				confirm: function() {
					localStorage.clear();
					location.reload();
					},
        		cancelButton: 'Cancelar',
				confirmButton: 'Confirmar'
				});	
			}
	});








//resetWidgets: function($this){
//	
//	$.SmartMessageBox({
//		title : "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
//		content : $this.data('reset-msg') || "Would you like to RESET all your saved widgets and clear LocalStorage?1",
//		buttons : '[No][Yes]'
//	}, function(ButtonPressed) {
//		if (ButtonPressed == "Yes" && localStorage) {
//			localStorage.clear();
//			location.reload();
//		}
//
//	});
//},

// LAUNCH FULLSCREEN 
//launchFullscreen: function(element){
//
//	if (!$.root_.hasClass("full-screen")) {
//
//		$.root_.addClass("full-screen");
//
//		if (element.requestFullscreen) {
//			element.requestFullscreen();
//		} else if (element.mozRequestFullScreen) {
//			element.mozRequestFullScreen();
//		} else if (element.webkitRequestFullscreen) {
//			element.webkitRequestFullscreen();
//		} else if (element.msRequestFullscreen) {
//			element.msRequestFullscreen();
//		}
//
//	} else {
//		
//		$.root_.removeClass("full-screen");
//		
//		if (document.exitFullscreen) {
//			document.exitFullscreen();
//		} else if (document.mozCancelFullScreen) {
//			document.mozCancelFullScreen();
//		} else if (document.webkitExitFullscreen) {
//			document.webkitExitFullscreen();
//		}
//
//	}
//
//},
   
	
//$.root_.on('click', '[data-action="resetWidgets"]', function(e) {	
//				var $this = $(this);
//				smartActions.resetWidgets($this);
//				e.preventDefault();
//				
//				//clear memory reference
//				$this = null;
//			});

//$.root_.on('click', '[data-action="launchFullscreen"]', function(e) {	
//				smartActions.launchFullscreen(document.documentElement);
//				e.preventDefault();
//			}); 
	