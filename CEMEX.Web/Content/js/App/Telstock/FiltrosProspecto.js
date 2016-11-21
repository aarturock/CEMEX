var FiltrosProspecto = function () {
    var Combo = {
        Zona: {
            idCtrl: "SlctZona"
        },
        Plaza: {
            idCtrl: "SlctPlaza"
        },
        Vendedor: {
            idCtrl: "SlctVendedor"
        },
        TipoProspecto: {
            idCtrl: "SlctTipoProspecto"
        },
        SubSegmento: {
            idCtrl: "SlctSubSegmento"
        },
        StatusObra: {
            idCtrl: "SlctStatus"
        },
        Prospecto: {
            idCtrl: "SlctProspecto"
        }
    }

    var Consultar = function (combo, Value, Value2) {
        if (typeof (Value) === 'undefined') {
            Value = 0;
        }

        if (typeof (Value2) === 'undefined') {
            Value2 = 0;
        }

        var config;
        switch (combo.idCtrl) {
            case Combo.Zona.idCtrl:
                config = {
                    url: URI.Catalogos.Zona.toString(),
                    params: {
                        nombre: "Zona"
                    },
                    metodo: "GET"
                }
                break;
            case Combo.Plaza.idCtrl:
                config = {
                    url: URI.Catalogos.Plaza + Value,
                    metodo: "GET"
                }
                break;
            case Combo.Vendedor.idCtrl:
                config = {
                    url: URI.Catalogos.Vendedor +Value,
                    metodo: "GET"
                }
                break;
            case Combo.TipoProspecto.idCtrl:
                config = {
                    url: URI.Catalogos.TipoProspecto.toString(),
                    metodo: "GET"
                }
                break;
            case Combo.SubSegmento.idCtrl:
                config = {
                    url: URI.Catalogos.SubSegmento.toString(),
                    metodo: "GET"
                }
                break;
            case Combo.StatusObra.idCtrl:
                config = {
                    url: URI.Catalogos.StatusObra.toString(),
                    metodo: "GET"
                }
                break;
            case Combo.Prospecto.idCtrl:
                config = {
                    url: URI.Catalogos.Prospecto.toString(),
                    params: {
                        idTipoProspecto: Value,
                        idSUbsegmento: Value2
                    },
                    metodo: "GET"
                }
                break;
        }

        return App.solicitarServicio(config).then(function (response) {
            if (response.status === 200) {
                console.log("response",response);
                CrearItemsOptionCatalogo(combo, response.data[0].items);
            }
        }).catch(function (error) {
            console.log(error);
        });
    }



    var CrearItemsOption = function (TypeCombo, Data) {
        var Combo = '';
        var TxtCombo = '';
        var ElmentObj;
        if (Data != null && typeof (Data) != 'undefined' && Data.length > 0) {
            Combo += '<option value="0">-- Selecciona -- </option>';
            TxtCombo += '-- Selecciona --';
            for (var iElement = 0; iElement < Data.length; iElement++) {
                Combo += '<option value="' + Object.values(Data[iElement])[0] + '"> ' + Object.values(Data[iElement])[1] + '  </option>';
            }
        } else {
            Combo += '<option value="0">-- No se encontraron registros --</option>';
            TxtCombo += '-- No se encontraron registros --';
        }
        CargarCombo(TypeCombo.idCtrl, Combo, TxtCombo, false)
    }

    var CrearItemsOptionCatalogo = function (TypeCombo, Data) {
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
        CargarCombo(TypeCombo.idCtrl, Combo, TxtCombo, false)
    }

    var CargarCombo = function (idSelect, combo, txtCombo, reset) {
        if (!reset) {
            $("#" + idSelect).html('').html(combo);
        }
        var cmbtxt = $("#s2id_" + idSelect).find(".select2-chosen");
        $(cmbtxt).text(txtCombo);
    }

    var ResetCombo = function (typeCombo) {
        $("#" + typeCombo.idCtrl).val(0);
        $($("#s2id_" + typeCombo.idCtrl).find(".select2-chosen")).text('-- Selecciona --');
    }

    return {
        GetZonas: function () {
            return Consultar(Combo.Zona).then(function (data) {
                ResetCombo(Combo.Vendedor);
                ResetCombo(Combo.TipoProspecto);
                ResetCombo(Combo.SubSegmento);
                ResetCombo(Combo.StatusObra);
                ResetCombo(Combo.Prospecto);
            });
        },

        GetPlazas: function (SelectValue) {
            console.log("SelectValue", SelectValue);
            return Consultar(Combo.Plaza, SelectValue).then(function (data) {
                ResetCombo(Combo.Vendedor);
                ResetCombo(Combo.TipoProspecto);
                ResetCombo(Combo.SubSegmento);
                ResetCombo(Combo.StatusObra);
                ResetCombo(Combo.Prospecto);
            });
        },

        GetVendedores: function (SelectValue) {
            return Consultar(Combo.Vendedor, SelectValue).then(function (data) {
                ResetCombo(Combo.Vendedor);
                ResetCombo(Combo.TipoProspecto);
                ResetCombo(Combo.SubSegmento);
                ResetCombo(Combo.StatusObra);
                ResetCombo(Combo.Prospecto);
            });
        },

        GetTiposProspecto: function () {
            return Consultar(Combo.TipoProspecto).then(function (data) {

            });
        },

        GetSubSegmentos: function () {
            return Consultar(Combo.SubSegmento).then(function (data) {

            });
        },

        GetStatus: function () {
            return Consultar(Combo.StatusObra).then(function (data) {
                ResetCombo(Combo.Prospecto);
            });
        },

        GetProspectos: function (SelectValue) {
            ResetCombo(Combo.StatusObra);
            if (parseInt(SelectValue) !== 0) {
                var SelectValue = document.getElementById('SlctTipoProspecto').value;
                var SelectValue2 = document.getElementById('SlctSubSegmento').value;
                return Consultar(Combo.Prospecto, SelectValue, SelectValue2).then(function (data) {

                });
            }
        }
    }
}();

FiltrosProspecto.GetZonas().then(function () {
    FiltrosProspecto.GetTiposProspecto().then(function () {
        FiltrosProspecto.GetSubSegmentos().then(function () {
            FiltrosProspecto.GetStatus().then(function () {

            });
        });
    });
});







