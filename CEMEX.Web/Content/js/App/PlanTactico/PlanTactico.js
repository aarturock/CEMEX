
//Almacena el catalogo de Actividades PGV.
var catalogoActividades = [];
//Contador para las actividades de ventas.
var NumeroActividadesVentas = 0;
//Almacena el catalogo de Actividades PGV de Ventas.
var actividadesVentas = [];
//Variblea para guardar los Eventos de las actividades de Ventas.
var arrayEventosActividadesVentas = [];

//Array para almacenar los eventos temporales en el calendario (realizar CRUD)
var arrayTemporalEventos = [];
//Array de eventos donde se almacenan las actividades que vienen de base de datos.
var arrayBDEventos = [];
//Array de id de Eventos que se tienen que eliminar en base de datos.
var arrayBDIdEventosEliminar = [];
//Array de objetos de Eventos que se tiene que editar en base de datos.
var arrayBDIdEventosEditar = [];

var EstatusEliminado = 3;
var EstatusActivo = 1;

var idEventoTemp = 1;

var PROSPECTODATA;

var arrayCoordenadasProspectos = [];



var PlanTactico = {

    Constantes: {
        AgendaDay: 'agendaDay'
    },

    Init: {
        init: function () {

            //Carga las actividades admon. ventas, act. ventas, act. admon.
            PlanTactico.Axios.catalogoActividades(CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS);
            PlanTactico.Axios.catalogoActividades(CONSTANTE.TIPOACTIVIDAD.ADMONVENTAS);
            PlanTactico.Axios.catalogoActividades(CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESADMON);
            idEventoTemp = 1;
            PlanTactico.Calendar.cargarCalendario();
        }
    },

    Calendar: {

        cargarCalendario: function () {
            var hdr = {
                left: 'title',
                center: 'month,agendaWeek,agendaDay',
                right: 'prev,today,next'
            };

            $('#calendar').fullCalendar({
                slotDuration: '00:10:00',
                header: hdr,
                buttonText: {
                    prev: '<i class="fa fa-chevron-left"></i>',
                    next: '<i class="fa fa-chevron-right"></i>'
                },
                defaultView: 'agendaWeek',
                editable: true,
                defaultTimedEventDuration: '00:10:00',
                eventDurationEditable: true,
                //Permite modificar la hora de inicio y la hora de fin del evento
                eventResize: function (event) {
                    if (typeof (event.tipoActividad) === 'undefined') {
                        PlanTactico.Eventos.editarEventoArrayTemp(event);
                    } else {
                        PlanTactico.Eventos.editarEventoDB(event);
                    }
                },
                //Permite modificar el dia del evento.
                eventDrop: function (event) {
                    if (typeof (event.tipoActividad) === 'undefined') {
                        PlanTactico.Eventos.editarEventoArrayTemp(event);
                    } else {
                        PlanTactico.Eventos.editarEventoDB(event);
                    }
                },
                droppable: true,
                drop: function (date, jsEvent, ui, resourceId) {
                    //Obtiene la lista de clases en la Actividad
                    var Class = ui.helper[0].className;
                    //Obtiene el Id de la Actividad
                    var IdActividad = ui.helper[0].id;
                    //Obtiene la descripción de la Actividad.
                    var DescripcionActividad = ui.helper[0].innerText.replace(/[0-9]/g, '');
                    //Obtiene el Id del Prospecto seleccionado en el Combo.
                    var IdProspecto = $("#select-pts-prospecto").val();

                    //Obtiene la fecha actual.
                    var dateActual = new Date();
                    var diaActual = dateActual.getDate();
                    var mesActual = dateActual.getMonth() + 1;
                    var anioActual = dateActual.getFullYear();
                    var horaActual = dateActual.getHours();
                    var minutoActual = dateActual.getMinutes();
                    var segundosActual = dateActual.getSeconds();


                    var defaultDuration = moment.duration($('#calendar').fullCalendar('option', 'defaultTimedEventDuration'));
                    var end = date.clone().add(defaultDuration);

                    //Obtiene la fecha en que se inicializa el evento en el que se posicionno el widget.
                    var IDate = date._i;
                    var Idia = IDate[2];
                    var Imes = IDate[1] + 1;
                    var Ianio = IDate[0];
                    var Ihora = IDate[3];
                    var Iminuto = IDate[4];
                    var Isegundo = IDate[5];

                    if (IdProspecto !== '') {
                        if (Class.indexOf("disabled") === -1) {
                            //Verifica que no se puedan añadir eventos a la agenda en dias anteriores  a la fecha actual.
                            if (Idia < diaActual && Imes == mesActual && Ianio == anioActual) {
                                alertify.alert("No se pueden añadir eventos en una fecha anterior a la fecha actual.");
                            } else {
                                if (Idia === diaActual && Ihora < horaActual && Iminuto < minutoActual) {
                                    alertify.alert("No se pueden añadir eventos en horas pasada a la hora actual.");
                                } else {
                                    // retrieve the dropped element's stored Event Object
                                    var originalEventObject = $(this).data('eventObject');

                                    var copiedEventObject = $.extend({}, originalEventObject);

                                    copiedEventObject.start = date;

                                    $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

                                    if ($('#drop-remove').is(':checked')) {
                                        $(this).remove();
                                    }

                                    //Inserta la actividad en el array temporal de eventos.
                                    PlanTactico.Eventos.insertarEventoArrayTmp({
                                        fechainicio: moment.utc(date.format()),
                                        fechafin: moment.utc(end.format()),
                                        idActividad: IdActividad
                                    });
                                }
                            }
                        } else {
                            alertify.alert("La actividad que selecciono se encuentra inactiva.");
                        }
                    } else {
                        alertify.alert("Es necesario seleccionar un prospecto.");
                    }

                },
                selectable: true,
                selectHelper: true,
                "allDayText": "todo el día",
                eventRender: function (event, element, icon) {

                    //Cada que se realiza el cambio de vista en el calendario
                    //se renderiza los eventos para asignar la función de clic
                    //y doble clic a cada evento.
                    PlanTactico.Calendar.clickenActividad(element, event);


                    //Permite visualizar el botón de mapa solo cuando la
                    //vista es por dia en el Calendario.
                    PlanTactico.Mapa.mostrarBoton();


                    if (!event.description == "") {
                        element.find('.fc-event-title').append("<br/><span class='ultra-light'>" + event.description +
                            "</span>");
                    }
                    if (!event.icon == "") {
                        element.find('.fc-event-title').append("<i class='air air-top-right fa " + event.icon +
                            " '></i>");
                    }
                },
                windowResize: function (event, ui) {
                    $('#calendar').fullCalendar('render');
                }
            });

            $('.fc-header-right, .fc-header-center').hide();

            $('#calendar-buttons #btn-prev').click(function () {
                $('.fc-button-prev').click();
                PlanTactico.Actividades.flujoActividades();
                return false;
            });

            $('#calendar-buttons #btn-next').click(function () {
                $('.fc-button-next').click();
                PlanTactico.Actividades.flujoActividades();
                return false;
            });

            $('#calendar-buttons #btn-today').click(function () {
                $('.fc-button-today').click();
                return false;
            });

            //Realiza el cambio de vista del calendario por mes.
            $('#mt').click(function () {
                PlanTactico.Mapa.mostrarBoton();
                $('#calendar').fullCalendar('changeView', 'month');
                PlanTactico.Actividades.flujoActividades();
            });

            //Realiza el cambio de vista del calendario por semana.
            $('#ag').click(function () {
                PlanTactico.Mapa.mostrarBoton();
                $('#calendar').fullCalendar('changeView', 'agendaWeek');
                PlanTactico.Actividades.flujoActividades();
            });

            //Realiza el cambio de vista del calendario por dia.
            $('#td').click(function () {
                PlanTactico.Mapa.mostrarBoton();
                $('#calendar').fullCalendar('changeView', 'agendaDay');
                PlanTactico.Actividades.flujoActividades();
            });
        },

        clickenActividad: function (element, event) {
            if (typeof (event.id) !== 'undefined') {
                var Tiempo = 300, clicks = 0, timer = null;
                element.bind('click', function (e) {
                    clicks++;
                    if (clicks === 1) {
                        timer = setTimeout(function () {
                            clicks = 0;
                            PlanTactico.Calendar.mostarModal(event);
                        }, Tiempo);
                    } else {
                        clearTimeout(timer);
                        PlanTactico.Calendar.redireccionarGestionVenta();
                        clicks = 0;
                    }
                });

                element.bind('mousedown', function (e) {
                    if (e.which === 3) {
                        PlanTactico.Eventos.eliminarEventoDB(event.id);
                    }
                });
            } else {
                element.bind('mousedown', function (e) {
                    if (e.which === 3) {
                        PlanTactico.Eventos.eliminarEventoArrayTemp(event._id);
                    }
                });
            }
        },

        reiniciarCalendario: function () {
            $('#calendar').fullCalendar('removeEvents');
        },

        cargarEventos: function (arrayActividades) {
            var cssClass;
            var cssClassEvento;
            var actividadEditable;
            var PosicionesActividadesVentas = [];
            var arrayidProspectos = [];
            var descripcion;
             var myCalendar = $('#calendar');

            PlanTactico.Eventos.reiniciarVariables();

            for (var iActividadVenta = 0; iActividadVenta < arrayActividades.length; iActividadVenta++) {
                //Almacena en el array las actividades que vienen de base de datos.
                arrayBDEventos.push(arrayActividades[iActividadVenta]);
                if (arrayActividades[iActividadVenta].tipoActividad.idPadre === CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre) {
                    PosicionesActividadesVentas.push(iActividadVenta);
                }
            }


            var PosicionActVenta = 0;
            for (var iActividad = 0; iActividad < arrayActividades.length; iActividad++) {

                if (arrayActividades[iActividad].status === EstatusActivo) {
                    switch (parseInt(arrayActividades[iActividad].tipoActividad.idPadre)) {
                        case CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre:
                            descripcion = '';
                            cssClass = CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.classCssEvento;
                            var posicion = PosicionesActividadesVentas[PosicionActVenta + 1];

                            if (typeof (posicion) !== 'undefined') {
                                if (arrayActividades[iActividad].tipoActividad.id === arrayActividades[posicion].tipoActividad.id) {
                                    actividadEditable = false;
                                    cssClassEvento = 'incomplete';
                                } else {
                                    actividadEditable = false;
                                    cssClassEvento = 'complete';
                                }
                            } else {
                                cssClassEvento = 'incomplete';
                                actividadEditable = true;
                            }

                            PosicionActVenta++;


                            //Se verifica si el id del Prospecto se encuentra en el array;
                            if(arrayActividades[iActividad].idTipoAsignacion === CONSTANTE.ASIGNARACTIVIDAD.PROSPECTO){
                                if(typeof(arrayActividades[iActividad].prospecto) !== 'undefined') {
                                    if(typeof(arrayActividades[iActividad].prospecto.estatusProspecto) !== 'undefined'){
                                        descripcion =  arrayActividades[iActividad].prospecto.estatusProspecto.Descripcion +' - ' +
                                            arrayActividades[iActividad].prospecto.nombre + '/' + arrayActividades[iActividad].prospecto.obra;
                                    }
                                }
                            }


                            break;
                        case CONSTANTE.TIPOACTIVIDAD.ADMONVENTAS.idPadre:
                            descripcion = '';
                            cssClass = CONSTANTE.TIPOACTIVIDAD.ADMONVENTAS.classCssEvento;
                            cssClassEvento = "incomplete";
                            actividadEditable = true;
                            break;
                        case CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESADMON.idPadre:
                            descripcion = '';
                            descripcion ='';
                            cssClass = CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESADMON.classCssEvento;
                            cssClassEvento = "incomplete";
                            actividadEditable = true;
                            break;
                    }



                    var myEvent = {
                        id: arrayActividades[iActividad].id,
                        title: arrayActividades[iActividad].tipoActividad.Descripcion,
                        description: descripcion,
                        allDay: false,
                        start: arrayActividades[iActividad].fechaHoraCitaInicio,
                        className: ["event", cssClass, cssClassEvento],
                        end: arrayActividades[iActividad].fechaHoraCitaFin,
                        tipoActividad: arrayActividades[iActividad].tipoActividad,
                        idReferencia: arrayActividades[iActividad].idReferencia,
                        idTipoAsignacion: arrayActividades[iActividad].idTipoAsignacion,
                        comentario: arrayActividades[iActividad].comentario,
                        idArchivoAdjunto: arrayActividades[iActividad].idArchivoAdjunto,
                        confirmarVolumenObra: arrayActividades[iActividad].confirmarVolumenObra,
                        status: arrayActividades[iActividad].status
                    };

                    //Se pinta el evento en el calendario.
                    myCalendar.fullCalendar('renderEvent', myEvent, true);

                }
            }
        },

        redireccionarGestionVenta: function () {
            if (PlanTactico.Values.existeidProspecto()) {
                window.localStorage.setItem(SessionStorageItem.IDPROSPECTOGV, PlanTactico.Values.idProspecto());
                window.location.href = Pages.GestionVenta.Index;
            }
        },

        mostarModal: function (event) {
            $("#titulo_modal").html('').html('Comentarios de ' + event.title);
            $("#divComentarios").html('').html('<p>' + ((event.comentario === '') ? 'No existen comentarios.' : event.comentario) + '</p>');
            $("#modalComentarios").modal("show");
        },

        contadorEventos: function () {
            var NoActividades;
            var actividadesenCalendario = $('#calendar').fullCalendar('clientEvents');
            for (var indexVenta = 0; indexVenta < actividadesVentas.length; indexVenta++) {
                NoActividades = 0;
                for (var iActividad = 0; iActividad < actividadesenCalendario.length; iActividad++) {
                    if (parseInt(actividadesVentas[indexVenta]) === parseInt(actividadesenCalendario[iActividad].tipoActividad.id) &&
                        parseInt(actividadesenCalendario[iActividad].tipoActividad.idPadre) === parseInt(CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre)) {
                        NoActividades++;
                    }
                }


                if(NoActividades > 0){
                    $('#'+ actividadesVentas[indexVenta] + '-' + CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre+ ' div').remove();
                    $('#' + actividadesVentas[indexVenta] + '-' + CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre+ ' span').before('<div class="badge" draggable="false">'+NoActividades+'</div>');
                }
            }
        },

        //Elimina un evento del calendario pasandole como
        //parametro el id del evento.
        eliminarEvento: function (idEvento) {
            $('#calendar').fullCalendar('removeEvents', idEvento);
        },

        //Retorna el nombre de la vista en la cual se encuentra el
        //calendario.
        vistaCalendario: function () {
            var vista = $('#calendar').fullCalendar('getView');
            return vista.name;
        },

        //Retorna el rango de fechas de la vista actual.
        fechasVistaCalendario: function (porProspecto) {
            var fechaInicio;
            var fechaFin;

            if (porProspecto) {
                fechaInicio = "2000-11-03T01:00:00.000Z";
                fechaFin = "3000-12-05T01:00:00.000Z";
            } else {
                var vista = $('#calendar').fullCalendar('getView');
                fechaInicio = moment.utc(vista.start);
                fechaFin = moment.utc(vista.end);
            }

            return {
                fechaInicio: fechaInicio,
                fechaFin: fechaFin
            };
        },

        //Retorna los eventos de una determinadas fecha
        eventosporFechas: function (objRangoFechas) {
            console.log("objRangoFechas", objRangoFechas);
            var Eventos = [];
            $('#calendar').fullCalendar('clientEvents', function (event) {
                if (event.start >= objRangoFechas.fechaInicio && event.end <= objRangoFechas.fechaFin) {
                    Eventos.push(event);
                }
            });

            return Eventos;
        }
    },

    Eventos: {
        botonGuardarEventos: function () {
            if (arrayTemporalEventos.length > 0 ||
                arrayBDIdEventosEditar.length > 0 ||
                arrayBDIdEventosEliminar.length > 0) {
                $("#btnGuardarEventos").show();
            } else {
                $("#btnGuardarEventos").hide();
            }
        },

        reiniciarVariables: function () {
            arrayTemporalEventos = [];
            arrayBDEventos = [];
            arrayBDIdEventosEliminar = [];
            arrayBDIdEventosEditar = [];

            PlanTactico.Eventos.botonGuardarEventos();
        },

        insertarEventoArrayTmp: function (objEvento) {
            var esValido;
            var idActividad = objEvento.idActividad.split('-')[0];
            var idPadre = objEvento.idActividad.split('-')[1];

            if (typeof (idActividad) !== 'undefined' &&
                typeof (idPadre) !== 'undefined') {

                if (parseInt(idActividad) === CONSTANTE.ACTIVIDADES.PROSPECCION_CAMPO ||
                    parseInt(idActividad) >= CONSTANTE.ACTIVIDADES.ALTA_CLIENTE_OBRA) {
                    if (PlanTactico.Values.existeidVendedor()) {
                        esValido = true;
                    } else {
                        esValido = false;
                        alertify.error("Debe seleccionar un vendedor para poder asignar esta actividad");
                    }
                } else {
                    if (PlanTactico.Values.existeidProspecto()) {
                        esValido = true;
                    } else {
                        esValido = false;
                        alertify.error("Debe seleccionar un prospecto para poder asignar esta actividad");
                    }
                }

                if (esValido) {
                    arrayTemporalEventos.push({
                        id: '_fc' + idEventoTemp,
                        fechainicio: objEvento.fechainicio,
                        fechafin: objEvento.fechafin,
                        idActividad: objEvento.idActividad
                    });
                    idEventoTemp++;
                    PlanTactico.Eventos.botonGuardarEventos();
                } else {
                    PlanTactico.Calendar.eliminarEvento('_fc' + idEventoTemp);
                    idEventoTemp++;
                }
            }
        },

        eliminarEventoArrayTemp: function (idEvento) {
            alertify.confirm("¿Esta seguro de eliminar el evento?", function (e) {
                if (e) {
                    $('#calendar').fullCalendar('removeEvents', idEvento);
                    for (var iEvento = 0; iEvento < arrayTemporalEventos.length; iEvento++) {
                        if (arrayTemporalEventos[iEvento].id === idEvento) {
                            arrayTemporalEventos.splice(iEvento, 1);
                            break;
                        }
                    }
                    PlanTactico.Eventos.botonGuardarEventos();
                }
            });
        },

        editarEventoArrayTemp: function (event) {
            var eventoTemp;
            var fechaInicio;
            var fechaFin;


            for (var iEvent = 0; iEvent < arrayTemporalEventos.length; iEvent++) {
                if (event._id === arrayTemporalEventos[iEvent].id) {

                    eventoTemp = arrayTemporalEventos[iEvent];

                    if (event.end !== null) {
                        //eventRisize
                        fechaInicio = event.start;
                        fechaFin = event.end;
                    } else {

                        //eventDrop
                        fechaInicio = event.start;
                        var año = moment(event.start).get('year');
                        var mes = moment(event.start).get('month');
                        var day = moment(event.start).get('date');
                        fechaFin = moment(eventoTemp.fechafin).set({ 'year': año, 'month': mes, 'day': day });
                    }

                    arrayTemporalEventos[iEvent] = {
                        id: eventoTemp.id,
                        idActividad: eventoTemp.idActividad,
                        fechainicio: moment.utc(fechaInicio.format()),
                        fechafin: moment.utc(fechaFin.format())
                    }
                    break;
                }
            }
            PlanTactico.Eventos.botonGuardarEventos();
        },

        eliminarEventoDB: function (idEvento) {
            alertify.confirm("¿Esta seguro de eliminar el evento?", function (e) {
                if (e) {
                    PlanTactico.Calendar.eliminarEvento(idEvento);


                    for (var indexEvent = 0; indexEvent < arrayBDEventos.length; indexEvent++) {
                        if (arrayBDEventos[indexEvent].id === idEvento) {
                            arrayBDIdEventosEliminar.push(idEvento);
                            arrayBDEventos.splice(indexEvent, 1);
                        }
                    }

                    //Si existe en el array de edición se elimina del array.
                    for (var indexEvent = 0; indexEvent < arrayBDIdEventosEditar.length; indexEvent++) {
                        if (String(arrayBDIdEventosEditar[indexEvent].id) === idEvento) {
                            arrayBDIdEventosEditar.splice(indexEvent, 1);
                        }
                    }

                    PlanTactico.Eventos.botonGuardarEventos();

                    $("#modalComentarios").modal("hide");
                }
            });
        },

        editarEventoDB: function (event) {
            console.log("event", event);
            var existe = false;
            var posicionEvento;
            var fechaFin;
            var fechaInicio;

            if (event.end !== null) {
                //eventRisize
                fechaInicio = event.start;
                fechaFin = event.end;
            } else {
                //eventDrop
                fechaInicio = event.start;

                var año = moment(event.start).get('year');
                var mes = moment(event.start).get('month');
                var dia = moment(event.start).get('date');

                fechaFin = moment(event.fechaHoraCitaFin).set({ 'year': año, 'month': mes, 'day': dia });
            }

            var objEvento = {
                id: event.id,
                tipoActividad: event.tipoActividad,
                fechaHoraCitaInicio: moment.utc(fechaInicio.format()),
                fechaHoraCitaFin: moment.utc(fechaFin.format()),
                idTipoAsignacion: event.idTipoAsignacion,
                idReferencia: event.idReferencia,
                idArchivoAdjunto: event.idArchivoAdjunto,
                confirmarVolumenObra: event.confirmarVolumenObra,
                comentario: event.comentario,
                status: event.status
            };

            for (var indexEvento = 0; indexEvento < arrayBDIdEventosEditar.length; indexEvento++) {
                if (arrayBDIdEventosEditar[indexEvento].id === event.id) {
                    existe = true;
                    posicionEvento = indexEvento;
                    break;
                }
            }

            if (existe) {
                arrayBDIdEventosEditar[posicionEvento] = objEvento;
            } else {
                arrayBDIdEventosEditar.push(objEvento);
            }


            PlanTactico.Eventos.botonGuardarEventos();
        },

        guardarEventos: function () {
            alertify.confirm("¿Desea guardar los cambios del evento?", function (e) {
                if (e) {
                    var ActividadTemp;
                    //Si existen nuevos eventos insertados en el calendario
                    //se manda a llamar la función.
                    if (arrayTemporalEventos.length > 0) {
                        PlanTactico.Axios.insertarActividades();
                    }

                    //Si existen elementos en el array para eliminar eventos de base de datos
                    //se manda a llamar la función.
                    if (arrayBDIdEventosEliminar.length > 0) {
                        PlanTactico.Axios.eliminarActividades();
                    }

                    //Si existen elementos en el array para editar eventos de base de datos
                    //se manda a llamar la función.
                    if (arrayBDIdEventosEditar.length > 0) {
                        PlanTactico.Axios.editarActividades();
                    }

                    //Se reinician todas las variables que se ocupan en las actividades temporales.
                    PlanTactico.Eventos.reiniciarVariables();

                    //Se manda a llamar el servicio de actividades por prospecto.
                    setTimeout(function () {

                        PlanTactico.Actividades.flujoActividades();
                    }, 2000);
                }
            });
        }
    },

    Actividades: {

        reiniciarActividades: function () {

            for (var iActividad = CONSTANTE.ACTIVIDADES.CONTACTAR_NUEVO_PROSPECTO; iActividad <= CONSTANTE.ACTIVIDADES.CERRAR_VENTA; iActividad++) {
                PlanTactico.Actividades.desactivarActividad({
                    idActividad: iActividad,
                    idPadre: CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre
                });
            }

            //$("#DivActividadesVentas li div").html("0");
        },

        activarActividad: function (propiedadesActividad) {
            $("#" + propiedadesActividad.idActividad + "-" + propiedadesActividad.idPadre + " span").removeClass('disabled ').addClass('available');
            $("#" + propiedadesActividad.idActividad + "-" + propiedadesActividad.idPadre).removeClass('disabled');
        },

        desactivarActividad: function (propiedadesActividad) {
            $("#" + propiedadesActividad.idActividad + "-" + propiedadesActividad.idPadre + " span").removeClass('available ').addClass('disabled');
            $("#" + propiedadesActividad.idActividad + "-" + propiedadesActividad.idPadre).addClass('disabled');
        },

        pintarActividades: function (arrayActividades, configTipoActividad) {
            var activoSpan = '';
            var activoLi = '';
            var marcadorActividad = '';
            var actividadesOrdenadas = PlanTactico.Actividades.ordenarActividades(arrayActividades);

            if (typeof (actividadesOrdenadas) !== 'undefined' && actividadesOrdenadas !== null) {

                $("#" + configTipoActividad.idDiv).html('');

                for (var indexActividad = 0; indexActividad < actividadesOrdenadas.length; indexActividad++) {
                    catalogoActividades.push(actividadesOrdenadas[indexActividad]);
                    switch (actividadesOrdenadas[indexActividad].idPadre) {
                        case CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre:
                            activoSpan = ' disabled ';
                            activoLi = ' disabled ';
                            NumeroActividadesVentas++;
                            actividadesVentas.push(actividadesOrdenadas[indexActividad].id);
                            break;
                        default:
                            activoSpan = ' disabled ';
                            activoLi = ' disabled ';
                    }

                    $("#" + configTipoActividad.idDiv).append('<li id="' + actividadesOrdenadas[indexActividad].id + '-' + actividadesOrdenadas[indexActividad].idPadre + '" class="' + activoLi + '">' +
                        '<span class="' + configTipoActividad.classActividad + activoSpan + ' incomplete">' +
                        actividadesOrdenadas[indexActividad].Descripcion +
                        '</span>' +
                        '</li>');
                }


            }
        },

        ordenarActividades: function (arrayActividades) {
            var idActividades = [];
            var arrayOrdenado = [];

            for (var iPosicion = 0; iPosicion < arrayActividades.length; iPosicion++) {
                idActividades.push(arrayActividades[iPosicion].id);
            }


            var k;
            for (var i = 0; i < idActividades.length; i++) {
                for (var j = 0; j < (idActividades.length - i); j++) {
                    if (idActividades[j] > idActividades[j + 1]) {
                        k = idActividades[j + 1];
                        idActividades[j + 1] = idActividades[j];
                        idActividades[j] = k;
                    }
                }
            }


            for (var i = 0; i < idActividades.length; i++) {
                for (var x = 0; x < arrayActividades.length; x++) {
                    if (parseInt(idActividades[i]) === parseInt(arrayActividades[x].id)) {
                        arrayOrdenado.push(arrayActividades[x]);
                    }
                }
            }

            return arrayOrdenado;
        },

        renderizaPluginDragDrop: function () {
            $('#external-events .tab-pane > li ').each(function () {
                PlanTactico.Actividades.initDrag($(this));
            });
        },

        initDrag: function (e) {
            var eventObject = {
                title: $.trim(e.children('span').text()),
                description: $.trim(e.children('span').attr('data-description')),
                icon: $.trim(e.children('span').attr('data-icon')),
                className: $.trim(e.children('span').attr('class'))
            };

            e.data('eventObject', eventObject);

            e.draggable({
                zIndex: 999,
                revert: true,
                revertDuration: 0
            });
        },

        flujoActividadesProspecto: function (arrayEventosProspecto) {
            arrayEventosActividadesVentas = [];

            for (var iEvento = 0; iEvento < arrayEventosProspecto.length; iEvento++) {
                if (arrayEventosProspecto[iEvento].tipoActividad.idPadre === CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre) {
                    arrayEventosActividadesVentas.push(arrayEventosProspecto[iEvento]);
                }
            }

            PlanTactico.Axios.consultarProspectoporId().then(function () {
                if (PROSPECTODATA !== null) {
                    switch (PROSPECTODATA.estatusProspecto.id) {
                        case CONSTANTE.ESTATUS.SIN_CONTACTO:
                            switch (PROSPECTODATA.tipoProspecto.id) {
                                case CONSTANTE.TIPOPROSPECTO.NUEVOPROSPECTO:
                                    PlanTactico.Actividades.activarActividad({
                                        idActividad: CONSTANTE.ACTIVIDADES.CONTACTAR_NUEVO_PROSPECTO,
                                        idPadre: CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre
                                    });
                                    break;
                                case CONSTANTE.TIPOPROSPECTO.CROSSSELLING:
                                case CONSTANTE.TIPOPROSPECTO.UPSELELLING:
                                    PlanTactico.Actividades.activarActividad({
                                        idActividad: CONSTANTE.ACTIVIDADES.CONTACTAR_CLIENTE,
                                        idPadre: CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre
                                    });
                                    break;
                            }
                            break;
                        case CONSTANTE.ESTATUS.AGENDADO:
                            PlanTactico.Actividades.activarActividad({
                                idActividad: CONSTANTE.ACTIVIDADES.VISITAR_PROSPECTO,
                                idPadre: CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre
                            });
                            break;
                        case CONSTANTE.ESTATUS.VISITA_UNO_DIEZ:
                            PlanTactico.Actividades.activarActividad({
                                idActividad: CONSTANTE.ACTIVIDADES.RECABAR_INFORMACION,
                                idPadre: CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre
                            });
                            break;
                        case CONSTANTE.ESTATUS.CALIFICA:
                            PlanTactico.Actividades.activarActividad({
                                idActividad: CONSTANTE.ACTIVIDADES.CALIFICAR_OPORTUNIDAD,
                                idPadre: CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre
                            });
                            break;
                        case CONSTANTE.ESTATUS.NO_CALIFICA:
                            alertify.error("El prospecto no califica");
                            break;
                        case CONSTANTE.ESTATUS.PREPARAR_PROPUESTA:
                            PlanTactico.Actividades.activarActividad({
                                idActividad: CONSTANTE.ACTIVIDADES.PREPARAR_PRESENTACION_PROSPUESTA_VALOR,
                                idPadre: CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre
                            });
                            PlanTactico.Actividades.activarActividad({
                                idActividad: CONSTANTE.ACTIVIDADES.PRESENTAR_PROPUESTA,
                                idPadre: CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre
                            });
                            break;
                        case CONSTANTE.ESTATUS.PROPUESTA_ENTREGADA:
                            PlanTactico.Actividades.activarActividad({
                                idActividad: CONSTANTE.ACTIVIDADES.RECIBIR_PROPUESTA,
                                idPadre: CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre
                            });
                            break;
                        case CONSTANTE.ESTATUS.EN_NEGOCIACION:
                            PlanTactico.Actividades.activarActividad({
                                idActividad: CONSTANTE.ACTIVIDADES.RESPUESTA_PROPUESTA,
                                idPadre: CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre
                            });

                            PlanTactico.Actividades.activarActividad({
                                idActividad: CONSTANTE.ACTIVIDADES.NEGOCIAR_AJUSTAR_PROPUESTA,
                                idPadre: CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre
                            });
                            break;
                        case CONSTANTE.ESTATUS.GANADA:
                        case CONSTANTE.ESTATUS.PERDIDA:
                            PlanTactico.Actividades.activarActividad({
                                idActividad: CONSTANTE.ACTIVIDADES.CERRAR_VENTA,
                                idPadre: CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre
                            });
                            break;
                    }
                } else {
                    alertify.error("No se encontro información del prospecto seleccionado");
                }
            });
        },

        flujoActividades: function () {
            //Se obtiene el rango de fechas de la vista actual.
            var rangoFechas;

            // Esta seleccionado el id Vendedor y el id Prospecto.
            if (PlanTactico.Values.existeidProspecto() && PlanTactico.Values.existeidVendedor()) {

                console.log("No existen primero",PlanTactico.Values.existeidVendedor() );

                PlanTactico.Actividades.actividadesVendedor(false);

                rangoFechas = PlanTactico.Calendar.fechasVistaCalendario(true);

                //Si solo necesito las actividades del prospecto envio
                PlanTactico.Axios.consultarActividades({
                    idVendedor: PlanTactico.Values.idVendedor(),
                    fechaInicio: rangoFechas.fechaInicio,
                    fechaFin: rangoFechas.fechaFin
                }, true);

                // Solamente se encuentra seleccionado el combo de id Vendedor.
            } else if (PlanTactico.Values.existeidVendedor()) {
                console.log("No existen segundo",PlanTactico.Values.existeidVendedor());
                PlanTactico.Actividades.actividadesVendedor(true);

                rangoFechas = PlanTactico.Calendar.fechasVistaCalendario(false);

                //Si solo necesito la actividades del vendedor envio el id Vendedor,
                //fechaInicio, y fechaFin
                PlanTactico.Axios.consultarActividades({
                    idVendedor: PlanTactico.Values.idVendedor(),
                    fechaInicio: rangoFechas.fechaInicio,
                    fechaFin: rangoFechas.fechaFin
                }, false);

                //Si no se encuentran seleccionados idVendedor y idProspecto
                //desactivo todas actividades.
            } else {
                console.log("No existen");
                PlanTactico.Calendar.reiniciarCalendario();
                PlanTactico.Actividades.actividadesProspecto(false);
                PlanTactico.Actividades.actividadesVendedor(false);
                $(".badge").remove();
            }
        },

        actividadesProspecto: function (esActivo) {
            if (esActivo) {
                for (var i = CONSTANTE.ACTIVIDADES.CONTACTAR_NUEVO_PROSPECTO; i <= CONSTANTE.ACTIVIDADES.CERRAR_VENTA; i++) {
                    PlanTactico.Actividades.activarActividad({
                        idActividad: i,
                        idPadre: CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre
                    });
                }
            } else {
                for (var i = CONSTANTE.ACTIVIDADES.CONTACTAR_NUEVO_PROSPECTO; i <= CONSTANTE.ACTIVIDADES.CERRAR_VENTA; i++) {
                    PlanTactico.Actividades.desactivarActividad({
                        idActividad: i,
                        idPadre: CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre
                    });
                }
            }
        },

        actividadesVendedor: function (esActivo) {

            if (esActivo) {
                PlanTactico.Actividades.activarActividad({
                    idActividad: CONSTANTE.ACTIVIDADES.PROSPECCION_CAMPO,
                    idPadre: CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre
                });

                for (var i = CONSTANTE.ACTIVIDADES.ALTA_CLIENTE_OBRA; i <= CONSTANTE.ACTIVIDADES.REUNION_CONCILIACION; i++) {
                    PlanTactico.Actividades.activarActividad({
                        idActividad: i,
                        idPadre: CONSTANTE.TIPOACTIVIDAD.ADMONVENTAS.idPadre
                    });
                }


                for (var i = CONSTANTE.ACTIVIDADES.JUNTAS_ADMON; i <= CONSTANTE.ACTIVIDADES.GENERAR_EXPEDIENTES; i++) {
                    PlanTactico.Actividades.activarActividad({
                        idActividad: i,
                        idPadre: CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESADMON.idPadre
                    });
                }
            } else {

                PlanTactico.Actividades.desactivarActividad({
                    idActividad: CONSTANTE.ACTIVIDADES.PROSPECCION_CAMPO,
                    idPadre: CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESVENTAS.idPadre
                });


                for (var i = CONSTANTE.ACTIVIDADES.ALTA_CLIENTE_OBRA; i <= CONSTANTE.ACTIVIDADES.REUNION_CONCILIACION; i++) {
                    PlanTactico.Actividades.desactivarActividad({
                        idActividad: i,
                        idPadre: CONSTANTE.TIPOACTIVIDAD.ADMONVENTAS.idPadre
                    });
                }


                for (var i = CONSTANTE.ACTIVIDADES.JUNTAS_ADMON; i <= CONSTANTE.ACTIVIDADES.GENERAR_EXPEDIENTES; i++) {
                    PlanTactico.Actividades.desactivarActividad({
                        idActividad: i,
                        idPadre: CONSTANTE.TIPOACTIVIDAD.ACTIVIDADESADMON.idPadre
                    });
                }
            }
        },
    },

    Axios: {
        consultarActividades: function (objDatos, porProspecto) {
            PlanTactico.Calendar.reiniciarCalendario();

            return App.solicitarServicio({
                url: URI.Actividades.ConsultarActividades,
                metodo: "POST",
                data: objDatos
            }).then(function (response) {

                switch (response.status) {
                    case StatusCode.OK:
                        PlanTactico.Calendar.cargarEventos(response.data);
                        PlanTactico.Calendar.contadorEventos();
                        if (porProspecto) {
                            PlanTactico.Actividades.flujoActividadesProspecto(response.data);
                        }
                        break;
                    default:
                }
            }).catch(function (error) {
                console.log("error", error);
            });
        },

        consultarProspectoporId: function () {
            return App.solicitarServicio({
                url: URI.Prospecto.ConsultarProspecto + PlanTactico.Values.idProspecto(),
                metodo: "GET"
            }).then(function (response) {
                switch (response.status) {
                    case StatusCode.OK:
                        PROSPECTODATA = response.data;
                        break;
                    case StatusCode.NoContent:
                        PROSPECTODATA = null;
                        break;
                    default:
                }
            }).catch(function (error) {
                console.log("error", error);
            });
        },

        consultarCoodenadasProspectos: function (idProspecto) {
            var url = App.obtenerUrlBase() + URI.Prospecto.ConsultarProspecto + idProspecto;
            url = url.replace('"', '');
            var coordenadas;

            $.ajax({
                type: "GET",
                contentType: "application/json",
                url: url,
                async: false,
                success: function (data) {
                    coordenadas = data;
                },
                error: function (request, status, error) {
                    console.log("Surgio un error");
                }
            });

            return coordenadas;
        },

        catalogoActividades: function (tipoActividad) {
            return App.solicitarServicio({
                url: URI.PlanTactico.Actividades.toString() + tipoActividad.idPadre,
                metodo: "GET"
            }).then(function (response) {
                switch (response.status) {
                    case StatusCode.OK:
                        PlanTactico.Actividades.pintarActividades(response.data[0].items, tipoActividad);
                        PlanTactico.Actividades.renderizaPluginDragDrop();
                        break;
                }
            }).catch(function (error) {
                console.log(error);
            });
        },

        insertarActividades: function () {
            return App.solicitarServicio({
                url: URI.Actividades.InsertarActividades,
                metodo: "POST",
                data: PlanTactico.Values.arrayObjEventosInsertar()
            }).then(function (response) {
                switch (response.status) {
                    case StatusCode.OK:
                        alertify.success("Acitividad creadas correctamente.");
                        break;
                    default:
                }
            }).catch(function (error) {
                console.log(error);
            });
        },

        editarActividades: function () {
            return App.solicitarServicio({
                url: URI.Actividades.EditarActividades,
                metodo: "PUT",
                data: arrayBDIdEventosEditar
            }).then(function (response) {
                switch (response.status) {
                    case StatusCode.OK:
                        alertify.success("Actividades editadas correctamente.");
                        break;
                    default:
                }
            }).catch(function (error) {
                console.log("error", error);
            });
        },

        eliminarActividades: function () {
            return App.solicitarServicio({
                url: URI.Actividades.EliminarActividades,
                metodo: "DELETE",
                data: arrayBDIdEventosEliminar
            }).then(function (response) {
                switch (response.status) {
                    case StatusCode.OK:
                        alertify.success("Actividades eliminadas correctamente.");
                        break;
                    default:
                }
            }).catch(function (error) {
                console.log("error", error);
            });
        }
    },

    Values: {
        idProspecto: function () {
            return $("#select-pts-prospecto").val();
        },

        idVendedor: function () {
            return $("#select-pts-vendedor").val();
        },

        existeidProspecto: function () {
            if (typeof (PlanTactico.Values.idProspecto()) !== 'undefined' &&
                PlanTactico.Values.idProspecto() !== '0' && PlanTactico.Values.idProspecto() !== null) {
                return true;
            } else {
                return false;
            }
        },

        existeidVendedor: function () {
            if (typeof (PlanTactico.Values.idVendedor()) !== 'undefined' &&
                PlanTactico.Values.idVendedor() !== '0' && PlanTactico.Values.idVendedor() !== null) {
                return true;
            } else {
                return false;
            }
        },

        arrayObjEventosInsertar: function () {
            var arrayEventosInsertar = [];
            for (var iEvento = 0; iEvento < arrayTemporalEventos.length; iEvento++) {
                arrayEventosInsertar.push(PlanTactico.Values.obtenerObjActividad(arrayTemporalEventos[iEvento]));
            }
            return arrayEventosInsertar;
        },

        obtenerObjActividad: function (objEvento) {

            var objCatalogoActividad = PlanTactico.Values.obtenerObjCatalogoActividad(objEvento.idActividad);
            console.log("objCatalogoActividad", objCatalogoActividad);
            var dataActividad = {
                tipoActividad: objCatalogoActividad.objCatalogo,
                fechaHoraCitaInicio: objEvento.fechainicio,
                fechaHoraCitaFin: objEvento.fechafin,
                comentario: "Actividad asignada desde Plan Tactico Semanal",
                fechaInicioObra: "",
                confirmarVolumenObra: "",
                idArchivoAdjunto: "",
                idReferencia: objCatalogoActividad.idReferencia,
                idTipoAsignacion: objCatalogoActividad.idTIpoAsignacion,
                status: 1
            }

            console.log("dataActividad", dataActividad);
            return dataActividad;
        },

        obtenerObjCatalogoActividad: function (idActividad) {
            var id = idActividad.split('-')[0];
            var idPadre = idActividad.split('-')[1];
            var Actividad;

            if (typeof (id) !== 'undefined' && id !== '' &&
                typeof (idPadre) !== 'undefined' && idPadre !== '') {

                for (var iActividad = 0; iActividad < catalogoActividades.length; iActividad++) {
                    if (catalogoActividades[iActividad].id === parseInt(id) &&
                        catalogoActividades[iActividad].idPadre === parseInt(idPadre)) {
                        Actividad = new Object();

                        Actividad.objCatalogo = {
                            Descripcion: catalogoActividades[iActividad].Descripcion,
                            id: catalogoActividades[iActividad].id,
                            idCatalogo: catalogoActividades[iActividad].idCatalogo,
                            idPadre: catalogoActividades[iActividad].idPadre
                        };


                        //Define si la actividad se asignará a un vendedor o a un prospecto.
                        if (id === CONSTANTE.ACTIVIDADES.PROSPECCION_CAMPO) {
                            Actividad.idReferencia = PlanTactico.Values.idVendedor();
                            Actividad.idTIpoAsignacion = CONSTANTE.ASIGNARACTIVIDAD.VENDEDOR;
                        } else {
                            if (id > CONSTANTE.ACTIVIDADES.PROSPECCION_CAMPO && id <= CONSTANTE.ACTIVIDADES.CERRAR_VENTA) {
                                Actividad.idReferencia = PlanTactico.Values.idProspecto();
                                Actividad.idTIpoAsignacion = CONSTANTE.ASIGNARACTIVIDAD.PROSPECTO;
                            } else {
                                Actividad.idReferencia = PlanTactico.Values.idVendedor();
                                Actividad.idTIpoAsignacion = CONSTANTE.ASIGNARACTIVIDAD.VENDEDOR;
                            }
                        }
                    }
                }
                return Actividad;
            }
        }
    },

    Mapa: {
        verMapa: function () {
            PlanTactico.Mapa.obtenerIdProspectos(PlanTactico.Calendar.eventosporFechas(PlanTactico.Calendar.fechasVistaCalendario()));
        },

        mostrarBoton: function () {
            if (String(PlanTactico.Calendar.vistaCalendario()) === String(PlanTactico.Constantes.AgendaDay)) {
                $("#btnVerMapa").show();
            } else {
                $("#btnVerMapa").hide();
            }
        },


        obtenerIdProspectos: function (arrayEventos) {
            var arrayIdProspectos = [];
            var arrayCoordenadasProspectos = [];

            for (var iEvento = 0; iEvento < arrayEventos.length; iEvento++) {
                if (parseInt(arrayEventos[iEvento].idTipoAsignacion) === CONSTANTE.ASIGNARACTIVIDAD.PROSPECTO) {
                    if (arrayIdProspectos.indexOf(arrayEventos[iEvento].idReferencia) === -1) {
                        arrayIdProspectos.push(arrayEventos[iEvento].idReferencia);
                    }
                }
            }

            //Si existen actividades de prospecto en este día
            //Llamamos al servicio para obtener las coordenadas de cada prospecto.
            if (arrayIdProspectos.length > 0) {
                for (var iProspecto = 0; iProspecto < arrayIdProspectos.length; iProspecto++) {
                    var prospecto = PlanTactico.Axios.consultarCoodenadasProspectos(arrayIdProspectos[iProspecto]);

                    if (prospecto != null && typeof (prospecto) !== 'undefined') {
                        arrayCoordenadasProspectos.push(prospecto.cliente.direccion.ubicacion);
                    }
                }


                var mapCanvas = document.getElementById("map");
                mapCanvas.innerHTML = " ";

                var center = new google.maps.LatLng(25.6515413, -100.1932763);

                Spinner.mostrar();


                setTimeout(function () {
                    Mapa.pintarMapa({
                        elementoCanavas: mapCanvas,
                        opciones: {
                            zoom: 17,
                            center: center,
                            scrollwheel: false,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        }
                    });

                    Mapa.pintarMarcadores({
                        marcadores: arrayCoordenadasProspectos
                        , icon: {
                            path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
                            fillColor: "#004ab1",
                            fillOpacity: 1,
                            strokeColor: '',
                            strokeWeight: 0
                        }
                    });
                    Spinner.ocultar();
                }, 1500);

                $("#modelVerMapa .modal-title").text($("#calendar table .fc-header-title").text());
                $("#modelVerMapa").modal("show");

            } else {
                alertify.success("No existen visitas a prospectos en este dia.");
            }
        }
    }
};

$(document).ready(function () {
    App.init();
    PlanTactico.Init.init();
});
