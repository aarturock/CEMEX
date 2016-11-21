	enableJarvisWidgets = true,
	localStorageJarvisWidgets = true,
	sortableJarvisWidgets = true,
	enableMobileWidgets = false,	
	


/*! SmartAdmin - v1.5.2 - 2015-04-23 */
	/*
 * INITIALIZE JARVIS WIDGETS
 * Setup Desktop Widgets
 */
function setup_widgets_desktop() {

    if ($.fn.jarvisWidgets && enableJarvisWidgets) {

        $('#widget-grid').jarvisWidgets({

            grid: 'article',
            widgets: '.jarviswidget',
            localStorage: localStorageJarvisWidgets,
            deleteSettingsKey: '#deletesettingskey-options',
            settingsKeyLabel: 'Reset settings?',
            deletePositionKey: '#deletepositionkey-options',
            positionKeyLabel: 'Reset position?',
            sortable: sortableJarvisWidgets,
            buttonsHidden: false,
            // toggle button
            toggleButton: true,
            toggleClass: 'fa fa-minus | fa fa-plus',
            toggleSpeed: 200,
            onToggle: function () {},
            // delete btn
            deleteButton: true,
            deleteMsg: 'Warning: This action cannot be undone!',
            deleteClass: 'fa fa-times',
            deleteSpeed: 200,
            onDelete: function () {},
            // edit btn
            editButton: true,
            editPlaceholder: '.jarviswidget-editbox',
            editClass: 'fa fa-cog | fa fa-save',
            editSpeed: 200,
            onEdit: function () {},
            // color button
            colorButton: true,
            // full screen
            fullscreenButton: true,
            fullscreenClass: 'fa fa-expand | fa fa-compress',
            fullscreenDiff: 3,
            onFullscreen: function () {},
            // custom btn
            customButton: false,
            customClass: 'folder-10 | next-10',
            customStart: function () {
                alert('Hello you, this is a custom button...');
            },
            customEnd: function () {
                alert('bye, till next time...');
            },
            // order
            buttonOrder: '%refresh% %custom% %edit% %toggle% %fullscreen% %delete%',
            opacity: 1.0,
            dragHandle: '> header',
            placeholderClass: 'jarviswidget-placeholder',
            indicator: true,
            indicatorTime: 600,
            ajax: true,
            timestampPlaceholder: '.jarviswidget-timestamp',
            timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
            refreshButton: true,
            refreshButtonClass: 'fa fa-refresh',
            labelError: 'Sorry but there was a error:',
            labelUpdated: 'Last Update:',
            labelRefresh: 'Refresh',
            labelDelete: 'Delete widget:',
            afterLoad: function () {},
            rtl: false, // best not to toggle this!
            onChange: function () {

            },
            onSave: function () {

            },
            ajaxnav: $.navAsAjax // declears how the localstorage should be saved (HTML or AJAX Version)

        });

    }

}

function setup_widgets_mobile(){enableMobileWidgets&&enableJarvisWidgets&&setup_widgets_desktop()}

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
	
	
	
	/*
 * DETECT MOBILE DEVICES
 * Description: Detects mobile device - if any of the listed device is 
 * detected a class is inserted to $.root_ and the variable thisDevice 
 * is decleard. (so far this is covering most hand held devices)
 */	

var ismobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
	if(!ismobile){
		setup_widgets_desktop();			
	} 
	else {
		setup_widgets_mobile();
}
	


