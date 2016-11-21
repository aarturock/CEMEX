var Listado = function() {
    
    var LlamarServicio = function (estatusRegistro) {
        console.log("estatusRegistro",estatusRegistro);
        return App.solicitarServicio({
            url: URI.Roles.Listado,
            metodo: "POST",
            data: { status: estatusRegistro}
        }).then(function (response) {
            switch (response.status) {
                case StatusCode.OK:
                    PintarTabla(response.data);
                    break;
                default:
            }
        }).catch(function (error) {
            console.log("error",error);
        });
    }


    var EstatusRegistro = function () {
        return $("#estatusRegistro").val();
    }


    var PintarTabla = function (data) {
        var tableHtml = [];
        tableHtml.push('<table id="admonRoles" class="display responsive" cellpadding="0" cellspacing="0" width="100%">');
        tableHtml.push('<thead>');
        tableHtml.push('<tr>');
        tableHtml.push('<th class="all">ID</th>');
        tableHtml.push('<th class="all">ROL</th>');
        tableHtml.push('<th class="all">STATUS</th>');
        tableHtml.push('<th class="all">ACCIONES</th>');
        tableHtml.push('</tr>');
        tableHtml.push('</thead>');
        tableHtml.push('<tbody>');

        if (data.length > 0 && typeof (data) !== 'undefined' && data !== null) {
            for (var iRol = 0; iRol < data.length; iRol++) {
                tableHtml.push('<tr>');
                tableHtml.push('<td>' + data[iRol].id + '</td>');
                tableHtml.push('<td>' + data[iRol].nombreRol + '</td>');

                if (parseInt(data[iRol].status) === 1) {
                    tableHtml.push('<td><div class="alert-success">Activo</div></td>');
                } else if (parseInt(data[iRol].status) === 2) {
                    tableHtml.push('<td><div class="alert-danger">Inactivo</div></td>');
                }
                tableHtml.push('<td>');
                tableHtml.push('<div class="btn-group btn-group-sm" role="group" aria-label="acciones">');
                tableHtml.push('<button type="button" class="btn btn-info tm" data-toggle="tooltip" data-placement="top" title="Consultar" onclick="Listado.Editar(' + "'" + data[iRol].id + "'" + ');"><i class="consultar"></i></button>');
                tableHtml.push('</div>');
                tableHtml.push('</td>');
                tableHtml.push('</tr>');
            }
        }
        tableHtml.push('<tbody>');
        tableHtml.push('</table>');

        $("#lstRoles").html(tableHtml.join(' '));

        Tabla.renderizarTabla({
            idTabla: "admonRoles",
            Titulo: "Listado de Roles",
            NombreArchivo: "Listado de Roles"
        });
    }

    return {
        Init: function () {
            LlamarServicio(0);
        },

        EstatusRegistro: function (value) {
            LlamarServicio(value);
        },

        Nuevo: function () {
            window.location.href = Pages.Roles.Alta;
        },

        Editar: function (idRol) {
            window.sessionStorage.setItem(SessionStorageItem.IDROL, idRol);
            window.location.href = Pages.Roles.Edicion;
        }
    }
}();

Listado.Init();