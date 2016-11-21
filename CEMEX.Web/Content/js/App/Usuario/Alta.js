var AltaUsuario = function () {
    var GuardarUsuario = function () {
        return App.solicitarServicio({
            url: URI.Usuarios.CrearUsuario,
            metodo: "POST",
            data: GetValues()
        }).then(function (response) {
            switch (parseInt(response.status)) {
                case StatusCode.OK:
                    window.location.href = Pages.Usuarios.Listado;
                    break;
                default:
            }
        }).catch(function (error) {
            console.log("error",error);
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
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Rol de Usuario ", "Debe seleccionar un Rol"));
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        }



        //V.Contraseña------------------------------------------------------------------------------------->>>>>
        var Contraseña = '';
        Contraseña = document.getElementById('InptPsswrdPass').value;
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



        //v.Confirmar Contraseña------------------------------------------------------------------------------------>>>>>>>>
        var ConfirmarContraseña = '';
        ConfirmarContraseña = document.getElementById('InptPsswrdComPass').value;
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


        //V. que el campo contraseña y Confirmar Contraseña sean iguales.
        if (String(ConfirmarContraseña) !== String(Contraseña)) {
            auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
            arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Confirmar Contraseña ", "No coincide con el campo Contraseña"));
        }



        ////v. Imagen Perfil------------------------------------------------------------------------------------>>>>>>>>
        //valor = '';
        //valor = document.getElementById('InptFlImg').value;
        //if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
        //    arrayItemSummary.push(new TelstockBase.Utilities.Summary.ItemSummary("Imagen de Perfil ", " Seleccione una imagen de Perfil"));
        //    auxIsvalid = ((auxIsvalid) ? false : auxIsvalid);
        //}




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
        Usuario.idEmpresa = 1;
        Usuario.idMovil = 1;

        //Tag Perfil de Usuario------------------------------------------------->.
        Usuario.usuario = $("#InptTxtUsuario").val();
        Usuario.idRol = $("#SlctRol").val();
        Usuario.contrasena = $("#InptPsswrdPass").val();
        Usuario.Imagen = $("#Imagen").val();  //$("#Imagen")
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
        Usuario.idGerencia =parseInt($("#SlctGerencia").val());

        Usuario.rol = $("#SlctRol option:selected").text();
        Usuario.pais = $("#SlctPais option:selected").text();
        Usuario.estado = $("#SlctEstado option:selected").text();
        Usuario.municipio = $("#SlctMunicipio option:selected").text();
        Usuario.zona = $("#SlctZona option:selected").text();
        Usuario.plaza = $("#SlctPlaza option:selected").text();
        Usuario.gerencia = $("#SlctGerencia option:selected").text();

        return Usuario;
    }

    var ImgBase64 = function () {
        if ($(".fileupload-preview img").length === 1) {
            $("#Imagen").val('').val($(".fileupload-preview img").attr('src').split(",")[1]);
        } else {
            $("#Imagen").val('');
        } 
   }

    var LoadImage64 = function () {
        var Image = $("#Imagen").val();
        if (Image !== '') {
            $("#ImgDefaultAvatar").hide();
            $("#ImgPerfil").html('<img src="data:image/jpeg;base64,' + Image + '"/>');
            $("#ImgPerfil").show();
        } else {
            $("#ImgDefaultAvatar").show();
            $("#ImgPerfil").hide();
        }
    }

    return {
        Init: function () {
            Catalogos.CatalogoRol("SlctRol");
            Catalogos.CatalogoPais("SlctPais");
            Catalogos.CatalogoRegion("SlctZona");
        },

        Cancelar: function () {
            window.location.href = Pages.Usuarios.Listado;
        },

        Guardar: function () {
            if (Validate() === true) {
                var numeroArchivos = $("#InptImgPerfil")[0].files.length;
                if (numeroArchivos > 0) {
                    File.UploadFile({
                        idControlInputFile: "InptImgPerfil",
                        cargaMultiple: false,
                        tipoArchivo: TipoArchivo.Imagen,
                        peso:  1048576
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
                }else{
                    GuardarUsuario();
                }               
            }            
        },

        GetEstados: function (idPais) {
            if (parseInt(idPais) !== 0) {
                Catalogos.CatalogoEstado("SlctEstado", idPais);
                Catalogos.ResetCombo("SlctMunicipio");
            } else {
                Catalogos.ResetCombo("SlctEstado");
                Catalogos.ResetCombo("SlctMunicipio");
            }
        },

        GetMunicipios: function (idEstado) {
            if (parseInt(idEstado) !== 0) {
                Catalogos.CatalogoMunicipio("SlctMunicipio", idEstado);
            } else {
                Catalogos.ResetCombo("SlctMunicipio");
            }
        },

        GetPlazas: function (idRegion) {
            if (parseInt(idRegion) !== 0) {
                Catalogos.CatalogoPlaza("SlctPlaza", idRegion);
                Catalogos.ResetCombo("SlctGerencia");
            } else {
                Catalogos.ResetCombo("SlctPlaza");
                Catalogos.ResetCombo("SlctGerencia");
            }
        },

        GetGerencias: function (idPlaza) {
            if (parseInt(idPlaza) !== 0) {
                Catalogos.CatalogoGerencia("SlctGerencia", idPlaza);
            } else {
                Catalogos.ResetCombo("SlctGerencia");
            }
        },

        DeleteImage: function () {
            $("#ImgDefaultAvatar").show();
            $("#ImgPerfil").hide();
        }
    }
}();


AltaUsuario.Init();