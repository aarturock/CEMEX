var GESTIONVENTA = [
{
    "id": 1,
    "fecha": "20/04/2016",
    "vendedor": "Nombre Vendedor",
    "tipoProspecto": "CS",
    "subSegmento": "VS",
    "codigo": "CEM",
    "nivel1": "01/01/2016",
    "nivel2": "01/01/2016",
    "nivel3": "01/01/2016",
    "nivel4": "01/01/2016",
    "nivel5": "01/01/2016",
    "status": "Solicitar Respuesta"
},
{
    "id": 2,
    "fecha": "20/04/2016",
    "vendedor": "Nombre Vendedor",
    "tipoProspecto": "CS",
    "subSegmento": "VS",
    "codigo": "CEM",
    "nivel1": "01/01/2016",
    "nivel2": "01/01/2016",
    "nivel3": "01/01/2016",
    "nivel4": "01/01/2016",
    "nivel5": "01/01/2016",
    "status": "Solicitar Respuesta"
},
{
    "id": 3,
    "fecha": "20/04/2016",
    "vendedor": "Nombre Vendedor",
    "tipoProspecto": "CS",
    "subSegmento": "VS",
    "codigo": "CEM",
    "nivel1": "01/01/2016",
    "nivel2": "01/01/2016",
    "nivel3": "01/01/2016",
    "nivel4": "01/01/2016",
    "nivel5": "01/01/2016",
    "status": "Solicitar Respuesta"
},
{
    "id": 4,
    "fecha": "20/04/2016",
    "vendedor": "Nombre Vendedor",
    "tipoProspecto": "CS",
    "subSegmento": "VS",
    "codigo": "CEM",
    "nivel1": "01/01/2016",
    "nivel2": "01/01/2016",
    "nivel3": "01/01/2016",
    "nivel4": "01/01/2016",
    "nivel5": "01/01/2016",
    "status": "Solicitar Respuesta"
},
{
    "id": 5,
    "fecha": "20/04/2016",
    "vendedor": "Nombre Vendedor",
    "tipoProspecto": "CS",
    "subSegmento": "VS",
    "codigo": "CEM",
    "nivel1": "01/01/2016",
    "nivel2": "01/01/2016",
    "nivel3": "01/01/2016",
    "nivel4": "01/01/2016",
    "nivel5": "01/01/2016",
    "status": "Solicitar Respuesta"
},
{
    "id": 6,
    "fecha": "20/04/2016",
    "vendedor": "Nombre Vendedor",
    "tipoProspecto": "CS",
    "subSegmento": "VS",
    "codigo": "CEM",
    "nivel1": "01/01/2016",
    "nivel2": "01/01/2016",
    "nivel3": "01/01/2016",
    "nivel4": "01/01/2016",
    "nivel5": "01/01/2016",
    "status": "Solicitar Respuesta"
},
{
    "id": 7,
    "fecha": "20/04/2016",
    "vendedor": "Nombre Vendedor",
    "tipoProspecto": "CS",
    "subSegmento": "VS",
    "codigo": "CEM",
    "nivel1": "01/01/2016",
    "nivel2": "01/01/2016",
    "nivel3": "01/01/2016",
    "nivel4": "01/01/2016",
    "nivel5": "01/01/2016",
    "status": "Solicitar Respuesta"
},
{
    "id": 8,
    "fecha": "20/04/2016",
    "vendedor": "Nombre Vendedor",
    "tipoProspecto": "CS",
    "subSegmento": "VS",
    "codigo": "CEM",
    "nivel1": "01/01/2016",
    "nivel2": "01/01/2016",
    "nivel3": "01/01/2016",
    "nivel4": "01/01/2016",
    "nivel5": "01/01/2016",
    "status": "Solicitar Respuesta"
},
{
    "id": 9,
    "fecha": "20/04/2016",
    "vendedor": "Nombre Vendedor",
    "tipoProspecto": "CS",
    "subSegmento": "VS",
    "codigo": "CEM",
    "nivel1": "01/01/2016",
    "nivel2": "01/01/2016",
    "nivel3": "01/01/2016",
    "nivel4": "01/01/2016",
    "nivel5": "01/01/2016",
    "status": "Solicitar Respuesta"
},
{
    "id": 10,
    "fecha": "20/04/2016",
    "vendedor": "Nombre Vendedor",
    "tipoProspecto": "CS",
    "subSegmento": "VS",
    "codigo": "CEM",
    "nivel1": "01/01/2016",
    "nivel2": "01/01/2016",
    "nivel3": "01/01/2016",
    "nivel4": "01/01/2016",
    "nivel5": "01/01/2016",
    "status": "Solicitar Respuesta"
},
{
    "id": 11,
    "fecha": "20/04/2016",
    "vendedor": "Nombre Vendedor",
    "tipoProspecto": "CS",
    "subSegmento": "VS",
    "codigo": "CEM",
    "nivel1": "01/01/2016",
    "nivel2": "01/01/2016",
    "nivel3": "01/01/2016",
    "nivel4": "01/01/2016",
    "nivel5": "01/01/2016",
    "status": "Solicitar Respuesta"
},
{
    "id": 12,
    "fecha": "20/04/2016",
    "vendedor": "Nombre Vendedor",
    "tipoProspecto": "CS",
    "subSegmento": "VS",
    "codigo": "CEM",
    "nivel1": "01/01/2016",
    "nivel2": "01/01/2016",
    "nivel3": "01/01/2016",
    "nivel4": "01/01/2016",
    "nivel5": "01/01/2016",
    "status": "Solicitar Respuesta"
}]

