/// <reference path="../General/app.js" />
/// <reference path="../Catalogos/Catalogos.js" />

var frmAltaUsuario = {
    GetEstados: function (idPais) {
        if (parseInt(idPais) !== 0) {
            Catalogos.CatalogoEstado("IdEstado", idPais);
            Catalogos.ResetCombo("IdMunicipio");
        } else {
            Catalogos.ResetCombo("IdEstado");
            Catalogos.ResetCombo("IdMunicipio");
        }
    },
    GetMunicipios: function (idEstado) {
        if (parseInt(idEstado) !== 0) {
            Catalogos.CatalogoMunicipio("IdMunicipio", idEstado);
        } else {
            Catalogos.ResetCombo("IdMunicipio");
        }
    },
    GetPlazas: function (idRegion) {
        if (parseInt(idRegion) !== 0) {
            Catalogos.CatalogoPlaza("IdPlaza", idRegion);
            Catalogos.ResetCombo("IdGerencia");
        } else {
            Catalogos.ResetCombo("IdPlaza");
            Catalogos.ResetCombo("IdGerencia");
       }
    },
    GetGerencias: function (idPlaza) {
        if (parseInt(idPlaza) !== 0) {
            Catalogos.CatalogoGerencia("IdGerencia", idPlaza);
        } else {
            Catalogos.ResetCombo("IdGerencia");
        }
    },
    ImgBase64: function () {
        $("#Imagen").val('').val($(".fileupload-preview img").attr('src').split(",")[1]);
        frmAltaUsuario.CargarDatosHidden();
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
    },
    CargarDatosHidden: function () {
        $("#rol").val($('#IdRol option:selected').text().trim());
        $("#pais").val($('#IdPais option:selected').text().trim());
        $("#estado").val($('#IdEstado option:selected').text().trim());
        $("#municipio").val($('#IdMunicipio option:selected').text().trim());
        $("#zona").val($('#IdRegion option:selected').text().trim());
        $("#plaza").val($('#IdPlaza option:selected').text().trim());
        $("#gerencia").val($('#IdGerencia option:selected').text().trim());
    }
}

$(document).ready(function () {
    Catalogos.CatalogoRol("IdRol");
    Catalogos.CatalogoPais("IdPais");
    Catalogos.CatalogoRegion("IdRegion");
    frmAltaUsuario.LoadImage64();
});