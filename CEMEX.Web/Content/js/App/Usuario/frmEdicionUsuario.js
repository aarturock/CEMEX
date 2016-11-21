
var frmEdicionUsuario = {
    InitForm: function () {
        frmEdicionUsuario.GetRoles();
        frmEdicionUsuario.GetPaises();
        frmEdicionUsuario.GetRegiones();
        frmEdicionUsuario.InitLoadData();
    },
    InitLoadData: function () {

        $("#IdRol").val($("#IdRolHidden").val()).trigger("change");

        $("#IdPais").val($("#IdPaisHidden").val()).trigger("change");

        $("#IdEstado").val($("#IdEstadoHidden").val()).trigger("change");

        $("#IdMunicipio").val($("#IdMunicipioHidden").val()).trigger("change");

        $("#IdRegion").val($("#IdRegionHidden").val()).trigger("change");

        $("#IdPlaza").val($("#IdPlazaHidden").val()).trigger("change");

        $("#IdGerencia").val($("#IdGerenciaHidden").val()).trigger("change");
    },

    //Llamadas AJAX -------------------->>>>
    GetRoles: function () {
        try {
            $.ajax({
                url: "/Catalogo/GetRoles",
                dataType: "json",
                type: "GET",
                contentType: "application/json; charset=utf-8",
                async: false,
                success: function (data) {
                    if (data.HttpCode === 200) {
                        if (typeof (data.Data) !== 'undefined') {
                            var response = JSON.parse(data.Data);
                            frmEdicionUsuario.PintaComboRoles(response);
                        }
                    } else {
                        console.log("Ocurrio un error al crear combo");
                    }
                },
                error: function () {
                    console.log("Ocurrio un error");
                }
            });
        } catch (e) {
            console.log(e);
        }
    },
    GetPaises: function () {
        $.ajax({
            url: "/Catalogo/GetPaises",
            dataType: "json",
            type: "GET",
            async: false,
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                frmEdicionUsuario.CrearElementos(data.Items, "IdPais");
                frmEdicionUsuario.CrearElementos(data.Items, "IdPaisA");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
                console.log(jqXHR);
            }
        });
    },
    GetEstados: function (idPais) {
        if (parseInt(idPais) !== 0) {
            var datos = {
                IdPais: idPais
            }

            $.ajax({
                url: "/Catalogo/GetEstados",
                dataType: "json",
                data: datos,
                type: "GET",
                async: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    frmEdicionUsuario.CrearElementos(data.Items, "IdEstado");
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                    console.log(jqXHR);
                }
            });
        } else {
            frmEdicionUsuario.CargarCombo('IdEstado', '<option value="">-- Selecciona -- </option>', '-- Selecciona --');
            frmEdicionUsuario.CargarCombo("IdMunicipio", '<option value="">-- Selecciona -- </option>', '-- Selecciona --');
        }
    },
    GetMunicipios: function (idEstado) {
        if (parseInt(idEstado) !== 0) {
            var datos = {
                IdEstado: idEstado
            }
            $.ajax({
                url: "/Catalogo/GetMunicipios",
                dataType: "json",
                data: datos,
                type: "GET",
                async: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    frmEdicionUsuario.CrearElementos(data.Items, "IdMunicipio");
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                    console.log(jqXHR);
                }
            });
        } else {
            frmEdicionUsuario.CargarCombo("IdMunicipio", "<option value=''>-- Selecciona --</option>", "-- Selecciona --");
        }
    },
    GetRegiones: function () {
        $.ajax({
            url: "/Catalogo/GetRegiones",
            dataType: "json",
            type: "GET",
            async: false,
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                frmEdicionUsuario.CrearElementos(data.Items, "IdRegion");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
                console.log(jqXHR);
            }
        });
    },
    GetPlazas: function (idRegion) {
        if (parseInt(idRegion) !== 0) {
            var datos = {
                IdRegion: idRegion
            }
            $.ajax({
                url: "/Catalogo/GetPlazas",
                dataType: "json",
                data: datos,
                type: "GET",
                async: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    frmEdicionUsuario.CrearElementos(data.Items, "IdPlaza");
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("Ocurrio un error");
                }
            });
        } else {
            frmEdicionUsuario.CargarCombo("IdPlaza", "<option value=''>-- Selecciona --</option>", "-- Selecciona --");
            frmEdicionUsuario.CargarCombo("IdGerencia", "<option value=''>-- Selecciona --</option>", "-- Selecciona --");
        }
    },
    GetGerencias: function(idPlaza){
        if (parseInt(idPlaza) !== 0) {
            var datos = {
                IdPlaza: idPlaza
            }
            $.ajax({
                url: "/Catalogo/GetGerencias",
                dataType: "json",
                data: datos,
                type: "GET",
                async: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    frmEdicionUsuario.CrearElementos(data.Items, "IdGerencia");
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("Ocurrio un error");
                }
            });
        } else {
            frmEdicionUsuario.CargarCombo("IdPlaza", "<option value=''>-- Selecciona --</option>", "-- Selecciona --");
        }
    },
    Eliminar: function(){
        var Usuario =$("#idUsuario").val();
        if (Usuario !== '' && typeof(Usuario) !=='undefined') {
            $.ajax({
                url: "/Usuarios/DeleteUsuario",
                dataType: "json",
                type: "POST",
                data: JSON.stringify({ IdUsuario: Usuario }),
                contentType: "application/json; charset=utf-8",
                async: false,
                success: function (data) {
                    switch (parseInt(data.HttpCode)) {
                        case 200:
                            window.location.href = "/Usuarios/List";
                            break;
                        default:
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                    console.log(jqXHR);
                }
            });
        } else {
            alertify.alert("Opss!! Estamos experimentado problemas en nuestro servicio, intente acceder mas tarde.", function () {
            });
        }
    },
    //Llamadas AJAX --------------------<<<<

    AccionEliminar: function(){
        alertify.confirm("¿Esta seguro que eliminar la información de este Usuario?", function (e) {
            if (e) {
                frmEdicionUsuario.Eliminar();
            }            
        });
    },

    CargarCombo: function (IdSelect, Contenido, Txt) {
        $("#" + IdSelect).html('');
        $("#" + IdSelect).html(Contenido);
        var cmbtxt = $("#s2id_" + IdSelect).find(".select2-chosen");
        $(cmbtxt).text(Txt);
    },
    CrearElementos: function (Data, IdSelect) {
        var Combo = '';
        var TxtCombo = '';
        var ElmentObj;
        if (Data.length > 0) {
            Combo += '<option value="">-- Selecciona -- </option>';
            TxtCombo += '-- Selecciona --';
            for (var iElement = 0; iElement < Data.length; iElement++) {
                ElmentObj = Data[iElement];
                Combo += '<option value="' + ElmentObj[Object.keys(ElmentObj)[0]] + '"> ' + ElmentObj[Object.keys(ElmentObj)[2]] + '  </option>';
            }
        } else {
            Combo += '<option value="">-- No se encontraron registros --</option>';
            TxtCombo += '-- No se encontraron registros --';
        }
        frmEdicionUsuario.CargarCombo(IdSelect, Combo, TxtCombo)
    },
    ActionButtonGuardar: function () {
        $("#Imagen").val('').val($(".fileupload-preview img").attr('src').split(",")[1]);
        var Contraseña = $("#InpContraseña").val();
        var ConfirmarContraseña = $("#InpConfirmarContraseña").val();
        if (Contraseña !== '') {
            $("#Contrase_a").val(Contraseña);
            $("#ConfirmarContrase_a").val(ConfirmarContraseña);
        }

        $("#rol").val($('#IdRol option:selected').text().trim());
        $("#pais").val($('#IdPais option:selected').text().trim());
        $("#estado").val($('#IdEstado option:selected').text().trim());
        $("#municipio").val($('#IdMunicipio option:selected').text().trim());
        $("#zona").val($('#IdRegion option:selected').text().trim());
        $("#plaza").val($('#IdPlaza option:selected').text().trim());
        $("#gerencia").val($('#IdGerencia option:selected').text().trim());       
    },
    PintaComboRoles: function (DataRoles) {
        var Combo = '';
        var TxtCombo = '';

        if (DataRoles.length > 0) {
            Combo += '<option value="">-- Selecciona -- </option>';
            TxtCombo += '-- Selecciona --';
            for (var iElement = 0; iElement < DataRoles.length; iElement++) {
                Combo += '<option value="' + DataRoles[iElement].idRol + '"> ' + DataRoles[iElement].nombreRol + '  </option>';
            }
        } else {
            Combo += '<option value="">-- No se encontraron registros --</option>';
            TxtCombo += '-- No se encontraron registros --';
        }
        frmEdicionUsuario.CargarCombo("IdRol", Combo, TxtCombo)
    },
    LoadImage64: function () {
        var Image = $("#Imagen").val();
        if (Image !== '') {
            $("#ImgDefaultAvatar").hide();
            $("#ImgPerfil").html('<img src="data:image/jpeg;base64,' + Image + '"/>');
            $("#ImgPerfil").show();
        } else {
            $("#ImgDefaultAvatar").show();
            $("#ImgPerfil").hide();
        }
    },
    DeleteImage: function () {
        $("#ImgDefaultAvatar").show();
        $("#ImgPerfil").hide();
    }
}

$(document).ready(function () {
    frmEdicionUsuario.InitForm();
    frmEdicionUsuario.LoadImage64();
});
