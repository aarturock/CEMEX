var CONSTANTE = function () {
    return {
        ACTIVIDADES: {
            PROSPECCION_CAMPO: 1,
            CONTACTAR_NUEVO_PROSPECTO: 2,
            CONTACTAR_CLIENTE: 3,
            VISITAR_PROSPECTO: 4,
            RECABAR_INFORMACION: 5,
            CALIFICAR_OPORTUNIDAD: 6,
            PREPARAR_PRESENTACION_PROSPUESTA_VALOR: 7,
            DESCARTAR_OPORTUNIDAD: 8,
            PRESENTAR_PROPUESTA: 9,
            RECIBIR_PROPUESTA: 10,
            RESPUESTA_PROPUESTA: 11,
            NEGOCIAR_AJUSTAR_PROPUESTA: 12,
            CERRAR_VENTA: 13,
            ALTA_CLIENTE_OBRA: 14,
            HACER_PEDIDO: 15,
            CONFIRMAR_ENTREGAR: 16,
            COORDINAR_AREAS_APOYO: 17,
            ATENDER_QUEJAS: 18,
            PREPARAR_COMUNICACION: 19,
            PRESENTAR_FACTURAS: 20,
            REUNION_CONCILIACION: 21,
            JUNTAS_ADMON: 22,
            PREPARACION_REPORTES: 23,
            REVISION_EMAILS: 24,
            ATENDER_CAPACITACIONES: 25,
            GENERAR_EXPEDIENTES: 26
        },
        ESTATUS: {
            SIN_CONTACTO: 1,
            CONTACTADO: 2,
            AGENDADO: 3,
            VISITA_UNO_DIEZ: 4,
            CALIFICA: 5,
            NO_CALIFICA: 6,
            PREPARAR_PROPUESTA: 7,
            PROPUESTA_ENTREGADA: 8,
            EN_NEGOCIACION: 9,
            GANADA: 10,
            PERDIDA: 11,
        },
        PASOS: {
            PASO_1: 1,
            PASO_2: 2,
            PASO_3: 3,
            PASO_4: 4,
            PASO_5: 5
        },
        TIPOACTIVIDAD: {
            ACTIVIDADESVENTAS: {
                idPadre: 1,
                classCssEvento: "bg-color-orange",
                classActividad: "salesActivity",
                idDiv: "DivActividadesVentas",

            },
            ADMONVENTAS: {
                idPadre: 2,
                classCssEvento: "bg-color-greenLight",
                classActividad: "managementSalesActivity",
                idDiv: "DivAdministracionVentas",
            },
            ACTIVIDADESADMON: {
                idPadre: 3,
                classCssEvento: "bg-color-gray",
                classActividad: "managementActivity",
                idDiv: "DivActividadesAdministracion",
            }
        },
        TIPOPROSPECTO: {
            NUEVOPROSPECTO: 1,
            CROSSSELLING: 2,
            UPSELELLING:3
        },
        ASIGNARACTIVIDAD: {
            VENDEDOR: 2,
            PROSPECTO: 1
        },

        GetPasoPorActividad: function(idActividad){
            var Paso;
            switch (idActividad) {
                case CONSTANTE.ACTIVIDADES.PROSPECCION_CAMPO:
                case CONSTANTE.ACTIVIDADES.ALTA_CLIENTE_OBRA:
                case CONSTANTE.ACTIVIDADES.HACER_PEDIDO:
                    Paso = 0;
                    break;
                case CONSTANTE.ACTIVIDADES.CONTACTAR_NUEVO_PROSPECTO:
                case CONSTANTE.ACTIVIDADES.CONTACTAR_CLIENTE:
                    Paso = 1;
                    break;
                case CONSTANTE.ACTIVIDADES.VISITAR_PROSPECTO:
                case CONSTANTE.ACTIVIDADES.RECABAR_INFORMACION:
                    Paso = 2;
                    break;
                case CONSTANTE.ACTIVIDADES.CALIFICAR_OPORTUNIDAD:
                case CONSTANTE.ACTIVIDADES.PREPARAR_PRESENTACION_PROSPUESTA_VALOR:
                case CONSTANTE.ACTIVIDADES.DESCARTAR_OPORTUNIDAD:
                    Paso = 3;
                    break;
                case CONSTANTE.ACTIVIDADES.PRESENTAR_PROPUESTA:
                case CONSTANTE.ACTIVIDADES.RECIBIR_PROPUESTA:
                    Paso = 4;
                    break;
                case CONSTANTE.ACTIVIDADES.NEGOCIAR_AJUSTAR_PROPUESTA:
                case CONSTANTE.ACTIVIDADES.CERRAR_VENTA:
                    Paso = 5;
                    break;
                default:
                    Paso = 0;
            }
            return Paso;
        },
        GetCssPaso: function (idPaso) {
            var Css;
            switch (idPaso) {
                case CONSTANTE.PASOS.PASO_1:
                    Css = "pgvStatus01";
                    break;
                case CONSTANTE.PASOS.PASO_2:
                    Css = "pgvStatus02";
                    break;
                case CONSTANTE.PASOS.PASO_3:
                    Css = "pgvStatus03";
                    break;
                case CONSTANTE.PASOS.PASO_4:
                    Css = "pgvStatus04";
                    break;
                case CONSTANTE.PASOS.PASO_5:
                    Css = "pgvStatus05";
                    break;
                default:
                    Css = "";
            }
            return Css;
        },

        GetPasoporEstatus: function(idEstatus){
            var numeroPaso;

            switch (idEstatus) {
                case ESTATUS.SIN_CONTACTO:
                    numeroPaso = 1;
                    break;
                case ESTATUS.CONTACTADO:
                    numeroPaso = 1;
                    break;
                case ESTATUS.AGENDADO:
                    numeroPaso = 2;
                    break;
                case ESTATUS.VISITA_UNO_DIEZ:
                    numeroPaso = 2;
                    break;
                case ESTATUS.CALIFICA:
                    numeroPaso = 3;
                    break;
                case ESTATUS.NO_CALIFICA:
                    numeroPaso = 3;
                    break;
                case ESTATUS.PREPARAR_PROPUESTA:
                    numeroPaso = 4;
                    break;
                case ESTATUS.PROPUESTA_ENTREGADA:
                    numeroPaso = 4;
                    break;
                case ESTATUS.EN_NEGOCIACION:
                    numeroPaso = 5;
                    break;
                case ESTATUS.GANADA:
                    numeroPaso = 5;
                    break;
                case ESTATUS.PERDIDA:
                    numeroPaso = 5;
                    break;
            }
            return numeroPaso;
        }
    }
}();
