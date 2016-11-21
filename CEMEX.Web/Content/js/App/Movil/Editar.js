var EditarMovil = function () {

    //Llamadas AXIOS
    var ConsultarMovil = function () {
        return App.solicitarServicio({
            url: URI.Moviles.ConsultarMovil + GetIdRegister(),
            metodo: "GET",
        }).then(function (response) {
            switch (parseInt(response.status)) {
                case parseInt(StatusCode.OK):
                    SetInformacionMovil(response.data);
                    break;
                default:
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    var EliminarMovil = function () {
        return App.solicitarServicio({
            url: URI.Moviles.EditarMovil + GetIdRegister(),
            metodo: "DELETE"
        }).then(function (response) {
            switch (parseInt(response.status)) {
                case parseInt(StatusCode.OK):
                    window.sessionStorage.setItem(SessionStorageItem.MENSAGESUCCESS, "Registro eliminado correctamente.");
                    break;
                default:
            }
            window.location.href = Pages.Moviles.Listado;
        }).catch(function (error) {
            console.log(error);
        });
    }

    var EditarMovil = function () {
        return App.solicitarServicio({
            url: URI.Moviles.EditarMovil + GetIdRegister(),
            metodo: "PUT",
            data: GetValues()
        }).then(function (response) {
            switch (parseInt(response.status)) {
                case parseInt(StatusCode.OK):
                    window.sessionStorage.setItem(SessionStorageItem.MENSAGESUCCESS, "Registro modificado correctamente.");
                    break;
                default:
            }
            window.location.href = Pages.Moviles.Listado;
        }).catch(function (error) {
            console.log(error);
        });
    }
    //Llamadas AXIOS


    var GetIdRegister = function(){
        var idMovil = sessionStorage.getItem(SessionStorageItem.IDMOVIL);
        if (typeof (idMovil) !== 'undefined' && idMovil !== '') {
            return idMovil;
        }else{
            window.location.href = Pages.Moviles.Listado;
        }        
    }

    var Validate = function () {
        var arrayItemSummary = [];
        var arrayControlsToValidate = [];
        var validationCollectionItemControl;
        var auxIsvalid = true;
        var valor;

        //V.S.O ----------------------------------------------------------------------------------->>>>>>>
        valor = '';
        valor = document.getElementById('InptTxtSO').value;
        if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Versión de Sistema Operativo ", "El campo no debe estar vácio "));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }
        else {
            if (!TelstockBase.Security.Regex.Expressions.Common.Custom(valor, "^[0-9.]{1,10}")) {
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Versión de Sistema Operativo ", "Verifica que el texto de entrada solo contengan caracteres númericos y puntos(.)"));
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
            }
        }

        //Tel ----------------------------------------------------------------------------------->>>>>>>
        valor = '';
        valor = document.getElementById('InptTxtNumeroTelefono').value;
        if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Número Teléfono ", "El campo no debe estar vácio "));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }
        else {
            if (!TelstockBase.Security.Regex.Expressions.Common.NumbersLength(valor, 10, 10)) {
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Número Teléfono  ", "Verifica que el texto de entrada solo contengan caracteres númericos de 10 digítos "));
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
            }
        }

        //Marca ----------------------------------------------------------------------------------->>>>>>>
        valor = '';
        valor = document.getElementById('InptTxtMarca').value;
        if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Marca ", "El campo no debe estar vácio "));
        }
        else {
            if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,50}$/g)) {
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Marca  ", "Verifica que el texto de entrada solo sean caracteres alfanúmericos no mayor a 50 caracteres"));
            }
        }

        //Módelo ----------------------------------------------------------------------------------->>>>>>>
        valor = '';
        valor = document.getElementById('InptTxtModelo').value;
        if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Modelo ", "El campo no debe estar vácio "));
        }
        else {
            if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,50}$/g)) {
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Modelo  ", "Verifica que el texto de entrada solo sean caracteres alfanúmericos no mayor a 50 caracteres"));
            }
        }

        //Numero de serie ----------------------------------------------------------------------------------->>>>>>>
        valor = '';
        valor = document.getElementById('InptTxtNumeroSerie').value;
        if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Número de serie ", "El campo no debe estar vácio "));
        }
        else {
            if (!TelstockBase.Security.Regex.Expressions.Common.NumbersLength(valor, 10, 10)) {
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Número de serie  ", "Verifica que el texto de entrada solo sean caracteres númericos de 10 digítos"));
            }
        }

        //IMEI ----------------------------------------------------------------------------------->>>>>>>
        valor = '';
        valor = document.getElementById('InptTxtIMEI').value;
        if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("IMEI ", "El campo no debe estar vácio "));
        }
        else {
            if (!TelstockBase.Security.Regex.Expressions.Common.NumbersLength(valor, 15, 15)) {
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("IMEI  ", "Verifica que el texto de entrada solo sean caracteres númericos de 15 digítos"));
            }
        }

        //<<<<<<<<<------------------------------------------------------------------------------------------------Summary

        var respuesta = TelstockBase.Security.Validation.ValidateCollection(arrayControlsToValidate, "Resultados :", arrayItemSummary);

        if (!auxIsvalid) {
            respuesta.IsValid = false;
        }
        $("#Summary").html('');
        if (!Boolean(respuesta.IsValid)) {
            TelstockBase.Dom.Elements.CreateByHtml(respuesta.Summary, "Summary");
        } else {
            $("#Summary").html('');
        }
        return respuesta.IsValid;
    }

    var SetInformacionMovil = function (movil) {
       $('#InptTxtSO').val(movil.version);
        $('#InptTxtNumeroTelefono').val(movil.telefono);
        $('#InptTxtMarca').val(movil.marca);
        $('#InptTxtModelo').val(movil.modelo);
        $('#InptTxtNumeroSerie').val(movil.numeroSerie);
        $('#InptTxtIMEI').val(movil.imei);
        $(function () {
            switch (parseInt(movil.status)) {
                case parseInt(TelstockBase.API.Codes.Status.Activo):
                    $(".switch-animate").removeClass('switch-off').addClass('switch-on');
                    break;
                case parseInt(TelstockBase.API.Codes.Status.Inactivo):
                    $(".switch-animate").removeClass('switch-on').addClass('switch-off');
                    break;
                default:
                    $(".switch-animate").removeClass('switch-off').addClass('switch-on');
                    break;
            }
        });
    }
    
    var GetValues = function () {
        var movil = new Object();
        movil.id = GetIdRegister();
        movil.SistemaOperativo = "";
        movil.version = document.getElementById('InptTxtSO').value;
        movil.telefono = document.getElementById('InptTxtNumeroTelefono').value;
        movil.marca = document.getElementById('InptTxtMarca').value;
        movil.modelo = document.getElementById('InptTxtModelo').value;
        movil.numeroSerie = document.getElementById('InptTxtNumeroSerie').value;
        movil.imei = document.getElementById('InptTxtIMEI').value;
        movil.status = ($("#page-div-switch-control-status .switch-on").length > 0) ? parseInt(TelstockBase.API.Codes.Status.Activo) : parseInt(TelstockBase.API.Codes.Status.Inactivo);
        return movil;
    }

    return {
        Init: function(){
            ConsultarMovil();
        },
        Eliminar: function () {
                alertify.confirm("¿Esta seguro de eliminar la información del movil?", function (e) {
                    if (e) {
                        EliminarMovil();
                    }
                });    
        },
        Guardar: function () {
            if (Validate() === true) {
                alertify.confirm("¿Esta seguro que desea actualizar la información?", function (e) {
                    if (e) {
                        EditarMovil();
                    }
                });               
            }
        },
        Cancelar: function () {
            window.location.href = Pages.Moviles.Listado;
        }
    }
}();

EditarMovil.Init();