var CargaMasiva = function () {
    var Catalogo = {
        Usuarios: {
            Id: 1,
            Nombre: "Plantilla_Usuarios.csv",
            IdDocumento : "675a94a3-7593-422a-b3e7-989ded216e73"
        },
        Catalogos: {
            Id: 2,
            Nombre: "Plantilla_Catalogos.csv",
            IdDocumento : "4ddc06eb-ebb0-42c3-ac66-8430da862905"
        },
        Prospectos: {
            Id: 3,
            Nombre: "Plantilla_Prospectos.csv",
            IdDocumento: "5a0e54ef-bf91-4e3b-aad3-e378d6464ee5"
        }
    };

    var GetIdDocumento = function(idDocumento){
        var documento;
        Logger.info("idDocumento",idDocumento);

        switch (parseInt(idDocumento)){
            case  parseInt(Catalogo.Usuarios.Id):
                documento = {
                    idDocumento :Catalogo.Usuarios.IdDocumento,
                    nombreArchivo:Catalogo.Usuarios.Nombre
                };
                break;
            case parseInt(Catalogo.Catalogos.Id):
                documento = {
                    idDocumento:Catalogo.Catalogos.IdDocumento,
                    nombreArchivo: Catalogo.Catalogos.Nombre
                };
                break;
            case parseInt(Catalogo.Prospectos.Id):
                documento = {
                    idDocumento: Catalogo.Prospectos.IdDocumento,
                    nombreArchivo: Catalogo.Prospectos.Nombre
                }
                break;
        }
        return documento;
    }

    var DescargarPlantilla = function (IdPlantilla) {
        var documento = GetIdDocumento(IdPlantilla);
        if(documento !== null){
            return App.solicitarServicio({
                url: URI.CargarMasiva.DescargarArchivo + documento.idDocumento,
                metodo: "GET"
            }).then(function (response) {
                var csvData =  'data:application/csv;charset=utf-8,' + encodeURIComponent(response.data)
                $("#Archivo_Plantilla").attr({
                    "href": csvData,
                    "download": documento.nombreArchivo
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    var CargarArchivo = function (Archivo, idPlantilla) {
        return App.solicitarServicio({
            url: URI.CargarMasiva.SubirArchivo + idPlantilla,
            metodo: "POST",
            data: Archivo
        }).then(function (response) {
            switch (response.status){
                case StatusCode.OK:
                    TablaResultados(response.data);
                    alertify.success("La carga del archivo fue exitosa.");
                    break;
                case StatusCode.BadRequest:
                    alertify.error("Hubo un problema al subir el archivo, intentelo mas tarde.");
                    break;
            }
        }).catch(function (error) {
            alertify.error("Hubo un problema al subir el archivo, intentelo mas tarde.");
            console.log(error);
        });
    }

    var ValidarArchivo = function () {
        var respuesta = new Object();
        var File = $("#InptFile")[0].files[0];
        if (typeof (File) !== 'undefined') {
            if (File.size < 5242880) {
                if (String(File.type) === 'application/vnd.ms-excel') {
                    var data = new FormData();
                    data.append('file', File);
                    respuesta.EsValido = true;
                    respuesta.Archivo = data;
                } else {
                    alertify.alert("El archivo no pertenece a la extensión .csv");
                    respuesta.EsValido = false;
                }
            } else {
                alertify.alert("El archivo no debe ser mayor a 5 mb.");
                respuesta.EsValido = false;
            }
        } else {
            alertify.alert("Debe seleccionar un archivo.");
            respuesta.EsValido = false;
        }
        return respuesta;
    }

    var TablaResultados = function (dataResultado) {
        var tblHtml = '<table class="dataTable cell-border no-footer " cellpadding="0" cellspacing="0" width="100%">' +
                            '<thead>' +
                                '<tr> ' +
                                    '<th>REGISTROS TOTALES</th>' +
                                    '<th>REGISTROS INGRESADOS</th>' +
                                    '<th>REGISTROS ACTUALIZADOS</th>' +
                                    '<th>REGISTROS CON ERROR</th>' +
                                '</tr>' +
                            '</thead>' +
                            '<tbody>' +
                                '<tr>' +
                                    '<td>'+dataResultado.RegistrosTotales+'</td>' +
                                    '<td>'+dataResultado.RegistrosIngresados+'</td>' +
                                    '<td>'+dataResultado.RegistrosActualizados+'</td>' +
                                    '<td>'+dataResultado.RegistrosErrores+'</td>' +
                                '</tr>' +
                            '</tbody>' +
                        '</table>'

        $("#tblResultados").html('').html(tblHtml);
    }

    return {
        DescargarPlantilla: function () {
            var IdPlantilla = $("#SlctPlantilla").val();
            if (parseInt(IdPlantilla) !== 0)
                DescargarPlantilla(IdPlantilla);

        },

        SubirArchivo: function () {
            var idPlantilla = $("#SlctPlantilla").val();
            if (parseInt(idPlantilla) !== 0) {
                var respuesta = ValidarArchivo();
                if (Boolean(respuesta.EsValido)) {
                    CargarArchivo(respuesta.Archivo, idPlantilla);
                }
            } else {
                alertify.alert("Debe seleccionar un tipo de Plantilla para subir el Archivo.");
            }

        }
    }
}();

