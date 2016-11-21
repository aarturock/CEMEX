/*!
 * reporteBateoCerrados.js
 *
 * @version 1.0
 *
 * @autor Vanessa Alejandra Muñoz Corbalá
 * @fecha Noviembre 7, 2016
 *
 * @Copyright (c) 2013-2016 Telstock, S.A. de C.V. Todos los Derechos Reservados.
 */
 //



// ====== INFRAESTRUCTURA URBANA ======
var chart = AmCharts.makeChart("infraestructuraUrbana", {
    "type": "serial",
	"theme": "light",
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "bottom",
		"useGraphSettings": true,
		"markerSize": 10
    },
	// "colors": ['#67b7dc', '#fdd400'],
    "dataProvider": [{
        "Producto": "CEMENTO",
        "Ganados": 70,
        "Cerrados": 80,
    }, {
        "Producto": "ACERO",
        "Ganados": 70,
        "Cerrados": 77
    }, {
        "Producto": "HIDRATIUM",
        "Ganados": 94,
        "Cerrados": 96
    }, {
        "Producto": "MR",
        "Ganados": 51,
        "Cerrados": 58
    }],
    "valueAxes": [{
        "stackType": "3d",
        "unit": "%",
        "position": "left",
    }],
	"startDuration": 1,
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.9,
        "labelText": "[[value]]",
        "lineAlpha": 0.2,
        "title": "Ganados",
        "type": "column",
		"color": "#000000",
        "valueField": "Ganados"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.9,
        "labelText": "[[value]]",
        "lineAlpha": 0.2,
        "title": "Cerrados",
        "type": "column",
		"color": "#000000",
        "valueField": "Cerrados"
    }],
    "rotate": true,
	"plotAreaFillAlphas": 0.1,
		"depth3D": 20,
		"angle": 30,
		"categoryField": "Producto",
		"categoryAxis": {
			"gridPosition": "start"
		},
    export: {
		enabled: true,
		fileName: "Infraestructura Urbana",
		menu: [{
		"class": "export-main",
		"menu": ["PNG", "JPG", "PDF" ,"XLSX"],
		}]
	  },
});

// ====== EDIFICACIÓN VERTICAL ======
var chart = AmCharts.makeChart("edificacionvertical", {
    "type": "serial",
	"theme": "light",
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "bottom",
		"useGraphSettings": true,
		"markerSize": 10
    },
	"colors": ['#67b7dc', '#fdd400'],
    "dataProvider": [{
        "Producto": "CEMENTO",
        "Ganados": 67,
        "Cerrados": 80,
    }, {
        "Producto": "ACERO",
        "Ganados": 20,
        "Cerrados": 77
    }, {
        "Producto": "HIDRATIUM",
        "Ganados": 4,
        "Cerrados": 96
    }, {
        "Producto": "DURAMAX",
        "Ganados": 11,
        "Cerrados": 58
    }],
    "valueAxes": [{
        "stackType": "3d",
        "unit": "%",
        "position": "left",
    }],
	"startDuration": 1,
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.9,
        "labelText": "[[value]]",
        "lineAlpha": 0.2,
        "title": "Ganados",
        "type": "column",
		"color": "#000000",
        "valueField": "Ganados"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.9,
        "labelText": "[[value]]",
        "lineAlpha": 0.2,
        "title": "Cerrados",
        "type": "column",
		"color": "#000000",
        "valueField": "Cerrados"
    }],
    "rotate": true,
	"plotAreaFillAlphas": 0.1,
		"depth3D": 20,
		"angle": 30,
		"categoryField": "Producto",
		"categoryAxis": {
			"gridPosition": "start"
		},
    export: {
		enabled: true,
		fileName: "Edificación Vertical",
		menu: [{
		"class": "export-main",
		"menu": ["PNG", "JPG", "PDF" ,"XLSX"],
		}]
	  },
});

// ====== INDUSTRIA Y COMERCIO ======
var chart = AmCharts.makeChart("industriaComercio", {
    "type": "serial",
	"theme": "light",
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "bottom",
		"useGraphSettings": true,
		"markerSize": 10
    },
	"colors": ['#67b7dc', '#fdd400'],
    "dataProvider": [{
        "Producto": "CEMENTO",
        "Ganados": 60,
        "Cerrados": 80,
    }, {
        "Producto": "ACERO",
        "Ganados": 20,
        "Cerrados": 77
    }, {
        "Producto": "HIDRATIUM",
        "Ganados": 62,
        "Cerrados": 96
    }, {
        "Producto": "BAJA CONTR",
        "Ganados": 49,
        "Cerrados": 58
    }],
    "valueAxes": [{
        "stackType": "3d",
        "unit": "%",
        "position": "left",
    }],
	"startDuration": 1,
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.9,
        "labelText": "[[value]]",
        "lineAlpha": 0.2,
        "title": "Ganados",
        "type": "column",
		"color": "#000000",
        "valueField": "Ganados"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.9,
        "labelText": "[[value]]",
        "lineAlpha": 0.2,
        "title": "Cerrados",
        "type": "column",
		"color": "#000000",
        "valueField": "Cerrados"
    }],
    "rotate": true,
	"plotAreaFillAlphas": 0.1,
		"depth3D": 20,
		"angle": 30,
		"categoryField": "Producto",
		"categoryAxis": {
			"gridPosition": "start"
		},
    export: {
		enabled: true,
		fileName: "Industria y Comercio",
		menu: [{
		"class": "export-main",
		"menu": ["PNG", "JPG", "PDF" ,"XLSX"],
		}]
	  },
});

