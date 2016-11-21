///Depende GoogleMaps
/// <reference path="../js/mapicon/map-icons.min.js" />
/// <reference path="../js/mapicon/map-icons.js" />
/// <reference path="../js/alertify/alertify.js" />
var GeoMaps = {};

(function () {
    var map;

    this.Classes = {
        Location: function (latitud, longitud) {
            this.Latitud = latitud;
            this.Longitud = longitud;
        }
    };

    this.Maps = {
        SetSimpleMap: function (latitud, longitud, boolSetMarker)
        {		
            var mapOptions = {
                zoom: parseInt(GeoMaps.ConfigMap.ZoomMap),
                center: { lat: latitud, lng: longitud },
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [
                    { stylers: [{ visibility: 'simplified' }] },
                    { elementType: 'labels', stylers: [{ visibility: 'off' }] }
                ]
            };
            map = new google.maps.Map(document.getElementById(GeoMaps.ConfigMap.ContainerMap), mapOptions);
            if (boolSetMarker)
                GeoMaps.Markers.Markers.SetMarker(latitud, longitud);
        },
        SetMapByAddress: function (address, boolSetMap, boolSetMarker) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var coordenadas = results[0].geometry.location;
                    lat = coordenadas.lat();
                    lng = coordenadas.lng();
                    if (Boolean(boolSetMap))
                    {
                        GeoMaps.Maps.SetSimpleMap(lat, lng, boolSetMarker);
                    }
                    document.getElementById('InptNmbrLatitud').value = lat;
                    document.getElementById('InptNmbrLongitud').value = lng;
                }
                else {
                    alertify.log('Imposible obtener la ubicación especificada');
                }
            });
        },
    },

    this.Markers = {
        Markers: {
            SetMarker: function (latitud, longitud) {
                var marker = new Marker({
                    map: map,
                    position: new google.maps.LatLng({ lat: latitud, lng: longitud }),
                    icon: {
                        path: MAP_PIN,
                        fillColor: '#004ab1',
                        fillOpacity: 1,
                        strokeColor: '',
                        strokeWeight: 0
                    },
                    animation: google.maps.Animation.DROP,
                    map_icon_label: '<span class="map-icon map-icon-prospectoMoral"></span>',
                    title: 'Ubicación Prospecto',
                    draggable: true,
                });




                marker.setMap(map);
                google.maps.event.addListener(marker, 'dragend', function () {
                    var coords = marker.getPosition();
                    document.getElementById('InptNmbrLatitud').value = coords.lat();
                    document.getElementById('InptNmbrLongitud').value = coords.lng();
                });
                function geocodePosition(pos) {
                    geocoder = new google.maps.Geocoder();
                    geocoder.geocode
                     ({
                         latLng: pos
                     },
                         function (results, status) {
                             if (status == google.maps.GeocoderStatus.OK) {
                                 //$("#mapSearchInput").val(results[0].formatted_address);
                                 //$("#mapErrorMsg").hide(100);
                                 //console.log(">>>>geocodePosition");
                                 //alert(results[0].formatted_address);
                             }
                             else {
                                 alert("Error");
                                // $("#mapErrorMsg").html('Cannot determine address at this location.' + status).show(100);
                             }
                         }
                     );
                }
            },
        },
        Config: {
            Title: '',
            IconUrl: '',
        },
    },

    this.ConfigMap = {
        ContainerMap: "",
        ContainerLat: "",
        ContainerLng: "",
        ZoomMap: 5,
    };

}).apply(GeoMaps);







/////////Depende GoogleMaps
///////// <reference path="../js/mapicon/map-icons.min.js" />
///////// <reference path="../js/mapicon/map-icons.js" />
//////var GeoMaps = {};

//////(function () {
//////    var map;

//////    this.Classes = {
//////        Location: function (latitud, longitud) {
//////            this.Latitud = latitud;
//////            this.Longitud = longitud;
//////        }
//////    };

//////    this.Maps = {
//////        SetSimpleMap: function (latitud, longitud, boolSetMarker) {
//////            map = new google.maps.Map(document.getElementById(GeoMaps.ConfigMap.ContainerMap), {
//////                center: { lat: latitud, lng: longitud },
//////                zoom: parseInt(GeoMaps.ConfigMap.ZoomMap)
//////            });


//////            if (boolSetMarker)
//////                GeoMaps.Markers.Markers.SetMarker(latitud, longitud);
//////        },
//////        SetMapByAddress: function (address, boolSetMap, boolSetMarker) {
//////            var geocoder = new google.maps.Geocoder();
//////            geocoder.geocode({ 'address': address }, function (results, status) {
//////                if (status == google.maps.GeocoderStatus.OK) {
//////                    var coordenadas = results[0].geometry.location;
//////                    lat = coordenadas.lat();
//////                    lng = coordenadas.lng();
//////                    if (Boolean(boolSetMap)) {
//////                        GeoMaps.Maps.SetSimpleMap(lat, lng, boolSetMarker);
//////                    }
//////                    document.getElementById('InptNmbrLatitud').value = lat;
//////                    document.getElementById('InptNmbrLongitud').value = lng;
//////                }
//////                else {
//////                    alert('No se obtuvieron las coordenadas, por favor verifica la dirección: ' + status);

//////                }
//////            });
//////        },
//////    },

//////    this.Markers = {
//////        Markers: {
//////            SetMarker: function (latitud, longitud) {
//////                //var marker = new google.maps.Marker({
//////                //    position: new google.maps.LatLng({ lat: latitud, lng: longitud }),
//////                //    map: map,
//////                //    path: MAP_PIN,
//////                //    fillColor: '#004ab1',
//////                //    map_icon_label: '<span class="map-icon map-icon-prospectoMoral"></span>',
//////                //    title: GeoMaps.Markers.Config.Title,
//////                //    //icon: GeoMaps.Markers.Config.IconUrl
//////                //});
//////                var marker = new Marker({
//////                    map: map,
//////                    position: new google.maps.LatLng({ lat: latitud, lng: longitud }),
//////                    icon: {
//////                        path: MAP_PIN,
//////                        fillColor: '#004ab1',
//////                        fillOpacity: 1,
//////                        strokeColor: '',
//////                        strokeWeight: 0
//////                    },
//////                    map_icon_label: '<span class="map-icon map-icon-prospectoMoral"></span>',
//////                    title: 'Ubicación Prospecto'
//////                });

//////            },
//////        },
//////        Config: {
//////            Title: '',
//////            IconUrl: '',
//////        },
//////    },

//////    this.ConfigMap = {
//////        ContainerMap: "",
//////        ContainerLat: "",
//////        ContainerLng: "",
//////        ZoomMap: 5,
//////    };

//////}).apply(GeoMaps);






$(window).load(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
        manualControls: 0,
        prevText: "anterior",
        nextText: "siguiente"
    });

    $('.flexslider').flexslider('pause')

    /* ---------------------------------------------------------------------- */
    /*	Fancy Box con Thumbnails
    /* ---------------------------------------------------------------------- */
    $('.fancybox-thumbs').fancybox({
        wrapCSS: 'fancybox-custom',
        autoPlay: false,
        // Changing previous gallery item
        prevEffect: 'elastic',
        prevSpeed: 250,
        prevEasing: 'swing',
        prevMethod: 'changeOut',
        // Changing next gallery item
        nextEffect: 'elastic',
        nextSpeed: 250,
        nextEasing: 'swing',
        nextMethod: 'changeIn',
        // Opening fancyBox
        openEffect: 'elastic',
        openSpeed: 150,
        openEasing: 'swing',
        openOpacity: true,
        openMethod: 'zoomIn',
        // Closing fancyBox
        closeEffect: 'elastic',
        closeSpeed: 150,
        closeEasing: 'swing',
        closeOpacity: true,
        closeMethod: 'zoomOut',
        closeBtn: true,
        arrows: true,
        nextClick: false,
        helpers: {
            title: {
                type: 'inside'
            },
            thumbs: {
                width: 50,
                height: 50
            }
        }
    });

    /* ---------------------------------------------------------------------- */
    /*	Aparece Productos y servicios, cuando no aplica la Oferta Integral
    /* ---------------------------------------------------------------------- */
    $('input[name="ofertaIntegral"]').change(function () {
        if ($('.switch-animate').hasClass('switch-on')) {
            $('.ofertaParticular').addClass('hidden');
        }
        else {
            $('.ofertaParticular').removeClass('hidden');
        }
    });

    /* ---------------------------------------------------------------------- */
    /*	Botones para más contactos
    /* ---------------------------------------------------------------------- */
    $("a.addContact").on("click", function () {
        $('.contacto2').removeClass('hidden');
    });
});