var ITEM_SESSION_STORAGE_ID_PROSPECTO = "ID_PROSPECTO";

var Listado = function(){
    var GetValoresFiltros = function(){
        var Filtros = {
            zona: parseInt($("#SlctZona").val()),
            plaza: parseInt($("#SlctPlaza").val()),
            vendedor: parseInt($("#SlctVendedor").val()),
            tipoProspecto: parseInt($("#SlctTipoProspecto").val()),
            subSegmento: parseInt($("#SlctSubSegmento").val()),
            statusObra: parseInt($("#SlctStatus").val()),
            prospecto: parseInt($("#SlctProspecto").val()),
            fechaInicio: $("#FechaInicio").val(),
            fechaFin: $("#FechaFin").val()
        }
        return Filtros;
    }

    var PintarTabla = function (data) {
        var tableHtml = [];
        console.time("concatenation");
        tableHtml.push('<table id="admonStatusPGV" class="display responsive" cellpadding="0" cellspacing="0" width="100%">');
        tableHtml.push('<thead>');
        tableHtml.push('<tr>');
        tableHtml.push('<th>FECHA</th>');
        tableHtml.push('<th>VENDEDOR</th>');
        tableHtml.push('<th>TIPO DE PROSPECTO</th>');
        tableHtml.push('<th>SUBSEGMENTO</th>');
        tableHtml.push('<th>CÓDIGO</th>');
        tableHtml.push('<th>INICIO PROSPECTAR</th>');
        tableHtml.push('<th>INICIO DETECTAR OPORTUNIDAD</th>');
        tableHtml.push('<th>INICIO CALIFICAR OPORTUNIDAD</th>');
        tableHtml.push('<th>INICIO PRESENTAR PROPUESTA</th>');
        tableHtml.push('<th>INICIO CERRAR VENTA</th>');
        tableHtml.push('<th>DETALLE</th>');
        tableHtml.push('<th>STATUS PGV</th>');
        tableHtml.push('</tr>');
        tableHtml.push('</thead>');

        tableHtml.push('<tbody>');
        for (var indexRow = 0; indexRow < data.length; indexRow++) {
            tableHtml.push('<tr>');
            tableHtml.push('<td>' + data[indexRow].fecha + '</td>');
            tableHtml.push('<td>' + data[indexRow].vendedor + '</td>');
            tableHtml.push('<td>' + data[indexRow].tipoProspecto + '</td>');
            tableHtml.push('<td>' + data[indexRow].subSegmento + '</td>');
            tableHtml.push('<td>' + data[indexRow].codigo + '</td>');
            tableHtml.push('<td>' + data[indexRow].nivel1 + '</td>');
            tableHtml.push('<td>' + data[indexRow].nivel2 + '</td>');
            tableHtml.push('<td>' + data[indexRow].nivel3 + '</td>');
            tableHtml.push('<td>' + data[indexRow].nivel4 + '</td>');
            tableHtml.push('<td>' + data[indexRow].nivel5 + '</td>');

            tableHtml.push('<td>');
            tableHtml.push('<div class="btn-group btn-group-sm" role="group" aria-label="acciones">');
            tableHtml.push('<button type="button" onclick="Listado.RedireccionarFormulario(' + data[indexRow].id + ');" class="btn btn-info tm" data-toggle="tooltip" data-placement="top" title="Consultar"><i class="consultar"></i></button>');
            tableHtml.push('</div>');            
            tableHtml.push('</td>')

            tableHtml.push('<td>' + data[indexRow].status + '</td>');
            tableHtml.push('</tr>');
        }
        tableHtml.push('</tbody>');
        tableHtml.push('</table>');

        $("#ContentEstatusGestionVenta").html("").html(tableHtml.join(""));

        Tabla.renderizarTabla({
            idTabla: "admonStatusPGV",
            Titulo: "Status Proceso de Gestión de Venta",
            NombreArchivo: "Listado Gestión de Venta",       
        });
    }

    return {
        CargaListado: function () {
            console.log("entro a pintar tabla");
            console.log("Filtros",GetValoresFiltros());
            PintarTabla(GESTIONVENTA);

            //return App.solicitarServicio({
            //    url: "GestionVenta",
            //    metodo: "GET",
            //    params: GetValoresFiltros()
            //})
            //.then(function (response) {
            //    PintarTabla(response.data);
            //})
            //.catch(function (error) {
            //    console.log("error",error);
            //})
        },
        RedireccionarFormulario: function (idProspecto) {
            if (typeof(idProspecto) !== 'undefined' && parseInt(idProspecto) > 0 && idProspecto !==null) {
                window.localStorage.setItem(ITEM_SESSION_STORAGE_ID_PROSPECTO, idProspecto);
                window.location.href = '../Home/StatusProspectos';
            }            
        }
    }
}();


Listado.CargaListado();
