/// <reference path="../../js/alertify/alertify.js" />
var EditMovil = {
    AccionEliminar: function () {
        var Movil = $("#IdMovil").val();
        if (Movil !== '' && typeof(Movil) !=='undefined') {
            $.ajax({
                url: "/Movil/DeleteMovil",
                dataType: "json",
                type: "POST",
                data: JSON.stringify({ IdMovil: Movil }),
                contentType: "application/json; charset=utf-8",
                async: false,
                success: function (data) {
                    switch (parseInt(data.HttpCode)) {
                        case 200:
                            window.location.href = "/Movil/GetMoviles";
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
                window.location.href = "/Movil/GetMoviles";
            });
        }
    },
    Eliminar: function () {
        alertify.confirm("¿Esta seguro que eliminar la información de este Movil?", function (e) {
            if (e) {
                EditMovil.AccionEliminar();
            }
        });
    }
}

