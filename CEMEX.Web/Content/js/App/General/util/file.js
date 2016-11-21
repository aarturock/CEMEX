
var TipoArchivo = function () {
    return {
        Imagen: [
           "image/x-png",
           "image/gif",
           "image/jpeg"
        ]
    }
}();


var File = function () {
    var UploadFile = function (Archivo) {
        return App.solicitarServicio({
            url: URI.Archivo.Subir,
            metodo: 'POST',
            data: Archivo
        });
    }
 
    var ActualizaArchivo = function (idArchivo, Archivo) {
        return App.solicitarServicio({
            url: URI.Archivo.Actualiza + idArchivo,
            metodo: 'PUT',
            data: Archivo
        });
    }

    var ProcesarArchivos = function (controlConfig) {
        if (typeof (controlConfig.idControlInputFile) !== 'undefined' && controlConfig.idControlInputFile !== '') {
            var control = $("#" + controlConfig.idControlInputFile);
            if (typeof(control) !== 'undefined') {
                if (controlConfig.cargaMultiple) {
                    CargaMultiple(control, controlConfig);
                } else {
                    return CargaUnica(control, controlConfig);
                }
            } else {
                console.info("El control File no se encuentra");
            }
        } else {
            console.info("Debe ingresar un id de control tipo Input File");
        }
    }

    var CargaMultiple = function () {

    }

    var CargaUnica = function (control, configControl) {
        if (control.length >0) {
            var File = control[0].files[0];
            if (ValidarArchivo(File, configControl)) {
                var data = new FormData();
                data.append('archivo', File);
                data.append('descripcion','prueba ');
                return data;
            } else {
                console.log("Archivo No Valido", File);
                return false;
            }
        } else {
            console.log("");
            return false;
        }
    }

    var ValidarArchivo = function (file,configControl) {
        if (typeof(file) !== 'undefined') {
            if (parseInt(file.size) < parseInt(configControl.peso)) {
                console.log("El peso del archivo esta bien ");

                if (typeof (configControl.tipoArchivo.validar) === true) {
                    if (configControl.tipoArchivo.indexOf(file.type) !== -1) {
                        return true;
                    } else {
                        console.log("La extensión de archivo no es valida");
                        return false;
                    }
                } else {
                    return true;
                }
            } else {
                console.log("El archivo excede el peso");
                return false;
            }
        }
    }

    return {
        UploadFile: function (control) {
            // {idControlInputFile: "", cargaMultiple: false, peso: 93892, TipoArchivo: TipoArchivos.Imagen }
            var respuesta = ProcesarArchivos(control);
            if (typeof(respuesta) !== 'false') {
                return UploadFile(respuesta)
            }           
        },

        EliminarArchivo: function (idArchivo) {
            return App.solicitarServicio({
                url: URI.Archivo.Eliminar + idArchivo,
                metodo: 'DELETE',
            }).catch(function (error) {
                console.log("error",error);
            });
        },

        ActualizaArchivo: function (idArchivo, control) {
            var respuesta = ProcesarArchivos(control);
            if (typeof(respuesta) !== 'false') {
                return ActualizaArchivo(idArchivo, respuesta);
            }
        }
    }
}();