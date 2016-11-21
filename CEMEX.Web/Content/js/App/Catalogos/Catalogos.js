/// <reference path="../General/app.js" />

var Catalogos = function () {

    /*
    * Llamada a Servicios con libreria AXIOS    
    */
    var Roles =  function(idSelect){
        return App.solicitarServicio({
            url: URI.Catalogos.Rol,
            metodo: "POST",
            data: {
                status: 1
            }
        }).then(function (response) {
            ResponseStatusCode(idSelect,response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    var Paises = function (idSelect) {
        return App.solicitarServicio({
            url: URI.Catalogos.Pais,
            metodo: "GET"
        }).then(function (response) {
            ResponseStatusCode(idSelect, response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    var Estados = function (idSelect,idPais) {
        return App.solicitarServicio({
            url: URI.Catalogos.Estado+idPais,
            metodo: "GET"
        }).then(function (response) {
            ResponseStatusCode(idSelect, response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    var Municipios = function (idSelect, idEstado) {
        return App.solicitarServicio({
            url: URI.Catalogos.Municipio + idEstado,
            metodo: "GET"
        }).then(function (response) {
            ResponseStatusCode(idSelect, response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    var Regiones = function (idSelect) {
        return App.solicitarServicio({
            url: URI.Catalogos.Zona,
            metodo: "GET"
        }).then(function (response) {
            ResponseStatusCode(idSelect, response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    var Plazas = function (idSelect, idRegion) {
        return App.solicitarServicio({
            url: URI.Catalogos.Plaza +idRegion,
            metodo: "GET"
        }).then(function (response) {
            ResponseStatusCode(idSelect, response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    var Gerencias = function (idSelect,idPlaza) {
        return App.solicitarServicio({
            url: URI.Catalogos.Gerencia +idPlaza,
            metodo: "GET"
        }).then(function (response) {
            ResponseStatusCode(idSelect, response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    /*
    * Creación de HTML para los combos.
    */
    var ResponseStatusCode = function (idSelect, response) {
        switch (parseInt(response.status)) {
            case StatusCode.OK:
                switch (idSelect) {
                    case "SlctRol":
                        CrearItemsOptionRol(idSelect,response.data);
                        break;                
                    default:
                        CrearItemsOption(idSelect,response.data[0].items);
                        break;
                }
                
                break;
            case StatusCode.BadRequest:
                break;
            default:
        }
    }

    var CrearItemsOptionRol = function(idSelect,Data){
        var Combo = '';
        var TxtCombo = '';
        var ElmentObj;
        if (Data != null && typeof (Data) != 'undefined' && Data.length > 0) {
            Combo += '<option value="0">-- Selecciona -- </option>';
            TxtCombo += '-- Selecciona --';
            for (var iElement = 0; iElement < Data.length; iElement++) {
                Combo += '<option value="' + Object.values(Data[iElement])[8] + '"> ' + Object.values(Data[iElement])[2] + '  </option>';
            }
        } else {
            Combo += '<option value="0">-- No se encontraron registros --</option>';
            TxtCombo += '-- No se encontraron registros --';
        }
        CargarCombo(idSelect, Combo, TxtCombo, false)
    }

    var CrearItemsOption = function (idSelect, Data) {
        var Combo = '';
        var TxtCombo = '';
        var ElmentObj;
        if (Data != null && typeof (Data) != 'undefined' && Data.length > 0) {
            Combo += '<option value="0">-- Selecciona -- </option>';
            TxtCombo += '-- Selecciona --';
            for (var iElement = 0; iElement < Data.length; iElement++) {
                Combo += '<option value="' + Object.values(Data[iElement])[1] + '"> ' + Object.values(Data[iElement])[3] + '  </option>';
            }
        } else {
            Combo += '<option value="0">-- No se encontraron registros --</option>';
            TxtCombo += '-- No se encontraron registros --';
        }
        CargarCombo(idSelect, Combo, TxtCombo, false)
    }

    var CrearItemsOptionCatalogo = function (idSelect, Data) {
        var Combo = '';
        var TxtCombo = '';
        var ElmentObj;
        if (Data != null && typeof (Data) != 'undefined' && Data.length > 0) {
            Combo += '<option value="0">-- Selecciona -- </option>';
            TxtCombo += '-- Selecciona --';
            for (var iElement = 0; iElement < Data.length; iElement++) {
                Combo += '<option value="' + Data[iElement].id + '"> ' + Data[iElement].Descripcion + '  </option>';
            }
        } else {
            Combo += '<option value="0">-- No se encontraron registros --</option>';
            TxtCombo += '-- No se encontraron registros --';
        }
        CargarCombo(idSelect, Combo, TxtCombo, false)
    }

    var CargarCombo = function (idSelect, combo, txtCombo, reset) {
        if (!reset) {
            $("#" + idSelect).html('').html(combo);
        }
        var cmbtxt = $("#s2id_" + idSelect).find(".select2-chosen");
        $(cmbtxt).text(txtCombo);
    }

    var ResetCombo = function (idSelect) {
        $("#" + idSelect).val(0);
        $($("#s2id_" + idSelect).find(".select2-chosen")).text('-- Selecciona --');
    }


    return {
        CatalogoRol: function (idSelect) {
           Roles(idSelect);
        },

        CatalogoPais: function (idSelect) {
           Paises(idSelect);
        },
        
        CatalogoEstado: function (idSelect, idPais) {
            Estados(idSelect,idPais);
        },

        CatalogoMunicipio: function (idSelect,idEstado) {
            Municipios(idSelect,idEstado);
        },

        CatalogoRegion: function (idSelect) {
            Regiones(idSelect);
        },

        CatalogoPlaza: function (idSelect,idRegion) {
            Plazas(idSelect,idRegion);
        },

        CatalogoGerencia: function (idSelect,idPlaza) {
            Gerencias(idSelect,idPlaza);
        },

        CargarCombo: function (idSelect, combo, txtCombo) {
            CargarCombo(idSelect, combo, txtCombo,true);
        },

        ResetCombo: function (idSelect) {
            ResetCombo(idSelect);
        }
    }
}();