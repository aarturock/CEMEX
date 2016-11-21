/// <reference path="../Telstock/TelstockBase.js" />

this.EstatusRegistro = {
    Activo: 1,
    Inactivo: 2
}

var PERMISOS;
var FUNCIONALIDADES = new Array();


var frmAltaRol = {
    //Funciones que se ejecutan al cargar la Pagina
    Init: function () {
        frmAltaRol.GetJerarquias().then(function () {
            //Permisos
            frmAltaRol.GetPermisos().then(function () {
                //Funcionalidades Web.
                frmAltaRol.GetFuncionalidades(1).then(function () {
                    //Funcionalidades Moviles
                    frmAltaRol.GetFuncionalidades(2).then(function () {
                        
                    });
                });
            });            
        });
    },

    GetPermisos: function(){
        return App.solicitarServicio({
            url: URI.Catalogos.Permiso,
            metodo: "GET"
        }).then(function (response) {
            PERMISOS = response.data[0].items;
        }).catch(function (error) {
            console.log(error);
        });
    },

    GetJerarquias: function () {
        return App.solicitarServicio({
            url: URI.Catalogos.Jerarquia,
            metodo: "GET"
        }).then(function (response) {
            frmAltaRol.GetJerarquiasHtml(response.data[0].items);
        }).catch(function (error) {
            console.log(error);
        });
    },

    GetFuncionalidades: function(idPlataforma){
        return App.solicitarServicio({
            url: URI.Catalogos.Funcionalidad + idPlataforma,
            metodo: "GET"
        }).then(function (response) {
            switch (idPlataforma) {
                //Pinta las Funcionalidades Web.
                case 1:
                    frmAltaRol.TabsFuncionalidadHtml(response.data, "DivFuncionalidadWeb");
                    break;
                //Pinta las funcionalidad Movil.
                case 2:
                    frmAltaRol.TabsFuncionalidadHtml(response.data, "DivFuncionalidadMovil");
                    break;
            }
        }).catch(function (error) {
            console.log(error);
        });
    },

    GetJerarquiasHtml: function (DataJerarquias) {
        var JerarquiaHtml = [];

        for (var iJerarquia = 0; iJerarquia < DataJerarquias.length; iJerarquia++) {
            JerarquiaHtml.push('<div class="form-group form-group col-xs-6 col-sm-6 col-md-3 col-lg-2">');
            JerarquiaHtml.push('<div class="radio">');
            JerarquiaHtml.push('<label> <input type="radio" name="InptRdJerarquia" value="' + DataJerarquias[iJerarquia].id + '"> ' + DataJerarquias[iJerarquia].Descripcion + ' </label>');
            JerarquiaHtml.push('</div>');
            JerarquiaHtml.push('</div>');
        }
        $("#CtrlsJerarquia").html('').html(JerarquiaHtml.join(''));
    },

    TabsFuncionalidadHtml: function (Data, IdTab) {
        var Funcionalidades = [];
        var Div = [];
        var IdModulo;
        var IdPlataforma;

        for (var iModulo = 0; iModulo < Data.length; iModulo++) {
            if (Data[iModulo].funcionalidades.length > 0) {

                IdModulo = Data[iModulo].id;
                IdPlataforma = Data[iModulo].idPlataforma;
                Div = [];
                Div.push('<div id="funcionalidades-panel-' + IdModulo + '-' + IdPlataforma + '" class="panel-group">' +
                                      '<div class="panel panel-default">' +
                                          '<div class="panel-heading">' +
                                              '<a href="#funcionalidades-box-' + IdModulo + '-' + IdPlataforma + '" data-parent="#funcionalidades-panel-' + IdModulo + '-' + IdPlataforma + '" data-toggle="collapse">' +
                                                  '<h3 class="panel-title">' + Data[iModulo].Descripcion + ' <i class="fa fa-caret-down"></i></h3>' +
                                              '</a>' +
                                          '</div>' +
                                          '<div id="funcionalidades-box-' + IdModulo + '-' + IdPlataforma + '" class="panel-collapse fade collapse">' +
                                              '<div class="panel-body">' +
                                                  '<div class="row"> ' +
                                                     '<div class="col-md-4">' +
                                                         '<div class="form-group">' +
                                                             '<div class="checkbox">' +
                                                                 '<label> <input type="checkbox" role="button" onclick="frmAltaRol.SeleccionarTodos(' + IdModulo + ',' + IdPlataforma + ',this);"> <h3>Seleccionar todos</h3></label>' +
                                                              '</div>' +
                                                              frmAltaRol.GetFuncionalidadesHtml(Data[iModulo].funcionalidades, IdModulo, IdPlataforma) +
                                                         '</div>' +
                                                     '</div>' +
                                                     '<div class="col-md-8" id="permisos-' + IdPlataforma + '-' + IdModulo + '">' +
                                                         '<div class="form-group">' +
                                                            '<div class="btn-select" data-toggle="buttons">' +
                                                             frmAltaRol.GetPermisosHtml(PERMISOS, IdModulo, IdPlataforma) +
                                                             '</div>' +
                                                         '</div>' +
                                                         frmAltaRol.GetPermisosFuncionalidadesHtml(Data[iModulo].funcionalidades, PERMISOS, IdModulo, IdPlataforma) +
                                                     '</div>' +
                                                   '</div> ' +
                                              '</div> ' +
                                          '</div> ' +
                                      '</div>' +
                                    '</div>');
                Funcionalidades.push(Div.join(""));
            }
        }
        $("#" + IdTab).html('').html(Funcionalidades.join(""));
    },

    GetPermisosHtml: function (Permisos, IdModulo, IdPlataforma) {
        var PermisosHtml = [];
        for (var iPermiso = 0; iPermiso < Permisos.length; iPermiso++) {
            PermisosHtml.push('<span><input type="checkbox" onclick="frmAltaRol.SeleccionarColumna(' + Permisos[iPermiso].id + ',' + IdModulo + ',' + IdPlataforma + ',this);" value=""><p>' + Permisos[iPermiso].descripcion + '</p></span>');
        }
        return PermisosHtml.join(' ');
    },

    GetFuncionalidadesHtml: function (Funcionalidades, IdModulo, IdPlataforma) {
        var FuncionalidadesHtml = [];
        for (var iFuncionalidad = 0; iFuncionalidad < Funcionalidades.length; iFuncionalidad++) {

            FUNCIONALIDADES.push({
                IdModulo: IdModulo,
                IdPlataforma: IdPlataforma,
                IdFuncionalidad: Funcionalidades[iFuncionalidad].id
            });

            FuncionalidadesHtml.push('<div class="form-group" >' +
                                    '<div class="checkbox">' +
                                         '<label> <input type="checkbox" role="button" onclick="frmAltaRol.SeleccionarFila(this,' + IdModulo + ',' + IdPlataforma + ');" value="' + Funcionalidades[iFuncionalidad].id + '"> <h5>' + Funcionalidades[iFuncionalidad].Descripcion + '</h5></label>' +
                                     '</div>' +
                                 '</div>');
        }
        return FuncionalidadesHtml.join(' ');
    },

    GetPermisosFuncionalidadesHtml: function (Funcionalidades, ArrayPermisos, IdModulo, IdPlataforma) {
        var Existe;
        var PermisosFuncionalidadHtml = [];
        for (var iFuncionalidad = 0; iFuncionalidad < Funcionalidades.length; iFuncionalidad++) {
            PermisosFuncionalidadHtml.push('<div class="form-group"><div class="btn-select" data-toggle="buttons">');
            for (var iPermiso = 0; iPermiso < ArrayPermisos.length; iPermiso++) {
                Existe = $.grep(Funcionalidades[iFuncionalidad].acciones, function (e) {
                    return e === ArrayPermisos[iPermiso].alias;
                });

                if (Existe.length > 0) {
                    PermisosFuncionalidadHtml.push('<span>' +
                                             '<label class="btn ' + ArrayPermisos[iPermiso].ClassCss + ' ' + Funcionalidades[iFuncionalidad].id + '">' +
                                                  '<input id="' + IdPlataforma + '-' + IdModulo + '-' + Funcionalidades[iFuncionalidad].id + '-' + ArrayPermisos[iPermiso].alias + '" type="checkbox" class="permiso" value="' + ArrayPermisos[iPermiso].alias + '">' +
                                                  '<i class="fa fa-check"></i>' +
                                              '</label>' +
                                        '</span>');
                } else {
                    PermisosFuncionalidadHtml.push('<span></span>');
                }
            }
            PermisosFuncionalidadHtml.push('</div></div>');
        }

        return PermisosFuncionalidadHtml.join(' ');
    },
    
    SeleccionarColumna: function (IdPermiso, IdModulo, IdPlataforma, CtrlPermisoColumna) {
        if ($(CtrlPermisoColumna).is(':checked')) {
            $("#permisos-" + IdPlataforma + "-" + IdModulo + " input[type=checkbox][value=" + IdPermiso + "]").each(function () {
                $(this).prop('checked', true);
            });
            $("#permisos-" + IdPlataforma + "-" + IdModulo + " input[type=checkbox][value=" + IdPermiso + "]").parent().addClass('active');
        } else {
            $("#permisos-" + IdPlataforma + "-" + IdModulo + " input[type=checkbox][value=" + IdPermiso + "]").each(function () {
                $(this).removeAttr('checked');
            });
            $("#permisos-" + IdPlataforma + "-" + IdModulo + " input[type=checkbox][value=" + IdPermiso + "]").parent().removeClass('active');
        }
    },

    SeleccionarTodos: function (IdModulo, IdPlataforma, CtrlSeleccionarTodos) {
        if ($(CtrlSeleccionarTodos).is(':checked')) {
            $("#funcionalidades-box-" + IdModulo + "-" + IdPlataforma + " input[type=checkbox]").each(function () {
                $(this).prop('checked', true);
            });
            $("#permisos-" + IdPlataforma + "-" + IdModulo).find('label').addClass('active');
        } else {
            $("#funcionalidades-box-" + IdModulo + "-" + IdPlataforma + " input[type=checkbox]").each(function () {
                $(this).removeAttr('checked', false);
            });
            $("#permisos-" + IdPlataforma + "-" + IdModulo).find('label').removeClass('active');
        }
    },

    SeleccionarFila: function (CtrlPermisoFila, IdModulo, IdPlataforma) {
        if ($(CtrlPermisoFila).is(':checked')) {
            $("#permisos-" + IdPlataforma + "-" + IdModulo + " ." + CtrlPermisoFila.value + " input[type=checkbox]").each(function () {
                $(this).prop('checked', true);
            });
            $("#permisos-" + IdPlataforma + "-" + IdModulo + "  ." + CtrlPermisoFila.value).addClass('active');
        } else {
            $("#permisos-" + IdPlataforma + "-" + IdModulo + " ." + CtrlPermisoFila.value + " input[type=checkbox]").each(function () {
                $(this).removeAttr('checked');
            });
            $("#permisos-" + IdPlataforma + "-" + IdModulo + "  ." + CtrlPermisoFila.value).removeClass('active');
        }
    },

    CreateRol: function () {
        if (Boolean(frmAltaRol.ValidaForm())) {
            return App.solicitarServicio({
                url: URI.Roles.CrearRol,
                metodo: "POST",
                data: frmAltaRol.GetValoresCtrl()
            }).then(function (response) {
                switch (parseInt(response.status)) {
                    case StatusCode.OK:
                        window.location.href = Pages.Roles.Listado;
                        break;
                    default:
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },

    ValidaForm: function () {
        var arrayItemSummary = [];
        var arrayControlsToValidate = [];
        var validationCollectionItemControl;
        var auxIsvalid = true;
        var valor;


        // Valida Nombre del Rol ------------------------------------------------>>
        valor = '';
        valor = document.getElementById('InptTxtNombre').value;
        if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Nombre del Rol ", "El campo no debe estar vacío."));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }
        else {
            if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ\s]{1,50}$/g)) {
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Nombre del Rol  ", "Verifica que el texto de entrada solo sean caracteres alfa no mayor a 50 caracteres."));
            }
        }



        //Valida Descripción del Rol ------------------------------------------>>
        valor = '';
        valor = document.getElementById('txtAreaDescripcion').value;
        if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Descripción del Rol ", "El campo no debe estar vacío "));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }
        else {
            if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ\s]{1,150}$/g)) {
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Descripción del Rol  ", "Verifica que el texto de entrada solo sean caracteres alfa no mayor a 150 caracteres"));
            }
        }


        //Valida que se halla seleccionado una jerarquia.
        if ($("input[name='InptRdJerarquia']").is(':checked') === false) {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Jerarquía", "Selecciona una Jerarquía"));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }



        //Valida que se halla seleccionado un permiso.
        var ExistePermisosSeleccionado = false;
        $("input[type=checkbox].permiso").each(function () {
            if ($(this).is(":checked")) {
                ExistePermisosSeleccionado = true;
            }
        });

        if (!Boolean(ExistePermisosSeleccionado)) {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Permisos", "Selecciona al menos un permiso para dar de alta el Rol"));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }


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
    },

    GetValoresCtrl: function(){
        var Rol = new Object();
        Rol.idEmpresa = 1;
        Rol.nombreRol = $("#InptTxtNombre").val();
        Rol.descripcionRol = $("#txtAreaDescripcion").val();
        Rol.status = (($("#page-div-switch-control-status .switch-on").length > 0) ? EstatusRegistro.Activo : EstatusRegistro.Inactivo);
        Rol.asignacionMultiple = (($("#page-div-switch-asignacion-multiple .switch-on").length > 0) ? 1 : 0);
        Rol.idJerarquia = parseInt($("input:radio[name='InptRdJerarquia']:checked").val());
        Rol.permisos = frmAltaRol.GetPermisosSeleccionados();
        return Rol;
    },
    
    GetPermisosSeleccionados: function () {
        var Permisos = new Array();
        var acciones;

        for (var iFuncionalidad = 0; iFuncionalidad < FUNCIONALIDADES.length; iFuncionalidad++) {
            acciones = new Array();
            for (var iPermiso = 0; iPermiso < PERMISOS.length; iPermiso++) {
                if ($("#" + FUNCIONALIDADES[iFuncionalidad].IdPlataforma + '-'
                      + FUNCIONALIDADES[iFuncionalidad].IdModulo + '-'
                      + FUNCIONALIDADES[iFuncionalidad].IdFuncionalidad + '-'
                      + PERMISOS[iPermiso].alias).parent('label.active').length === 1) {
                    acciones.push(PERMISOS[iPermiso].alias);
                } 
            }
            
            if (acciones.length > 0) {
                Permisos.push({
                    IdPlataforma: FUNCIONALIDADES[iFuncionalidad].IdPlataforma,
                    IdModulo: FUNCIONALIDADES[iFuncionalidad].IdModulo,
                    IdFuncionalidad: FUNCIONALIDADES[iFuncionalidad].IdFuncionalidad,
                    acciones: acciones
                });
            }
        }
        return Permisos;
    }
}

$(document).ready(function () {
    frmAltaRol.Init();
});