// ====== INFRAESTRUCTURA URBANA ======
var chart = AmCharts.makeChart("viviendaSerie", {
    "type": "serial",
	"theme": "light",
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "bottom",
		"useGraphSettings": true,
		"markerSize": 10
    },
	"colors": ['#67b7dc', '#fdd400'],
    "dataProvider": [{
        "Producto": "CEMENTO",
        "Ganados": 26,
        "Cerrados": 80,
    }, {
        "Producto": "ACERO",
        "Ganados": 35,
        "Cerrados": 77
    }, {
        "Producto": "HIDRATIUM",
        "Ganados": 18,
        "Cerrados": 96
    }, {
        "Producto": "IMPERCEM",
        "Ganados": 1,
        "Cerrados": 58
    }, {
        "Producto": "MORTERO ESTABILIZADO",
        "Ganados": 67,
        "Cerrados": 80
    }],
    "valueAxes": [{
        "stackType": "3d",
        "unit": "%",
        "position": "left",
    }],
	"startDuration": 1,
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.9,
        "labelText": "[[value]]",
        "lineAlpha": 0.2,
        "title": "Ganados",
        "type": "column",
		"color": "#000000",
        "valueField": "Ganados"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.9,
        "labelText": "[[value]]",
        "lineAlpha": 0.2,
        "title": "Cerrados",
        "type": "column",
		"color": "#000000",
        "valueField": "Cerrados"
    }],
    "rotate": true,
	"plotAreaFillAlphas": 0.1,
		"depth3D": 20,
		"angle": 30,
		"categoryField": "Producto",
		"categoryAxis": {
			"gridPosition": "start"
		},
    export: {
		enabled: true,
		fileName: "Vivienda en Serie",
		menu: [{
		"class": "export-main",
		"menu": ["PNG", "JPG", "PDF" ,"XLSX"],
		}]
	  },
});

// ====== INFRAESTRUCTURA URBANA ======
var chart = AmCharts.makeChart("clientePequeno", {
    "type": "serial",
	"theme": "light",
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "bottom",
		"useGraphSettings": true,
		"markerSize": 10
    },
	"colors": ['#67b7dc', '#fdd400'],
    "dataProvider": [{
        "Producto": "CEMENTO",
        "Ganados": 23,
        "Cerrados": 80,
    }, {
        "Producto": "ACERO",
        "Ganados": 3,
        "Cerrados": 77
    }, {
        "Producto": "HIDRATIUM",
        "Ganados": 76,
        "Cerrados": 96
    }, {
        "Producto": "MR",
        "Ganados": 51,
        "Cerrados": 58
    }],
    "valueAxes": [{
        "stackType": "3d",
        "unit": "%",
        "position": "left",
    }],
	//"startDuration": 1,
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.9,
        "labelText": "[[value]]",
        "lineAlpha": 0.2,
        "title": "Ganados",
        "type": "column",
		"color": "#000000",
        "valueField": "Ganados"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.9,
        "labelText": "[[value]]",
        "lineAlpha": 0.2,
        "title": "Cerrados",
        "type": "column",
		"color": "#000000",
        "valueField": "Cerrados"
    }],
    "rotate": true,
	"plotAreaFillAlphas": 0.1,
		"depth3D": 20,
		"angle": 30,
		"categoryField": "Producto",
		"categoryAxis": {
			"gridPosition": "start"
		},
    export: {
		enabled: true,
		fileName: "Cliente Pequeño",
		menu: [{
		"class": "export-main",
		"menu": ["PNG", "JPG", "PDF" ,"XLSX"],
		}]
	  },
});



// ========== EXPORTACIÓN DE ARCHIVO COMPLETO COMO EXCEL ========== //
function exportXLSX() {
  chart.export.toXLSX({
    data: chart.dataProvider
  }, function(data) {
    this.download(data, this.defaults.formats.XLSX.mimeType, "Reporte KPI.xlsx");
  });
}


// ========== EXPORTACIÓN DE ARCHIVO COMPLETO COMO PDF ========== //
function exportPdfCharts() {
  var images = [];
  var pending = AmCharts.charts.length;
  for ( var i = 0; i < AmCharts.charts.length; i++ ) {
    var chart = AmCharts.charts[ i ];
    chart.export.capture( {}, function() {
      this.toJPG( {}, function( data ) {
        images.push( {
          "image": data,
          "fit": [ 523.28, 769.89 ]
        } );
        pending--;
        if ( pending === 0 ) {
          chart.export.toPDF( {
            content: images
          }, function( data ) {
            this.download( data, "application/pdf", "Reporte KPI.pdf" );
          } );
        }
      } );
    } );
  }
}
