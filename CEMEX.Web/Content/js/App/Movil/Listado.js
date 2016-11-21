var Listado = function () {
    var LlamarServicio = function (statusRegistro) {
        return App.solicitarServicio({
            url: URI.Moviles.Listado.toString(),
            metodo: "POST",
            data: { status: statusRegistro }
        }).then(function (response) {
            switch (response.status) {
                case StatusCode.OK:
                    PintarTabla(response.data);
                    break;
                default:
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    var PintarTabla = function (data) {
        var tableHtml = [];
        tableHtml.push('<table id="admonMoviles" class="display responsive" cellpadding="0" cellspacing="0" width="100%">');
        tableHtml.push('<thead>');
        tableHtml.push('<tr>');
        tableHtml.push('<th class="all">ID</th>');
        // tableHtml.push('<th class="all">Sistema operativo</th>');
        tableHtml.push('<th class="all">Número de teléfono</th>');
        tableHtml.push('<th class="all">Marca</th>');
        tableHtml.push('<th class="min-desktop">Modelo</th>');
        tableHtml.push('<th class="min-desktop">No. Serie</th>');
        tableHtml.push('<th class="min-desktop">IMEI</th>');
        tableHtml.push('<th class="all">Acciones</th>');
        tableHtml.push('</tr>');
        tableHtml.push('</thead>');
        tableHtml.push('<tbody>');

        if (data.length > 0 && typeof (data) !== 'undefined' && data !== null) {
            for (var iMovil = 0; iMovil < data.length; iMovil++) {
                tableHtml.push('<tr>');
                tableHtml.push('<td>' + data[iMovil].id + '</td>');
                // tableHtml.push('<td>' +  (typeof(data[iMovil].SistemaOperativo) !== 'undefined') ? data[iMovil].SistemaOperativo: '' + '</td>');
                tableHtml.push('<td>' + data[iMovil].telefono + '</td>');
                tableHtml.push('<td>' + data[iMovil].marca + '</td>');
                tableHtml.push('<td>' + data[iMovil].modelo + '</td>');
                tableHtml.push('<td>' + data[iMovil].numeroSerie + '</td>');
                tableHtml.push('<td>' + data[iMovil].imei + '</td>');
                tableHtml.push('<td>');
                tableHtml.push('<div class="btn-group btn-group-sm" role="group" aria-label="acciones">');
                tableHtml.push('<button type="button" class="btn btn-info tm" data-toggle="tooltip" data-placement="top" title="Consultar" onclick="Listado.Editar(' + "'"+ data[iMovil].id + "'" + ');"><i class="consultar"></i></button>');
                tableHtml.push('</div>');
                tableHtml.push('</td>');
                tableHtml.push('</tr>');
            }
        }
        tableHtml.push('<tbody>');
        tableHtml.push('</table>');

        $("#lstMoviles").html(tableHtml.join(' '));

        Tabla.renderizarTabla({
            idTabla: "admonMoviles",
            Titulo: "Listado de Moviles",
            NombreArchivo: "Listado de Moviles"
        });
    }

    var Alertas = function () {
        //if (typeof (sessionStorage.getItem(SessionStorageItem.MENSAJESUCCESS)) !== 'undefined') {
        //    alertify.success(sessionStorage.getItem(SessionStorageItem.MENSAJESUCCESS));
        //}
    }

    return {
        Init: function () {
            LlamarServicio("0");
            Alertas();
        },

        StatusRegistro: function (value) {
            LlamarServicio(String(value));
        },

        Nuevo: function () {
            window.location.href = Pages.Moviles.Alta;
        },

        Editar: function (idMovil) {
            window.sessionStorage.setItem(SessionStorageItem.IDMOVIL,idMovil);
            window.location.href = Pages.Moviles.Edicion;
        }
    }
}();

Listado.Init();