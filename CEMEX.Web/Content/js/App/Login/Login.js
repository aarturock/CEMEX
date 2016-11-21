/// <reference path="../Telstock/TelstockBase.js" />
/// <reference path="../js/libs/jquery-1.12.0.min.js"/>
/// <reference path="../General/app.js" />
/// <reference path="../../alertify/alertify.min.js" />

//Ambiente Producción
//var URL_BASE_LOGIN = 'https://cemexapi.tmanager.com.mx/';s
//Ambiente Desarrollo


var obtenerUrlBase = function () {
    return URL_BASE + "/login";
};

var URL_BASE_LOGIN = obtenerUrlBase();

var AppLogIn = {
    OriginError: {
        FromPage: 1,
        FromAjax: 2,
    },
    TypeErrorValidate: {
        NoUser: 1,
        NoPass: 2,
        Both: 3,
        unknown: 4,
        NoExist: 5
    },
    Templates: {
        NoFieldsPage: function (typeErrorValidation) {
            var html = '';
            switch (parseInt(typeErrorValidation)) {
                case parseInt(AppLogIn.TypeErrorValidate.NoUser):
                    html += '<label class="text-danger">';
                    html += '<i class="gi-warning-sign"></i> Usuario';
                    html += '</label>';
                    break;

                case parseInt(AppLogIn.TypeErrorValidate.NoPass):
                    html += '<label class="text-danger">';
                    html += '<i class="gi-warning-sign"></i> Contraseña';
                    html += '</label>';
                    break;

                case parseInt(AppLogIn.TypeErrorValidate.Both):
                    html += '<label class="text-danger">';
                    html += '<i class="gi-warning-sign"></i> Usuario';
                    html += '</label>';
                    html += '</br>';
                    html += '<label class="text-danger">';
                    html += '<i class="gi-warning-sign"></i> Contraseña';
                    html += '</label>';
                    break;

                //Desconocido Item.
                default:
                    html += '<label class="text-danger">';
                    html += '<i class="gi-warning-sign"></i> Ingrese credenciales';
                    html += '</label>';
                    break;
            }
            return html;
        },
        CallBackAjx: function (typeErrorValidation) {
            var html = '';
            switch (parseInt(typeErrorValidation)) {
                case parseInt(AppLogIn.TypeErrorValidate.NoExist):
                    html += '<label class="text-danger">';
                    html += '<i class="gi-warning-sign"></i> Credenciales inválidas';
                    html += '</label>';
                    break;

                //Desconocido Item.
                default:
                    html += '<label class="text-danger">';
                    html += '<i class="gi-warning-sign"></i> Ingrese credenciales';
                    html += '</label>';
                    break;
            }
            return html;
        }
    },
    Summary: {
        Clear: function () {
            $("#page-content-login-e").html('').addClass('hidden');
        },
        RemoveClass: function () {
            $("#page-content-login-e").removeClass('hidden');
        }
    },
    Validate: function () {
        var usuer = document.getElementById('InptTxtUser').value
        var pass = document.getElementById('InptTxtPass').value;
        var Esvalido = false;
        if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(usuer) == true &&
            TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(pass) == true) {
            this.ErrorValidate(this.TypeErrorValidate.Both);
        }
        else {
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(usuer))
                if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(pass))
                    Esvalido = true;
                else
                    this.ErrorValidate(this.TypeErrorValidate.NoPass);
            else
                this.ErrorValidate(this.TypeErrorValidate.NoUser);
        }

        return Esvalido;
    },
    ErrorValidate: function (typeErrorValidate) {
        switch (parseInt(typeErrorValidate)) {
            case parseInt(this.TypeErrorValidate.NoUser):
                this.Draw(this.OriginError.FromPage, this.TypeErrorValidate.NoUser);
                break;

            case parseInt(this.TypeErrorValidate.NoPass):
                this.Draw(this.OriginError.FromPage, this.TypeErrorValidate.NoPass);
                break;

            case parseInt(this.TypeErrorValidate.Both):
                this.Draw(this.OriginError.FromPage, this.TypeErrorValidate.Both);
                break;
            //Ajx
            case parseInt(this.TypeErrorValidate.NoExist):
                this.Draw(this.OriginError.FromAjax, this.TypeErrorValidate.Both);
                break;

            default:
                this.Draw(this.OriginError.FromPage, this.TypeErrorValidate.unknown);
                break;
        }
    },
    Draw: function (originError, typeErrorValidate) {
        this.Summary.RemoveClass();
        switch (parseInt(originError)) {
            case parseInt(this.OriginError.FromPage):
                $("#page-content-login-e").html('').html(this.Templates.NoFieldsPage(typeErrorValidate));
                break;
            case parseInt(this.OriginError.FromAjax):
                $("#page-content-login-e").html('').html(this.Templates.CallBackAjx(typeErrorValidate));
                break;
            default:
                //TODO que hacer cuando no existe el tipo de origen error.
                break;
        }
    },
    OnSucess: function (objResponse) {
        window.sessionStorage.clear();
        window.sessionStorage.setItem('Authorization', objResponse.access_token);
        window.location.href = Pages.Home.index;
    },
    OnError: function (objResponse) {
        switch (parseInt(objResponse.ResponseCode)) {
            case parseInt(TelstockBase.Codes.Server.Unauthorized):
                this.Draw(this.OriginError.FromAjax, this.TypeErrorValidate.NoExist);
                break;

            case parseInt(TelstockBase.Codes.Server.InternalServerError):
                this.Draw(this.OriginError.FromAjax, this.TypeErrorValidate.NoExist);
                break;

            default:
                this.Draw(this.OriginError.FromAjax, this.TypeErrorValidate.NoExist);
                break;
        }
    },
    GetIn: function () {
        if (this.Validate() == true) {
            this.Summary.Clear();

            var usuer = document.getElementById('InptTxtUser').value
            var pass = document.getElementById('InptTxtPass').value;

            var credenciales = {
                username: usuer,
                password: pass,
                idPlataforma: parseInt(TelstockBase.Codes.Plataforma.BO),
                idEmpresa: 1
            };

            axios.post(URL_BASE_LOGIN, jQuery.param(credenciales), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(function (response) {
                AppLogIn.OnSucess(response.data);
            }).catch(function (error) {
                switch (parseInt(error.response.status)) {
                    case StatusCode.BadRequest:
                        alertify.alert("Usuario o contraseña invalida.");
                }
            });

        }
    }
};

