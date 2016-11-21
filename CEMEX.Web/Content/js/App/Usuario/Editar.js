var ExisteImagen;
var imagenEliminada = false;

var EditarUsuario = function () {
    var ConsultarUsuario = function () {
        return App.solicitarServicio({
            url: URI.Usuarios.ConsultarUsuario + GetIdRegister(),
            metodo: "GET"
        }).then(function (response) {
            switch (parseInt(response.status)) {
                case StatusCode.OK:
                    SetValuesCtrls(response.data);
                    LoadImage64();
                    break;
                default:
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    var EliminarUsuario = function () {
        return App.solicitarServicio({
            url: URI.Usuarios.EliminarUsuario + GetIdRegister(),
            metodo: "DELETE"
        }).then(function (response) {
            switch (parseInt(response.status)) {
                case StatusCode.OK:
                    window.location.href = Pages.Usuarios.Listado
                    break;
                default:
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    var GuardarUsuario = function () {
        return App.solicitarServicio({
            url: URI.Usuarios.EditarUsuario + GetIdRegister(),
            metodo: "PUT",
            data: GetValues()
        }).then(function (response) {
            switch (parseInt(response.status)) {
                case StatusCode.OK:
                    window.location.href = Pages.Usuarios.Listado
                    break;
                default:
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    var Validate = function () {
        var arrayItemSummary = [];
        var arrayControlsToValidate = [];
        var validationCollectionItemControl;
        var auxIsvalid = true;
        var valor;


        //V.Nombre Usuario----------------------------------------------------------------------------------->>>>>>>
        valor = '';
        valor = document.getElementById('InptTxtUsuario').value;
        if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Nombre de Usuario ", "El campo no debe estar vácio "));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }
        else {
            if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z0-9_áéíóúñÑÁÉÍÓÚ]{1,50}$/g)) {
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Nombre de Usuario ", "Verifica que el texto de entrada solo sean caracteres alfa no mayor a 50 caracteres"));
            }
        }


        //V.Rol de Usuario----------------------------------------------------------------------------------->>>>>>>
        valor = '';
        Valor = document.getElementById('SlctRol').value;
        if (parseInt(Valor) === 0 || String(Valor) === '') {
            console.log("entro validación");
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Rol de Usuario ", "Debe seleccionar un Rol"));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }



        //V.Contraseña------------------------------------------------------------------------------------->>>>>
        var Contraseña = '';
        Contraseña = document.getElementById('InptPsswrdPass').value;
        if (String(Contraseña) !== '') {
            if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(Contraseña)) {
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Contraseña ", "El campo no debe estar vácio "));
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
            }
            else {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(Contraseña, /^[a-zA-Z0-9_áéíóúñÑÁÉÍÓÚ]{1,50}$/g)) {
                    auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
                    arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Contraseña ", "Verifica que el texto de entrada solo sean caracteres alfanúmericos y sin espacios no mayor a 50 caracteres"));
                }
            }
        }




        //v.Confirmar Contraseña------------------------------------------------------------------------------------>>>>>>>>
        var ConfirmarContraseña = '';
        ConfirmarContraseña = document.getElementById('InptPsswrdComPass').value;
        if (String(ConfirmarContraseña) !== '') {
            if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(ConfirmarContraseña)) {
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Confirmar Contraseña ", "El campo no debe estar vácio "));
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
            }
            else {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(ConfirmarContraseña, /^[a-zA-Z0-9_áéíóúñÑÁÉÍÓÚ]{1,50}$/g)) {
                    auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
                    arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Confirmar Contraseña ", "Verifica que el texto de entrada solo sean caracteres alfanúmericos y sin espacios no mayor a 50 caracteres"));
                }
            }
        }


        if (String(Contraseña) !== '') {
            //V. que el campo contraseña y Confirmar Contraseña sean iguales.
            if (String(ConfirmarContraseña) !== String(Contraseña)) {
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Confirmar Contraseña ", "No coincide con el campo Contraseña"));
            } else {
                $("#Contrasena").val(Contraseña);
            }
        }



        //V. Nombre (s)---------------------------------------------------------------------------------------------->>>>
        valor = '';
        valor = document.getElementById('InptTxtNombres').value;
        if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Nombre(s) ", "El campo no debe estar vácio "));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }
        else {
            if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ\s]{1,50}$/g)) {
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Nombre(s) ", "Verifica que el texto de entrada solo sean caracteres alfa no mayor a 50 caracteres"));
            }
        }


        //V.Primer Apellido---------------------------------------------------------------------------------------------->>>>>>
        valor = '';
        valor = document.getElementById('InptTxtPrimerA').value;
        if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Primer Apellido ", "El campo no debe estar vácio "));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }
        else {
            if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ\s]{1,50}$/g)) {
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Primer Apellido ", "Verifica que el texto de entrada solo sean caracteres alfa no mayor a 50 caracteres"));
            }
        }


        //V.Segundo Apellido---------------------------------------------------------------------------------------------->>>>
        valor = '';
        valor = document.getElementById('InptTxtSegundoA').value;
        if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Segundo Apellido ", "El campo no debe estar vácio "));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }
        else {
            if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ\s]{1,50}$/g)) {
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Segundo Apellido ", "Verifica que el texto de entrada solo sean caracteres alfa no mayor a 50 caracteres"));
            }
        }


        //V. Sexo---------------------------------------------------------------------------------------------->>>>
        if (!document.getElementById('InptMujer').checked && !document.getElementById('InptHombre').checked) {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Sexo ", "Selecciona el Campo Sexo"));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        } else if (document.getElementById('InptMujer').checked && document.getElementById('InptHombre').checked) {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Sexo ", "Solo debe seleccionar una opción"));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }



        //V.Calle---------------------------------------------------------------------------------------------->>>>>
        valor = '';
        valor = document.getElementById('InptTxtCalle').value;
        if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Calle ", "El campo no debe estar vácio "));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }
        else {
            if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,100}$/g)) {
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Calle ", "Verifica que el texto de entrada solo sean caracteres alfanúmericos no mayor a 100 caracteres"));
            }
        }



        //V.Número Exterior--------------------------------------------------------------------------------------->>>>>>>>
        valor = '';
        valor = document.getElementById('InptNmbrNExt').value;
        if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Número Exterior ", "El campo no debe estar vácio "));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }
        else {
            if (!TelstockBase.Security.Regex.Expressions.Common.NumbersLength(valor, 1, 5)) {
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Número Exterior ", "Verifica que el texto de entrada solo sean caracteres númericos  entre 1 y 5 caracteres"));
            }
        }



        //V.Colonia---------------------------------------------------------------------------------------------->>>>>
        valor = '';
        valor = document.getElementById('InptTxtCol').value;
        if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Colonia ", "El campo no debe estar vácio "));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }
        else {
            if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,100}$/g)) {
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Colonia ", "Verifica que el texto de entrada solo sean caracteres alfanúmericos no mayor a 100 caracteres"));
            }
        }




        //V.Codigo Postal--------------------------------------------------------------------------------------->>>>>>>>
        valor = '';
        valor = document.getElementById('InptTxtCP').value;
        if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Código Postal ", "El campo no debe estar vácio "));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }
        else {
            if (!TelstockBase.Security.Regex.Expressions.Common.NumbersLength(valor, 5, 5)) {
                auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
                arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Código Postal ", "Verifica que el texto de entrada solo sean caracteres númericos con 5 caracteres "));
            }
        }


        //V.Combo Pais---------------------------------------------------------------------------------------->>>>>
        valor = '';
        Valor = document.getElementById('SlctPais').value;
        if (parseInt(Valor) === 0 || String(Valor) === '') {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("País ", "Debe seleccionar un País"));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }



        //V.Combo Estado---------------------------------------------------------------------------------------->>>>>
        valor = '';
        Valor = document.getElementById('SlctEstado').value;
        if (parseInt(Valor) === 0 || String(Valor) === '') {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Estado ", "Debe seleccionar un Estado"));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }





        //V.Combo Municipio---------------------------------------------------------------------------------------->>>>>
        valor = '';
        Valor = document.getElementById('SlctMunicipio').value;
        if (parseInt(Valor) === 0 || String(Valor) === '') {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Municipio ", "Debe seleccionar un Municipio"));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }



        //V.Combo Zonas---------------------------------------------------------------------------------------->>>>>
        valor = '';
        Valor = document.getElementById('SlctZona').value;
        if (parseInt(Valor) === 0 || String(Valor) === '') {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Zona ", "Debe seleccionar una Zona"));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }


        //V.Combo Plazas---------------------------------------------------------------------------------------->>>>>
        valor = '';
        Valor = document.getElementById('SlctPlaza').value;
        if (parseInt(Valor) === 0 || String(Valor) === '') {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Plaza ", "Debe seleccionar una Plaza"));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }


        //V.Combo Plazas---------------------------------------------------------------------------------------->>>>>
        valor = '';
        Valor = document.getElementById('SlctGerencia').value;
        if (parseInt(Valor) === 0 || String(Valor) === '') {
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Gerencia ", "Debe seleccionar una Gerencia"));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
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

    var GetValues = function () {
        var Usuario = new Object();
        Usuario.id = GetIdRegister();
        Usuario.idEmpresa = 1;
        Usuario.idMovil = 1;

        //Tag Perfil de Usuario------------------------------------------------->.
        Usuario.usuario = $("#InptTxtUsuario").val();
        Usuario.idRol = $("#SlctRol").val();
        Usuario.contrasena = $("#Contrasena").val();
        Usuario.Imagen = $("#Imagen").val();
        Usuario.status = ($(".switch-on").length > 0) ? 1 : 2;


        //Tag Información General----------------------------------------------->.
        Usuario.nombre = $("#InptTxtNombres").val();
        Usuario.appPaterno = $("#InptTxtPrimerA").val();
        Usuario.appMaterno = $("#InptTxtSegundoA").val();
        Usuario.genero = $('input[name="InptRdSexo"]:checked').val();
        Usuario.calle = $("#InptTxtCalle").val();
        Usuario.colonia = $("#InptTxtCol").val();
        Usuario.codigoPostal = $("#InptTxtCP").val();
        Usuario.numeroExterior = $("#InptNmbrNExt").val();
        Usuario.idPais = parseInt($("#SlctPais").val());
        Usuario.idEstado = parseInt($("#SlctEstado").val());
        Usuario.idMunicipio = parseInt($("#SlctMunicipio").val());


        //Tag Datos de Contacto ------------------------------------------------>.
        Usuario.correo = $("#InptMailEmail").val();
        Usuario.telefonoOficina = $("#InptTlOficina").val();
        Usuario.extension = $("#InptNmbrExtension").val();
        Usuario.telefonoCasa = $("#InptTlCasa").val();
        Usuario.telefonoCelular = $("#InptTlCelular").val();


        //Tag Asignación de Plaza ---------------------------------------------->.
        Usuario.idRegion = parseInt($("#SlctZona").val());
        Usuario.idPlaza = parseInt($("#SlctPlaza").val());
        Usuario.idGerencia = parseInt($("#SlctGerencia").val());

        Usuario.rol = $("#SlctRol option:selected").text();
        Usuario.pais = $("#SlctPais option:selected").text();
        Usuario.estado = $("#SlctEstado option:selected").text();
        Usuario.municipio = $("#SlctMunicipio option:selected").text();
        Usuario.zona = $("#SlctZona option:selected").text();
        Usuario.plaza = $("#SlctPlaza option:selected").text();
        Usuario.gerencia = $("#SlctGerencia option:selected").text();

        return Usuario;
    }

    var SetValuesCtrls = function (data) {

        if (typeof (data) !== "undefined" && data !== null) {
            //Tag Perfil de Usuario------------------------------------------------->.
            $("#InptTxtUsuario").val(data.usuario);
            setTimeout(function () {
                $("#SlctRol").val(data.idRol).trigger("change");
            }, 1000);

            $("#Contrasena").val(data.contrasena);
            $("#Imagen").val(data.Imagen);
            $(function () {
                switch (parseInt(data.status)) {
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


            //Tag Información General----------------------------------------------->.
            $("#InptTxtNombres").val(data.nombre);
            $("#InptTxtPrimerA").val(data.appPaterno);
            $("#InptTxtSegundoA").val(data.appMaterno);
            $('input[name="InptRdSexo"][value="' + data.genero + '"]').prop('checked', true);
            $("#InptTxtCalle").val(data.calle);
            $("#InptTxtCol").val(data.colonia);
            $("#InptTxtCP").val(data.codigoPostal);
            $("#InptNmbrNExt").val(data.numeroExterior);

            setTimeout(function () {
                $("#SlctPais").val(parseInt(data.idPais)).trigger("change");
            }, 1000);

            setTimeout(function () {
                $("#SlctEstado").val(parseInt(data.idEstado)).trigger("change");
            }, 2000);

            setTimeout(function () {
                $("#SlctMunicipio").val(parseInt(data.idMunicipio)).trigger("change");
            }, 3000);


            //Tag Datos de Contacto ------------------------------------------------>.
            $("#InptMailEmail").val(data.correo);
            $("#InptTlOficina").val(data.telefonoOficina);
            $("#InptNmbrExtension").val(data.extension);
            $("#InptTlCasa").val(data.telefonoCasa);
            $("#InptTlCelular").val(data.telefonoCelular);


            //Tag Asignación de Plaza ---------------------------------------------->.
            setTimeout(function () {
                $("#SlctZona").val(parseInt(data.idRegion)).trigger("change");
            }, 1000);

            setTimeout(function () {
                $("#SlctPlaza").val(parseInt(data.idPlaza)).trigger("change");
            }, 2000);

            setTimeout(function () {
                $("#SlctGerencia").val(parseInt(data.idGerencia)).trigger("change");
            }, 3000);

        }
    }

    var LoadImage64 = function () {
        var Image = $("#Imagen").val();
        if (Image !== '') {
            ExisteImagen = true;
            $("#ImgDefaultAvatar").hide();
            $("#ImgPerfil").html('<img src="' + App.obtenerUrlBase() + URI.Archivo.Descargar + Image + '"/>');
            $("#ImgPerfil").show();
        } else {
            ExisteImagen = false;
            $("#ImgDefaultAvatar").show();
            $("#ImgPerfil").hide();
        }
    }

    var GetIdRegister = function () {
        var idUsuario = sessionStorage.getItem(SessionStorageItem.IDUSUARIO);
        if (typeof (idUsuario) !== 'undefined' && idUsuario !== '') {
            return idUsuario;
        } else {
            window.location.href = Pages.Usuarios.Listado;
        }
    }

    return {
        Init: function () {
            Catalogos.CatalogoRol("SlctRol");
            Catalogos.CatalogoPais("SlctPais");
            Catalogos.CatalogoRegion("SlctZona");
            ConsultarUsuario();
            LoadImage64();
        },

        //Acciones en Formulario.
        Cancelar: function () {
            window.location.href = Pages.Usuarios.Listado;
        },

        Guardar: function () {
            if (Validate() === true) {
                var mensaje;
                var numeroArchivos = $("#InptImgPerfil")[0].files.length;
                if (imagenEliminada && ExisteImagen && numeroArchivos === 0) {
                    alertify.confirm("¿Esta seguro que desea actualizar la información y eliminar la Imagen de Perfil?", function (e) {
                        if (e) {
                            var idImagen = $("#Imagen").val();
                            File.EliminarArchivo(idImagen).then(function (response) {
                                $("#Imagen").val("");
                                GuardarUsuario();
                            });
                        }
                    });

                } else {
                    alertify.confirm("¿Esta seguro que desea actualizar la información?", function (e) {
                        if (e) {
                            var idArchivo = $("#Imagen").val();

                            if (idArchivo === '' && numeroArchivos === 1) {
                                File.UploadFile({
                                    idControlInputFile: "InptImgPerfil",
                                    cargaMultiple: false,
                                    tipoArchivo: TipoArchivo.Imagen,
                                    peso: 1048576
                                }).then(function (response) {
                                    switch (response.request.status) {
                                        case parseInt(StatusCode.OK):
                                            $("#Imagen").val(response.data);
                                            GuardarUsuario();
                                            break;
                                    }
                                }).catch(function (error) {
                                    console.log("error", error);
                                });
                            }else if(idArchivo !== '' && numeroArchivos === 1){
                                  File.ActualizaArchivo(idArchivo,{
                                    idControlInputFile: "InptImgPerfil",
                                    cargaMultiple: false,
                                    tipoArchivo: TipoArchivo.Imagen,
                                    peso: 1048576
                                }).then(function (response) {
                                    switch (response.request.status) {
                                        case parseInt(StatusCode.OK):
                                            // $("#Imagen").val(response.data);
                                            GuardarUsuario();
                                            break;
                                    }
                                }).catch(function (error) {
                                    console.log("error", error);
                                });
                            } else {
                                GuardarUsuario();
                            }
                            }
                    });
                }
            }
        },

        Eliminar: function () {
            alertify.confirm("¿Esta seguro de eliminar la información del usuario?", function (e) {
                if (e) {
                    EliminarUsuario();
                }
            });
        },
        //Acciones en Formulario.

        //Carga de Combos.
        GetEstados: function (idPais) {
            if (parseInt(idPais) !== 0 && idPais !== '') {
                Catalogos.CatalogoEstado("SlctEstado", idPais);
                Catalogos.ResetCombo("SlctMunicipio");
            } else {
                Catalogos.ResetCombo("SlctEstado");
                Catalogos.ResetCombo("SlctMunicipio");
            }
        },

        GetMunicipios: function (idEstado) {
            if (parseInt(idEstado) !== 0 && idEstado !== '') {
                Catalogos.CatalogoMunicipio("SlctMunicipio", idEstado);
            } else {
                Catalogos.ResetCombo("SlctMunicipio");
            }
        },

        GetPlazas: function (idRegion) {
            if (parseInt(idRegion) !== 0 && idRegion !== '') {
                Catalogos.CatalogoPlaza("SlctPlaza", idRegion);
                Catalogos.ResetCombo("SlctGerencia");
            } else {
                Catalogos.ResetCombo("SlctPlaza");
                Catalogos.ResetCombo("SlctGerencia");
            }
        },

        GetGerencias: function (idPlaza) {
            if (parseInt(idPlaza) !== 0 && idPlaza !== '') {
                Catalogos.CatalogoGerencia("SlctGerencia", idPlaza);
            } else {
                Catalogos.ResetCombo("SlctGerencia");
            }
        },
        //Carga de Combos.

        DeleteImage: function () {
            if (ExisteImagen) {
                $("#ImgDefaultAvatar").show();
                $("#ImgPerfil").hide();
                imagenEliminada = true;
            } else {
                $("#ImgDefaultAvatar").show();
                $("#ImgPerfil").hide();
            }
        }
    }
}();

EditarUsuario.Init();