/*
 * INITIALIZE JARVIS WIDGETS
 * Setup Desktop Widgets
 */	
	function setup_widgets_desktop() {
			"use strict";
			$('#widget-grid').jarvisWidgets({
	grid : 'article',
	widgets : '.jarviswidget',
	localStorage : true,
	deleteSettingsKey : '#deletesettingskey-options',
	settingsKeyLabel : 'Reset settings?',
	deletePositionKey : '#deletepositionkey-options',
	positionKeyLabel : 'Reset position?',
	sortable : true,
	buttonsHidden : false,
	// toggle button
	toggleButton : true,
	toggleClass : 'fa fa-minus | fa fa-plus',
	toggleSpeed : 200,
	onToggle : function() {
	},
	// delete btn
	deleteButton : true,
	deleteMsg:'Warning: This action cannot be undone!',
	deleteClass : 'fa fa-times',
	deleteSpeed : 200,
	onDelete : function() {
	},
	// edit btn
	editButton : true,
	editPlaceholder : '.jarviswidget-editbox',
	editClass : 'fa fa-cog | fa fa-save',
	editSpeed : 200,
	onEdit : function() {
	},
	// color button
	colorButton : true,
	// full screen
	fullscreenButton : true,
	fullscreenClass : 'fa fa-expand | fa fa-compress',
	fullscreenDiff : 3,
	onFullscreen : function() {
	},
	// custom btn
	customButton : false,
	customClass : 'folder-10 | next-10',
	customStart : function() {
		alert('Hello you, this is a custom button...');
	},
	customEnd : function() {
		alert('bye, till next time...');
	},
	// order
	buttonOrder : '%refresh% %custom% %edit% %toggle% %fullscreen% %delete%',
	opacity : 1.0,
	dragHandle : '> header',
	placeholderClass : 'jarviswidget-placeholder',
	indicator : true,
	indicatorTime : 600,
	ajax : true,
	timestampPlaceholder : '.jarviswidget-timestamp',
	timestampFormat : 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
	refreshButton : true,
	refreshButtonClass : 'fa fa-refresh',
	labelError : 'Sorry but there was a error:',
	labelUpdated : 'Last Update:',
	labelRefresh : 'Refresh',
	labelDelete : 'Delete widget:',
	afterLoad : function() {
	},
	rtl : false, // best not to toggle this!
	

			});
	}	
/*
 * SETUP DESKTOP WIDGET
 */
	function setup_widgets_mobile() {
			"use strict";		
			$('#widget-grid').jarvisWidgets({
	grid : 'article',
	widgets : '.jarviswidget',
	localStorage : true,
	deleteSettingsKey : '#deletesettingskey-options',
	settingsKeyLabel : 'Reset settings?',
	deletePositionKey : '#deletepositionkey-options',
	positionKeyLabel : 'Reset position?',
	sortable : false,
	buttonsHidden : false,
	// toggle button
	toggleButton : true,
	toggleClass : 'fa fa-minus | fa fa-plus',
	toggleSpeed : 200,
	onToggle : function() {
	},
	// delete btn
	deleteButton : true,
	deleteMsg:'Warning: This action cannot be undone!',
	deleteClass : 'fa fa-times',
	deleteSpeed : 200,
	onDelete : function() {
	},
	// edit btn
	editButton : true,
	editPlaceholder : '.jarviswidget-editbox',
	editClass : 'fa fa-cog | fa fa-save',
	editSpeed : 200,
	onEdit : function() {
	},
	// color button
	colorButton : true,
	// full screen
	fullscreenButton : true,
	fullscreenClass : 'fa fa-expand | fa fa-compress',
	fullscreenDiff : 3,
	onFullscreen : function() {
	},
	// custom btn
	customButton : false,
	customClass : 'folder-10 | next-10',
	customStart : function() {
		alert('Hello you, this is a custom button...');
	},
	customEnd : function() {
		alert('bye, till next time...');
	},
	// order
	buttonOrder : '%refresh% %custom% %edit% %toggle% %fullscreen% %delete%',
	opacity : 1.0,
	dragHandle : '> header',
	placeholderClass : 'jarviswidget-placeholder',
	indicator : true,
	indicatorTime : 600,
	ajax : true,
	timestampPlaceholder : '.jarviswidget-timestamp',
	timestampFormat : 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
	refreshButton : true,
	refreshButtonClass : 'fa fa-refresh',
	labelError : 'Sorry but there was a error:',
	labelUpdated : 'Last Update:',
	labelRefresh : 'Refresh',
	labelDelete : 'Delete widget:',
	afterLoad : function() {
	},
	rtl : false, // best not to toggle this!
	onChange : function() {
		
	},
	onSave : function() {
		
	},
	ajaxnav : $.navAsAjax // declears how the localstorage should be saved (HTML or AJAX Version)

			});	
	}
/* ~ END: INITIALIZE JARVIS WIDGETS */
