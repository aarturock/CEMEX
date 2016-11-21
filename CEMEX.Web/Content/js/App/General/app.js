//Funciones para administrar la llamada a los servicios con AXIOS.
var App = function () {
    //Representa la dirección del servicio.
    //Ambiente Desarrollo

    var ITEM_LOCAL_STORAGE = "app",
        LABEL = "APLICACIÓN - ",
        TIMEOUT_SERVICIO = 30000;

    var obtenerToken = function () {
        var token = sessionStorage.getItem(SessionStorageItem.ITEM_SESSION_STORAGE_AUTHORIZATION);

        if (USAR_TOKEN) {
            if (!token || token === null) {
                ManejarRespuestaHttp.error({estatus: 401});
            } else {
                $("body").removeClass("hidden");
                return jwt_decode(token);
            }
        } else {
            $("body").removeClass("hidden");
            return jwt_decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUm9sIjoie1wiX2lkXCI6e1wiVGltZXN0YW1wXCI6MTQ3NjQ4MzQ3MixcIk1hY2hpbmVcIjo3NzIwNzYzLFwiUGlkXCI6MjczODEsXCJJbmNyZW1lbnRcIjoxMjk3OTEzNCxcIkNyZWF0aW9uVGltZVwiOlwiMjAxNi0xMC0xNFQyMjoxNzo1MlpcIn0sXCJpZEVtcHJlc2FcIjoxLFwiaWRKZXJhcnF1aWFcIjoxLFwibm9tYnJlUm9sXCI6XCJSb2wgZGUgQWRtaW5pc3RyYWNpb24gTW9kaWZpY2Fkb1wiLFwiZGVzY3JpcGNpb25Sb2xcIjpcIlJvbCBkZSBBZG1pbmlzdHJhY2lvbiBlZGl0YWRvIGRlIHBydWViYVwiLFwiYXNpZ25hY2lvbk11bHRpcGxlXCI6MCxcInBlcm1pc29zXCI6W3tcIklkTW9kdWxvXCI6MixcIklkRnVuY2lvbmFsaWRhZFwiOjMsXCJQZXJtaXNvc1wiOltcIkNcIixcIlJcIixcIlVcIixcIkRcIl19LHtcIklkTW9kdWxvXCI6MyxcIklkRnVuY2lvbmFsaWRhZFwiOjMsXCJQZXJtaXNvc1wiOltcIkNcIixcIlJcIixcIlVcIixcIkRcIl19LHtcIklkTW9kdWxvXCI6MyxcIklkRnVuY2lvbmFsaWRhZFwiOjQsXCJQZXJtaXNvc1wiOltcIkNcIixcIlJcIixcIlVcIixcIkRcIl19XSxcInN0YXR1c1wiOjEsXCJpZFwiOlwiZDc3ZDVkMGEtYTBiMi00Mjk4LTgyNDQtZGE1NzQ1MGNiYzgzXCJ9IiwiaWRVc3VhcmlvIjoiMDM4MDhmYzgtNmEzZi00YmI4LWJiYzAtMTVjYjVkNTRmNTMzIiwiaWRFbXByZXNhIjoiMTEyMTIxMjEyMTIxMjEyMTIiLCJpZFBsYXRhZm9ybWEiOiIxIiwibmJmIjoxNDc3NjEyMzQ0LCJleHAiOjE0Nzk2ODU5NDQsImlzcyI6IlRlbHN0b2NrSXNzdWVyIiwiYXVkIjoiVGVsc3RvY2tBdWRpZW5jZSJ9.QOMOrtMHGsffjT9eKqlZnE1kPI8Jm4WkyIe4-755vRM");
        }
    };

    var guardarEstadoLocal = function (estado) {
        localStorage.setItem(ITEM_LOCAL_STORAGE, JSON.stringify(estado));
    };

    var Respuesta = function (response) {
        if (typeof (response) !== 'undefined') {
            switch (parseInt(response.status)) {
                case parseInt(StatusCode.Forbidden):
                    break;
                case parseInt(StatusCode.InternalServerError):
                    window.location.href = Pages.Error.InternalServerError;
                    break;
                case parseInt(StatusCode.NotFound):
                    window.location.href = Pages.Error.NotFound;
                    break;
            }
        }
    };

    var obtenerUrlBase = function (flagContexto) {
        return URL_BASE + ( flagContexto === undefined ? "/api/" : "");
    };

    return {

        iniciar: function () {
            Spinner.init();
        },
        init: function () {
            obtenerToken();
            Spinner.init();
            guardarEstadoLocal({
                gestionVenta: {
                    prospecto: {}
                }
            });
        },
        obtenerEstado: function () {
            return JSON.parse(localStorage.getItem(ITEM_LOCAL_STORAGE));
        },
        guardarEstadoLocal: function (estado) {
            guardarEstadoLocal(estado);
        },
        solicitarServicio: function (config) {
            var instance = axios.create();
            var configuracion = {
                url: obtenerUrlBase() + config.url,
                method: config.metodo,
                headers: {
                    "Content-Type": "application/json",
                    //"Authorization": "bearer " + obtenerToken()
                },
                params: config.params,
                data: config.data,
                timeout: TIMEOUT_SERVICIO
            };

            return new Promise(function (resolve, reject) {

                    Spinner.mostrar();
                    instance.request(configuracion)
                        .then(function (response) {
                            Logger.log("RESPUES DE AXIOS SUCCESS", response);
                            setTimeout(function () {
                                Respuesta(response);
                                resolve(response);
                                Spinner.ocultar();
                            }, 500);
                        })
                        .catch(function (error) {
                            Logger.error("RESPUES DE AXIOS ERROR", error);
                            setTimeout(function () {
                                // ManejarRespuestaHttp.error({estatus: error.response.status});
                                Spinner.ocultar();
                                Respuesta(error);
                                reject(error);
                            }, 1500);
                        });

            });
        },
        obtenerUrlBase: function () {
            return obtenerUrlBase();
        },
        obtenerToken: function () {
            return obtenerToken();
        },
        obtenerIdsToken: function () {
            var token = obtenerToken(),
                idJerarquia = JSON.parse(token.userRol).idJerarquia;
            return {
                "idRegion": token.idRegion ? token.idRegion : 1,
                "idPlaza": token.idPlaza ? token.idPlaza : 1,
                "idGerencia": token.idGerencia ? token.idGerencia : 1,
                "idUsuario": "8ce662b4-48b9-4c3c-accc-027839fa2382",//token.idUsuario,
                "idJerarquia": 1//idJerarquia ? idJerarquia : 3
            }
        },
        limpiarDatos: function () {
            sessionStorage.clear();
            localStorage.clear();
        },
        /**
         * @param data {{selector: string, visible: boolean}}
         */
        mostrarOcultarElemento: function (data) {
            if (!data.selector || data.visible === undefined) {
                Logger.error(LABEL + " NO HAY SELECTOR O BANDERA PARA MOSTRAR U OCULTAR CONTENEDOR", data);
            }
            $(data.selector).removeClass(data.visible ? CLASE_CSS.OCULTAR : CLASE_CSS.MOSTRAR).addClass(data.visible ? CLASE_CSS.MOSTRAR : CLASE_CSS.OCULTAR);
            Logger.log(LABEL + "SE MOSTRÓ O SE OCULTÓ EL CONTENIDO ID: " + data.selector, data);
        }
    }
}();
jQuery(document).ready(function () {
    // moment.locale("es");
    App.init();
});
