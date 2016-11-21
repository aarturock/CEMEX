var Listado = function () {
    var LlamarServicio = function (statusRegistro) {
        return App.solicitarServicio({
            url: URI.Usuarios.Listado.toString(),
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
        tableHtml.push('<table id="admonUsuarios" class="display responsive" cellpadding="0" cellspacing="0" width="100%">');
        tableHtml.push('<thead>');
        tableHtml.push('<tr>');
        tableHtml.push('<th class="all">ID</th>');
        tableHtml.push('<th class="all">Usuario</th>');
        tableHtml.push('<th class="all">Rol</th>');
        tableHtml.push('<th class="min-desktop">Zona</th>');
        tableHtml.push('<th class="min-desktop">Región</th>');
        tableHtml.push('<th class="min-desktop">Gerencia</th>');
        tableHtml.push('<th class="min-desktop">Plaza</th>');
        tableHtml.push('<th class="min-desktop">Status</th>');
        tableHtml.push('<th class="all">Acciones</th>');
        tableHtml.push('</tr>');
        tableHtml.push('</thead>');
        tableHtml.push('<tbody>');

        if (data.length > 0 && typeof (data) !== 'undefined' && data !== null) {
            for (var iUsuario = 0; iUsuario < data.length; iUsuario++) {
                tableHtml.push('<tr>');
                tableHtml.push('<td>' + data[iUsuario].id + '</td>');
                tableHtml.push('<td>' + data[iUsuario].usuario + '</td>');
                tableHtml.push('<td>' + data[iUsuario].rol + '</td>');
                tableHtml.push('<td>' + data[iUsuario].zona + '</td>');
                tableHtml.push('<td></td>');
                tableHtml.push('<td>' + data[iUsuario].gerencia + '</td>');
                tableHtml.push('<td>' + data[iUsuario].plaza + '</td>');

                if (parseInt(data[iUsuario].status) === 1) {
                    tableHtml.push('<td><div class="alert-success">Activo</div></td>');
                } else if (parseInt(data[iUsuario].status) === 2) {
                    tableHtml.push('<td><div class="alert-danger">Inactivo</div></td>');
                }
                tableHtml.push('<td>');
                tableHtml.push('<div class="btn-group btn-group-sm" role="group" aria-label="acciones">');
                tableHtml.push('<button type="button" class="btn btn-info tm" data-toggle="tooltip" data-placement="top" title="Consultar" onclick="Listado.Editar(' + "'" + data[iUsuario].id + "'" + ');"><i class="consultar"></i></button>');
                tableHtml.push('</div>');
                tableHtml.push('</td>');
                tableHtml.push('</tr>');
            }
        }
        tableHtml.push('<tbody>');
        tableHtml.push('</table>');

        $("#lstUsuarios").html(tableHtml.join(' '));

        Tabla.renderizarTabla({
            idTabla: "admonUsuarios",
            Titulo: "Listado de Usuarios",
            NombreArchivo: "Listado de Usuarios"
        });
    }

    return {
        Init: function () {
            LlamarServicio("0");
        },

        StatusRegistro: function (value) {
            LlamarServicio(String(value));
        },

        Nuevo: function () {
            window.location.href = Pages.Usuarios.Alta;
        },

        Editar: function (idUsuario) {
            window.sessionStorage.setItem(SessionStorageItem.IDUSUARIO, idUsuario);
            window.location.href = Pages.Usuarios.Edicion;
        }
    }
}();

Listado.Init();