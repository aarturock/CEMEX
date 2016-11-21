/**
 * Created by usr_desarrollo14 on 4/10/16.
 */


var Tabla = function () {

    var LABEL_TABLA_MODULO = "TABLA: ";

    return {

        pintarTabla: function (data) {
            if (!data) {
                return;
            }
            var tableHtml = [];

            tableHtml.push('<table class="' + data.clases + '"  cellpadding="0" cellspacing="0" width="100%">');
            tableHtml.push('<thead>');

            for (var indexHeader = 0; indexHeader < data.headers.length; indexHeader++) {
                tableHtml.push('<th>' + data.headers[indexHeader] + '</th>');
            }


            tableHtml.push('</thead>');
            tableHtml.push('<tbody>');

            for (var indexRow = 0; indexRow < data.coleccion.length; indexRow++) {
                tableHtml.push('<tr>');

                for (var indexCell = 0; indexCell < data.coleccion[indexRow].length; indexCell++) {
                    tableHtml.push('<td>' + data.coleccion[indexRow][indexCell] + '</td>');
                }

                tableHtml.push('</tr>');
            }

            tableHtml.push('</tbody>');
            tableHtml.push('</table>');

            $("#" + data.idContenedor).html(tableHtml.join(""));

            console.log(LABEL_TABLA_MODULO + "SE PINTA LA TABLA CON EL ID: " + data.idContenedor);
        },

        renderizarTabla: function (Tabla) {

            var table = $("#" + Tabla.idTabla).DataTable({
                "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "Todos"]],
                dom: 'lBftip',
                language: {
                    "sProcessing": "Procesando...",
                    "sLengthMenu": "Mostrar _MENU_ registros",
                    "sZeroRecords": "No se encontraron resultados",
                    "sEmptyTable": "Ningún dato disponible en esta tabla",
                    "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                    "sInfoPostFix": "",
                    "sSearch": "Buscar:",
                    "sUrl": "",
                    "sInfoThousands": ",",
                    "sLoadingRecords": "Cargando...",
                    "oPaginate": {
                        "sFirst": "Primero",
                        "sLast": "Último",
                        "sNext": "Siguiente",
                        "sPrevious": "Anterior"
                    },
                    "oAria": {
                        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                    }
                },
                paging: true,
                buttons: [
                    {
                        title: Tabla.Titulo,
                        filename: Tabla.NombreArchivo,
                        orientation: 'landscape',
                        extend: 'pdfHtml5',
                        text: 'PDF',
                        pageSize: 'LEGAL',
                        footer: true,
                        exportOptions: {
                            modifier: {
                                page: 'all'
                            }
                        },
                        customize: function (doc) { doc.pageMargins = [5, 20, 5, 20]; }
                    },
                    {
                        filename: Tabla.NombreArchivo,
                        extend: 'excelHtml5',
                        text: 'Excel',
                        footer: true,
                        exportOptions: {
                            modifier: {
                                page: 'all'
                            }
                        },
                        sheetName: Tabla.Titulo
                    }
                ]
            });

            /////Carga el Plugin en los controles Select al desplegar la fila seleccionada (Búsqueda Predictiva).
            //table.on('responsive-display', function (e, datatable, row, showHide, update) {
            //    if (showHide) {
            //        //$('table tbody tr td ul li select').addClass('with-search')
            //        $('table tbody tr td ul li select').select2()
            //    }
            //});
            //$('table tbody tr td ul li select, select.with-search').select2()
        }

    }
}();

