/*!
 * wizard.config.js
 *
 * @version 1.0
 *
 * @author Vanessa Alejandra Muñoz Corbalá
 * @date Julio 27, 2016
 *
 * @Copyright (c) 2013-2016 Telstock, S.A. de C.V. Todos los Derechos Reservados.
 */

$(document).ready(function() {
	$('#bootstrap-wizard-1').find('.pager .finish').hide();
	
	$('#bootstrap-wizard-1').bootstrapWizard({'tabClass': 'form-wizard',
		'onPrevious': function (tab, navigation, index) {
			var total = navigation.find('li').length;			
			if ((index + 1) < total){
				$('#bootstrap-wizard-1').find('.pager .finish').hide();
				$('#bootstrap-wizard-1').find('.pager .next').show();
			} else {							
				$('#bootstrap-wizard-1').find('.pager .finish').show();
				$('#bootstrap-wizard-1').find('.pager .next').hide();
			}
		},
		'onNext': function (tab, navigation, index) {					
			var total = navigation.find('li').length;					
			if ((index + 1) < total){
				$('#bootstrap-wizard-1').find('.pager .finish').hide();
			} else {						
				$('#bootstrap-wizard-1').find('.pager .finish').show();
				$('#bootstrap-wizard-1').find('.pager .next').hide();
			}			
			$('#bootstrap-wizard-1').find('.form-wizard').children('li').eq(index - 1).addClass(
			'complete');
			$('#bootstrap-wizard-1').find('.form-wizard').children('li').eq(index - 1).find('.step')
			.html('<i class="fa fa-check"></i>');
		}
	});
}) 