var arrayContactos;
var idUltimoContacto;
var isFirstViewContact = true;
var arrayArchivos = new Array();
var frmProspectos = {
    /********************************************Base*/
    Prospecto: function () {
        this.IdEmpresa = 0;
        this.id = 0;
        this.Cliente = "";
        this.Obra = "";
        this.idEstatusObra = "";
        this.campania = "";
        this.comentarios = "";
        this.numeroDeRegistro = "";
        this.idTipoProspecto = 0;
        this.idSubsegmento = 0;


        this.prdAdqr = ((typeof (subsegmentosArray) == "undefined") ? new Array() : subsegmentosArray);
        this.srvAdqr = ((typeof (serviciosArray) == "undefined") ? new Array() : serviciosArray);

        this.RazonSocial = "";
        this.Rfc = "";
        this.Telefono = 0;
        this.calle = "";
        this.Numero = "";
        this.Colonia = "";
        this.codigoPostal = 0;

        this.idPais = 0;
        this.idEstado = 0;
        this.idMunicipio = 0;

        this.Latitud = 0;
        this.Longitud = 0;
        this.ComentariosUbicacion = "";
        this.Status = 0;
        this.contactos = ((typeof (contactosArray) == "undefined") ? new Array() : contactosArray);

        this.imagen = "";
    },
    ProductoServicioProspecto: function () {
        this.idProspecto = 0;
        this.idTipoSorP = 0;
        this.idProducto = 0;
        this.idSubSegmento = 0;
        this.descProducto = "";
        this.cantidadvol = 0;
        this.unidadVol = 0;
    },
    ContactoProspecto: function () {
        this.idProspecto = 0;
        this.OrdenP = 0;
        this.IdContacto = 0;
        this.OrdenP = 0;
        this.nombre = "";
        this.appPaterno = "";
        this.appMaterno = "";
        this.Telefono = "";
        this.Extension = "";
        this.email = "";
        this.Cargo = "";
        this.comentarios = "";
    },
    ResponseValidateItem: function () {
        this.IsValid = true;
        this.HtmlErrors = "";
    },
    HtmlErrors: {
        HtmlErrorTabInfoGral: function (itemErrorObj) {
            var htmlError = '';
            htmlError += '<div class="form-group">';
            htmlError += '<label class="text-danger">';
            htmlError += '<i class="gi-warning-sign"></i> Información General: ' + itemErrorObj.ErrorField + ' ' + itemErrorObj.MsgError + ' ';
            htmlError += '</label>';
            htmlError += '</div>';
            return htmlError;
        },
        HtmlErrorTabContactos: function (itemErrorObj) {
            var htmlError = '';
            htmlError += '<div class="form-group">';
            htmlError += '<label class="text-danger">';
            htmlError += '<i class="gi-warning-sign"></i> Contactos: ' + itemErrorObj.ErrorField + ' ' + itemErrorObj.MsgError + ' ';
            htmlError += '</label>';
            htmlError += '</div>';
            return htmlError;
        },
        HtmlErrorArchivos: function (itemErrorObj) {
            var htmlError = '';
            htmlError += '<div class="form-group">';
            htmlError += '<label class="text-danger">';
            htmlError += '<i class="gi-warning-sign"></i> Archivos: ' + itemErrorObj.ErrorField + ' ' + itemErrorObj.MsgError + ' ';
            htmlError += '</label>';
            htmlError += '</div>';
            return htmlError;
        },
    },
    ItemError: function () {
        this.ErrorField = "";
        this.MsgError = "";
    },
    Archivo: function () {
        this.idDocumento = 0;
        this.idProspectp = 0;
        this.fillName = "";
        this.fillContent = "";
    },

    /********************************************Actualizacion*/
    UpdateProspecto: function () {

        var data;
        try {
            var prospecto = frmProspectos.GetValues();
            data = {
                prospecto: JSON.stringify(prospecto)
            };
        } catch (e) {

        }
        $.ajax({
            type: "GET",
            data: "",
            url: "/Prospecto/Edit",
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                frmProspectos.Archivos.AddArchivos(prospecto.id);
                window.location.href = '/Prospecto/AdmonProspecto/';
            },
            error: function (response) {
                window.location.href = '/Prospecto/AdmonProspecto/';
            }
        });
    },
    SetInformacion: function (prospecto) {
        //Información Grl
        var imagen = ((typeof (prospecto) != "undefined") ? prospecto.Imagen : '/Content/img/avatar/prospectoMoral.jpg');
        $("#Imagen").val(imagen);
        frmProspectos.LoadImage64();
        $("#InptTxtCliente").val(prospecto.NombreCliente);
        $("#InptTxtObra").val(prospecto.NombreObra);
        $('#SlctEstatusObra > option[value="' + prospecto.StatusObra + '"]').attr('selected', 'selected');
        $('#SlctSugSegmento  > option[value="' + prospecto.IdSubSegmento + '"]').attr('selected', 'selected').trigger('change');
        $('#SlctTipoProspecto  > option[value="' + prospecto.TipoProspecto + '"]').attr('selected', 'selected');
        //TODO: FALTA OFERTA INTEGRAL.
        $("#InptTxtCampana").val(prospecto.Campana);
        //Comentarios Obra o comentarios
        $("#InptTxtComentariosObra").val(prospecto.Comentarios);
        $('select').select2();

        //Productos servicios adquiridos.
        frmProspectos.SetOfertaIntegral(prospecto.Subsegmentos);
        //frmProspectos.SetProductosOfertaIntegral(prospecto.IdSubSegmento);
        frmProspectos.SetProductosOfertaIntegralssss(prospecto.IdSubSegmento, prospecto.Subsegmentos);
        frmProspectos.SetServiciosOfertaIntegral(prospecto.Servicios);
        frmProspectos.SetProductosAdquiridos(prospecto.Subsegmentos);
        frmProspectos.SetServiciosAdquiridos(prospecto.Servicios);
        $("#InptTxtRazonSocial").val(prospecto.RazonSocial);
        $("#InptTxtRFC").val(prospecto.Rfc);
        $("#InptTxtTelefono").val(prospecto.Telefono);
        $("#InptTxtCalle").val(prospecto.Calle);
        $("#InptNmbrNumero").val(prospecto.NumeroExterior);
        $("#InptTxtColonia").val(prospecto.Colonia);
        $("#InptNmbrCodigoPostal").val(prospecto.CodigoPostal);
        $('#SlctPais > option[value="' + prospecto.IdPais + '"]').attr('selected', 'selected').trigger('change');
        $('#SlctEstado > option[value="' + prospecto.IdEstado + '"]').attr('selected', 'selected').trigger('change');
        $('#SlctMunicipio > option[value="' + prospecto.IdMunicipio + '"]').attr('selected', 'selected').trigger('change');
        $("#InptNmbrLatitud").val(prospecto.Latitud);
        $("#InptNmbrLongitud").val(prospecto.Longitud);
        $("#InptTxtComentariosUbicacion").val(prospecto.ComentariosUbicacion);
        frmProspectos.SetMapa(prospecto.Latitud, prospecto.Longitud);
        $('select').select2();

        //Contactos
        frmProspectos.SetContactos(prospecto.Contactos);
    },
    SetOfertaIntegral: function (subSegmentosProductos) {
        $(function () {
            $(function () {
                if (typeof (subSegmentosProductos) != "undefined") {
                    if (subSegmentosProductos.length > 0) {
                        if ($('.switch-animate').hasClass('switch-on')) {
                            $(".switch-animate").removeClass('switch-on');
                            $(".switch-animate").addClass('switch-off');
                        }
                        $('.ofertaParticular').removeClass('hidden');
                    }
                    else {
                        $(".switch-animate").addClass('switch-off');
                    }
                }
            });
        });
    },
    SetProductosOfertaIntegral: function (idSubSegmento) {
        //Verifica si existen elementos para ese subsegmento.
        $(".Productos").each(function () { $(this).parent().parent().addClass('hide') });
        $("input[name=" + idSubSegmento + "]").each(function () {
            $(this).prop('checked', true);
            $(this).parent().parent().removeClass('hide');
        });
    },
    SetProductosOfertaIntegralssss: function (idSubSegmento, arrayProductos) {
        if (typeof (arrayProductos) != "undefined") {
            if (arrayProductos.length > 0) {
                var itemFound = false;
                for (var indexProducto = 0; indexProducto < arrayProductos.length; indexProducto++) {
                    itemFound = false;
                    $("input[name=" + idSubSegmento + "]").each(function () {
                        var currentIdProducto = $(this).attr('value');
                        if (parseInt(currentIdProducto) == parseInt(arrayProductos[indexProducto].IdProducto)) {
                            $(this).prop('checked', true);
                            itemFound = true;
                        }
                        if (itemFound)
                            return false;
                    });
                }
            }
        }
    },
    SetServiciosOfertaIntegral: function (arrayServicios) {
        if (typeof (arrayServicios) != "undefined") {
            if (arrayServicios.length > 0) {
                var itemFound = false;
                for (var indexServicio = 0; indexServicio < arrayServicios.length; indexServicio++) {
                    itemFound = false;
                    $("input[name='Servicios']").each(function () {
                        var currentIdServicio = $(this).attr('value');
                        if (parseInt(currentIdServicio) == parseInt(arrayServicios[indexServicio].IdProducto)) {
                            $(this).prop('checked', true);
                            itemFound = true;
                        }
                        if (itemFound)
                            return false;
                    });
                }
            }
        }
    },
    SetServiciosAdquiridos: function (servicios) {
        if (servicios.length > 0) {
            var htmlRow;
            for (var indexProducto = 0; indexProducto < servicios.length; indexProducto++) {
                htmlRow = '';
                htmlRow += '<tr>';
                htmlRow += "<td>" + servicios[indexProducto].DescripcionProducto + "</td>";
                htmlRow += "<td>" + servicios[indexProducto].CantidadVol + " " + servicios[indexProducto].UnidadVol + "</td>";
                htmlRow += '</tr>';
                $("#clienteServiciosActuales").append(htmlRow);
            }
        }
    },
    SetProductosAdquiridos: function (subSegmentosProductos) {
        if (subSegmentosProductos.length > 0) {
            var htmlRow;
            for (var indexProducto = 0; indexProducto < subSegmentosProductos.length; indexProducto++) {
                htmlRow = '';
                htmlRow += '<tr>';
                htmlRow += "<td>" + subSegmentosProductos[indexProducto].DescripcionProducto + "</td>";
                htmlRow += "<td>" + subSegmentosProductos[indexProducto].CantidadVol + " " + subSegmentosProductos[indexProducto].UnidadVol + "</td>";
                htmlRow += '</tr>';
                $("#clienteProductosActuales").append(htmlRow);
            }
        }
    },
    SetMapa: function (Latitud, Longitud) {
        //GeoMaps.ConfigMap.ContainerMap = "map-canvas";
        //GeoMaps.ConfigMap.ZoomMap = 13;
        //GeoMaps.Maps.SetSimpleMap(Latitud, Longitud, true);
        //console.log(Latitud, Longitud);
        SetMapa(Latitud, Longitud);
    },
    SetContactos: function (itemsArrayContactos) {

        if (typeof (itemsArrayContactos) != "undefined") {
            if (itemsArrayContactos.length > 0) {
                for (var indexContacto = 0; indexContacto < itemsArrayContactos.length; indexContacto++) {
                    frmProspectos.Contactos.AddContactoByItem(itemsArrayContactos[indexContacto]);
                }
            }
        }
    },
    /******************************************************/

    /********************************************Cátalogos*/
    Catalogos: {
        GetStatusObra: function () {
            $.ajax({
                url: "/Catalogo/GetStatusObra",
                dataType: "json",
                data: "",
                type: "GET",
                async: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    frmProspectos.CrearElementos(data, "SlctEstatusObra");
                },
                error: function () {
                    console.log("Ocurrio un error");
                }
            });
        },
        GetTipoProspecto: function () {
            $.ajax({
                url: "/Catalogo/GetTipoProspecto",
                dataType: "json",
                data: "",
                type: "GET",
                async: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    frmProspectos.CrearElementos(data, "SlctTipoProspecto");
                },
                error: function () {
                    console.log("Ocurrio un error");
                }
            });
        },
        GetSubSegmento: function () {
            $.ajax({
                url: "/Catalogo/GetSubSegmento",
                dataType: "json",
                data: "",
                type: "GET",
                async: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    frmProspectos.CrearElementos(data, "SlctSugSegmento");
                },
                error: function () {
                    console.log("Ocurrio un error");
                }
            });
        },
        GetPaises: function () {
            $.ajax({
                url: "/Catalogo/GetPaises",
                dataType: "json",
                type: "GET",
                contentType: "application/json; charset=utf-8",
                async: false,
                success: function (data) {
                    frmProspectos.CrearElementos(data, "SlctPais");
                },
                error: function () {
                    console.log("Ocurrio un error");
                }
            });
        },
        GetEstados: function (idPais) {
            if (parseInt(idPais) !== 0) {
                var datos = {
                    IdPais: idPais
                }
                $.ajax({
                    url: "/Catalogo/GetEstados",
                    dataType: "json",
                    data: datos,
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    async: false,
                    success: function (data) {
                        frmProspectos.CrearElementos(data, "SlctEstado");
                    },
                    error: function () {
                        console.log("Ocurrio un error");
                    }
                });
            } else {
                frmProspectos.CargarCombo('SlctEstado', '<option value="">-- Selecciona -- </option>', '-- Selecciona --');
                frmProspectos.CargarCombo("SlctMunicipio", '<option value="">-- Selecciona -- </option>', '-- Selecciona --');
            }
        },
        GetEstadosById: function (idPais, idEstado) {
            var isSuccess = false;

            $.ajax({
                url: "/Catalogo/GetEstados",
                dataType: "json",
                data: datos,
                type: "GET",
                contentType: "application/json; charset=utf-8",
                async: false,
                success: function (data) {
                    frmProspectos.CrearElementos(data, "SlctEstado");
                    isSuccess = true;
                },
                error: function () {
                    console.log("Ocurrio un error");
                    isSuccess = false;
                }
            });

            return isSuccess;
        },
        GetMunicipios: function (idEstado) {
            if (parseInt(idEstado) !== 0) {
                var datos = {
                    IdEstado: idEstado
                }
                $.ajax({
                    url: "/Catalogo/GetMunicipios",
                    dataType: "json",
                    data: datos,
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    async: false,
                    success: function (data) {
                        frmProspectos.CrearElementos(data, "SlctMunicipio");
                    },
                    error: function () {
                        console.log("Ocurrio un error");
                    }
                });
            } else {
                frmProspectos.CargarCombo("SlctMunicipio", "<option value=''>-- Selecciona --</option>", "-- Selecciona --");
            }
        },
        GetProductosServicios: function () {
            $.ajax({
                url: "/Prospecto/GetProductosServicios",
                dataType: "json",
                data: "",
                type: "GET",
                async: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    frmProspectos.CargarProductosServicios(data);
                },
                error: function () {
                    console.log("Ocurrio un error");
                }
            });
        }
    },

    /********************************************Información Gral*/
    InformacionGral: {
        ValidateInformacionGrl: function () {
            var htmlContactoErrors = '';
            var mainResponse = this.ValidateItems();

            return mainResponse;
        },
        ValidateItems: function () {
            var responseTabInformacionGrl = new frmProspectos.ResponseValidateItem();
            var htmlErrorTab = '';
            var auxRequiredFields = true;
            var auxAllEmpty = true;
            var auxAllFieldOk = true;
            var valor;
            var itemErrorObj;

            //*******************************************Información Gral CAMPOS REQUERIDOS

            //Nombre de cliente
            valor = '';
            valor = document.getElementById('InptTxtCliente').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,50}$/g)) {
                    if (auxRequiredFields) { auxRequiredFields = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "Nombre Cliente ";
                    itemErrorObj.MsgError = "solo permite caracteres alfanúmericos y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }
            else {
                if (auxRequiredFields) { auxRequiredFields = false; }
                itemErrorObj = new frmProspectos.ItemError();
                itemErrorObj.ErrorField = "Nombre Cliente ";
                itemErrorObj.MsgError = "no puede ser vacio";
                htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
            }

            //Nombre de Obra
            valor = '';
            valor = document.getElementById('InptTxtObra').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,50}$/g)) {
                    if (auxRequiredFields) { auxRequiredFields = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "Obra ";
                    itemErrorObj.MsgError = "solo permite caracteres alfanúmericos y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }
            else {
                if (auxRequiredFields) { auxRequiredFields = false; }
                itemErrorObj = new frmProspectos.ItemError();
                itemErrorObj.ErrorField = "Obra ";
                itemErrorObj.MsgError = "no puede ser vacio";
                htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
            }

            //Estatus de Obra
            valor = '';
            valor = parseInt((typeof ($("#SlctEstatusObra option:selected").val()) == "undefined") ? 0 : $("#SlctEstatusObra option:selected").val());
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (TelstockBase.Security.Regex.Expressions.Common.Numbers(valor)) {
                    if (!valor > 0) {
                        if (auxRequiredFields) { auxRequiredFields = false; }
                        itemErrorObj = new frmProspectos.ItemError();
                        itemErrorObj.ErrorField = "";
                        itemErrorObj.MsgError = "Selecciona un Estatus de Obra";
                        htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                    }
                }
                else {
                    if (auxRequiredFields) { auxRequiredFields = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "";
                    itemErrorObj.MsgError = "Selecciona un Estatus de Obra";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }
            else {
                if (auxRequiredFields) { auxRequiredFields = false; }
                itemErrorObj = new frmProspectos.ItemError();
                itemErrorObj.ErrorField = "";
                itemErrorObj.MsgError = "Selecciona un Estatus de Obra";
                htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
            }

            //SubSegmento
            valor = '';
            valor = parseInt((typeof ($("#SlctSugSegmento option:selected").val()) == "undefined") ? 0 : $("#SlctSugSegmento option:selected").val());
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (TelstockBase.Security.Regex.Expressions.Common.Numbers(valor)) {
                    if (valor > 0) {
                        //VERIFICAR SI EXISTEN PRODUCTOS ASOCIADOS A ESTE SUBSEGMENTO SI TIENE CHEKADO EL CHECK DE OFERTA INTEGRAL
                        //VALIDAR QUE POR LO MENOS SE SELECCIONE UNO
                        if (!$("#CheckOfertaIntegral").is(":checked")) {
                            if (!this.ValidateSubSegmentosSelected(valor)) {
                                if (auxRequiredFields) {
                                    auxRequiredFields = false;
                                }
                                itemErrorObj = new frmProspectos.ItemError();
                                itemErrorObj.ErrorField = "SubSegmento ";
                                itemErrorObj.MsgError = "selecciona almenos un producto del SubSegmento " + $("#SlctSugSegmento option:selected").text() + "";
                                htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                            }
                        }
                    }
                    else {
                        if (auxRequiredFields) { auxRequiredFields = false; }
                        itemErrorObj = new frmProspectos.ItemError();
                        itemErrorObj.ErrorField = "";
                        itemErrorObj.MsgError = "Selecciona un SubSegmento";
                        htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                    }
                }
                else {
                    if (auxRequiredFields) { auxRequiredFields = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "";
                    itemErrorObj.MsgError = "Selecciona un SubSegmento";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }
            else {
                if (auxRequiredFields) { auxRequiredFields = false; }
                itemErrorObj = new frmProspectos.ItemError();
                itemErrorObj.ErrorField = "";
                itemErrorObj.MsgError = "Selecciona un SubSegmento";
                htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
            }

            //Tipo Prospecto
            valor = '';
            valor = parseInt((typeof ($("#SlctTipoProspecto option:selected").val()) == "undefined") ? 0 : $("#SlctTipoProspecto option:selected").val());
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (TelstockBase.Security.Regex.Expressions.Common.Numbers(valor)) {
                    if (!valor > 0) {
                        if (auxRequiredFields) { auxRequiredFields = false; }
                        itemErrorObj = new frmProspectos.ItemError();
                        itemErrorObj.ErrorField = "";
                        itemErrorObj.MsgError = "Selecciona un Tipo de Prospecto";
                        htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                    }
                }
                else {
                    if (auxRequiredFields) { auxRequiredFields = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "";
                    itemErrorObj.MsgError = "Selecciona un Tipo de Prospecto";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }
            else {
                if (auxRequiredFields) { auxRequiredFields = false; }
                itemErrorObj = new frmProspectos.ItemError();
                itemErrorObj.ErrorField = "";
                itemErrorObj.MsgError = "Selecciona un Tipo de Prospecto";
                htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
            }

            //Campana
            valor = '';
            valor = document.getElementById('InptTxtCampana').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,50}$/g)) {
                    if (auxRequiredFields) { auxRequiredFields = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "Camapaña ";
                    itemErrorObj.MsgError = "solo permite caracteres alfanúmericos y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }
            else {
                if (auxRequiredFields) { auxRequiredFields = false; }
                itemErrorObj = new frmProspectos.ItemError();
                itemErrorObj.ErrorField = "Campaña ";
                itemErrorObj.MsgError = "no puede ser vacio";
                htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
            }

            //Comentarios Obra
            valor = '';
            valor = document.getElementById('InptTxtComentariosObra').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,150}$/g)) {
                    if (auxRequiredFields) { auxRequiredFields = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "Comentarios Obra ";
                    itemErrorObj.MsgError = "solo permite caracteres alfanúmericos y/o la longitud del texto no debe superar los 150 caracteres.";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }
            else {
                if (auxRequiredFields) { auxRequiredFields = false; }
                itemErrorObj = new frmProspectos.ItemError();
                itemErrorObj.ErrorField = "Comentarios Obra ";
                itemErrorObj.MsgError = "no puede ser vacio";
                htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
            }

            //Razón Social [Opcionales List]
            valor = '';
            valor = document.getElementById('InptTxtRazonSocial').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9.\s]{1,50}$/g)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "Razón Social ";
                    itemErrorObj.MsgError = "solo permite caracteres alfanúmericos con puntos (.) y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Rfc
            valor = '';
            valor = document.getElementById('InptTxtRFC').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Mex.RFC(valor)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "RFC ";
                    itemErrorObj.MsgError = "No es un valor válido";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Teléfono
            valor = '';
            valor = document.getElementById('InptTxtTelefono').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.NumbersLength(valor, 8, 10)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "Teléfono ";
                    itemErrorObj.MsgError = "solo permite caracteres númericos entre 8 y 10 digítos";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }


            //Calle
            valor = '';
            valor = document.getElementById('InptTxtCalle').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9.\s]{1,50}$/g)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "Calle ";
                    itemErrorObj.MsgError = "solo permite caracteres alfanúmericos con punto(.) y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Numero de calle
            valor = '';
            valor = document.getElementById('InptNmbrNumero').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.NumbersLength(valor, 1, 6)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "Número ";
                    itemErrorObj.MsgError = "solo permite caracteres númericos no mayor a 6 dígitos";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Colonia
            valor = '';
            valor = document.getElementById('InptTxtColonia').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9.\s]{1,50}$/g)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "Colonia ";
                    itemErrorObj.MsgError = "solo permite caracteres alfanúmericos con punto(.) y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Código postal
            valor = '';
            valor = document.getElementById('InptNmbrCodigoPostal').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Mex.ZipCode(valor)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "Código Postal ";
                    itemErrorObj.MsgError = "solo permite caracteres númericos no mayor a 5 dígitos";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Pais
            valor = '';
            valor = parseInt((typeof ($("#SlctPais option:selected").val()) == "undefined") ? 0 : $("#SlctPais option:selected").val());
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (TelstockBase.Security.Regex.Expressions.Common.Numbers(valor)) {
                    if (!valor > 0) {
                        if (auxAllFieldOk) { auxAllFieldOk = false; }
                        if (auxAllEmpty) { auxAllEmpty = false; }
                        itemErrorObj = new frmProspectos.ItemError();
                        itemErrorObj.ErrorField = "";
                        itemErrorObj.MsgError = "Selecciona País";
                        htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                    }
                }
                else {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "";
                    itemErrorObj.MsgError = "Selecciona País";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Estado
            valor = '';
            valor = parseInt((typeof ($("#SlctEstado option:selected").val()) == "undefined") ? 0 : $("#SlctEstado option:selected").val());
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (TelstockBase.Security.Regex.Expressions.Common.Numbers(valor)) {
                    if (!valor > 0) {
                        if (auxAllFieldOk) { auxAllFieldOk = false; }
                        if (auxAllEmpty) { auxAllEmpty = false; }
                        itemErrorObj = new frmProspectos.ItemError();
                        itemErrorObj.ErrorField = "";
                        itemErrorObj.MsgError = "Selecciona Estado";
                        htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                    }
                }
                else {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "";
                    itemErrorObj.MsgError = "Selecciona Estado";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Municipio
            valor = '';
            valor = parseInt((typeof ($("#SlctMunicipio option:selected").val()) == "undefined") ? 0 : $("#SlctMunicipio option:selected").val());
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (TelstockBase.Security.Regex.Expressions.Common.Numbers(valor)) {
                    if (!valor > 0) {
                        if (auxAllFieldOk) { auxAllFieldOk = false; }
                        if (auxAllEmpty) { auxAllEmpty = false; }
                        itemErrorObj = new frmProspectos.ItemError();
                        itemErrorObj.ErrorField = "";
                        itemErrorObj.MsgError = "Selecciona Municipio";
                        htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                    }
                }
                else {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "";
                    itemErrorObj.MsgError = "Selecciona Municipio";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Latitud
            valor = '';
            valor = document.getElementById('InptNmbrLatitud').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.DecimalNumbers(valor)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "Latitud ";
                    itemErrorObj.MsgError = "no son coordenadas válidas";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Longitud
            valor = '';
            valor = document.getElementById('InptNmbrLongitud').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.DecimalNumbers(valor)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "Longitud ";
                    itemErrorObj.MsgError = "no son coordenadas válidas";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Comentarios Ubicación
            valor = '';
            valor = document.getElementById('InptTxtComentariosUbicacion').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9.\s]{1,150}$/g)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = "Comentarios Ubicación ";
                    itemErrorObj.MsgError = "solo permite caracteres alfanúmericos con punto(.) y/o la longitud del texto no debe superar los 150 caracteres.";
                    htmlErrorTab += frmProspectos.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }


            if (auxRequiredFields) {
                if (auxAllEmpty) {
                    //Los campos requeridos son correctos y los no requeridos estan vácios.
                    responseTabInformacionGrl.IsValid = true;
                    responseTabInformacionGrl.HtmlErrors = htmlErrorTab;
                }
                else {
                    //Si alguno de los campos no requeridos, contienen valor
                    if (auxAllFieldOk) {
                        //Toda la información de los campos no requeridos esta ok
                        //Los campos requeridos son correctos y los no requeridos estan vácios.
                        responseTabInformacionGrl.IsValid = true;
                        responseTabInformacionGrl.HtmlErrors = htmlErrorTab;
                    }
                    else {
                        //Si los campos no requeridos tienen semántica incorrecta
                        //Los campos requeridos son correctos y los no requeridos estan vácios.
                        responseTabInformacionGrl.IsValid = false;
                        responseTabInformacionGrl.HtmlErrors = htmlErrorTab;
                    }
                }
            }
            else {
                //Atrapa todos los errores si los campos, requeridos o no, no son validos
                responseTabInformacionGrl.IsValid = false;
                responseTabInformacionGrl.HtmlErrors = htmlErrorTab;
            }


            return responseTabInformacionGrl;
        },
        ValidateSubSegmentosSelected: function (idSubSegmento) {
            var isValid = false;
            $("input[name=" + idSubSegmento + "]").each(function () {
                if ($(this).is(":checked")) {
                    isValid = true;
                    return false;
                }
            });
            return isValid;
        }
    },
    /******************************************************/

    /********************************************Contactos*/
    Contactos: {
        AddContacto: function () {
            var contacto = this.CreateContacto();

            var htmlContacto = '';
            htmlContacto += '<label class="btn bg-contacto">';
            htmlContacto += '<input id=' + contacto.IdContacto + '" type="radio" name="contactos" checked="true" onchange="frmProspectos.Contactos.SwitchContacto(this.id)">';
            htmlContacto += '<i class="fa fa-check"></i>';
            htmlContacto += '</label>';

            $("#DivContactos").append(htmlContacto);
            $("#DivFormContacto").removeClass('hide');
        },
        CreateContacto: function () {
            if (typeof (arrayContactos) === "undefined") {
                //Primera vez
                arrayContactos = new Array();
                var contacto = new this.Contacto();
                contacto.IdContacto = 1;
                contacto.IsSelected = true;
                arrayContactos.push(contacto);
                idUltimoContacto = contacto.IdContacto;
            }
            else {
                var lastContacto = this.GetLastIdContacto();
                var contacto = new this.Contacto();
                contacto.IdContacto = lastContacto.IdContacto + 1;
                //Actualiza la información del contacto actual.
                if (typeof (idUltimoContacto) != "undefined") {
                    this.SetInformacionContacto(this.GetContactoById(idUltimoContacto));
                    idUltimoContacto = contacto.IdContacto;
                }
                frmProspectos.Contactos.ClearFormContacto();
                arrayContactos.push(contacto);
            }
            return contacto;
        },
        SwitchContacto: function (currentId) {
            var contacto = this.GetContactoById(currentId);

            //Toma el ultimo id consultado para agregarlo.
            if (typeof (idUltimoContacto) != "undefined") {
                this.SetInformacionContacto(this.GetContactoById(idUltimoContacto));
                idUltimoContacto = currentId;
            }
            $("#DivFormContacto").removeClass('hide');
            this.LoadContacto(contacto);
        },
        LoadContacto: function (contacto) {
            document.getElementById("InptTxtNombreContactoPrincipal").value = contacto.nombre;
            document.getElementById("InptTxtPrimerApellidoContactoPrincipal").value = contacto.appPaterno;
            document.getElementById("InptTxtSegundoApellidoContactoPrincipal").value = contacto.appMaterno;
            document.getElementById("InptTxtCargo").value = contacto.Cargo;
            document.getElementById("InptNmbrTelefonoContactoPrincipal").value = contacto.Telefono;
            document.getElementById("InptNmbrExtension").value = contacto.Extension;
            document.getElementById("InptMailEmail").value = contacto.email;
            document.getElementById("InptTxtComentariosContactoPrincipal").value = contacto.comentarios;
        },
        SetInformacionContacto: function (contacto) {
            if (!isFirstViewContact) {
                contacto.nombre = document.getElementById("InptTxtNombreContactoPrincipal").value;
                contacto.appPaterno = document.getElementById("InptTxtPrimerApellidoContactoPrincipal").value;
                contacto.appMaterno = document.getElementById("InptTxtSegundoApellidoContactoPrincipal").value;
                contacto.Cargo = document.getElementById("InptTxtCargo").value;
                contacto.Telefono = document.getElementById("InptNmbrTelefonoContactoPrincipal").value;
                contacto.Extension = document.getElementById("InptNmbrExtension").value;
                contacto.email = document.getElementById("InptMailEmail").value;
                contacto.comentarios = document.getElementById("InptTxtComentariosContactoPrincipal").value;
                contacto.IsSelected = true;
            }
        },
        ClearFormContacto: function () {
            document.getElementById("InptTxtNombreContactoPrincipal").value = "";
            document.getElementById("InptTxtPrimerApellidoContactoPrincipal").value = "";
            document.getElementById("InptTxtSegundoApellidoContactoPrincipal").value = "";
            document.getElementById("InptTxtCargo").value = "";
            document.getElementById("InptNmbrTelefonoContactoPrincipal").value = "";
            document.getElementById("InptNmbrExtension").value = "";
            document.getElementById("InptMailEmail").value = "";
            document.getElementById("InptTxtComentariosContactoPrincipal").value = "";
        },
        GetLastIdContacto: function () {
            arrayContactos.sort(function (a, b) { return a - b })[arrayContactos.length - 1]
            return arrayContactos.sort(function (a, b) { return a - b })[arrayContactos.length - 1];
        },
        GetContactoById: function (idCurrentContacto) {
            for (var indexContacto = 0; indexContacto < arrayContactos.length; indexContacto++) {
                if (parseInt(arrayContactos[indexContacto].IdContacto) == parseInt(idCurrentContacto)) {
                    return arrayContactos[indexContacto];
                }
            }
        },
        ValidateContactos: function () {
            var htmlContactoErrors = '';
            var mainResponse = new this.ResponseValidateContacto();

            if (typeof (arrayContactos) != "undefined") {
                for (var indexContacto = 0; indexContacto < arrayContactos.length; indexContacto++) {
                    var responseItem = this.ValidateItem(arrayContactos[indexContacto]);
                    if (!responseItem.IsValid) {
                        if (mainResponse.IsValid) {
                            mainResponse.IsValid = false;
                        }
                        mainResponse.HtmlErrors += responseItem.HtmlErrors;
                    }
                }
            }
            return mainResponse;
        },
        ValidateItem: function (itemContacto) {
            var htmlContacto = '';
            var auxAllEmpty = true;
            var isValid = true;
            var itemErrorObj;
            var responseValidateItem = new this.ResponseValidateContacto();

            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(itemContacto.nombre)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(itemContacto.nombre, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,50}$/g)) {
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = " Contacto # " + itemContacto.IdContacto;
                    itemErrorObj.MsgError = "Nombre solo permite caracteres alfanúmericos y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlContacto += frmProspectos.HtmlErrors.HtmlErrorTabContactos(itemErrorObj);

                    if (isValid) {
                        isValid = false;
                    }
                }
                auxAllEmpty = false;
            }

            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(itemContacto.appPaterno)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(itemContacto.appPaterno, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,50}$/g)) {
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = " Contacto # " + itemContacto.IdContacto;
                    itemErrorObj.MsgError = "Apellido Paterno solo permite caracteres alfanúmericos y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlContacto += frmProspectos.HtmlErrors.HtmlErrorTabContactos(itemErrorObj);

                    if (isValid) {
                        isValid = false;
                    }
                }
                auxAllEmpty = false;
            }

            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(itemContacto.appMaterno)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(itemContacto.appMaterno, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,50}$/g)) {
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = " Contacto # " + itemContacto.IdContacto;
                    itemErrorObj.MsgError = "Apellido Materno solo permite caracteres alfanúmericos y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlContacto += frmProspectos.HtmlErrors.HtmlErrorTabContactos(itemErrorObj);
                    if (isValid) {
                        isValid = false;
                    }
                }
                auxAllEmpty = false;
            }

            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(itemContacto.Cargo)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(itemContacto.Cargo, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,50}$/g)) {
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = " Contacto # " + itemContacto.IdContacto;
                    itemErrorObj.MsgError = "Cargo solo permite caracteres alfanúmericos y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlContacto += frmProspectos.HtmlErrors.HtmlErrorTabContactos(itemErrorObj);

                    if (isValid) {
                        isValid = false;
                    }
                }
                auxAllEmpty = false;
            }

            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(itemContacto.Telefono)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.NumbersLength(itemContacto.Telefono, 8, 10)) {
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = " Contacto # " + itemContacto.IdContacto;
                    itemErrorObj.MsgError = "Teléfono solo permite caracteres númericos entre 8 y 10 digítos";
                    htmlContacto += frmProspectos.HtmlErrors.HtmlErrorTabContactos(itemErrorObj);
                    if (isValid) {
                        isValid = false;
                    }
                }
                auxAllEmpty = false;
            }

            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(itemContacto.Extension)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.NumbersLength(itemContacto.Extension, 1, 10)) {
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = " Contacto # " + itemContacto.IdContacto;
                    itemErrorObj.MsgError = " N.Extensión solo permite caracteres númericos entre 1 y 10 digítos";
                    htmlContacto += frmProspectos.HtmlErrors.HtmlErrorTabContactos(itemErrorObj);
                    if (isValid) {
                        isValid = false;
                    }
                }
                auxAllEmpty = false;
            }

            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(itemContacto.email)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.Email(itemContacto.email)) {
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = " Contacto # " + itemContacto.IdContacto;
                    itemErrorObj.MsgError = " E-mail no es una cuenta de Correo Eléctronico válida";
                    htmlContacto += frmProspectos.HtmlErrors.HtmlErrorTabContactos(itemErrorObj);
                    if (isValid) {
                        isValid = false;
                    }
                }
                auxAllEmpty = false;
            }

            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(itemContacto.comentarios)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(itemContacto.comentarios, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,150}$/g)) {
                    itemErrorObj = new frmProspectos.ItemError();
                    itemErrorObj.ErrorField = " Contacto # " + itemContacto.IdContacto;
                    itemErrorObj.MsgError = " Comentarios solo permite caracteres alfanúmericos y/o la longitud del texto no debe superar los 150 caracteres.";
                    htmlContacto += frmProspectos.HtmlErrors.HtmlErrorTabContactos(itemErrorObj);
                    if (isValid) {
                        isValid = false;
                    }
                }
                auxAllEmpty = false;
            }

            //Si existe un elemento en blanco
            if (auxAllEmpty) {
                itemErrorObj = new frmProspectos.ItemError();
                //itemErrorObj.ErrorField = " Contacto # " + itemContacto.IdContacto;
                //itemErrorObj.MsgError = " debe contener información almenos en alguno de sus campos";
                itemErrorObj.ErrorField = " ";
                itemErrorObj.MsgError = " Todos los contactos agregados o existentes deben contener información almenos en alguno de sus campos.";
                htmlContacto += frmProspectos.HtmlErrors.HtmlErrorTabContactos(itemErrorObj);
                if (isValid) {
                    isValid = false;
                }
            }

            responseValidateItem.IsValid = isValid;
            responseValidateItem.HtmlErrors = htmlContacto;

            return responseValidateItem;
        },
        GeHtmlError: function (stringError) {
            var errorHtml = '';
            errorHtml += '<div class="form-group">';
            errorHtml += '<label class="text-danger">';
            errorHtml += '<i class="gi-warning-sign"></i> ' + stringError + '';
            errorHtml += '</label>';
            errorHtml += '</div>';
            return errorHtml;
        },
        SetInformacionBlur: function (control) {
            if (typeof (idUltimoContacto) != "undefined") {
                var contacto = this.GetContactoById(idUltimoContacto);
                switch (String(control.id)) {
                    case "InptTxtNombreContactoPrincipal":
                        contacto.nombre = control.value;
                        break;
                    case "InptTxtPrimerApellidoContactoPrincipal":
                        contacto.appPaterno = control.value;
                        break;
                    case "InptTxtSegundoApellidoContactoPrincipal":
                        contacto.appMaterno = control.value;
                        break;
                    case "InptTxtCargo":
                        contacto.Cargo = control.value;
                        break;
                    case "InptNmbrTelefonoContactoPrincipal":
                        contacto.Telefono = control.value;
                        break;
                    case "InptNmbrExtension":
                        contacto.Extension = control.value;
                        break;
                    case "InptMailEmail":
                        contacto.email = control.value;
                        break;
                    case "InptTxtComentariosContactoPrincipal":
                        contacto.comentarios = control.value;
                        break;
                    default:
                        break;

                }
                if (isFirstViewContact) {
                    isFirstViewContact = false;
                }
            }
        },
        Contacto: function () {
            this.IdContacto = 0;
            this.idProspecto = 0;
            this.nombre = "";
            this.appPaterno = "";
            this.appMaterno = "";
            this.Telefono = "";
            this.Extension = "";
            this.email = "";
            this.Cargo = "";
            this.comentarios = "";
            this.IsSelected = false;
        },
        ResponseValidateContacto: function () {
            this.IsValid = true;
            this.HtmlErrors = "";
        },

        AddContactoByItem: function (itemContacto) {
            this.CreateContactoByItem(itemContacto);
            var htmlContacto = '';
            htmlContacto += '<label class="btn bg-contacto">';
            htmlContacto += '<input id=' + itemContacto.IdContacto + '" type="radio" name="contactos" onchange="frmProspectos.Contactos.SwitchContacto(this.id)">';
            htmlContacto += '<i class="fa fa-check"></i>';
            htmlContacto += '</label>';
            $("#DivContactos").append(htmlContacto);
        },
        CreateContactoByItem: function (itemContacto) {
            var contacto;

            if (typeof (arrayContactos) === "undefined") {
                //Primera vez
                arrayContactos = new Array();
                contacto = new this.Contacto();
                contacto.IdContacto = itemContacto.IdContacto;
                contacto.idProspecto = itemContacto.IdProspecto;;
                contacto.OrdenP = itemContacto.OrdenP;
                contacto.nombre = itemContacto.Nombre;
                contacto.appPaterno = itemContacto.PrimerApellido;
                contacto.appMaterno = itemContacto.SegundoApellido;
                contacto.Telefono = itemContacto.Telefono;
                contacto.Extension = itemContacto.Extension;
                contacto.email = itemContacto.Email;
                contacto.Cargo = itemContacto.Cargo;
                contacto.comentarios = itemContacto.Comentarios;
            }
            else {
                contacto = new this.Contacto();
                contacto.IdContacto = itemContacto.IdContacto;
                contacto.idProspecto = itemContacto.IdProspecto;;
                contacto.OrdenP = itemContacto.OrdenP;
                contacto.nombre = itemContacto.Nombre;
                contacto.appPaterno = itemContacto.PrimerApellido;
                contacto.appMaterno = itemContacto.SegundoApellido;
                contacto.Telefono = itemContacto.Telefono;
                contacto.Extension = itemContacto.Extension;
                contacto.email = itemContacto.Email;
                contacto.Cargo = itemContacto.Cargo;
                contacto.comentarios = itemContacto.Comentarios;
            }
            idUltimoContacto = contacto.IdContacto;
            arrayContactos.push(contacto);
        },
    },
    /******************************************************/

    /********************************************Archivos*/
    Archivos: {
        AddArchivos: function (idProspecto) {
            var idProspecto = idProspecto;
            var documentName = "";
            var filesSelected = document.getElementById("InptFileArc").files;
            if (filesSelected.length > 0) {
                for (var indexFile = 0; indexFile <= filesSelected.length - 1; indexFile++) {
                    documentName = '';
                    documentName = filesSelected[indexFile].name;
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(filesSelected[indexFile])
                    fileReader.onload = function (fileLoadedEvent) {
                        $.ajax({
                            type: "POST",
                            data: JSON.stringify({ idDocumento: 0, idProspecto: idProspecto, fileName: documentName, fileContent: fileLoadedEvent.target.result }),
                            url: "/Prospecto/AddFile",
                            dataType: 'json',
                            async: false,
                            contentType: "application/json; charset=utf-8",
                            success: function (response) {
                                console.log("OkDocumento", response);
                            },
                            error: function (response) {
                                console.log("Error documento>>", response);
                            }
                        });
                    };
                }
            }
        },
        GetArchivos: function () {
            var id = document.getElementById("IdPros").value;
            var data = { id: id };
            $.ajax({
                url: "/Prospecto/GetFilesProspecto",
                //url: "http://192.168.69.31/api/Documento?Prospecto=3",
                dataType: "json",
                data: data,
                type: "GET",
                async: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    console.log(data);
                    //if (typeof (data) != "undefined") {
                    //    frmProspectos.Archivos.SetArchivos(data);
                    //}
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR);
                    //console.log(textStatus);
                    //console.log(errorThrown);
                }
            });
        },
        SetArchivos: function (dataFiles) {
            $("#listaArchivosProspecto").html('');
            if (dataFiles.length > 0) {
                for (var indexFile = 0; indexFile < dataFiles.length; indexFile++) {
                    var archivo = new frmProspectos.Archivo();
                    archivo.idProspectp = dataFiles[indexFile].IdProspecto;
                    archivo.idDocumento = dataFiles[indexFile].IdDocumento;
                    archivo.fillName = dataFiles[indexFile].FileName;
                    $("#listaArchivosProspecto").append(frmProspectos.Archivos.GetHtmlArchivo(archivo));
                }
            }
        },
        GetHtmlArchivo: function (objFile) {
            var htmlArchivo = '';
            htmlArchivo += '<li>';
            htmlArchivo += '<div class="thumbnail">';
            htmlArchivo += '<a id="File' + objFile.idDocumento + '" class="fancybox-thumbs" data-fancybox-group="thumb" href="img/avatar/avatarHombre.png" title="' + objFile.fillName + '">';
            // htmlArchivo += '<img id="' + objFile.idDocumento + '" src="' + this.GetImageTypeFile(objFile.fillName) + '" onclick="frmProspectos.Archivos.GetArchivosById(this.id)">';
            htmlArchivo += '<img id="' + objFile.idDocumento + '" src="' + this.GetImageTypeFile(objFile.fillName) + '">';
            htmlArchivo += '</a>';
            htmlArchivo += '</div>';
            htmlArchivo += '<p>' + objFile.fillName + '</p>';
            htmlArchivo += '</li>';

            return htmlArchivo;
        },
        GetImageTypeFile: function (fileName) {
            var urlTypeImage = '/Content/img/avatar/avatarHombre.png';
            if (typeof (fileName) != "undefined" && fileName != "") {
                var extension = fileName.split(".")[1].toLowerCase();
                if (typeof (extension) != "undefined") {
                    switch (extension) {
                        case "pdf":
                            urlTypeImage = "/Content/img/avatar/prospectoMoral.png";
                            break;
                        case "png":
                            urlTypeImage = "/Content/img/avatar/prospectoMoral.png";
                            break;
                        case "jpeg":
                            urlTypeImage = "/Content/img/avatar/prospectoMoral.png";
                            break;
                        default:
                            urlTypeImage = "/Content/img/avatar/prospectoMoral.png";
                    }
                }
            }
            return urlTypeImage;
        },
        GetArchivosById: function (idArchivo) {
            var data = { id: idArchivo };
            $.ajax({
                url: "/Prospecto/GetFileContent",
                dataType: "json",
                data: data,
                type: "GET",
                async: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    frmProspectos.Archivos.ExportarArchivos(data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR);
                    console.log(textStatus);
                    console.log(errorThrown);
                }
            });
        },
        ExportarArchivos: function (objDataArchivo) {
            if (typeof (objDataArchivo) != "undefined") {

                function GetContentType(objDataArchivo) {
                    var mimeContentType = "";
                    var fileNameExtension = objDataArchivo.FileName.split(".")[1].toLowerCase();
                    if (typeof (fileNameExtension) != "undefined") {
                        switch (fileNameExtension) {
                            case "pdf":
                                mimeContentType = "application/pdf";
                                break;
                            case "png":
                                mimeContentType = "image/png";
                                break;
                            case "jpeg":
                                mimeContentType = "image/jpeg";
                                break;
                            case "jpg":
                                mimeContentType = "image/jpg";
                                break;
                            default:
                                mimeContentType = "";
                        }
                    }
                    return mimeContentType;
                }
                function b64toBlob(b64Data, contentType, sliceSize) {
                    contentType = contentType || '';
                    sliceSize = sliceSize || 512;

                    var byteCharacters = atob(b64Data);
                    var byteArrays = [];

                    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                        var slice = byteCharacters.slice(offset, offset + sliceSize);
                        var byteNumbers = new Array(slice.length);
                        for (var i = 0; i < slice.length; i++) {
                            byteNumbers[i] = slice.charCodeAt(i);
                        }

                        var byteArray = new Uint8Array(byteNumbers);

                        byteArrays.push(byteArray);
                    }

                    var blob = new Blob(byteArrays, { type: contentType });
                    return blob;
                }

                var blob = b64toBlob(objDataArchivo.FileContent, GetContentType(objDataArchivo));
                var blobUrl = URL.createObjectURL(blob);
                window.location = blobUrl;

            }
        },
        ValidateArchivos: function () {

            var htmlArchivoErrors = '';
            var mainResponse = new frmProspectos.ResponseValidateItem();
            var maxLentgh;
            var isValid = true;
            var itemErrorObj;
            var existeErrorEnArchivo = false;
            var archivo = document.getElementById('InptFileArc');

            if (archivo != null) {
                if (parseInt(archivo.files.length) > parseInt(0)) {
                    for (var indexArchivo = 0; indexArchivo < archivo.files.length; indexArchivo++) {
                        if (archivo.files[0].name.toLowerCase().match(/\.(pdf)|(Jpej)|(png)|(jpg)$/)) {
                            /*Peso 1 mb valor expresado en Bytes 1>-mb1242880>5mb->5242880*/
                            if (parseInt(archivo.files[0].size) <= parseInt(1242880)) {
                                isValid = true;
                            } else if (parseInt(archivo.files[0].size) > parseInt(1)) {
                                itemErrorObj = new frmProspectos.ItemError();
                                itemErrorObj.ErrorField = " Archivo " + archivo.files[0].name;
                                itemErrorObj.MsgError = "Supera el límite máximo de carga, la longitud no debe ser mayor a 1 MB";
                                htmlArchivoErrors += frmProspectos.HtmlErrors.HtmlErrorArchivos(itemErrorObj);
                                if (isValid) {
                                    isValid = false;
                                }
                            }
                        }
                        else {
                            itemErrorObj = new frmProspectos.ItemError();
                            itemErrorObj.ErrorField = " Archivo " + archivo.files[0].name;
                            itemErrorObj.MsgError = "Es un tipo de archivo inválido, Solo se permiten archivos con las siguientes extensiones [.pdf, .png, .jpej]";
                            htmlArchivoErrors += frmProspectos.HtmlErrors.HtmlErrorArchivos(itemErrorObj);
                            if (isValid) {
                                isValid = false;
                            }
                        }
                    }
                }
            }

            if (isValid) {
                mainResponse.IsValid = true;
                mainResponse.HtmlErrors = htmlArchivoErrors;
            }
            else {
                mainResponse.IsValid = false;
                mainResponse.HtmlErrors = htmlArchivoErrors;
            }
            return mainResponse;
        },
        VisualizarArchivos: function () {
            $(function () {
                $('.fancybox-thumbs').on("click", function (e) {
                    e.preventDefault(); // avoids calling preview.php

                    var data = { id: this.id.split("File")[1] };
                    $.ajax({
                        url: "/Prospecto/GetFileContent",
                        dataType: "json",
                        data: data,
                        type: "GET",
                        cache: false,
                        async: false,
                        contentType: "application/pdf",
                        success: function (data) {
                            console.log(data.FileContent);
                            //frmProspectos.Archivos.ExportarArchivos(data);
                            $.fancybox(data.FileContent, {
                                // fancybox API options
                                fitToView: false,
                                width: 905,
                                height: 505,
                                autoSize: false,
                                closeClick: false,
                                openEffect: 'none',
                                closeEffect: 'none'
                            }); // fancybox
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.log(jqXHR);
                            console.log(textStatus);
                            console.log(errorThrown);
                        }
                    });






                    //$.ajax({
                    //    type: "POST",
                    //    cache: false,
                    //    url: this.href, // preview.php
                    //    data: $("#postp").serializeArray(), // all form fields
                    //    success: function (data) {
                    //        // on success, post (preview) returned data in fancybox
                    //        $.fancybox(data, {
                    //            // fancybox API options
                    //            fitToView: false,
                    //            width: 905,
                    //            height: 505,
                    //            autoSize: false,
                    //            closeClick: false,
                    //            openEffect: 'none',
                    //            closeEffect: 'none'
                    //        }); // fancybox
                    //    } // success
                    //}); // ajax
                }); // on
            });
        }
    },
    /******************************************************/

    /*********************************************UPDATE PROSPECTO*/
    ValidateForm: function () {
        var mainValidate = new frmProspectos.ResponseValidateItem();
        var valTabInformacionGrl = frmProspectos.InformacionGral.ValidateInformacionGrl();
        var valContactos = frmProspectos.Contactos.ValidateContactos();
        var valArchivos = frmProspectos.Archivos.ValidateArchivos();

        if (valTabInformacionGrl.IsValid && valContactos.IsValid && valArchivos.IsValid) {
            if (mainValidate.IsValid) {
                $("#Summary").html('');
                $("#Summary").addClass('hide');
            }
            mainValidate.IsValid = true;
            var prospecto = frmProspectos.GetValues();
            frmProspectos.UpdateProspecto(prospecto);
        }
        else {
            mainValidate.IsValid = false;
            mainValidate.HtmlErrors = '';
            mainValidate.HtmlErrors += valTabInformacionGrl.HtmlErrors;
            mainValidate.HtmlErrors += valContactos.HtmlErrors;
            mainValidate.HtmlErrors += valArchivos.HtmlErrors;

            $("#Summary").html('').html(mainValidate.HtmlErrors);

            if (mainValidate.IsValid) { $("#Summary").addClass('hide'); }

            else { $("#Summary").removeClass('hide'); }
        }
    },
    UpdateProspecto: function (prospecto) {
        var data = {
            prospecto: JSON.stringify(prospecto)
        };
        $.ajax({
            type: "POST",
            data: JSON.stringify(data),
            url: "/Prospecto/UpateProspecto",
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            async: false,
            success: function (response) {
                frmProspectos.Archivos.AddArchivos(prospecto.id);
                window.location.href = '/Prospecto/AdmonProspecto/';
            },
            error: function (response) {
                window.location.href = '/Prospecto/AdmonProspecto/';
            }
        });
    },
    GetValues: function () {
        var Response = new Object();
        var prospecto = new frmProspectos.Prospecto();

        prospecto.IdEmpresa = 0;
        prospecto.id = document.getElementById('IdPros').value;
        prospecto.Cliente = document.getElementById('InptTxtCliente').value;
        prospecto.Obra = document.getElementById('InptTxtObra').value;
        prospecto.idEstatusObra = document.getElementById('SlctEstatusObra').options[document.getElementById('SlctEstatusObra').selectedIndex].value;
        prospecto.idSubsegmento = document.getElementById('SlctSugSegmento').options[document.getElementById('SlctSugSegmento').selectedIndex].value;
        prospecto.campania = document.getElementById('InptTxtCampana').value;
        prospecto.comentarios = document.getElementById('InptTxtComentariosObra').value;
        prospecto.idTipoProspecto = document.getElementById('SlctTipoProspecto').options[document.getElementById('SlctTipoProspecto').selectedIndex].value;
        //Oferta integral Productos y servicios

        //Oferta integral Productos y servicios
        prospecto.prdAdqr = frmProspectos.GetProductoValues();
        prospecto.srvAdqr = frmProspectos.GetServiciosValues();

        //Productos / Servicios adquiridos II
        prospecto.RazonSocial = document.getElementById('InptTxtRazonSocial').value;
        prospecto.Rfc = document.getElementById('InptTxtRFC').value;
        prospecto.Telefono = document.getElementById('InptTxtTelefono').value;
        prospecto.calle = document.getElementById('InptTxtCalle').value;
        prospecto.Numero = document.getElementById('InptNmbrNumero').value;
        prospecto.Colonia = document.getElementById('InptTxtColonia').value;
        prospecto.codigoPostal = document.getElementById('InptNmbrCodigoPostal').value;
        prospecto.idPais = document.getElementById('SlctPais').options[document.getElementById('SlctPais').selectedIndex].value;
        prospecto.idEstado = document.getElementById('SlctEstado').options[document.getElementById('SlctEstado').selectedIndex].value;
        prospecto.idMunicipio = document.getElementById('SlctMunicipio').options[document.getElementById('SlctMunicipio').selectedIndex].value;
        prospecto.Longitud = document.getElementById('InptNmbrLongitud').value;
        prospecto.Latitud = document.getElementById('InptNmbrLatitud').value;
        prospecto.ComentariosUbicacion = document.getElementById('InptTxtComentariosUbicacion').value;

        //Tab contacto
        prospecto.contactos = frmProspectos.GetContactos();

        prospecto.Status = 1;
        frmProspectos.ImgBase64();
        prospecto.imagen = ((document.getElementById("Imagen").value == "") ? "" : document.getElementById("Imagen").value);

        prospecto.idPlataforma = 1;

        return prospecto;
    },
    GetContactos: function () {
        var arrayContactosPros = new Array();

        if (typeof (arrayContactos) != "undefined") {
            for (var indexContactoA = 0; indexContactoA < arrayContactos.length; indexContactoA++) {
                var contacto = new frmProspectos.ContactoProspecto();
                contacto.IdContacto = arrayContactos[indexContactoA].IdContacto;
                contacto.nombre = arrayContactos[indexContactoA].nombre;
                contacto.appPaterno = arrayContactos[indexContactoA].appPaterno;
                contacto.appMaterno = arrayContactos[indexContactoA].appMaterno;
                contacto.Telefono = arrayContactos[indexContactoA].Telefono;
                contacto.Extension = arrayContactos[indexContactoA].Extension;
                contacto.email = arrayContactos[indexContactoA].email;
                contacto.Cargo = arrayContactos[indexContactoA].Cargo;
                contacto.comentarios = arrayContactos[indexContactoA].comentarios;
                arrayContactosPros.push(contacto);
            }
        }
        return arrayContactosPros;
    },
    /******************************************************/

    /******************************************************/
    CrearElementos: function (Data, IdSelect) {
        var Combo = '';
        var TxtCombo = '';
        var ElmentObj;

        if (typeof (Data) != "undefined") {
            if (Data.Items.length > 0) {
                Combo += '<option value="">-- Selecciona -- </option>';
                TxtCombo += '-- Selecciona --';
                for (var iElement = 0; iElement < Data.Items.length; iElement++) {
                    Combo += '<option value="' + Data.Items[iElement].Id + '"> ' + Data.Items[iElement].Descripcion + '  </option>';
                }
            }
            else {
                Combo += '<option value="">-- No se encontraron registros --</option>';
                TxtCombo += '-- No se encontraron registros --';
            }
        } else {
            Combo += '<option value="">-- No se encontraron registros --</option>';
            TxtCombo += '-- No se encontraron registros --';
        }

        frmProspectos.CargarCombo(IdSelect, Combo, TxtCombo)
    },
    CargarCombo: function (IdSelect, Contenido, Txt) {
        $("#" + IdSelect).html('');
        $("#" + IdSelect).html(Contenido);
        var cmbtxt = $("#s2id_" + IdSelect).find(".select2-chosen");
        $(cmbtxt).text(Txt);
    },
    CheckByGroup: function (currentParentCheck) {
        var groupCheck = currentParentCheck.name;
        var checkVal = 'false';

        if ($(currentParentCheck).is(':checked'))
            checkVal = 'true';
        else
            checkVal = 'false';

        $("input[name=" + groupCheck + "]").each(function () {
            $(this).prop('checked', true);
            $(this).prop('checked', false);
        });
    },
    GetServicios: function () {
        $.ajax({
            url: "/Catalogo/GetServicios",
            dataType: "json",
            data: "",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            async: false,
            success: function (data) {
                frmProspectos.CargarServicios(data);
            },
            error: function () {
                console.log("Ocurrio un error");
            }
        });
    },
    CargarServicios: function (data) {
        $("#DivServicios").html('');
        var htmlServicio = "";
        var IdServicio;
        var valorText = "";
        for (var indexSer = 0; indexSer < data.items.length; indexSer++) {
            IdServicio = data.items[indexSer].id;
            valorText = data.items[indexSer].Descripcion;
            htmlServicio += '<li class="list-group-item">';
            htmlServicio += '<label class="checkbox-inline"><input type="checkbox" name="Servicios" value="' + IdServicio + '">' + valorText + '</label>';
            htmlServicio += '</li>';
        }

        $("#DivServicios").html('').html(htmlServicio);
    },
    /******************************************************/
    ReStartItemsOfe: function () {
        $(".Productos").each(function () {
            if ($(this).is(':checked'))
                $(this).prop('checked', false);
            $(this).parent().parent().addClass('hide');
        });
        //$(".Servicios").each(function () { $(this).prop('checked', false); });
    },
    FiltroSubSegmento: function (idSubSegmento) {
        //Verifica si existen elementos para ese subsegmento.
        $(".Productos").each(function () { $(this).parent().parent().addClass('hide') });
        $("input[name=" + idSubSegmento + "]").each(function () {
            if ($(this).is(':checked'))
                $(this).prop('checked', false);
            $(this).parent().parent().removeClass('hide');
        });
    },
    CheckOfertaIntegral: function (isOfertaIntegral) {
        if (typeof (isOfertaIntegral) !== "undefined") {
            if (!isOfertaIntegral)
                frmProspectos.ReStartItemsOfe();
        }
        else {
            frmProspectos.ReStartItemsOfe();
        }
    },
    ShowCurrentProductsSubSegmento: function (isOfertaIntegral) {
        if (!isOfertaIntegral) {
            var idSubSegmento = $("#SlctSugSegmento option:selected").val();
            console.log("option", idSubSegmento);
            frmProspectos.FiltroSubSegmento(idSubSegmento);
        }
    },
    /******************************************************/
    CargarProductosServicios: function (dataProSer) {
        var htmlProductoServicio = '';
        var currentClassHelper = "";
        var hideClass = "";
        var nameGroupCheck = "";

        $("#DivProductosSegmento").html('');
        $("#DivServicios").html('');
        for (var index = 0; index < dataProSer.length; index++) {

            if ((parseInt(dataProSer[index].IdSubSegmento) == 0)) {
                hideClass = "";
                currentClassHelper = "Servicios";
                nameGroupCheck = "Servicios";
            }
            else {
                hideClass = "hide";
                currentClassHelper = "Productos";
                nameGroupCheck = dataProSer[index].IdSubSegmento;
            }
            htmlProductoServicio = '';
            htmlProductoServicio += '<li class="list-group-item ' + hideClass + '">';
            htmlProductoServicio += '<label class="checkbox-inline">';
            htmlProductoServicio += '<input type="checkbox" class="' + currentClassHelper + '" name="' + nameGroupCheck + '" value="' + dataProSer[index].IdProducto + '">' + dataProSer[index].DescripcionProducto + '</label>';
            htmlProductoServicio += '</li>';

            if (parseInt(dataProSer[index].IdTipoSorP) == parseInt(frmProspectos.Codes.TypeProductoServicio.Producto))
                $("#DivProductos").append(htmlProductoServicio);
            else if (parseInt(dataProSer[index].IdTipoSorP) == parseInt(frmProspectos.Codes.TypeProductoServicio.Servicio))
                $("#DivServicios").append(htmlProductoServicio);

        }
    },
    GetProductoValues: function () {
        var idSugSegmento = document.getElementById('SlctSugSegmento').options[document.getElementById('SlctSugSegmento').selectedIndex].value;
        var arrayProductos = new Array();
        var producto;
        $("input[name=" + idSugSegmento + "]").each(function () {
            if ($(this).is(':checked')) {
                producto = new frmProspectos.ProductoServicioProspecto();
                producto.idProspecto = 0;
                producto.idTipoSorP = parseInt(frmProspectos.Codes.TypeProductoServicio.Producto);
                producto.idProducto = $(this).attr('value');
                producto.idSubSegmento = $(this).attr('name');
                arrayProductos.push(producto);
            }
        });
        return arrayProductos;
    },
    GetServiciosValues: function () {
        var arrayServicios = new Array();
        var servicio;
        $("input[name='Servicios']").each(function () {
            if ($(this).is(':checked')) {
                servicio = new frmProspectos.ProductoServicioProspecto();
                servicio.idProspecto = 0;
                servicio.idTipoSorP = parseInt(frmProspectos.Codes.TypeProductoServicio.Servicio);
                servicio.idProducto = $(this).attr('value');
                servicio.idSubSegmento = 0;
                arrayServicios.push(servicio);
            }
        });
        console.log(arrayServicios);
        return arrayServicios;
    },
    GetImagen: function () {
        return $("#ImgPerfil").attr('src');
    },
    /******************************************************/
    Codes: {
        TypeProductoServicio: {
            Producto: 2210,
            Servicio: 2211
        }
    },
    ImgBase64: function () {
        try {
            $("#Imagen").val('').val($(".fileupload-preview img").attr('src').split(",")[1]);
        } catch (e) {
            $("#Imagen").val('').val("");
        }
    },
    LoadImage64: function () {
        var Image = $("#Imagen").val();
        if (Image !== '') {
            //$(".fileupload .fileupload-new").hide();
            $("#ImgDefaultAvatar").hide();
            $(".fileupload-preview").html('<img src="data:image/jpeg;base64,' + Image + '"/>');
            $(".fileupload-preview").show();
        }
    },
    DeleteImage: function () {
        $("#ImgDefaultAvatar").show();
        $("#ImgPerfil").hide();
    },
    GetUbication: function () {
        var direccion = "";
        direccion += document.getElementById('InptTxtCalle').value + " " + document.getElementById('InptNmbrNumero').value + " " + document.getElementById('InptTxtColonia').value;
        direccion += $("#SlctEstado option:selected").text();
        direccion += $("#SlctMunicipio option:selected").text();

        //GeoMaps.ConfigMap.ContainerMap = "map-canvas";
        //GeoMaps.ConfigMap.ZoomMap = 13;
        //var coordenadas = GeoMaps.Maps.SetMapByAddress(direccion, true, true);
    },
    InicializaUbicacion: function () {
        //Map
        GeoMaps.ConfigMap.ContainerMap = "map-canvas";
        GeoMaps.ConfigMap.ZoomMap = 3;
        GeoMaps.Maps.SetSimpleMap(28.788232, -100.9646581, false);
    },
    GetProspecto: function () {
        var id = document.getElementById("IdPros").value;
        var data = { id: id };
        $.ajax({
            type: "GET",
            data: data,
            url: "/Prospecto/DetailsEdit",
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                if (typeof (data) != "undefined") {
                    frmProspectos.SetInformacion(data);
                }
            }
        });
    },
    Init: (function () {
        frmProspectos.Catalogos.GetStatusObra();
        frmProspectos.Catalogos.GetSubSegmento();
        frmProspectos.Catalogos.GetTipoProspecto();
        frmProspectos.Catalogos.GetProductosServicios();
        frmProspectos.Catalogos.GetPaises();
        frmProspectos.LoadImage64();
        //frmProspectos.InicializaUbicacion();
    })

};
frmProspectos.Init();
frmProspectos.GetProspecto();
//frmProspectos.Archivos.GetArchivos();
//frmProspectos.Archivos.VisualizarArchivos();

