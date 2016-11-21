/// <reference path="../Telstock/TelstockBase.js" />

var Session = function () {
    var IsKeyStorageNullOrEmpty = function (keyStorage) {
        var auxKeyVal = window.sessionStorage.getItem(String(keyStorage));
        var IsEmptyOrNull = true;
        if (typeof (auxKeyVal) === "object") {
            if (auxKeyVal === null) {
                IsEmptyOrNull = true;
            }
            else if (typeof (auxKeyVal) === "undefined") {
                IsEmptyOrNull = true;
            }
            else {
                //Validamos que la cadena no sea vacia o conste de caracteres de espacios.
                IsEmptyOrNull = TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(auxKeyVal);
            }
        }
        else {
            //Validamos que la cadena no sea vacia o conste de caracteres de espacios.    
            IsEmptyOrNull = TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(auxKeyVal);
        }
        return IsEmptyOrNull;
    }


    return {
        Init: function () {
             if (IsKeyStorageNullOrEmpty("Authorization")) {
                 window.location.href = Pages.Login;
            }
        },

        LogOut: function () {
            //window.sessionStorage.clear();
            sessionStorage.removeItem("Authorization")
            window.location.href = Pages.Login;
        }
    }
    
}()

Session.Init()

