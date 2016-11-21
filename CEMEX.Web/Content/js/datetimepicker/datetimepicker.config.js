/*!
 * datetimepicker.config.js
 *
 * @version 1.0
 *
 * @author Vanessa Alejandra Muñoz Corbalá
 * @date Agosto 10, 2016
 *
 * @Copyright (c) 2013-2016 Telstock, S.A. de C.V. Todos los Derechos Reservados.
 */

$(function () {
	"use strict";
	//.datepicker selección a partir de un día	
	//Seleccionar rangos de fecha a partir de un día	
        $('.datepicker').datetimepicker({ locale: 'es', format: 'L' });
        $('.dateTo').datetimepicker({ locale: 'es', format: 'L', useCurrent: false });
		
        $(".datepicker").on("dp.change", function (e) {
				$('.dateTo').data("DateTimePicker").minDate(e.date);
			});
        $(".dateTo").on("dp.change", function (e) {
				$('.datepicker').data("DateTimePicker").maxDate(e.date);
			});
			
	//.month selección a partir de un mes
	//Seleccionar rangos de fecha mensual
        $('.month').datetimepicker({ locale: 'es', format: 'MM/YYYY' });
        $('.monthTo').datetimepicker({ locale: 'es', format: 'MM/YYYY', useCurrent: false });
		
        $(".month").on("dp.change", function (e) {
				$('.monthTo').data("DateTimePicker").minDate(e.date);
			});
        $(".monthTo").on("dp.change", function (e) {
				$('.month').data("DateTimePicker").maxDate(e.date);
			});
			
		//.timepicker selección de horario de 24 hrs.
		$('.timepicker').datetimepicker({ locale: 'es', format: 'LT' });
			
		//.timepicker selección de horario AM./PM.
		$('.timepickerAMPM').datetimepicker({ locale: 'en', format: 'LT' });
		
		//.timepicker selección de horario en rangos de 15 mins
		$('.timepicker15').datetimepicker({ locale: 'en', format: 'LT', stepping: 15, });
		
		//.timepicker selección de horario  en rangos de 30 mins	
		$('.timepicker30').datetimepicker({ locale: 'en', format: 'LT', stepping: 30, });
			
    });