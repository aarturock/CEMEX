var ListadoProspecto = function () {
    var LlamarServicio = function () {
        return App.solicitarServicio({
            url: URI.Prospecto.Listado.toString(),
            metodo: "POST",
            data: {
            }
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
        var contactoPrincipal;
        tableHtml.push('<table id="AdmonProspectos" class="display responsive" cellpadding="0" cellspacing="0" width="100%">');
        tableHtml.push('<thead>');
        tableHtml.push('<tr>');
        tableHtml.push('<th class="all">FOTOGRAFÍA</th>');
        tableHtml.push('<th class="all">PROSPECTO / OBRA</th>');
        tableHtml.push('<th class="min-desktop">TIPO DE PROSPECTO</th>');
        tableHtml.push('<th class="min-desktop">SUBSEGMENTO</th>');
        tableHtml.push('<th class="min-desktop">CONTACTO</th>');
        tableHtml.push('<th class="min-desktop">TELÉFONO</th>');
        tableHtml.push('<th class="min-desktop">E MAIL</th>');
        tableHtml.push('<th class="min-desktop">ORIGEN DE CARGA</th>');
        tableHtml.push('<th class="all">Acciones</th>');
        tableHtml.push('</tr>');
        tableHtml.push('</thead>');
        tableHtml.push('<tbody>');

        if (data.length > 0 && typeof (data) !== 'undefined' && data !== null) {
            for (var iProspecto = 0; iProspecto < data.length; iProspecto++) {
                for (var iContacto = 0; iContacto < data[iProspecto].contactos.length; iContacto++) {
                    if (data[iProspecto].contactos[iContacto].principal) {
                        contactoPrincipal = data[iProspecto].contactos[iContacto];
                    }
                }

                tableHtml.push('<tr>');
                tableHtml.push('<td><div class="foto-cliente"><div class="marco"><img src="' + ((data[iProspecto].fotografia === '') ? '/Content/img/avatar/prospectoMoral.png' : App.obtenerUrlBase() + URI.Archivo.Descargar + data[iProspecto].fotografia) + '" class="img-responsive"></div></div></td>');
                tableHtml.push('<td>' + data[iProspecto].cliente[0].nombre + ' / ' + data[iProspecto].cliente[0].obra + '</td>');
                tableHtml.push('<td>' + data[iProspecto].tipoProspecto.Descripcion + '</td>');
                tableHtml.push('<td>' + data[iProspecto].subSegmento.Descripcion + '</td>');


                if (typeof(contactoPrincipal) !== 'undefined' ) {
                    tableHtml.push('<td>' + contactoPrincipal.nombres + ' ' + contactoPrincipal.apellidoPaterno + ' ' + contactoPrincipal.apellidoMaterno + '</td>');
                    tableHtml.push('<td>' + contactoPrincipal.telefono + '</td>');
                    tableHtml.push('<td>' + contactoPrincipal.email + '</td>');
                } else {
                    tableHtml.push('<td colspan="3"></td>');
                }

                tableHtml.push('<td>WEB</td>');
                tableHtml.push('<td>');
                tableHtml.push('<div class="btn-group btn-group-sm" role="group" aria-label="acciones">');
                tableHtml.push('<button type="button" class="btn btn-info tm" data-toggle="tooltip" data-placement="top" title="Editar" onclick="ListadoProspecto.Editar(' + "'" + data[iProspecto].id + "'" + ');"><i class="editar"></i></button>');
                tableHtml.push('<button type="button" class="btn btn-info tm" data-toggle="tooltip" data-placement="top" title="Consultar" onclick="ListadoProspecto.GestionVenta(' + "'" + data[iProspecto].id + "'" + ');"><i class="consultar"></i></button>');
                tableHtml.push('</div>');
                tableHtml.push('</td>');
                tableHtml.push('</tr>');
            }
        }
        tableHtml.push('<tbody>');
        tableHtml.push('</table>');

        $("#divProspectos").html(tableHtml.join(' '));

        Tabla.renderizarTabla({
            idTabla: "AdmonProspectos",
            Titulo: "Listado de Prospectos",
            NombreArchivo: "Listado de Prospectos"
        });
    }
    return {
        Init: function () {
            LlamarServicio();
        },

        Nuevo: function () {
            window.location.href = Pages.Prospecto.Alta;
        },

        Editar: function (idProspecto) {
            window.sessionStorage.setItem(SessionStorageItem.IDPROSPECTO, idProspecto);
            window.location.href = Pages.Prospecto.Edicion;
        },

        GestionVenta: function (idProspecto) {
            window.sessionStorage.setItem(SessionStorageItem.IDPROSPECTOGV, idProspecto);
            window.location.href = Pages.GestionVenta.Index;
        }
    }
}();


ListadoProspecto.Init();
