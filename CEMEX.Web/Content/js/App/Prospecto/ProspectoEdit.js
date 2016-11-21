var arrayContactos;
var idUltimoContacto;
var arrayArchivos = new Array();

var contieneImagen = false;
var eliminoImagen = false;


var ESTATUSOBRA;
var SUBSEGMENTO;
var TIPOPROSPECTO;
var CAMPANIA;

var PROSPECTODATA;

var Model = {
    id: "UID-1",
    idVendedorAsignado: "",
    numeroRegistro: "",
    fotografia: "",
    estatusObra: {
        "id": "uid-1",
        "nombre": ""
    },
    subSegmento: {
        "id": "uid-1",
        "nombre": ""
    },
    tipoProspecto: {
        id: "UID-2",
        nombre: "NUEVO PROSPECTO",
        descripcion: "HOLA! SOY UN NUEVO"
    },
    cliente: {
        id: "",
        nombre: "",
        obra: " ",
        compania: "",
        comentarios: "",
        razonSocial: "",
        rfc: "",
        telefono: "",
        direccion: {
            calle: "",
            numero: "",
            colonia: "",
            codigoPostal: "",
            pais: {
                id: "",
                nombre: ""
            },
            estado: {
                id: "",
                nombre: ""
            },
            municipio: {
                id: "",
                nombre: ""
            },
            comentarios: "",
            ubicacion: {
                latitud: "",
                longitud: ""
            }
        }
    },
    estatusProspecto: {
        id: "UID-3",
        nombre: "Sin contacto"
    },
    contactos: [
        {
            id: "UID-1",
            fotografia: "",
            nombres: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            cargo: "",
            telefono: "",
            extension: "",
            email: "",
            comentarios: ""
        }
    ],
    archivosAlta: [
        {
            id: "UID-1",
            nombre: "",
            mimeType: ""
        }
    ],
    productosPrevios: [
        {
            id: "uid-2",
            nombre: "Soy el producto 2",
            volumenTotal: 1
        }
    ],
    serviciosPrevios: [
        {
            id: "uid-1",
            nombre: "El servicio 1",
            periodoTotal: 1
        }
    ],

    oportunidadVentaInicial: {
        esOfertaIntegral: true,
        subsegmentosProductos: [
            {
                idSubsegmento: "UID-1",
                todosSeleccion: true,
                nombre: "Soy el subsegmento 1",
                productos: [
                    {
                        id: "uid-1",
                        nombre: "Soy el producto 1 INICIAL",
                        seleccionado: true,
                        fechaInicioObra: "",
                        duracionMeses: 1,
                        mesesRestantes: 1,
                        volumenTotal: 1,
                        volumenRestante: 1,
                        semaforo: {
                            id: "uid-1",
                            nombre: ""
                        },
                        obra: {
                            id: "uid-1",
                            nombre: ""
                        },
                        motivoExclusion: {
                            id: "uid-1",
                            nombre: ""
                        },
                        estatusObra: {
                            id: "uid-1",
                            nombre: ""
                        },
                        volumenProximosMeses: 1,
                        competidor: {
                            id: "uid-1",
                            nombre: ""
                        },
                        oportunidadVenta: {
                            id: "uid-1",
                            nombre: ""
                        },
                        numeroObra: "uid-1",
                        comentariosMotivoPerdida: ""
                    }
                ]
            }
        ],
        servicios: [
            {
                id: "uid-1",
                nombre: "El servicio 1 INICIAL",
                seleccionado: true,
                fechaInicioObra: "",
                duracionMeses: 1,
                mesesRestantes: 1,
                periodoTotal: 1,
                periodoRestante: 1,
                semaforo: {
                    id: "uid-1",
                    nombre: ""
                },
                obra: {
                    id: "uid-1",
                    nombre: ""
                },
                motivoExclusion: {
                    id: "uid-1",
                    nombre: ""
                },
                estatusObra: {
                    id: "uid-1",
                    nombre: ""
                },
                periodoProximosMeses: 1,
                competidor: {
                    id: "uid-1",
                    nombre: ""
                },
                oportunidadVenta: {
                    id: "uid-1",
                    nombre: ""
                },
                numeroDeObra: 1,
                comentariosMotivoPerdida: ""
            }
        ]
    },
    actividades: [
        {
            tipoActividad: {
                id: "UID-3",
                nombre: "------------"
            },
            fechaHoraCitaInicio: "12/12/2016 15:00:00 pm",
            fechaHoraCitaFin: "12/12/2016 15:15:00 pm",
            // 15 minutos de diferencia
            comentarios: "Hola! soy los comentarios de la cita 0",
            fechaInicioObra: "",
            confirmarVolumenObra: "",
            archivoAdjunto: {
                url: ""
            },
            estado: {
                id: 1,
                nombre: ""
            }
        }
    ],
    pasos: {
        prospectar: {
            oportunidadVenta: {
                esOfertaIntegral: true,
                subsegmentosProductos: [
                    {
                        idSubsegmento: "UID-1",
                        todosSeleccion: true,
                        nombre: "Soy el subsegmento 1",
                        productos: [
                            {
                                id: "uid-1",
                                nombre: "Soy el producto 1 de prospectar",
                                seleccionado: true,
                                fechaInicioObra: "",
                                duracionMeses: 1,
                                mesesRestantes: 1,
                                volumenTotal: 1,
                                volumenRestante: 1,
                                semaforo: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                obra: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                motivoExclusion: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                estatusObra: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                volumenProximosMeses: 1,
                                competidor: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                oportunidadVenta: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                numeroObra: "uid-1",
                                comentariosMotivoPerdida: ""
                            }
                        ]
                    }
                ],
                servicios: [
                    {
                        id: "uid-1",
                        nombre: "Soy un servicio editado 1",
                        seleccionado: true,
                        fechaInicioObra: "",
                        duracionMeses: 1,
                        mesesRestantes: 1,
                        periodoTotal: 1,
                        periodoRestante: 1,
                        semaforo: {
                            id: "uid-1",
                            nombre: ""
                        },
                        obra: {
                            id: "uid-1",
                            nombre: ""
                        },
                        motivoExclusion: {
                            id: "uid-1",
                            nombre: ""
                        },
                        estatusObra: {
                            id: "uid-1",
                            nombre: ""
                        },
                        periodoProximosMeses: 1,
                        competidor: {
                            id: "uid-1",
                            nombre: ""
                        },
                        oportunidadVenta: {
                            id: "uid-1",
                            nombre: ""
                        },
                        numeroDeObra: 1,
                        comentariosMotivoPerdida: ""
                    }
                ]
            }
        },
        indagarOportunidad: {
            oportunidadVenta: {
                esOfertaIntegral: true,
                subsegmentosProductos: [
                    {
                        idSubsegmento: "UID-1",
                        todosSeleccion: true,
                        nombre: "Soy el subsegmento 1",
                        productos: [
                            {
                                id: "uid-1",
                                nombre: "Soy el producto 1 de prospectar",
                                seleccionado: true,
                                fechaInicioObra: "",
                                duracionMeses: 1,
                                mesesRestantes: 1,
                                volumenTotal: 1,
                                volumenRestante: 1,
                                semaforo: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                obra: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                motivoExclusion: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                estatusObra: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                volumenProximosMeses: 1,
                                competidor: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                oportunidadVenta: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                numeroObra: "uid-1",
                                comentariosMotivoPerdida: ""
                            }
                        ]
                    }
                ],
                servicios: [
                    {
                        id: "uid-1",
                        nombre: "Soy un servicio editado 1",
                        seleccionado: true,
                        fechaInicioObra: "",
                        duracionMeses: 1,
                        mesesRestantes: 1,
                        periodoTotal: 1,
                        periodoRestante: 1,
                        semaforo: {
                            id: "uid-1",
                            nombre: ""
                        },
                        obra: {
                            id: "uid-1",
                            nombre: ""
                        },
                        motivoExclusion: {
                            id: "uid-1",
                            nombre: ""
                        },
                        estatusObra: {
                            id: "uid-1",
                            nombre: ""
                        },
                        periodoProximosMeses: 1,
                        competidor: {
                            id: "uid-1",
                            nombre: ""
                        },
                        oportunidadVenta: {
                            id: "uid-1",
                            nombre: ""
                        },
                        numeroDeObra: 1,
                        comentariosMotivoPerdida: ""
                    }
                ]
            },
            oportunidadDolor: ""
        },
        calificarOportunidad: {
            oportunidadVenta: {
                esOfertaIntegral: true,
                subsegmentosProductos: [
                    {
                        idSubsegmento: "UID-1",
                        todosSeleccion: true,
                        nombre: "Soy el subsegmento 1",
                        productos: [
                            {
                                id: "uid-1",
                                nombre: "Soy el producto 1 de prospectar",
                                seleccionado: true,
                                fechaInicioObra: "",
                                duracionMeses: 1,
                                mesesRestantes: 1,
                                volumenTotal: 1,
                                volumenRestante: 1,
                                semaforo: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                obra: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                motivoExclusion: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                estatusObra: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                volumenProximosMeses: 1,
                                competidor: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                oportunidadVenta: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                numeroObra: "uid-1",
                                comentariosMotivoPerdida: ""
                            }
                        ]
                    }
                ],
                servicios: [
                    {
                        id: "uid-1",
                        nombre: "Soy un servicio editado 1",
                        seleccionado: true,
                        fechaInicioObra: "",
                        duracionMeses: 1,
                        mesesRestantes: 1,
                        periodoTotal: 1,
                        periodoRestante: 1,
                        semaforo: {
                            id: "uid-1",
                            nombre: ""
                        },
                        obra: {
                            id: "uid-1",
                            nombre: ""
                        },
                        motivoExclusion: {
                            id: "uid-1",
                            nombre: ""
                        },
                        estatusObra: {
                            id: "uid-1",
                            nombre: ""
                        },
                        periodoProximosMeses: 1,
                        competidor: {
                            id: "uid-1",
                            nombre: ""
                        },
                        oportunidadVenta: {
                            id: "uid-1",
                            nombre: ""
                        },
                        numeroDeObra: 1,
                        comentariosMotivoPerdida: ""
                    }
                ]
            },
            comentariosNoCalificado: "",
            comentariosDescartado: ""
        },
        presentarPropuestaDeValor: {
            oportunidadVenta: {
                esOfertaIntegral: true,
                subsegmentosProductos: [
                    {
                        idSubsegmento: "UID-1",
                        todosSeleccion: true,
                        nombre: "Soy el subsegmento 1",
                        productos: [
                            {
                                id: "uid-1",
                                nombre: "Soy el producto 1 de prospectar",
                                seleccionado: true,
                                fechaInicioObra: "",
                                duracionMeses: 1,
                                mesesRestantes: 1,
                                volumenTotal: 1,
                                volumenRestante: 1,
                                semaforo: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                obra: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                motivoExclusion: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                estatusObra: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                volumenProximosMeses: 1,
                                competidor: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                oportunidadVenta: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                numeroObra: "uid-1",
                                comentariosMotivoPerdida: ""
                            }
                        ]
                    }
                ],
                servicios: [
                    {
                        id: "uid-1",
                        nombre: "Soy un servicio editado 1",
                        seleccionado: true,
                        fechaInicioObra: "",
                        duracionMeses: 1,
                        mesesRestantes: 1,
                        periodoTotal: 1,
                        periodoRestante: 1,
                        semaforo: {
                            id: "uid-1",
                            nombre: ""
                        },
                        obra: {
                            id: "uid-1",
                            nombre: ""
                        },
                        motivoExclusion: {
                            id: "uid-1",
                            nombre: ""
                        },
                        estatusObra: {
                            id: "uid-1",
                            nombre: ""
                        },
                        periodoProximosMeses: 1,
                        competidor: {
                            id: "uid-1",
                            nombre: ""
                        },
                        oportunidadVenta: {
                            id: "uid-1",
                            nombre: ""
                        },
                        numeroDeObra: 1,
                        comentariosMotivoPerdida: ""
                    }
                ]
            }
        },
        cerrarVenta: {
            oportunidadVenta: {
                esOfertaIntegral: true,
                subsegmentosProductos: [
                    {
                        idSubsegmento: "UID-1",
                        todosSeleccion: true,
                        nombre: "Soy el subsegmento 1",
                        productos: [
                            {
                                id: "uid-1",
                                nombre: "Soy el producto 1 de prospectar",
                                seleccionado: true,
                                fechaInicioObra: "",
                                duracionMeses: 1,
                                mesesRestantes: 1,
                                volumenTotal: 1,
                                volumenRestante: 1,
                                semaforo: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                obra: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                motivoExclusion: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                estatusObra: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                volumenProximosMeses: 1,
                                competidor: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                oportunidadVenta: {
                                    id: "uid-1",
                                    nombre: ""
                                },
                                numeroObra: "uid-1",
                                comentariosMotivoPerdida: ""
                            }
                        ]
                    }
                ],
                servicios: [
                    {
                        id: "uid-1",
                        nombre: "Soy un servicio editado 1",
                        seleccionado: true,
                        fechaInicioObra: "",
                        duracionMeses: 1,
                        mesesRestantes: 1,
                        periodoTotal: 1,
                        periodoRestante: 1,
                        semaforo: {
                            id: "uid-1",
                            nombre: ""
                        },
                        obra: {
                            id: "uid-1",
                            nombre: ""
                        },
                        motivoExclusion: {
                            id: "uid-1",
                            nombre: ""
                        },
                        estatusObra: {
                            id: "uid-1",
                            nombre: ""
                        },
                        periodoProximosMeses: 1,
                        competidor: {
                            id: "uid-1",
                            nombre: ""
                        },
                        oportunidadVenta: {
                            id: "uid-1",
                            nombre: ""
                        },
                        numeroDeObra: 1,
                        comentariosMotivoPerdida: ""
                    }
                ]
            }
        }
    }
}

localStorage.setItem('id', 1);

var frmProspectos = {

    Api: {
        //Ambiente Producción
        //Authority: 'https://cemexapi.tmanager.com.mx/',
        //Ambiente Desarrollo
        Authority: 'https://cemexpr.tmanager.com.mx/',
        Catalogos: {
            estatusObra: 'api/catalogo/nombre/StatusObra',
            tipoProspecto: 'api/catalogo/nombre/TipoProspecto',
            subSegmentos: 'api/catalogo/nombre/SubSegmento',
            paises: 'api/catalogo/nombre/Pais',
            estados: 'api/catalogo/Padre/Estado/',
            municipios: 'api/catalogo/padre/Municipio/',
            productosServicios: '/Prospecto/GetProductosServicios',
            zonas: 'api/catalogo/nombre/Zona',
            plazas: 'api/catalogo/padre/Plaza/',
            gerencia: 'api/catalogo/padre/Gerencia/',
            vendedor: 'api/catalogo/vendedores/',
            servicios: 'api/catalogo/nombre/Servicio',
            subsegmentosProductos: 'api/catalogo/subsegmentoproducto',
            campania: "api/catalogo/nombre/Campania"
        },
        Archivos: {
            subirArchivo: '/Prospecto/AddFile',
            descargarArchivo: '/Prospecto/GetFileContent'
        },
        Prospecto: {
            Post: '/Prospecto/CreateProspecto',
            Get: '/Prospecto/DetailsEdit'
        }
    },

    /*Model*/
    Model: {
        Prospecto: function () {
            this.id = "";
            this.idVendedorAsignado = "";
            this.numeroRegistro = "";
            this.fotografia = "";
            this.estatusObra = new Object();
            this.subSegmento = new Object();
            this.tipoProspecto = new Object();
            this.cliente = {
                id: "",
                nombre: "",
                obra: " ",
                campania: new Object(),
                comentarios: "",
                razonSocial: "",
                rfc: "",
                telefono: "",
                direccion: {
                    calle: "",
                    numero: "",
                    colonia: "",
                    codigoPostal: "",
                    pais: {
                        id: "",
                        nombre: ""
                    },
                    estado: {
                        id: "",
                        nombre: ""
                    },
                    municipio: {
                        id: "",
                        nombre: ""
                    },
                    comentarios: "",
                    ubicacion: {
                        latitud: "",
                        longitud: ""
                    }
                }
            };
            this.asignacionVendedor = {
                zona: {
                    id: "",
                    nombre: ""
                },
                plaza: {
                    id: "",
                    nombre: ""
                },
                gerencia: {
                    id: "",
                    nombre: ""
                },
                vendedor: {
                    id: "",
                    nombre: ""
                }
            }
            this.estatusProspecto = {
                id: 0,
                idCatalogo: 0,
                nombre: "",
                idPadre: 0
            };
            this.contactos = new Array();
            this.archivosAlta = new Array();
            this.productosPrevios = new Array();
            this.serviciosPrevios = new Array();
            this.oportunidadVentaInicial = {
                esOfertaIntegral: true,
                subsegmentosProductos: [],
                servicios: [],
            };
            this.actividades = new Array();
            this.pasos = {
                prospectar: {
                    oportunidadVenta: {
                        esOfertaIntegral: true,
                        subsegmentosProductos: [],
                        servicios: []
                    }
                },
                indagarOportunidad: {
                    oportunidadVenta: {
                        esOfertaIntegral: true,
                        subsegmentosProductos: [],
                        servicios: []
                    },
                    oportunidadDolor: ""
                },
                calificarOportunidad: {
                    oportunidadVenta: {
                        esOfertaIntegral: true,
                        subsegmentosProductos: [],
                        servicios: []
                    },
                    comentariosNoCalificado: "",
                    comentariosDescartado: ""
                },
                presentarPropuestaDeValor: {
                    oportunidadVenta: {
                        esOfertaIntegral: true,
                        subsegmentosProductos: [],
                        servicios: []
                    }
                },
                cerrarVenta: {
                    oportunidadVenta: {
                        esOfertaIntegral: true,
                        subsegmentosProductos: [],
                        servicios: []
                    }
                }
            };
            this.oportunidadDolorDetectada = false;
            this.pasoOriginal = "";
        },
        //Structura Prospecto.contactos([])
        contacto: function () {
            this.id = 0;
            this.fotografia = "";
            this.nombres = "";
            this.apellidoPaterno = "";
            this.apellidoMaterno = "";
            this.cargo = "";
            this.telefono = "";
            this.extension = "";
            this.email = "";
            this.comentarios = "";
            //Nueva propiedad
            this.principal = false;
        },
        //Structura Prospecto.archivosAlta
        archivo: function () {
            this.id = "";
            this.nombre = "";
            this.mimeType = "";
            this.type = "";
            //Nuevo
            this.url = "";
        },
        //Structura Prospecto.productosPrevios/serviciosPrevios
        productoServicioPrevio: function () {
            this.id = 0,
                this.nombre = "";
            this.volumenTotal = "";
        },
        //Structura Prospecto.oportunidadVentaInicial.subsegmentosProductos.([])
        subSegmento: function () {
            this.idSubsegmento = "";
            this.todosSeleccion = false;
            this.nombre = "";
            this.productos = []
        },
        //Structura Prospecto.oportunidadVentaInicial.subsegmentosProductos.(subSegmento.productos)([])
        productoSubSegmento: function () {
            this.id = "";
            this.nombre = "";
            this.seleccionado = false;
            this.fechaInicioObra = "";
            this.duracionMeses = 0;
            this.mesesRestantes = 0;
            this.volumenTotal = 0;
            this.volumenRestante = 0;
            this.semaforo = {
                id: 0,
                Descripcion: "",
                status: 0,
                idCatalogo: 0,
                idPadre: 0
            };
            this.obra = {
                id: 0,
                Descripcion: "",
                status: 0,
                idCatalogo: 0,
                idPadre: 0
            };
            this.motivoExclusion = {
                id: 0,
                Descripcion: "",
                status: 0,
                idCatalogo: 0,
                idPadre: 0
            };
            this.estatusObra = {
                id: 0,
                Descripcion: "",
                status: 0,
                idCatalogo: 0,
                idPadre: 0
            };
            this.volumenProximosMeses = 1;
            this.competidor = {
                id: 0,
                Descripcion: "",
                status: 0,
                idCatalogo: 0,
                idPadre: 0
            };
            this.oportunidadVenta = {
                id: 0,
                Descripcion: "",
                status: 0,
                idCatalogo: 0,
                idPadre: 0
            };
            this.numeroObra = "";
            this.comentariosMotivoPerdida = "";
        },
        //Structura Prospecto.oportunidadVentaInicial.subsegmentosProductos.(subSegmento.servicios)([])
        servicio: function () {
            this.id = "";
            this.nombre = "";
            this.seleccionado = false;
            this.fechaInicioObra = "";
            this.duracionMeses = 0;
            this.mesesRestantes = 0;
            this.periodoTotal = 0;
            this.periodoRestante = 0;
            this.periodoProximosMeses = 0;
            this.semaforo = {
                id: 0,
                Descripcion: "",
                status: 0,
                idCatalogo: 0,
                idPadre: 0
            };
            this.obra = {
                id: 0,
                Descripcion: "",
                status: 0,
                idCatalogo: 0,
                idPadre: 0
            };
            this.motivoExclusion = {
                id: 0,
                Descripcion: "",
                status: 0,
                idCatalogo: 0,
                idPadre: 0
            };
            this.estatusObra = {
                id: 0,
                Descripcion: "",
                status: 0,
                idCatalogo: 0,
                idPadre: 0
            };
            this.competidor = {
                id: 0,
                Descripcion: "",
                status: 0,
                idCatalogo: 0,
                idPadre: 0
            };
            this.oportunidadVenta = {
                id: 0,
                Descripcion: "",
                status: 0,
                idCatalogo: 0,
                idPadre: 0
            };
            this.numeroDeObra = 0;
            this.comentariosMotivoPerdida = "";
        },
        //Structura Prospecto.actividades.([])
        actividad: function () {
            this.tipoActividad = {
                id: "",
                nombre: ""
            };
            this.fechaHoraCitaInicio = "";
            this.fechaHoraCitaFin = "";
            this.comentarios = "";
            this.fechaInicioObra = "";
            this.confirmarVolumenObra = "";
            this.archivoAdjunto = {
                url: ""
            };
            this.estado = {
                id: 0,
                nombre: ""
            };
        },
        //Structuras de Validacion
        ResponseValidateItem: function () {
            this.IsValid = true;
            this.HtmlErrors = "";
        },
        ItemError: function () {
            this.ErrorField = "";
            this.MsgError = "";
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
            }
        },
    },

    /*Source Catálogos*/
    Catalogos: {
        GetStatusObra: function () {
            $.ajax({
                url: frmProspectos.Api.Authority + frmProspectos.Api.Catalogos.estatusObra,
                dataType: "json",
                data: "",
                type: "GET",
                async: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    ESTATUSOBRA = data[0].items;
                    frmProspectos.Util.Select.CrearElementos(data[0], "SlctEstatusObra");
                },
                error: function () {
                    alertify.log("", "¡Imposible obtener los estatus de obra disponibles!");
                }
            });
        },
        GetTipoProspecto: function () {
            $.ajax({
                url: frmProspectos.Api.Authority + frmProspectos.Api.Catalogos.tipoProspecto,
                dataType: "json",
                data: "",
                type: "GET",
                async: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    TIPOPROSPECTO = data[0].items;
                    frmProspectos.Util.Select.CrearElementos(data[0], "SlctTipoProspecto");
                },
                error: function () {
                    alertify.log("", "¡Imposible obtener los tipo de prospectos disponibles!");
                }
            });
        },
        GetSubSegmento: function () {
            $.ajax({
                url: frmProspectos.Api.Authority + frmProspectos.Api.Catalogos.subSegmentos,
                dataType: "json",
                data: "",
                type: "GET",
                async: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    SUBSEGMENTO = data[0].items;
                    frmProspectos.Util.Select.CrearElementos(data[0], "SlctSugSegmento");
                },
                error: function () {
                    alertify.log("", "¡Imposible obtener los subegmentos disponibles!");
                }
            });
        },
        GetPaises: function () {
            $.ajax({
                url: frmProspectos.Api.Authority + frmProspectos.Api.Catalogos.paises,
                dataType: "json",
                type: "GET",
                contentType: "application/json; charset=utf-8",
                async: false,
                success: function (data) {
                    frmProspectos.Util.Select.CrearElementos(data[0], "SlctPais");
                },
                error: function () {
                    alertify.log("", "¡Imposible obtener los paises disponibles!");
                }
            });
        },
        GetEstados: function (idPais) {
            if (parseInt(idPais) !== 0 && !TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(idPais)) {
                var datos = {
                    IdPais: idPais
                }
                $.ajax({
                    url: frmProspectos.Api.Authority + frmProspectos.Api.Catalogos.estados + idPais,
                    dataType: "json",
                    data: "",
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    async: false,
                    success: function (data) {
                        frmProspectos.Util.Select.CrearElementos(data[0], "SlctEstado");
                    },
                    error: function (e) {
                        alertify.log("", "¡Imposible obtener los estados disponibles!");
                    }
                });
            } else {
                frmProspectos.Util.Select.CargarCombo('SlctEstado', '<option value="0">-- Selecciona -- </option>', '-- Selecciona --');
                frmProspectos.Util.Select.CargarCombo('SlctMunicipio', '<option value="0">-- Selecciona -- </option>', '-- Selecciona --');
            }
        },
        GetMunicipios: function (idEstado) {
            if (parseInt(idEstado) !== 0 && !TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(idEstado)) {
                var datos = {
                    IdEstado: idEstado
                }
                $.ajax({
                    url: frmProspectos.Api.Authority + frmProspectos.Api.Catalogos.municipios + idEstado,
                    dataType: "json",
                    data: datos,
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    async: false,
                    success: function (data) {
                        frmProspectos.Util.Select.CrearElementos(data[0], "SlctMunicipio");
                    },
                    error: function () {
                        alertify.log("", "¡Imposible obtener los municipios disponibles!");
                    }
                });
            } else {
                frmProspectos.Util.Select.CargarCombo('SlctMunicipio', '<option value="0">-- Selecciona -- </option>', '-- Selecciona --');
            }
        },
        GetProductosServicios: function () {
            $.ajax({
                url: frmProspectos.Api.Authority + frmProspectos.Api.Catalogos.productosServicios,
                dataType: "json",
                data: "",
                type: "GET",
                async: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    //console.table(data);
                    //frmProspectos.InformacionGral.CargarProductosServicios(data);
                    //frmProspectos.InformacionGral.CargarSubSegmentosServicios(data);
                },
                error: function () {
                    console.log("Ocurrio un error");
                }
            });
        },
        GetServicios: function () {
            $.ajax({
                url: frmProspectos.Api.Authority + frmProspectos.Api.Catalogos.servicios,
                dataType: "json",
                data: "",
                type: "GET",
                async: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    frmProspectos.InformacionGral.CargarServicios(data[0]);
                },
                error: function () {
                    alertify.log("", "¡Imposible obtener los servicios disponibles!");
                }
            });
        },
        GetSubSegmentosProductos: function (idSubsegmento) {

            $.ajax({
                url: frmProspectos.Api.Authority + frmProspectos.Api.Catalogos.subsegmentosProductos,
                dataType: "json",
                data: "",
                type: "GET",
                async: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    console.log(data);
                    //frmProspectos.InformacionGral.CargarServicios(data[0]);
                    frmProspectos.InformacionGral.CargarSubSegmentosProductos(data,idSubsegmento);
                },
                error: function () {
                    alertify.log("", "¡Imposible obtener los servicios disponibles!");
                }
            });

            var subSegmentosProductos = [
                {
                    id: 1,
                    nombre: 'Vivienda en Serie',
                    productos: [{ id: 0, nombre: 'Cemento' },
                        { id: 1, nombre: 'Acero' },
                        { id: 1, nombre: 'Impercem' }
                    ]
                },
                { id: 2, nombre: 'Industria y Comercio', productos: [{ id: 0, nombre: 'Cemento' }, { id: 1, nombre: 'Acero' }, { id: 2, nombre: 'Hidratium' }, { id: 3, nombre: 'Baja Contr' }] },
            ];

        },
        GetZonas: function () {
            $.ajax({
                url: frmProspectos.Api.Authority + frmProspectos.Api.Catalogos.zonas,
                dataType: "json",
                data: "",
                type: "GET",
                async: false,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    frmProspectos.Util.Select.CrearElementos(data[0], "SlctZona");
                },
                error: function () {
                    alertify.log("", "¡Imposible obtener las zonas disponibles!");
                }
            });
        },
        GetPlazas: function (idZona) {
            if (parseInt(idZona) !== 0 && !TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(idZona)) {
                var datos = {
                    idZona: idZona
                }
                $.ajax({
                    url: frmProspectos.Api.Authority + frmProspectos.Api.Catalogos.plazas + idZona,
                    dataType: "json",
                    data: "",
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    async: false,
                    success: function (data) {
                        frmProspectos.Util.Select.CrearElementos(data[0], "SlctPlaza");
                    },
                    error: function (e) {
                        alertify.log("", "¡Imposible obtener las plazas disponibles!");
                    }
                });
            } else {
                frmProspectos.Util.Select.CargarCombo('SlctPlaza', '<option value="0">-- Selecciona -- </option>', '-- Selecciona --');
                frmProspectos.Util.Select.CargarCombo('SlctGerencia', '<option value="0">-- Selecciona -- </option>', '-- Selecciona --');
                frmProspectos.Util.Select.CargarCombo("SlctVendedor", '<option value="0">-- Selecciona -- </option>', '-- Selecciona --');
            }
        },
        GetGerencias: function (idPlaza) {
            if (parseInt(idPlaza) !== 0 && !TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(idPlaza)) {
                var datos = {
                    idPlaza: idPlaza
                }
                $.ajax({
                    url: frmProspectos.Api.Authority + frmProspectos.Api.Catalogos.gerencia + idPlaza,
                    dataType: "json",
                    data: "",
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    async: false,
                    success: function (data) {
                        frmProspectos.Util.Select.CrearElementos(data[0], "SlctGerencia");
                    },
                    error: function (e) {
                        alertify.log("", "¡Imposible obtener las gerencias disponibles!");
                    }
                });
            }
            else {
                frmProspectos.Util.Select.CargarCombo('SlctGerencia', '<option value="0">-- Selecciona -- </option>', '-- Selecciona --');
                frmProspectos.Util.Select.CargarCombo("SlctVendedor", '<option value="0">-- Selecciona -- </option>', '-- Selecciona --');
            }
        },
        GetVendedores: function (idGerencia) {
            if (parseInt(idGerencia) !== 0 && !TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(idGerencia)) {
                var idPlaza = $("#SlctPlaza").val();
                var datos = {
                    idGerencia: idGerencia
                }
                $.ajax({
                    url: frmProspectos.Api.Authority + frmProspectos.Api.Catalogos.vendedor + idGerencia + '/' + idPlaza,
                    dataType: "json",
                    data: "",
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    async: false,
                    success: function (data) {
                        frmProspectos.Util.Select.CrearElementosVendedores(data, "SlctVendedor");
                    },
                    error: function (e) {
                        alertify.log("", "¡Imposible obtener las gerencias disponibles!");
                    }
                });
            }
            else {
                frmProspectos.Util.Select.CargarCombo('SlctVendedor', '<option value="0">-- Selecciona -- </option>', '-- Selecciona --');
            }
        },
        GetCampanias: function () {
            $.ajax({
                url: frmProspectos.Api.Authority + frmProspectos.Api.Catalogos.campania,
                dataType: "json",
                data: "",
                type: "GET",
                contentType: "application/json; charset=utf-8",
                async: false,
                success: function (data) {
                    CAMPANIA = data[0].items;
                    frmProspectos.Util.Select.CrearElementos(data[0], "SlctCampania");
                },
                error: function (e) {
                    alertify.log("", "¡Imposible obtener las gerencias disponibles!");
                }
            });
        },
        Init: function () {
            this.GetCampanias();
            this.GetStatusObra();
            this.GetTipoProspecto();
            this.GetSubSegmento();
            this.GetPaises();
            this.GetZonas();
            this.GetServicios();
            // this.GetSubSegmentosProductos();

        }
    },

    /*Source Informacion Gral*/
    InformacionGral: {
        ValidateInformacionGrl: function () {
            var htmlContactoErrors = '';
            var mainResponse = this.ValidateItems();
            return mainResponse;
        },
        ValidateItems: function () {
            var responseTabInformacionGrl = new frmProspectos.Model.ResponseValidateItem();
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
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "Nombre Cliente ";
                    itemErrorObj.MsgError = "solo permite caracteres alfanúmericos y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }
            else {
                if (auxRequiredFields) { auxRequiredFields = false; }
                itemErrorObj = new frmProspectos.Model.ItemError();
                itemErrorObj.ErrorField = "Nombre Cliente ";
                itemErrorObj.MsgError = "no puede ser vacio";
                htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
            }

            //Nombre de Obra
            valor = '';
            valor = document.getElementById('InptTxtObra').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,50}$/g)) {
                    if (auxRequiredFields) { auxRequiredFields = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "Obra ";
                    itemErrorObj.MsgError = "solo permite caracteres alfanúmericos y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }
            else {
                if (auxRequiredFields) { auxRequiredFields = false; }
                itemErrorObj = new frmProspectos.Model.ItemError();
                itemErrorObj.ErrorField = "Obra ";
                itemErrorObj.MsgError = "no puede ser vacio";
                htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
            }

            //Estatus de Obra
            valor = '';
            valor = parseInt((typeof ($("#SlctEstatusObra option:selected").val()) == "undefined") ? 0 : $("#SlctEstatusObra option:selected").val());
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (TelstockBase.Security.Regex.Expressions.Common.Numbers(valor)) {
                    if (!valor > 0) {
                        if (auxRequiredFields) { auxRequiredFields = false; }
                        itemErrorObj = new frmProspectos.Model.ItemError();
                        itemErrorObj.ErrorField = "";
                        itemErrorObj.MsgError = "Selecciona un Estatus de Obra";
                        htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                    }
                }
                else {
                    if (auxRequiredFields) { auxRequiredFields = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "";
                    itemErrorObj.MsgError = "Selecciona un Estatus de Obra";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }
            else {
                if (auxRequiredFields) { auxRequiredFields = false; }
                itemErrorObj = new frmProspectos.Model.ItemError();
                itemErrorObj.ErrorField = "";
                itemErrorObj.MsgError = "Selecciona un Estatus de Obra";
                htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
            }

            //SubSegmento
            //valor = '';
            //valor = parseInt((typeof ($("#SlctSugSegmento option:selected").val()) == "undefined") ? 0 : $("#SlctSugSegmento option:selected").val());
            //if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
            //    if (TelstockBase.Security.Regex.Expressions.Common.Numbers(valor)) {
            //        if (valor > 0) {
            //            //VERIFICAR SI EXISTEN PRODUCTOS ASOCIADOS A ESTE SUBSEGMENTO SI TIENE CHEKADO EL CHECK DE OFERTA INTEGRAL
            //            //VALIDAR QUE POR LO MENOS SE SELECCIONE UNO
            //            if (!$("#CheckOfertaIntegral").is(":checked")) {
            //                if (!this.ValidateSubSegmentosSelected(valor)) {
            //                    if (auxRequiredFields) {
            //                        auxRequiredFields = false;
            //                    }
            //                    itemErrorObj = new frmProspectos.Model.ItemError();
            //                    itemErrorObj.ErrorField = "SubSegmento ";
            //                    itemErrorObj.MsgError = "selecciona almenos un producto del SubSegmento " + $("#SlctSugSegmento option:selected").text() + "";
            //                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
            //                }
            //            }
            //        }
            //        else {
            //            if (auxRequiredFields) { auxRequiredFields = false; }
            //            itemErrorObj = new frmProspectos.Model.ItemError();
            //            itemErrorObj.ErrorField = "";
            //            itemErrorObj.MsgError = "Selecciona un SubSegmento";
            //            htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
            //        }
            //    }
            //    else {
            //        if (auxRequiredFields) { auxRequiredFields = false; }
            //        itemErrorObj = new frmProspectos.Model.ItemError();
            //        itemErrorObj.ErrorField = "";
            //        itemErrorObj.MsgError = "Selecciona un SubSegmento";
            //        htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
            //    }
            //}
            //else {
            //    if (auxRequiredFields) { auxRequiredFields = false; }
            //    itemErrorObj = new frmProspectos.Model.ItemError();
            //    itemErrorObj.ErrorField = "";
            //    itemErrorObj.MsgError = "Selecciona un SubSegmento";
            //    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
            //}

            //Tipo Prospecto
            valor = '';
            valor = parseInt((typeof ($("#SlctTipoProspecto option:selected").val()) == "undefined") ? 0 : $("#SlctTipoProspecto option:selected").val());
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (TelstockBase.Security.Regex.Expressions.Common.Numbers(valor)) {
                    if (!valor > 0) {
                        if (auxRequiredFields) { auxRequiredFields = false; }
                        itemErrorObj = new frmProspectos.Model.ItemError();
                        itemErrorObj.ErrorField = "";
                        itemErrorObj.MsgError = "Selecciona un Tipo de Prospecto";
                        htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                    }
                }
                else {
                    if (auxRequiredFields) { auxRequiredFields = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "";
                    itemErrorObj.MsgError = "Selecciona un Tipo de Prospecto";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }
            else {
                if (auxRequiredFields) { auxRequiredFields = false; }
                itemErrorObj = new frmProspectos.Model.ItemError();
                itemErrorObj.ErrorField = "";
                itemErrorObj.MsgError = "Selecciona un Tipo de Prospecto";
                htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
            }

            //Campaña
            valor = '';
            valor = parseInt((typeof ($("#SlctCampania option:selected").val()) == "undefined") ? 0 : $("#SlctCampania option:selected").val());
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (TelstockBase.Security.Regex.Expressions.Common.Numbers(valor)) {
                    if (!valor > 0) {
                        if (auxAllFieldOk) { auxAllFieldOk = false; }
                        if (auxAllEmpty) { auxAllEmpty = false; }
                        itemErrorObj = new frmProspectos.Model.ItemError();
                        itemErrorObj.ErrorField = "";
                        itemErrorObj.MsgError = "Selecciona una Campaña";
                        htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                    }
                }
                else {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "";
                    itemErrorObj.MsgError = "Selecciona una Campaña";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Comentarios Obra
            valor = '';
            valor = document.getElementById('InptTxtComentariosObra').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,150}$/g)) {
                    if (auxRequiredFields) { auxRequiredFields = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "Comentarios Obra ";
                    itemErrorObj.MsgError = "solo permite caracteres alfanúmericos y/o la longitud del texto no debe superar los 150 caracteres.";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }
            else {
                if (auxRequiredFields) { auxRequiredFields = false; }
                itemErrorObj = new frmProspectos.Model.ItemError();
                itemErrorObj.ErrorField = "Comentarios Obra ";
                itemErrorObj.MsgError = "no puede ser vacio";
                htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
            }

            //Razón Social [Opcionales List]
            valor = '';
            valor = document.getElementById('InptTxtRazonSocial').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9.\s]{1,50}$/g)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "Razón Social ";
                    itemErrorObj.MsgError = "solo permite caracteres alfanúmericos con puntos (.) y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Rfc
            valor = '';
            valor = document.getElementById('InptTxtRFC').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Mex.RFC(valor)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "RFC ";
                    itemErrorObj.MsgError = "No es un valor válido";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Teléfono
            valor = '';
            valor = document.getElementById('InptTxtTelefono').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.NumbersLength(valor, 8, 10)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "Teléfono ";
                    itemErrorObj.MsgError = "solo permite caracteres númericos entre 8 y 10 digítos";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }


            //Calle
            valor = '';
            valor = document.getElementById('InptTxtCalle').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9.\s]{1,50}$/g)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "Calle ";
                    itemErrorObj.MsgError = "solo permite caracteres alfanúmericos con punto(.) y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Numero de calle
            valor = '';
            valor = document.getElementById('InptNmbrNumero').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.NumbersLength(valor, 1, 6)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "Número ";
                    itemErrorObj.MsgError = "solo permite caracteres númericos no mayor a 6 dígitos";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Colonia
            valor = '';
            valor = document.getElementById('InptTxtColonia').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9.\s]{1,50}$/g)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "Colonia ";
                    itemErrorObj.MsgError = "solo permite caracteres alfanúmericos con punto(.) y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Código postal
            valor = '';
            valor = document.getElementById('InptNmbrCodigoPostal').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Mex.ZipCode(valor)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "Código Postal ";
                    itemErrorObj.MsgError = "solo permite caracteres númericos no mayor a 5 dígitos";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
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
                        itemErrorObj = new frmProspectos.Model.ItemError();
                        itemErrorObj.ErrorField = "";
                        itemErrorObj.MsgError = "Selecciona País";
                        htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                    }
                }
                else {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "";
                    itemErrorObj.MsgError = "Selecciona País";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
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
                        itemErrorObj = new frmProspectos.Model.ItemError();
                        itemErrorObj.ErrorField = "";
                        itemErrorObj.MsgError = "Selecciona Estado";
                        htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                    }
                }
                else {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "";
                    itemErrorObj.MsgError = "Selecciona Estado";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
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
                        itemErrorObj = new frmProspectos.Model.ItemError();
                        itemErrorObj.ErrorField = "";
                        itemErrorObj.MsgError = "Selecciona Municipio";
                        htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                    }
                }
                else {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "";
                    itemErrorObj.MsgError = "Selecciona Municipio";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Latitud
            valor = '';
            valor = document.getElementById('InptNmbrLatitud').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.DecimalNumbers(valor)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "Latitud ";
                    itemErrorObj.MsgError = "no son coordenadas válidas";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Longitud
            valor = '';
            valor = document.getElementById('InptNmbrLongitud').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.DecimalNumbers(valor)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "Longitud ";
                    itemErrorObj.MsgError = "no son coordenadas válidas";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Comentarios Ubicación
            valor = '';
            valor = document.getElementById('InptTxtComentariosUbicacion').value;
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(valor, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9.\s]{1,150}$/g)) {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "Comentarios Ubicación ";
                    itemErrorObj.MsgError = "solo permite caracteres alfanúmericos con punto(.) y/o la longitud del texto no debe superar los 150 caracteres.";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }


            //Zona
            valor = '';
            valor = parseInt((typeof ($("#SlctZona option:selected").val()) == "undefined") ? 0 : $("#SlctZona option:selected").val());
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (TelstockBase.Security.Regex.Expressions.Common.Numbers(valor)) {
                    if (!valor > 0) {
                        if (auxAllFieldOk) { auxAllFieldOk = false; }
                        if (auxAllEmpty) { auxAllEmpty = false; }
                        itemErrorObj = new frmProspectos.Model.ItemError();
                        itemErrorObj.ErrorField = "";
                        itemErrorObj.MsgError = "Selecciona Zona";
                        htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                    }
                }
                else {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "";
                    itemErrorObj.MsgError = "Selecciona Zona";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }


            //Plaza
            valor = '';
            valor = parseInt((typeof ($("#SlctPlaza option:selected").val()) == "undefined") ? 0 : $("#SlctPlaza option:selected").val());
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (TelstockBase.Security.Regex.Expressions.Common.Numbers(valor)) {
                    if (!valor > 0) {
                        if (auxAllFieldOk) { auxAllFieldOk = false; }
                        if (auxAllEmpty) { auxAllEmpty = false; }
                        itemErrorObj = new frmProspectos.Model.ItemError();
                        itemErrorObj.ErrorField = "";
                        itemErrorObj.MsgError = "Selecciona Plaza";
                        htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                    }
                }
                else {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "";
                    itemErrorObj.MsgError = "Selecciona Plaza";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Gerencia
            valor = '';
            valor = parseInt((typeof ($("#SlctGerencia option:selected").val()) == "undefined") ? 0 : $("#SlctGerencia option:selected").val());
            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (TelstockBase.Security.Regex.Expressions.Common.Numbers(valor)) {
                    if (!valor > 0) {
                        if (auxAllFieldOk) { auxAllFieldOk = false; }
                        if (auxAllEmpty) { auxAllEmpty = false; }
                        itemErrorObj = new frmProspectos.Model.ItemError();
                        itemErrorObj.ErrorField = "";
                        itemErrorObj.MsgError = "Selecciona Gerencia";
                        htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                    }
                }
                else {
                    if (auxAllFieldOk) { auxAllFieldOk = false; }
                    if (auxAllEmpty) { auxAllEmpty = false; }
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = "";
                    itemErrorObj.MsgError = "Selecciona Gerencia";
                    htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
                }
            }

            //Vendedor
            valor = '';
            valor = (typeof ($("#SlctVendedor option:selected").val()) == "undefined") ? "" : $("#SlctVendedor option:selected").val();
            if (TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(valor)) {
                if (auxAllFieldOk) { auxAllFieldOk = false; }
                if (auxAllEmpty) { auxAllEmpty = false; }
                itemErrorObj = new frmProspectos.Model.ItemError();
                itemErrorObj.ErrorField = "";
                itemErrorObj.MsgError = "Selecciona Vendedor";
                htmlErrorTab += frmProspectos.Model.HtmlErrors.HtmlErrorTabInfoGral(itemErrorObj);
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
        },
        BuscadorProspectos: function (event) {
            var result = TelstockBase.Security.ControlEvents.KeyPress.LettersNumbersWithSpaceAndAcutes(event);
            if (result) {
                $("#InptTxtCliente").autocomplete({
                    source: function (request, response) {
                        $.ajax({
                            url: 'http://192.168.69.31//api/Catalogo?nombre=Estado',
                            data: "",
                            dataType: "json",
                            type: "GET",
                            contentType: "application/json; charset=utf-8",
                            success: function (data) {
                                response($.map(data.items, function (item) {
                                    return {
                                        label: item.Descripcion,
                                        val: item.id
                                    }
                                }))
                            },
                            error: function (response) {
                                alert(response.responseText);
                            },
                            failure: function (response) {
                                alert(response.responseText);
                            }
                        });
                    },
                    select: function (e, i) {
                        $("#InptTxtCliente").val(i.item.val);
                    },
                    minLength: 3
                });
            }
            return result;
        },
        ReStartItemsOfe: function () {
            $(".Productos").each(function () {
                if ($(this).is(':checked'))
                    $(this).prop('checked', false);
                $(this).parent().parent().addClass('hide');
            });
            $(".Servicios").each(function () { $(this).prop('checked', false); });
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
                    frmProspectos.InformacionGral.ReStartItemsOfe();
            }
            else {
                frmProspectos.InformacionGral.ReStartItemsOfe();
            }
        },
        ShowCurrentProductsSubSegmento: function (isOfertaIntegral) {
            if (!isOfertaIntegral) {
                var idSubSegmento = $("#SlctSugSegmento option:selected").val();
                frmProspectos.InformacionGral.FiltroSubSegmento(idSubSegmento);
            }
        },
        ShowHideItemsOfertaIntegral: function(isOfertaIntegral) {
            if ($('.switch-animate').hasClass('switch-on')) {
                $('.ofertaParticular').addClass('hidden');
            }
            else {
                $('.ofertaParticular').removeClass('hidden');
            }
        },
        CargarProductosServicios: function (dataProSer) {
            var htmlProductoServicio = '';
            var currentClassHelper = "";
            var hideClass = "";
            var nameGroupCheck = "";

            $("#DivProductosSegmento").html('');
            $("#DivServicios").html('');
            for (var index = 0; index < dataProSer.length; index++)
            {

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

                if (parseInt(dataProSer[index].IdTipoSorP) == parseInt(frmProspectos.Util.Codes.TypeProductoServicio.Producto))
                    $("#DivProductos").append(htmlProductoServicio);
                else if (parseInt(dataProSer[index].IdTipoSorP) == parseInt(frmProspectos.Util.Codes.TypeProductoServicio.Servicio))
                    $("#DivServicios").append(htmlProductoServicio);

            }
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
        //Returns [{Model.subsegmento},{Model.subsegmento},...]
        GetAllSubSegmentos: function (esOfertaIntegral) {
            var subsegmentosArray = new Array();
            $("#SlctSugSegmento option").each(function () {
                var idSubSegmento = $(this).val();
                var textoSubSegmento = $(this).text().trim();
                var isSelected = $(this).is(':selected');
                if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(idSubSegmento) && parseInt(idSubSegmento) > 0) {
                    var subSegmento = new frmProspectos.Model.subSegmento();
                    subSegmento.idSubsegmento = idSubSegmento;
                    subSegmento.todosSeleccion = esOfertaIntegral;
                    subSegmento.nombre = textoSubSegmento;
                    subSegmento.productos = frmProspectos.InformacionGral.GetSubSegmentoProducts(idSubSegmento);
                    subsegmentosArray.push(subSegmento);
                }
            });
            return subsegmentosArray;
        },
        //Returns Model.subsegmento obj
        GetSubSegmentoById: function (subsegmentoSelectedForm, obtenerSoloProductosMarcados) {
            var subSegmento = new frmProspectos.Model.subSegmento();
            subSegmento.idSubsegmento = subsegmentoSelectedForm.id;
            subSegmento.nombre = subsegmentoSelectedForm.nombre;
            subSegmento.todosSeleccion = obtenerSoloProductosMarcados;

            if (obtenerSoloProductosMarcados)
                subSegmento.productos = frmProspectos.InformacionGral.GetSubSegmentoProductsMark(subsegmentoSelectedForm.id);
            else
                subSegmento.productos = frmProspectos.InformacionGral.GetSubSegmentoProducts(subsegmentoSelectedForm.id);

            return subSegmento;
        },
        //Returns [{Model.productoSubSegmento},{Model.productoSubSegmento},...]
        GetSubSegmentoProducts: function (idSubSegmento) {
            var productosSubSegmento = new Array();
            $("input[name=" + idSubSegmento + "]").each(function () {
                var producto = new frmProspectos.Model.productoSubSegmento();
                producto.id = $(this).attr('value');
                producto.nombre = $(this).parent().text();
                producto.seleccionado = $(this).is(':checked');
                productosSubSegmento.push(producto);
            });
            return productosSubSegmento;
        },
        //Returns [{Model.productoSubSegmento},{Model.productoSubSegmento},...] solo productos que se encuentren checados
        GetSubSegmentoProductsMark: function (idSubSegmento) {
            var productosSubSegmento = new Array();
            $("input[name=" + idSubSegmento + "]").each(function () {
                if ($(this).is(':checked')) {
                    var producto = new frmProspectos.Model.productoSubSegmento();
                    producto.id = $(this).attr('value');
                    producto.nombre = $(this).parent().text();
                    producto.seleccionado = true;
                    productosSubSegmento.push(producto);
                }
            });
            return productosSubSegmento;
        },
        //Return [{Model.servicio},{Model.servicio},...]
        GetAllServicios: function () {
            var arrayServicios = new Array();
            $("input[name='Servicios']").each(function () {
                var servicio = new frmProspectos.Model.servicio();
                servicio.id = $(this).attr('value');
                servicio.nombre = $(this).parent().text();
                servicio.seleccionado = $(this).is(':checked');
                arrayServicios.push(servicio);
            });
            return arrayServicios;
        },
        //Return [{Model.servicio},{Model.servicio},...]
        GetServiciosMark: function () {
            var arrayServicios = new Array();
            $("input[name='Servicios']").each(function () {
                if ($(this).is(':checked')) {
                    var servicio = new frmProspectos.Model.servicio();
                    servicio.id = $(this).attr('value');
                    servicio.nombre = $(this).parent().text();
                    servicio.seleccionado = $(this).is(':checked');
                    arrayServicios.push(servicio);
                }
            });
            return arrayServicios;
        },
        //Return [{Model.subsegmento},{Model.subsegmento},...]
        GetSubSegmentosDataModel: function (esOfertaIntegral) {
            var SubSegmentos = new Array();
            if (esOfertaIntegral) {
                //Si es oferta integral me trae todos los productos.
                SubSegmentos = frmProspectos.InformacionGral.GetSubSegmentosArray(true)
            }
            else {
                //Si no es oferta integral solo me trae los productos que esten seleccionados.
                SubSegmentos = frmProspectos.InformacionGral.GetSubSegmentosArray(false);
            }
            return SubSegmentos;
        },
        //Return [{Model.servicio},{Model.servicio},...]
        GetServiciosDataModel: function (esOfertaIntegral) {
            if (esOfertaIntegral)
                return frmProspectos.InformacionGral.GetAllServicios();
            else
                return frmProspectos.InformacionGral.GetServiciosMark();
        },
        CargarServicios: function (servicios) {
            if (typeof (servicios) !== "undefined") {
                if (servicios.items.length > 0) {
                    $("#DivServicios").html('');
                    var htmlServicio = '';
                    for (var indexServicio = 0; indexServicio < servicios.items.length; indexServicio++) {
                        htmlServicio = '';
                        htmlServicio += '<li class="list-group-item">';
                        htmlServicio += '<label class="checkbox-inline">';
                        htmlServicio += '<input type="checkbox" class="Servicios" onchange="frmProspectos.InformacionGral.CambiarAOfertaIntegral();" name="Servicios" value="' + servicios.items[indexServicio].id + '">' + servicios.items[indexServicio].Descripcion + '</label>';
                        htmlServicio += '</li>';
                        $("#DivServicios").append(htmlServicio);
                    }
                }
            }
        },
        CargarSubSegmentosProductos: function (SubsegmentosProductos, idSubsegmento) {


            if (typeof (SubsegmentosProductos) !== "undefined") {
                if (SubsegmentosProductos.length > 0  && idSubsegmento !== '') {
                    for (var indexSegmento = 0; indexSegmento < SubsegmentosProductos.length; indexSegmento++) {
                        if(SubsegmentosProductos[indexSegmento].id ===parseInt(idSubsegmento)){
                            var htmlSubSegmento = '';
                            htmlSubSegmento += '<div id="productos-L' + SubsegmentosProductos[indexSegmento].id + '-box" class="panel-group">';
                            htmlSubSegmento += '<div class="panel panel-default">';
                            htmlSubSegmento += '<ul class="list-group">';
                            htmlSubSegmento += '<li class="list-group-item list-group-item-info">';
                            htmlSubSegmento += '<label class="checkbox-inline">';
                            htmlSubSegmento += '<input type="checkbox" id="ChkSub' + SubsegmentosProductos[indexSegmento].id + '" onchange="frmProspectos.InformacionGral.CheckAllBySubsegmento(this.value,this.checked)" value="' + SubsegmentosProductos[indexSegmento].id + '"> ' + SubsegmentosProductos[indexSegmento].Descripcion + '</label>';
                            htmlSubSegmento += '<a href="#productos-L' + SubsegmentosProductos[indexSegmento].id + '" data-parent="#productos-' + SubsegmentosProductos[indexSegmento].id + '-box" data-toggle="collapse">';
                            htmlSubSegmento += '  <i class="fa fa-caret-down"></i>';
                            htmlSubSegmento += '</a>';
                            htmlSubSegmento += '</li>';
                            htmlSubSegmento += '<div id="productos-L' + SubsegmentosProductos[indexSegmento].id + '" class="panel-collapse fade collapse">';
                            htmlSubSegmento += '<div class="panel-body" id="DivProductosSegmento' + SubsegmentosProductos[indexSegmento].id + '">';
                            //Agrega productos que estan ligados con el subsegmento actual.
                            for (var indexPSeg = 0; indexPSeg < SubsegmentosProductos[indexSegmento].productos.length; indexPSeg++) {
                                htmlSubSegmento += '<li class="list-group-item">';
                                htmlSubSegmento += '<label class="checkbox-inline">';
                                htmlSubSegmento += '<input type="checkbox" onchange="frmProspectos.InformacionGral.CheckByProducto(this)" class="Segmento' + SubsegmentosProductos[indexSegmento].id + '" name="Productos" value="' + SubsegmentosProductos[indexSegmento].productos[indexPSeg].id + '"> ' + SubsegmentosProductos[indexSegmento].productos[indexPSeg].Descripcion + '</label>';
                                htmlSubSegmento += '</li>';
                            }
                            htmlSubSegmento += '</div>';
                            htmlSubSegmento += '</div>';
                            htmlSubSegmento += '</ul>';
                            htmlSubSegmento += '</div>';
                            htmlSubSegmento += '</div>';

                            $("#DivSubSegmentos").html('').append(htmlSubSegmento);
                            break;
                        }

                    }
                }
            }
        },


        // Codigo Arturo 14-10-2016
        CheckAllBySubsegmento: function (idSubsegmento, isChecked) {
            var $productosSubSegmento = $("input[name='Productos'].Segmento" + idSubsegmento);
            if (isChecked) {
                $productosSubSegmento.each(function () { $(this).prop('checked', true); });
            } else {
                $productosSubSegmento.each(function () { $(this).prop('checked', false); });
            }
            frmProspectos.InformacionGral.CambiarAOfertaIntegral();
        },
        CheckByProducto: function (checkProducto) {
            var idSubSegmento = checkProducto.classList[0].split('Segmento')[1];
            var isChecked = checkProducto.checked;

            if (AllProductsSubSegmentoChecked(idSubSegmento, isChecked)) {

            }
            else {


            }
            function AllProductsSubSegmentoChecked(idSubSegmento, isCheckedProducto) {
                if (isCheckedProducto) {
                    var allChecked = true;
                    $("input[name='Productos'].Segmento" + idSubSegmento).each(function () {
                        if (!$(this).is(':checked')) {
                            if (allChecked) {
                                allChecked = false;
                            }
                        }
                    });
                    if (allChecked) {
                        $("#ChkSub" + idSubSegmento).prop('checked', true);
                    }
                }
                else {
                    if ($("#ChkSub" + idSubSegmento).is(':checked'))
                        $("#ChkSub" + idSubSegmento).prop('checked', false);
                }
            }

            frmProspectos.InformacionGral.CambiarAOfertaIntegral();
        },
        CambiarAOfertaIntegral: function () {
            var numChecksServicios = $("#DivServicios input[type='checkbox']").length;
            var numChecksCheckedServicios = $("#DivServicios input[type=checkbox]:checked").length;

            var numChecksSubsegmentos = $("#DivSubSegmentos input[type='checkbox']").length;
            var numChecksCheckedSubsegmentos = $("#DivSubSegmentos input[type=checkbox]:checked").length;

            if (parseInt(numChecksServicios) === parseInt(numChecksCheckedServicios) &&
                parseInt(numChecksSubsegmentos) === parseInt(numChecksCheckedSubsegmentos)) {
                frmProspectos.InformacionGral.ActivaOfertaIntegral(true);
            }
        },
        ActivaOfertaIntegral: function(isOfertaIntegral) {
            if (isOfertaIntegral) {
                //Se oculta el Div de Servicios y Subsegmentos
                $('.ofertaParticular').addClass('hidden');
                //Se cambia el toggle a Activo
                $("#div-switch-oferta-integral .switch-animate").removeClass('switch-off').addClass('switch-on');

                frmProspectos.InformacionGral.CheckOfertaIntegral(true);
                //frmProspectos.InformacionGral.ShowCurrentProductsSubSegmento(true);
                frmProspectos.InformacionGral.ShowHideItemsOfertaIntegral(true);
            }
        },
        //Regresa todos los productos, de todos los subsegmentos.
        GetProductosPorSubsegmento: function (idSubSegmento, esOfertaIntegral) {
            var productosSubSegmento = new Array();
            $("input.Segmento" + idSubSegmento).each(function () {
                var producto = new frmProspectos.Model.productoSubSegmento();
                producto.id = $(this).attr('value');
                producto.nombre = $(this).parent().text();
                producto.seleccionado = (esOfertaIntegral) ? true : $(this).is(':checked');
                productosSubSegmento.push(producto);
            });
            return productosSubSegmento;
        },

        GetSubSegmentosArray: function (esOfertaIntegral) {
            var subsegmentosArray = new Array();
            $("#SlctSugSegmento :selected").each(function() {
                if (String($(this).val()) !== '' && parseInt($(this).val()) > 0) {
                    var idSubSegmento = $(this).val();
                    var textoSubSegmento = $(this).text().trim();
                    var isSelected = ((esOfertaIntegral) ? true : $(this).is(':selected'));
                    if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(String(idSubSegmento)) && parseInt(idSubSegmento) > 0) {
                        var subSegmento = new frmProspectos.Model.subSegmento();
                        subSegmento.idSubsegmento = idSubSegmento;
                        subSegmento.todosSeleccion = ((esOfertaIntegral) ? true : $("#ChkSub" + idSubSegmento).is(':checked'));
                        subSegmento.nombre = textoSubSegmento;
                        subSegmento.productos = frmProspectos.InformacionGral.GetProductosPorSubsegmento(idSubSegmento, esOfertaIntegral);
                        subsegmentosArray.push(subSegmento);
                    }
                }
            });
            return subsegmentosArray;
        },

        //Codigo Arturo---------------------------------------------------------<<<
        // Codigo Arturo 14-10-2016
    },

    /*Contactos*/
    Contactos: {
        AddContacto: function () {
            var contacto = this.CreateContacto();
            var htmlContacto = '';
            htmlContacto += '<label id="LCon' + contacto.id + '" class="btn bg-contacto animated fadeIn ">';
            htmlContacto += '<input id="RCon' + contacto.id + '" type="radio" name="contactos" onchange="frmProspectos.Contactos.SwitchContacto(this.id)">';
            htmlContacto += '<i class="fa fa-check"></i>';
            htmlContacto += '<a id="ACon' + contacto.id + '" onclick="return frmProspectos.Contactos.BorrarContacto(this.id)" class="btn btn-danger">ELIMINAR</a>';
            htmlContacto += '</label>';
            $("#DivContactos").append(htmlContacto);
        },
        CreateContacto: function () {
            if (typeof (arrayContactos) === "undefined" || arrayContactos.length <= 0) {
                //Primera vez
                arrayContactos = new Array();
                var contacto = new frmProspectos.Model.contacto();
                contacto.id = 1;
                arrayContactos.push(contacto);
            }
            else {
                var lastContacto = this.GetLastIdContacto();
                var contacto = new frmProspectos.Model.contacto();
                contacto.id = lastContacto.id + 1;
                arrayContactos.push(contacto);
            }

            frmProspectos.Contactos.ShowHideInformacion();
            return contacto;
        },
        GetLastIdContacto: function () {
            arrayContactos.sort(function (a, b) { return a - b })[arrayContactos.length - 1]
            return arrayContactos.sort(function (a, b) { return a - b })[arrayContactos.length - 1];
        },
        BorrarContacto: function (idCurrentContacto) {
            alertify.confirm("¿Esta seguro que desea eliminar el contacto?", function (e) {
                if (e) {
                    var currentId = idCurrentContacto.split('ACon')[1];
                    var idMainContentCo = '#LCon' + currentId;
                    var idRCon = '#RCon' + currentId;
                    var idACon = '#ACon' + currentId;

                    $(idMainContentCo).remove();
                    $(idACon).remove();
                    var indexContacto = frmProspectos.Contactos.GetIndexContacto(currentId);
                    arrayContactos.splice(indexContacto, 1);
                    frmProspectos.Contactos.ReordenarContactos();
                    frmProspectos.Contactos.ClearFormContacto();
                    //
                    idUltimoContacto = undefined;
                    frmProspectos.Contactos.MantenerInformacionBorrado();
                }
            });

            return false;
        },
        GetIndexContacto: function (idCurrentContacto) {
            if (typeof (arrayContactos) != "undefined") {
                if (arrayContactos.length > 0) {
                    for (var indexCon = 0; indexCon < arrayContactos.length; indexCon++) {
                        if (parseInt(idCurrentContacto) == parseInt(arrayContactos[indexCon].id)) {
                            return indexCon;
                            break;
                        }
                    }
                }
            }
        },
        ReordenarContactos: function () {
            //Ordenar elementos HTML y en Array
            if (typeof (arrayContactos) != "undefined") {
                if (arrayContactos.length > 0) {
                    for (var indexContacto = 0; indexContacto < arrayContactos.length; indexContacto++) {
                        var nuevoId = indexContacto + 1;
                        $("#LCon" + arrayContactos[indexContacto].id).attr('id', "LCon" + nuevoId);
                        $("#RCon" + arrayContactos[indexContacto].id).attr('id', "RCon" + nuevoId);
                        $("#ACon" + arrayContactos[indexContacto].id).attr('id', "ACon" + nuevoId);
                        arrayContactos[indexContacto].id = nuevoId;
                    }
                }
            }
            console.table(arrayContactos);
        },
        MantenerInformacionBorrado: function () {
            $("input[name='contactos']").each(function () {
                if ($(this).is(':checked')) {
                    var idContacto = $("#RCon1").attr("id").split('RCon')[1];
                    frmProspectos.Contactos.LoadContacto(frmProspectos.Contactos.GetContactoById(idContacto));
                    $("#DivFormContacto").removeClass('hide');
                    return false;
                }
                else {
                    $("#DivFormContacto").addClass('hide');
                }
            });
            frmProspectos.Contactos.ShowHideInformacion();
        },
        ShowHideInformacion: function () {
            if (typeof (arrayContactos) == "undefined" || arrayContactos.length <= 0) {
                $("#DivInfoContacto").removeClass('hide').addClass('visible');
                $("#DivFormContacto").removeClass('hide').addClass('hide');
            }
            else if (typeof (arrayContactos) != "undefined" || arrayContactos.length > 0) {
                $("#DivInfoContacto").removeClass('visible').addClass('hide');
            }
            else {
                $("#DivInfoContacto").removeClass('hide').addClass('visible');
            }
        },
        SwitchContacto: function (idCurrentContacto) {
            $("#DivFormContacto").removeClass('hide');
            var currentId = idCurrentContacto.split('RCon')[1];
            var contacto;

            if (typeof (idUltimoContacto) == "undefined") {
                idUltimoContacto = currentId;
            }
            else if (parseInt(idUltimoContacto) != parseInt(currentId)) {
                this.SetInformacionContacto(this.GetContactoById(idUltimoContacto));
                this.ClearFormContacto();
                idUltimoContacto = currentId;
            }
            contacto = this.GetContactoById(currentId);
            contacto.principal = true;
            this.LoadContacto(contacto);
        },
        GetContactoById: function (idCurrentContacto) {
            for (var indexContacto = 0; indexContacto < arrayContactos.length; indexContacto++) {
                if (parseInt(arrayContactos[indexContacto].id) == parseInt(idCurrentContacto))
                    return arrayContactos[indexContacto];
            }
        },
        LoadContacto: function (contacto) {
            document.getElementById("InptTxtNombreContactoPrincipal").value = contacto.nombres;
            document.getElementById("InptTxtPrimerApellidoContactoPrincipal").value = contacto.apellidoPaterno;
            document.getElementById("InptTxtSegundoApellidoContactoPrincipal").value = contacto.apellidoMaterno;
            document.getElementById("InptTxtCargo").value = contacto.cargo;
            document.getElementById("InptNmbrTelefonoContactoPrincipal").value = contacto.telefono;
            document.getElementById("InptNmbrExtension").value = contacto.extension;
            document.getElementById("InptMailEmail").value = contacto.email;
            document.getElementById("InptTxtComentariosContactoPrincipal").value = contacto.comentarios;
        },
        SetInformacionContacto: function (contacto) {
            contacto.nombres = document.getElementById("InptTxtNombreContactoPrincipal").value;
            contacto.apellidoPaterno = document.getElementById("InptTxtPrimerApellidoContactoPrincipal").value;
            contacto.apellidoMaterno = document.getElementById("InptTxtSegundoApellidoContactoPrincipal").value;
            contacto.cargo = document.getElementById("InptTxtCargo").value;
            contacto.telefono = document.getElementById("InptNmbrTelefonoContactoPrincipal").value;
            contacto.extension = document.getElementById("InptNmbrExtension").value;
            contacto.email = document.getElementById("InptMailEmail").value;
            contacto.comentarios = document.getElementById("InptTxtComentariosContactoPrincipal").value;
            contacto.principal = false;
        },
        SetInformacionBlur: function (control) {
            if (typeof (idUltimoContacto) != "undefined") {
                var contacto = this.GetContactoById(idUltimoContacto);
                switch (String(control.id)) {
                    case "InptTxtNombreContactoPrincipal":
                        contacto.nombres = control.value;
                        break;
                    case "InptTxtPrimerApellidoContactoPrincipal":
                        contacto.apellidoPaterno = control.value;
                        break;
                    case "InptTxtSegundoApellidoContactoPrincipal":
                        contacto.apellidoMaterno = control.value;
                        break;
                    case "InptTxtCargo":
                        contacto.cargo = control.value;
                        break;
                    case "InptNmbrTelefonoContactoPrincipal":
                        contacto.telefono = control.value;
                        break;
                    case "InptNmbrExtension":
                        contacto.extension = control.value;
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
        ValidateContactos: function () {
            var htmlContactoErrors = '';
            var mainResponse = new frmProspectos.Model.ResponseValidateItem();

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
            var responseValidateItem = new frmProspectos.Model.ResponseValidateItem();

            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(itemContacto.nombres)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(itemContacto.nombres, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,50}$/g)) {
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = " Contacto # " + itemContacto.id;
                    itemErrorObj.MsgError = "Nombre solo permite caracteres alfanúmericos y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlContacto += frmProspectos.Model.HtmlErrors.HtmlErrorTabContactos(itemErrorObj);

                    if (isValid) {
                        isValid = false;
                    }
                }
                auxAllEmpty = false;
            }

            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(itemContacto.apellidoPaterno)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(itemContacto.apellidoPaterno, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,50}$/g)) {
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = " Contacto # " + itemContacto.id;
                    itemErrorObj.MsgError = "Apellido Paterno solo permite caracteres alfanúmericos y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlContacto += frmProspectos.Model.HtmlErrors.HtmlErrorTabContactos(itemErrorObj);

                    if (isValid) {
                        isValid = false;
                    }
                }
                auxAllEmpty = false;
            }

            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(itemContacto.apellidoMaterno)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(itemContacto.apellidoMaterno, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,50}$/g)) {
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = " Contacto # " + itemContacto.id;
                    itemErrorObj.MsgError = "Apellido Materno solo permite caracteres alfanúmericos y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlContacto += frmProspectos.Model.HtmlErrors.HtmlErrorTabContactos(itemErrorObj);
                    if (isValid) {
                        isValid = false;
                    }
                }
                auxAllEmpty = false;
            }

            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(itemContacto.cargo)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(itemContacto.cargo, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,50}$/g)) {
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = " Contacto # " + itemContacto.id;
                    itemErrorObj.MsgError = "Cargo solo permite caracteres alfanúmericos y/o la longitud del texto no debe superar los 50 caracteres.";
                    htmlContacto += frmProspectos.Model.HtmlErrors.HtmlErrorTabContactos(itemErrorObj);

                    if (isValid) {
                        isValid = false;
                    }
                }
                auxAllEmpty = false;
            }

            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(itemContacto.telefono)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.NumbersLength(itemContacto.telefono, 8, 10)) {
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = " Contacto # " + itemContacto.id;
                    itemErrorObj.MsgError = "Teléfono solo permite caracteres númericos entre 8 y 10 digítos";
                    htmlContacto += frmProspectos.Model.HtmlErrors.HtmlErrorTabContactos(itemErrorObj);
                    if (isValid) {
                        isValid = false;
                    }
                }
                auxAllEmpty = false;
            }

            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(itemContacto.extension)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.NumbersLength(itemContacto.extension, 1, 10)) {
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = " Contacto # " + itemContacto.id;
                    itemErrorObj.MsgError = " N.Extensión solo permite caracteres númericos entre 1 y 10 digítos";
                    htmlContacto += frmProspectos.Model.HtmlErrors.HtmlErrorTabContactos(itemErrorObj);
                    if (isValid) {
                        isValid = false;
                    }
                }
                auxAllEmpty = false;
            }

            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(itemContacto.email)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.Email(itemContacto.email)) {
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = " Contacto # " + itemContacto.id;
                    itemErrorObj.MsgError = " E-mail no es una cuenta de Correo Eléctronico válida";
                    htmlContacto += frmProspectos.Model.HtmlErrors.HtmlErrorTabContactos(itemErrorObj);
                    if (isValid) {
                        isValid = false;
                    }
                }
                auxAllEmpty = false;
            }

            if (!TelstockBase.Security.Regex.Expressions.Common.EmptyOrWithSpace(itemContacto.comentarios)) {
                if (!TelstockBase.Security.Regex.Expressions.Common.CustomNC(itemContacto.comentarios, /^[a-zA-Z_áéíóúñÑÁÉÍÓÚ0-9\s]{1,150}$/g)) {
                    itemErrorObj = new frmProspectos.Model.ItemError();
                    itemErrorObj.ErrorField = " Contacto # " + itemContacto.id;
                    itemErrorObj.MsgError = " Comentarios solo permite caracteres alfanúmericos y/o la longitud del texto no debe superar los 150 caracteres.";
                    htmlContacto += frmProspectos.Model.HtmlErrors.HtmlErrorTabContactos(itemErrorObj);
                    if (isValid) {
                        isValid = false;
                    }
                }
                auxAllEmpty = false;
            }

            //Si existe un elemento en blanco
            if (auxAllEmpty) {
                itemErrorObj = new frmProspectos.Model.ItemError();
                itemErrorObj.ErrorField = " Contacto # " + itemContacto.id;
                itemErrorObj.MsgError = " debe contener información almenos en alguno de sus campos";
                htmlContacto += frmProspectos.Model.HtmlErrors.HtmlErrorTabContactos(itemErrorObj);
                if (isValid) {
                    isValid = false;
                }
            }

            responseValidateItem.IsValid = isValid;
            responseValidateItem.HtmlErrors = htmlContacto;

            return responseValidateItem;
        },
        GetContatosDataModel: function () {
            if (typeof (arrayContactos) !== "undefined" && arrayContactos.length > 0)
                return arrayContactos;
            else
                return [];
        },
        //
        AddContactoExist: function (contacto) {
            this.CreateContactoExist(contacto);
            var htmlContacto = '';
            htmlContacto += '<label id="LCon' + contacto.id + '" class="btn bg-contacto animated fadeIn ">';
            htmlContacto += '<input id="RCon' + contacto.id + '" type="radio" name="contactos" onchange="frmProspectos.Contactos.SwitchContacto(this.id)">';
            htmlContacto += '<i class="fa fa-check"></i>';
            htmlContacto += '<a id="ACon' + contacto.id + '" onclick="return frmProspectos.Contactos.BorrarContacto(this.id)" class="btn btn-danger">ELIMINAR</a>';
            htmlContacto += '</label>';
            $("#DivContactos").append(htmlContacto);
            frmProspectos.Contactos.SetContactoPrincipal(contacto);
        },
        CreateContactoExist: function (contactoEx) {
            if (typeof (arrayContactos) === "undefined" || arrayContactos.length <= 0) {
                //Primera vez
                arrayContactos = new Array();
                var contacto = new frmProspectos.Model.contacto();
                contacto.id = contactoEx.id;
                contacto.fotografia = contactoEx.fotografia;;
                contacto.nombres = contactoEx.nombres;
                contacto.apellidoPaterno = contactoEx.apellidoPaterno;
                contacto.apellidoMaterno = contactoEx.apellidoMaterno;
                contacto.cargo = contactoEx.cargo;
                contacto.telefono = contactoEx.telefono;
                contacto.extension = contactoEx.extension;
                contacto.email = contactoEx.email;
                contacto.comentarios = contactoEx.comentarios;
                contacto.principal = contactoEx.principal;
                arrayContactos.push(contacto);
                idUltimoContacto = contacto.id;
            }
            else {
                var lastContacto = this.GetLastIdContacto();
                var contacto = new frmProspectos.Model.contacto();
                contacto.id = lastContacto.id + 1;
                contacto.fotografia = contactoEx.fotografia;;
                contacto.nombres = contactoEx.nombres;
                contacto.apellidoPaterno = contactoEx.apellidoPaterno;
                contacto.apellidoMaterno = contactoEx.apellidoMaterno;
                contacto.cargo = contactoEx.cargo;
                contacto.telefono = contactoEx.telefono;
                contacto.extension = contactoEx.extension;
                contacto.email = contactoEx.email;
                contacto.comentarios = contactoEx.comentarios;
                contacto.principal = contactoEx.principal;
                arrayContactos.push(contacto);
                idUltimoContacto = contacto.id;
            }
        },
        SetContactoPrincipal: function (contacto) {
            if (typeof (contacto) !== "undefined") {
                if (Boolean(contacto.principal)) {
                    $("input[name=contactos]").each(function () {
                        var idContacto = $(this).attr('id').split('RCon')[1];
                        if (parseInt(contacto.id) == parseInt(idContacto)) {
                            $(this).prop('checked', true);
                            $(this).parent().addClass('active');
                            frmProspectos.Contactos.LoadContacto(contacto);
                            $("#DivFormContacto").removeClass('hide');
                        }
                    });
                }
            }
        }
    },

    /*Archivos*/
    Archivos: {
        SubirArchivo: function () {
            var archivo = $("#InptFileArc")[0].files;
            return File.UploadFile({
                idControlInputFile: "InptFileArc",
                cargaMultiple: false,
                tipoArchivo: {
                    validar: false,
                    tipos: [TipoArchivo.Imagen]
                },
                peso: 1048576
            }).then(function (response) {
                switch (response.request.status) {
                    case parseInt(StatusCode.OK):
                        var objFile = new frmProspectos.Model.archivo();
                        objFile.id = response.data;
                        objFile.type = archivo[0].name.split(".")[1].toLowerCase();
                        objFile.mimeType = archivo[0].type;
                        objFile.nombre = archivo[0].name;
                        objFile.url = "";
                        arrayArchivos.push(objFile);
                        break;
                }
            }).catch(function (error) {
                console.log("error", error);
            });
        },
        ActualizaImgPerfil: function(){
            var idArchivo =  $("#Imagen").val();
            return File.ActualizaArchivo(idArchivo, {
                idControlInputFile: "InptImgPerfil",
                cargaMultiple: false,
                tipoArchivo: {
                    validar: true,
                    tipos: [TipoArchivo.Imagen]
                },
                peso: 1048576
            });
        },
        SubirImgPerfil: function(){
            return File.UploadFile({
                idControlInputFile: "InptImgPerfil",
                cargaMultiple: false,
                tipoArchivo:{
                    validar: false,
                    tipos: [TipoArchivo.Imagen]
                },
                peso: 1048576
            }).then(function (response) {
                switch (response.request.status) {
                    case parseInt(StatusCode.OK):
                        console.log("Respuesta", response);
                        $("#Imagen").val(response.data);
                        break;
                }
            }).catch(function (error) {
                console.log("error", error);
            });
        },
        EliminarImgPerfil: function () {
            var idImagenPerfil = $("#Imagen").val();
            if (idImagenPerfil !== '' && typeof(idImagenPerfil) !== 'undefined') {
                return File.EliminarArchivo();
                $("#Imagen").val("");
            }
        },
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
                            async: true,
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
        ValidateArchivo: function () {
            var htmlArchivoErrors = '';
            var mainResponse = new frmProspectos.Model.ResponseValidateItem();
            var maxLentgh;
            var isValid = true;
            var itemErrorObj;
            var existeErrorEnArchivo = false;
            var archivo = document.getElementById('InptFileArc');

            if (archivo != null) {
                if (parseInt(archivo.files.length) > parseInt(0)) {
                    for (var indexArchivo = 0; indexArchivo < archivo.files.length; indexArchivo++) {
                        if (TelstockBase.Security.Regex.Expressions.Common.ExtensionFile(archivo.files[0].name.toLowerCase(), this.Extensiones())) {
                            /*Peso 1 mb valor expresado en Bytes 1>-mb1242880>5mb->5242880*/
                            if (parseInt(archivo.files[0].size) <= parseInt(1242880)) {
                                isValid = true;
                            }
                            else if (parseInt(archivo.files[0].size) > parseInt(1)) {
                                itemErrorObj = new frmProspectos.Model.ItemError();
                                itemErrorObj.ErrorField = " Archivo " + archivo.files[0].name;
                                itemErrorObj.MsgError = "Supera el límite máximo de carga, la longitud no debe ser mayor a 1 MB";
                                htmlArchivoErrors += frmProspectos.HtmlErrors.HtmlErrorArchivos(itemErrorObj);
                                if (isValid) {
                                    isValid = false;
                                }
                            }
                        }
                        else {
                            itemErrorObj = new frmProspectos.Model.ItemError();
                            itemErrorObj.ErrorField = " Archivo " + archivo.files[0].name;
                            itemErrorObj.MsgError = "Es un tipo de archivo inválido, Solo se permiten archivos con las siguientes extensiones ['xls', 'xlsx', 'doc', 'docx', 'ppt', 'pps', 'txt', 'pdf', 'jpg', 'png', 'ico']";
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
        Extensiones: function () {
            //Excel[xls,xlsx],Word[doc,docx],PowerPoint[ppt,pps],Text[txt],Pdf[pdf],Imagen[jpg,png,ico]
            return ['xls', 'xlsx', 'doc', 'docx', 'ppt', 'pps', 'txt', 'pdf', 'jpg', 'png', 'ico'];
        },
        GetArchivo: function () {
            return document.getElementById("InptFileArc").files[0];
        },

        SetArchivos: function (archivos) {
            console.log("archivos set Archivos",archivos);
            $("#listaArchivosProspecto").html('');
            if (archivos.length > 0) {
                for (var indexArchivo = 0; indexArchivo < archivos.length; indexArchivo++) {
                    $("#listaArchivosProspecto").append(frmProspectos.Archivos.GetHtmlArchivo(archivos[indexArchivo]));
                }

                frmProspectos.Util.Flexslider();
                frmProspectos.Util.Fancybox();

            }
        },
        GetHtmlArchivo: function (objFile) {
            console.log("objFile",objFile)
            var htmlArchivo = '';
            var sourceArchivo = this.GetImageTypeFile(objFile);
            console.log("sourceArchivo",sourceArchivo);
            htmlArchivo += '<li>';
            htmlArchivo += '<div class="thumbnail">';
            htmlArchivo += '<a id="File' + objFile.id + '" class="fancybox-thumbs" data-fancybox-group="thumb" href="' + sourceArchivo.src + '" onclick="frmProspectos.Archivos.DescargarArchivo(' +"'"+ objFile.id +"'" +');" title="' + objFile.nombre + '">';
            htmlArchivo += '<img id="' + objFile.id + '" src="' + sourceArchivo.src + '">';
            htmlArchivo += '</a>';
            htmlArchivo += '</div>';
            htmlArchivo += '<p>' + objFile.nombre + '</p>';
            htmlArchivo += '</li>';

            return htmlArchivo;
        },
        GetImageTypeFile: function (archivo) {
            var urlTypeImage = '';
            var source = '';

            if (typeof (archivo) != "undefined" && archivo.nombre != "") {
                var extension = archivo.nombre.split(".")[1].toLowerCase();
                if (typeof (extension) != "undefined") {
                    console.log("extension",extension);
                    switch (extension) {
                        case frmProspectos.Util.FileTypes.doc.ext:
                        case frmProspectos.Util.FileTypes.docx.ext:
                            urlTypeImage = "/Content/img/archivos/archivo_word.png";
                            source = '/Content/img/archivos/archivo_word.png';
                            break;
                        case frmProspectos.Util.FileTypes.xls.ext:
                        case frmProspectos.Util.FileTypes.xlsx.ext:
                            urlTypeImage = "/Content/img/archivos/archivo_excel.png";
                            source = '/Content/img/archivos/archivo_excel.png';
                            break;
                        case frmProspectos.Util.FileTypes.ppt.ext:
                        case frmProspectos.Util.FileTypes.pptx.ext:
                            urlTypeImage = "/Content/img/archivos/archivo_ppt.png";
                            source = "/Content/img/archivos/archivo_ppt.png";
                            break;
                        case frmProspectos.Util.FileTypes.pdf.ext:
                            urlTypeImage = "/Content/img/archivos/archivo_pdf.png";
                            source = "/Content/img/archivos/archivo_pdf.png";
                            break;
                        case frmProspectos.Util.FileTypes.jpeg.ext:
                        case frmProspectos.Util.FileTypes.png.ext:
                        case frmProspectos.Util.FileTypes.jpg.ext:
                            urlTypeImage = "/Content/img/archivos/archivo_imagen.png";
                            source = App.obtenerUrlBase() + URI.Archivo.Descargar +  archivo.id;
                            break;
                        default:
                            urlTypeImage = "/Content/img/archivos/archivo_txt.png";
                            source = "/Content/img/archivos/archivo_txt.png";
                    }
                }
            }

            return { urlTypeImage: urlTypeImage, src: source };
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
        DescargarArchivo: function (idArchivo) {
            window.location.href = App.obtenerUrlBase() + URI.Archivo.Descargar + idArchivo;
        },
    },

    /*Form*/
    Form: {
        GestionVenta: function(){
            var idProspecto = window.sessionStorage.getItem(SessionStorageItem.IDPROSPECTO);
            if (typeof (idProspecto) !== 'undefined' && idProspecto !== '') {
                window.sessionStorage.setItem(SessionStorageItem.IDPROSPECTOGV, idProspecto);
                window.location.href = Pages.GestionVenta.Index;
            }
        },
        EnviarPeticiones: function () {
            //contieneImagen = false;
            //eliminoImagen = true;

            var prospecto;
            var subirArchivosExpendiente = (($("#InptFileArc")[0].files.length > 0) ? true: false);
            var subirImagenPerfil = (($("#InptImgPerfil")[0].files.length > 0) ? true : false);

            //Se sube un nuevo archivo al expediente digital
            //Se sube la foto del prospecto o se actualiza la foto.
            if (subirArchivosExpendiente && subirImagenPerfil) {
                //Actualiza  la Imagen de Perfil.
                if (contieneImagen) {
                    frmProspectos.Archivos.SubirArchivo().then(function () {
                        frmProspectos.Archivos.ActualizaImgPerfil().then(function () {
                            prospecto = frmProspectos.Form.Values.GetValuesModel();
                            frmProspectos.Form.UpdateProspecto(prospecto);
                        }).catch(function () {
                            console.error("error al actualizar la Imagen de Perfil");
                        });
                    }).catch(function () {
                        console.log("error al subir el archivo ---- Actualiza la imagen de perfil ");
                    });
                } else {
                    //Va  subir su imagen de perfil
                    frmProspectos.Archivos.SubirArchivo().then(function () {
                        frmProspectos.Archivos.SubirImgPerfil().then(function () {
                            prospecto = frmProspectos.Form.Values.GetValuesModel();
                            frmProspectos.Form.UpdateProspecto(prospecto);
                        }).catch(function () {
                            console.error("error al subir la imagen de perfil");
                        });
                    }).catch(function () {
                        console.log("error al subir archivo ---- -Va a subir su imagen de perfil en la edicion");
                    });
                }
            }else if(subirArchivosExpendiente) {
                frmProspectos.Archivos.SubirArchivo().then(function () {
                    prospecto = frmProspectos.Form.Values.GetValuesModel();
                    frmProspectos.Form.UpdateProspecto(prospecto);
                }).catch(function () {
                    console.log("error al subir el archivo ---- Actualiza la imagen de perfil ");
                });
            }else if(subirImagenPerfil){
                if (contieneImagen) {
                    frmProspectos.Archivos.ActualizaImgPerfil().then(function () {
                        prospecto = frmProspectos.Form.Values.GetValuesModel();
                        frmProspectos.Form.UpdateProspecto(prospecto);
                    }).catch(function () {
                        console.error("error al actualizar la Imagen de Perfil");
                    });
                } else {
                    frmProspectos.Archivos.SubirImgPerfil().then(function () {
                        prospecto = frmProspectos.Form.Values.GetValuesModel();
                        frmProspectos.Form.UpdateProspecto(prospecto);
                    }).catch(function () {
                        console.error("error al subir la imagen de perfil");
                    });
                }
            } else {
                prospecto = frmProspectos.Form.Values.GetValuesModel();
                frmProspectos.Form.UpdateProspecto(prospecto);
            }
        },
        ValidateForm: function () {
            var mainValidate = new frmProspectos.Model.ResponseValidateItem();
            var valTabInformacionGrl = frmProspectos.InformacionGral.ValidateInformacionGrl();
            var valContactos = frmProspectos.Contactos.ValidateContactos();
            var valArchivos = frmProspectos.Archivos.ValidateArchivo();
            if (valTabInformacionGrl.IsValid && valContactos.IsValid && valArchivos.IsValid) {
                if (mainValidate.IsValid) {
                    $("#Summary").html('');
                    $("#Summary").addClass('hide');
                }
                mainValidate.IsValid = true;

                alertify.confirm("¿Esta seguro que desea actualizar la información del Prospecto?", function (e) {
                    if (e) {
                        frmProspectos.Form.EnviarPeticiones();
                    }
                });
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
        Values: {
            GetValuesCatalogos: function (tipoCatalogo, valor) {
                var ObjectCatalogo;
                switch (tipoCatalogo) {
                    //Estatus de Obra
                    case 1:
                        ObjectCatalogo = frmProspectos.Form.Values.GetObjectCatalogo(ESTATUSOBRA, valor);
                        break;
                    //Subsegmento
                    case 2:
                        ObjectCatalogo = frmProspectos.Form.Values.GetObjectCatalogo(SUBSEGMENTO, valor);
                        break;
                    //Tipo de Prospecto
                    case 3:
                        ObjectCatalogo = frmProspectos.Form.Values.GetObjectCatalogo(TIPOPROSPECTO, valor);
                        break;
                    case 4:
                        ObjectCatalogo = frmProspectos.Form.Values.GetObjectCatalogo(CAMPANIA, valor);
                        break;
                }
                return ObjectCatalogo;
            },
            GetObjectCatalogo: function (ArrayValores, valor) {
                var ObjectCatalogo;
                if (typeof (ArrayValores) !== 'undefined' && ArrayValores !== null) {
                    for (var iItem = 0; iItem < ArrayValores.length; iItem++) {
                        if (parseInt(ArrayValores[iItem].id) === valor) {
                            ObjectCatalogo = {
                                id: parseInt(ArrayValores[iItem].id),
                                idCatalogo: ArrayValores[iItem].idCatalogo,
                                Descripcion: ArrayValores[iItem].Descripcion,
                                idPadre: ArrayValores[iItem].idPadre
                            }
                        }
                    }
                    return ObjectCatalogo;
                } else {
                    return null;
                }
            },
            GetIdProspecto: function(){
                var IdProspecto = window.sessionStorage.getItem(SessionStorageItem.IDPROSPECTO);
                if (typeof(IdProspecto !== 'undefined' && String(IdProspecto) !== '')) {
                    return IdProspecto;
                } else {
                    window.location.href = Pages.Prospecto.Listado;
                }
            },
            GetValuesModel: function () {
                var Response = new Object();
                var prospecto = new frmProspectos.Model.Prospecto();

                prospecto.id = frmProspectos.Form.Values.GetIdProspecto();
                //IdVendedor
                prospecto.idVendedorAsignado = document.getElementById('SlctVendedor').options[document.getElementById('SlctVendedor').selectedIndex].value;
                //Fotografia

                prospecto.fotografia = ((document.getElementById("Imagen").value == "") ? "" : document.getElementById("Imagen").value);
                //Nombre cliente
                prospecto.cliente.nombre = document.getElementById('InptTxtCliente').value;
                //Obra
                prospecto.cliente.obra = document.getElementById('InptTxtObra').value;

                //Trae el objeto del catalogo Estatus Obra.
                prospecto.estatusObra = frmProspectos.Form.Values.GetValuesCatalogos(1,
                    parseInt(document.getElementById('SlctEstatusObra').options[document.getElementById('SlctEstatusObra').selectedIndex].value));

                //Trae el objeto del catalogo Subsegmento.
                prospecto.subSegmento = frmProspectos.Form.Values.GetValuesCatalogos(2,
                    parseInt(document.getElementById('SlctSugSegmento').options[document.getElementById('SlctSugSegmento').selectedIndex].value));

                //Trae el objeto del catalogo Tipo Prospecto.
                prospecto.tipoProspecto = frmProspectos.Form.Values.GetValuesCatalogos(3,
                    parseInt(document.getElementById('SlctTipoProspecto').options[document.getElementById('SlctTipoProspecto').selectedIndex].value));

                //Campaña
                prospecto.cliente.campania = frmProspectos.Form.Values.GetValuesCatalogos(4,
                    parseInt(document.getElementById('SlctCampania').options[document.getElementById('SlctCampania').selectedIndex].value));
                //Comentarios
                prospecto.cliente.comentarios = document.getElementById('InptTxtComentariosObra').value;

                //Oferta integral [Productos/servicios]
                if ($("#CheckOfertaIntegral").is(':checked')) {
                    prospecto.oportunidadVentaInicial.esOfertaIntegral = true;
                    prospecto.oportunidadVentaInicial.subsegmentosProductos = frmProspectos.InformacionGral.GetSubSegmentosDataModel(true);
                    prospecto.oportunidadVentaInicial.servicios = frmProspectos.InformacionGral.GetServiciosDataModel(true);
                }
                else {
                    prospecto.oportunidadVentaInicial.esOfertaIntegral = false;
                    prospecto.oportunidadVentaInicial.subsegmentosProductos = frmProspectos.InformacionGral.GetSubSegmentosDataModel(false);
                    prospecto.oportunidadVentaInicial.servicios = frmProspectos.InformacionGral.GetServiciosDataModel(false);
                }
                //Razón Social
                prospecto.cliente.razonSocial = document.getElementById('InptTxtRazonSocial').value;
                //Rfc
                prospecto.cliente.rfc = document.getElementById('InptTxtRFC').value;
                //Teléfono
                prospecto.cliente.telefono = document.getElementById('InptTxtTelefono').value;
                //Dirección
                prospecto.cliente.direccion.calle = document.getElementById('InptTxtCalle').value;
                prospecto.cliente.direccion.numero = document.getElementById('InptNmbrNumero').value;
                prospecto.cliente.direccion.colonia = document.getElementById('InptTxtColonia').value;
                prospecto.cliente.direccion.codigoPostal = document.getElementById('InptNmbrCodigoPostal').value;
                prospecto.cliente.direccion.pais.id = document.getElementById('SlctPais').options[document.getElementById('SlctPais').selectedIndex].value;
                prospecto.cliente.direccion.pais.nombre = document.getElementById('SlctPais').options[document.getElementById('SlctPais').selectedIndex].text;
                prospecto.cliente.direccion.estado.id = document.getElementById('SlctEstado').options[document.getElementById('SlctEstado').selectedIndex].value;
                prospecto.cliente.direccion.estado.nombre = document.getElementById('SlctEstado').options[document.getElementById('SlctEstado').selectedIndex].text;
                prospecto.cliente.direccion.municipio.id = document.getElementById('SlctMunicipio').options[document.getElementById('SlctMunicipio').selectedIndex].value;
                prospecto.cliente.direccion.municipio.nombre = document.getElementById('SlctMunicipio').options[document.getElementById('SlctMunicipio').selectedIndex].text;
                prospecto.cliente.direccion.ubicacion.latitud = document.getElementById('InptNmbrLatitud').value;
                prospecto.cliente.direccion.ubicacion.longitud = document.getElementById('InptNmbrLongitud').value;
                prospecto.cliente.direccion.comentarios = document.getElementById('InptTxtComentariosUbicacion').value;

                //Asignación Vendedor.
                prospecto.asignacionVendedor.zona.id = document.getElementById('SlctZona').options[document.getElementById('SlctZona').selectedIndex].value;
                prospecto.asignacionVendedor.zona.nombre = document.getElementById('SlctZona').options[document.getElementById('SlctZona').selectedIndex].text;
                prospecto.asignacionVendedor.plaza.id = document.getElementById('SlctPlaza').options[document.getElementById('SlctPlaza').selectedIndex].value;
                prospecto.asignacionVendedor.plaza.nombre = document.getElementById('SlctPlaza').options[document.getElementById('SlctPlaza').selectedIndex].text;
                prospecto.asignacionVendedor.gerencia.id = document.getElementById('SlctGerencia').options[document.getElementById('SlctGerencia').selectedIndex].value;
                prospecto.asignacionVendedor.gerencia.nombre = document.getElementById('SlctGerencia').options[document.getElementById('SlctGerencia').selectedIndex].text;
                prospecto.asignacionVendedor.vendedor.id = document.getElementById('SlctVendedor').options[document.getElementById('SlctVendedor').selectedIndex].value;
                prospecto.asignacionVendedor.vendedor.nombre = document.getElementById('SlctVendedor').options[document.getElementById('SlctVendedor').selectedIndex].text;
                //Contactos
                prospecto.contactos = frmProspectos.Contactos.GetContatosDataModel();

                //AGREGAMOS LOS CAMPOS QUE NO SE MODIFICAN EN ESTE FORMULARIO.
                prospecto.actividades = PROSPECTODATA.actividades;
                prospecto.oportunidadDolorDetectada = PROSPECTODATA.oportunidadDolorDetectada;
                prospecto.pasoOriginal = PROSPECTODATA.pasoOriginal;
                prospecto.pasos = PROSPECTODATA.pasos;
                prospecto.productosPrevios = PROSPECTODATA.productosPrevios;
                prospecto.serviciosPrevios = PROSPECTODATA.serviciosPrevios;
                prospecto.estatusProspecto = PROSPECTODATA.estatusProspecto;

                prospecto.archivosAlta = arrayArchivos;

                return prospecto;
            }
        },
        GetProspecto: function () {
            return App.solicitarServicio({
                url: URI.Prospecto.ConsultarProspecto + frmProspectos.Form.Values.GetIdProspecto(),
                metodo: "GET"
            }).then(function (response) {
                frmProspectos.Form.SetInformacion(response.data);
                console.log("response.data",response.data);
                PROSPECTODATA = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        UpdateProspecto: function (prospecto) {
            return App.solicitarServicio({
                url: URI.Prospecto.EditarProspecto + frmProspectos.Form.Values.GetIdProspecto(),
                metodo: "PUT",
                data: prospecto
            }).then(function (response) {
                console.log("response", response);
                switch (parseInt(response.request.status)) {
                    case parseInt(StatusCode.OK):
                        window.location.href = Pages.Prospecto.Listado;
                        break;
                    default:
                }
            }).catch(function (error) {
                console.log(error);
            });
        },
        FormTabs: {
            InformacionGrl: {
                Set: function (prospecto) {
                    var imagen = ((typeof (prospecto) !== "undefined") ? prospecto.fotografia : '');
                    $("#Imagen").val(imagen);
                    frmProspectos.Util.Imagen.LoadImage64();
                    $("#InptTxtCliente").val(prospecto.cliente.nombre);
                    $("#InptTxtObra").val(prospecto.cliente.obra);
                    $('#SlctEstatusObra > option[value="' + prospecto.estatusObra.id + '"]').attr('selected', 'selected');
                    $('#SlctSugSegmento  > option[value="' + prospecto.subSegmento.id + '"]').attr('selected', 'selected').trigger('change');

                    frmProspectos.Catalogos.GetSubSegmentosProductos(prospecto.subSegmento.id);

                    $('#SlctTipoProspecto  > option[value="' + prospecto.tipoProspecto.id + '"]').attr('selected', 'selected');
                    $("#InptTxtCampana").val(prospecto.cliente.campania);
                    $("#InptTxtComentariosObra").val(prospecto.cliente.comentarios);
                    $('select').select2();


                    this.SetOfertaIntegral(prospecto.oportunidadVentaInicial, prospecto.subSegmento, prospecto.oportunidadVentaInicial.subsegmentosProductos);
                    this.SetServiciosOfertaIntegral(prospecto.oportunidadVentaInicial.servicios);
                    //Productos/Servicios Adquiridos previamente
                    this.SetProductosAdquiridos(prospecto.productosPrevios);
                    this.SetServiciosAdquiridos(prospecto.serviciosPrevios);

                    $("#InptTxtRazonSocial").val(prospecto.cliente.razonSocial);
                    $("#InptTxtRFC").val(prospecto.cliente.rfc);
                    $("#InptTxtTelefono").val(prospecto.cliente.telefono);
                    $("#InptTxtCalle").val(prospecto.cliente.direccion.calle);
                    $("#InptNmbrNumero").val(prospecto.cliente.direccion.numero);
                    $("#InptTxtColonia").val(prospecto.cliente.direccion.colonia);
                    $("#InptNmbrCodigoPostal").val(prospecto.cliente.direccion.codigoPostal);

                    $('#SlctCampania > option[value="' + prospecto.cliente.campania.id + '"]').attr('selected', 'selected').trigger('change');
                    $('#SlctPais > option[value="' + prospecto.cliente.direccion.pais.id + '"]').attr('selected', 'selected').trigger('change');
                    $('#SlctEstado > option[value="' + prospecto.cliente.direccion.estado.id + '"]').attr('selected', 'selected').trigger('change');
                    $('#SlctMunicipio > option[value="' + prospecto.cliente.direccion.municipio.id + '"]').attr('selected', 'selected').trigger('change');

                    $('#SlctZona > option[value="' + prospecto.asignacionVendedor.zona.id + '"]').attr('selected', 'selected').trigger('change');
                    $('#SlctPlaza > option[value="' + prospecto.asignacionVendedor.plaza.id + '"]').attr('selected', 'selected').trigger('change');
                    $('#SlctGerencia > option[value="' + prospecto.asignacionVendedor.gerencia.id + '"]').attr('selected', 'selected').trigger('change');
                    $('#SlctVendedor > option[value="' + prospecto.asignacionVendedor.vendedor.id + '"]').attr('selected', 'selected').trigger('change');

                    $("#InptNmbrLatitud").val(prospecto.cliente.direccion.ubicacion.latitud);
                    $("#InptNmbrLongitud").val(prospecto.cliente.direccion.ubicacion.longitud);
                    $("#InptTxtComentariosUbicacion").val(prospecto.cliente.direccion.comentarios);
                    frmProspectos.Maps.SetUbicacion(prospecto.cliente.direccion.ubicacion.latitud, prospecto.cliente.direccion.ubicacion.longitud);
                    $('select').select2();
                },
                SetOfertaIntegral: function (ofertaIntegral, subSegmento, subSegmentosOfertaInicial) {
                    console.log("ofertaIntegral", ofertaIntegral);
                    console.log("subSegmento", subSegmento);
                    console.log("subSegmentosOfertaInicial", subSegmentosOfertaInicial);

                    $(function () {
                        $(function () {
                            if (typeof (ofertaIntegral) != "undefined") {
                                if (ofertaIntegral.esOfertaIntegral) {
                                    if ($('.switch-animate').hasClass('switch-off'))
                                    {
                                        $(".switch-animate").removeClass('switch-off');
                                        $(".switch-animate").addClass('switch-on');
                                    }
                                }
                                else {
                                    if ($('.switch-animate').hasClass('switch-on')) {
                                        $(".switch-animate").removeClass('switch-on');
                                        $(".switch-animate").addClass('switch-off');
                                    }
                                    console.log("entro no es una oferta integral");
                                    $('.ofertaParticular').removeClass('hidden');
                                    $("#Productos-f01").addClass('in');
                                    $("#servicios-f01").addClass('in');
                                    $("#CheckOfertaIntegral").attr('checked', false);
                                    //frmProspectos.Form.FormTabs.InformacionGrl.SetProductosOfertaIntegralBySubSegmento(subSegmento.id);
                                    //frmProspectos.Form.FormTabs.InformacionGrl.SetProductosOfertaIntegralAllSubSegmentos(subSegmentosOfertaInicial);
                                    frmProspectos.Form.FormTabs.InformacionGrl.SetProductosOfertaIntegralChecked(subSegmentosOfertaInicial);
                                }
                            }
                        });
                    });
                },
                SetProductosOfertaIntegralBySubSegmento: function (idSubSegmento) {
                    //Verifica si existen elementos para ese subsegmento.
                    $(".Productos").each(function () { $(this).parent().parent().addClass('hide') });
                    $("input[name=" + idSubSegmento + "]").each(function () {
                        $(this).prop('checked', true);
                        $(this).parent().parent().removeClass('hide');
                    });
                },
                SetProductosOfertaIntegralAllSubSegmentos: function (subSegmentos) {

                    var htmlSubSegmento = '';

                    if (typeof (subSegmentos) !== "undefined") {
                        if (subSegmentos.length > 0) {
                            $("#DivSubSegmentos").html('');
                            for (var indexSugsegmento = 0; indexSugsegmento < subSegmentos.length; indexSugsegmento++) {

                                htmlSubSegmento = '';
                                htmlSubSegmento += '<div id="productos-L' + indexSugsegmento + '-box" class="panel-group">';
                                htmlSubSegmento += '<div class="panel panel-default">';
                                htmlSubSegmento += '<ul class="list-group">';
                                htmlSubSegmento += '<li class="list-group-item list-group-item-info">';
                                htmlSubSegmento += '<label class="checkbox-inline"><input type="checkbox" value="' + subSegmentos[indexSugsegmento].idSubsegmento + '"> ' + subSegmentos[indexSugsegmento].nombre + '</label>';
                                htmlSubSegmento += '<a href="#productos-L' + indexSugsegmento + '" data-parent="#productos-' + indexSugsegmento + '-box" data-toggle="collapse">';
                                htmlSubSegmento += '  <i class="fa fa-caret-down"></i>';
                                htmlSubSegmento += '</a>';
                                htmlSubSegmento += '</li>';
                                htmlSubSegmento += '<div id="productos-L' + indexSugsegmento + '" class="panel-collapse fade collapse">';
                                htmlSubSegmento += '<div class="panel-body">';

                                for (var index = 0; index < dataProSer.length; index++)
                                {

                                    if ((parseInt(dataProSer[index].IdSubSegmento) == 0)){
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

                                    if (parseInt(dataProSer[index].IdTipoSorP) == parseInt(frmProspectos.Util.Codes.TypeProductoServicio.Producto))
                                        $("#DivProductos").append(htmlProductoServicio);
                                    else if (parseInt(dataProSer[index].IdTipoSorP) == parseInt(frmProspectos.Util.Codes.TypeProductoServicio.Servicio))
                                        $("#DivServicios").append(htmlProductoServicio);

                                }


                                htmlSubSegmento += '<li class="list-group-item">';
                                htmlSubSegmento += '<label class="checkbox-inline"><input type="checkbox" value="option1"> Producto 1</label>';
                                htmlSubSegmento += '  </li>';

                                htmlSubSegmento += '  <li class="list-group-item">';
                                htmlSubSegmento += '  <label class="checkbox-inline"><input type="checkbox" value="option1"> Producto 2</label>';
                                htmlSubSegmento += '  </li>';







                                htmlSubSegmento += ' </div>';
                                htmlSubSegmento += ' </div>';
                                htmlSubSegmento += ' </ul>';
                                htmlSubSegmento += '</div>';
                                htmlSubSegmento += '</div>';

                                $("#DivSubSegmentos").append(htmlSubSegmento);
                                console.log(idMainDiv);
                                console.log(idMainDivProductoSegmento);
                                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>");
                            }
                        }
                    }



                },
                SetServiciosOfertaIntegral: function (serviciosOfertaIntegral) {
                    if (typeof (serviciosOfertaIntegral) != "undefined") {
                        if (serviciosOfertaIntegral.length > 0) {
                            var itemFound = false;
                            for (var indexServicio = 0; indexServicio < serviciosOfertaIntegral.length; indexServicio++) {
                                itemFound = false;
                                $("input[name='Servicios']").each(function () {
                                    var currentIdServicio = $(this).attr('value');
                                    if (parseInt(currentIdServicio) == parseInt(serviciosOfertaIntegral[indexServicio].id)) {
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
                    console.log("SetServiciosAdquiridos", servicios);
                    if (servicios.length > 0) {
                        var htmlRow;
                        for (var indexProducto = 0; indexProducto < servicios.length; indexProducto++) {
                            htmlRow = '';
                            htmlRow += '<tr>';
                            htmlRow += "<td>" + servicios[indexProducto].nombre + "</td>";
                            htmlRow += "<td>" + servicios[indexProducto].periodoTotal + "</td>";
                            htmlRow += '</tr>';
                            $("#clienteServiciosActuales").append(htmlRow);
                        }
                        $("#servicios-f1").addClass('in');
                    }
                },
                SetProductosAdquiridos: function (subSegmentosProductos) {
                    if (subSegmentosProductos.length > 0) {
                        var htmlRow;
                        for (var indexProducto = 0; indexProducto < subSegmentosProductos.length; indexProducto++) {
                            htmlRow = '';
                            htmlRow += '<tr>';
                            htmlRow += "<td>" + subSegmentosProductos[indexProducto].nombre + "</td>";
                            htmlRow += "<td>" + subSegmentosProductos[indexProducto].volumenTotal + "</td>";
                            htmlRow += '</tr>';
                            $("#clienteProductosActuales").append(htmlRow);
                        }
                        $("#productos-f1").addClass('in');
                    }
                },
                // Arturo -->> Agrego Codigo 14-10-2016
                SetProductosOfertaIntegralChecked: function (subSegmentosOfertaInicial) {
                    if (typeof(subSegmentosOfertaInicial) !== 'undefined') {
                        for (var index = 0; index < subSegmentosOfertaInicial.length; index++) {
                            //Si la propiedad todosSeleccion es true.
                            if (subSegmentosOfertaInicial[index].todosSeleccion) {
                                $("#DivSubSegmentos input[id='ChkSub" + subSegmentosOfertaInicial[index].idSubsegmento + "']").prop("checked", true);
                            }

                            //Recorremos los productos y verificamos cuales se encuentran seleccionados.
                            for (var iProducto = 0; iProducto < subSegmentosOfertaInicial[index].productos.length; iProducto++) {
                                if (subSegmentosOfertaInicial[index].productos[iProducto].seleccionado) {
                                    $("#DivProductosSegmento" + subSegmentosOfertaInicial[index].idSubsegmento + " input[value='" + subSegmentosOfertaInicial[index].productos[iProducto].id + "']").prop("checked", true);
                                }
                            }
                        }
                    }
                }
                // <<---- Arturo Agrego Codigo 14-10-2016
            },
            Contactos: {
                Set: function (contactos) {
                    if (typeof (contactos) !== "undefined") {
                        if (contactos.length > 0) {
                            for (var indexContacto = 0; indexContacto < contactos.length; indexContacto++) {
                                frmProspectos.Contactos.AddContactoExist(contactos[indexContacto]);
                            }
                        }
                    }
                    frmProspectos.Contactos.ShowHideInformacion();
                }
            },
            Archivos: {
                Set: function (archivos) {
                    arrayArchivos = archivos;
                    frmProspectos.Archivos.SetArchivos(archivos);
                }
            },
            HistoricoCitas: {
                Set: function (actividades) {
                    var idPaso;
                    var tblHtml = [];
                    tblHtml.push('<table id="tablaHistoricoCitas" class="display responsive" cellpadding="0" cellspacing="0" width="100%">');
                    tblHtml.push('<thead>');
                    tblHtml.push('<tr>');
                    tblHtml.push('<th class="all">Actividad</th>');
                    tblHtml.push('<th class="min-desktop">Paso PGV</th>');
                    tblHtml.push('<th class="all">Reagenda</th>');
                    tblHtml.push('<th class="all">Fecha</th>');
                    tblHtml.push('<th class="all">Hora</th>');
                    tblHtml.push('<th class="min-desktop">Comentarios</th>');
                    tblHtml.push('<th class="all">Detalle</th>');
                    tblHtml.push('</tr>');
                    tblHtml.push('</thead>');
                    tblHtml.push('<tbody>');

                    for (var iActividad = 0; iActividad < actividades.length; iActividad++) {
                        idPaso = CONSTANTE.GetPasoPorActividad(actividades[iActividad].tipoActividad.id);
                        console.log("actividades[iActividad].fechaHoraCitaInicio", actividades[iActividad].fechaHoraCitaInicio);
                        tblHtml.push('<tr>');
                        tblHtml.push('<td>'+actividades[iActividad].tipoActividad.Descripcion+'</td>');
                        tblHtml.push('<td>' + '<div class="' + CONSTANTE.GetCssPaso(idPaso) + '">Paso ' + idPaso + '</div>' + '</td>');
                        tblHtml.push('<td></td>');
                        tblHtml.push('<td>' + moment.utc(actividades[iActividad].fechaHoraCitaInicio).format(FORMATO_FECHA) + '</td>');
                        tblHtml.push('<td>' + moment.utc(actividades[iActividad].fechaHoraCitaInicio).format(FORMATO_HORA) + '</td>');
                        tblHtml.push('<td>' + actividades[iActividad].comentario + '</td>');
                        tblHtml.push('<td><button type="button" class="btn btn-info tm" data-toggle="tooltip" data-placement="top" title="Consultar" onclick="frmProspectos.Form.GestionVenta();"><i class="consultar"></i></button></td>');
                        tblHtml.push('</tr>');
                    }

                    tblHtml.push('</tbody>');
                    tblHtml.push('</table>');

                    $("#divHistoricoCitas").html('').html(tblHtml.join(' '));

                    Tabla.renderizarTabla({
                        idTabla: "tablaHistoricoCitas",
                        Titulo: "Histórico de Citas",
                        NombreArchivo: "Histórico de Citas"
                    });
                }
            }
        },
        SetInformacion: function (prospecto) {
            this.FormTabs.InformacionGrl.Set(prospecto);
            this.FormTabs.Contactos.Set(prospecto.contactos);
            this.FormTabs.Archivos.Set(prospecto.archivosAlta);
            this.FormTabs.HistoricoCitas.Set(prospecto.actividades);
        }
    },

    /*Maps*/
    Maps: {
        InitMap: function () {
            $(function () {
                initialise();
            });
        },
        GetUbication: function () {
            var direccion = "";
            direccion += document.getElementById('InptTxtCalle').value + " " + document.getElementById('InptNmbrNumero').value + " " + document.getElementById('InptTxtColonia').value;
            direccion += $("#SlctPais option:selected").text();
            direccion += $("#SlctEstado option:selected").text();
            direccion += $("#SlctMunicipio option:selected").text();
            SetMapaByAdress(direccion);
        },
        SetUbicacion: function (latitud, longitud) {
        }
    },

    /*Util*/
    Util: {
        FileTypes: {
            pdf: {
                ext: 'pdf',
                mimeType: 'application/pdf'
            },
            doc: {
                ext: 'doc',
                mimeType: 'application/msword'
            },
            docx: {
                ext: 'docx',
                mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            },
            xls: {
                ext: 'xls',
                mimeType: 'application/vnd.ms-excel'
            },
            xlsx: {
                ext: 'xlsx',
                mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            },
            ppt: {
                ext: 'ppt',
                mimeType: 'application/vnd.ms-powerpoint'
            },
            pptx: {
                ext: 'pptx',
                mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
            },
            jpg: {
                ext: 'jpg',
                mimeType: 'image/jpg'
            },
            jpeg: {
                ext: 'jpeg',
                mimeType: 'image/jpeg'
            },
            png: {
                ext: 'png',
                mimeType: 'image/png'
            }
        },
        File: {
            DeleteFile: function () {
                $("#SpanPreviewFile").html('');
                $("#DivCargarArchivo").addClass("fileupload-new").removeClass("fileupload-exists");
            }
        },
        Imagen: {
            ImgBase64: function () {
                if ($(".fileupload-preview img").length === 1) {
                    $("#Imagen").val('').val($(".fileupload-preview img").attr('src'));
                } else {
                    $("#Imagen").val('');
                }
            },
            LoadImage64: function () {
                var Image = $("#Imagen").val();
                if (Image !== '') {
                    contieneImagen = true;
                    $("#ImgDefaultAvatar").hide();
                    $("#ImgPerfil").html('<img src="'+ App.obtenerUrlBase() + URI.Archivo.Descargar+ Image + '"/>');
                    $("#ImgPerfil").show();
                } else {
                    contieneImagen = false;
                    $("#ImgDefaultAvatar").show();
                    $("#ImgPerfil").hide();
                }
            },
            DeleteImage: function () {
                if (contieneImagen) {
                    alertify.confirm("¿Esta seguro que eliminar la imagen del Prospecto?", function (e) {
                        if (e) {
                            $("#ImgDefaultAvatar").show();
                            $("#ImgPerfil").hide();
                            contieneImagen = false;
                            eliminoImagen = true;
                            $("#ImgPerfil").html('');
                            $("#ImgPerfil").addClass('fileupload-new').removeClass('fileupload-exists');
                            $("#Imagen").val('');
                        }
                    });
                } else {
                    $("#ImgPerfil").html('');
                    $("#ImgPerfil").addClass('fileupload-new').removeClass('fileupload-exists');
                    $("#ImgDefaultAvatar").show();
                    $("#ImgPerfil").hide();
                }
            },
            GetImagen: function () {
                return $("#ImgPerfil").attr('src');
            },
        },
        Codes: {
            TypeProductoServicio: {
                Producto: 2210,
                Servicio: 2211
            }
        },
        Select: {
            CrearElementos: function (Data, IdSelect) {
                var Combo = '';
                var TxtCombo = '';
                var ElmentObj;
                if (typeof (Data) != "undefined") {
                    if (Data.items.length > 0) {
                        Combo += '<option value="">-- Selecciona -- </option>';
                        TxtCombo += '-- Selecciona --';
                        for (var iElement = 0; iElement < Data.items.length; iElement++) {
                            Combo += '<option value="' + Data.items[iElement].id + '"> ' + Data.items[iElement].Descripcion + '  </option>';
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
                frmProspectos.Util.Select.CargarCombo(IdSelect, Combo, TxtCombo);
            },
            CrearElementosVendedores: function (Data, IdSelect) {
                var Combo = '';
                var TxtCombo = '';
                var ElmentObj;
                if (typeof (Data) != "undefined") {
                    if (Data.length > 0) {
                        Combo += '<option value="">-- Selecciona -- </option>';
                        TxtCombo += '-- Selecciona --';
                        for (var iElement = 0; iElement < Data.length; iElement++) {
                            Combo += '<option value="' + Data[iElement].id + '"> ' + Data[iElement].nombre + ' ' + Data[iElement].appPaterno + ' ' + Data[iElement].appMaterno + '  </option>';
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
                frmProspectos.Util.Select.CargarCombo(IdSelect, Combo, TxtCombo);
            },
            CargarCombo: function (IdSelect, Contenido, Txt) {
                $("#" + IdSelect).html('');
                $("#" + IdSelect).html(Contenido);
                var cmbtxt = $("#s2id_" + IdSelect).find(".select2-chosen");
                $(cmbtxt).text(Txt);
            },
        },
        Flexslider: function () {
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
        },
        Fancybox: function () {
            console.log("entro fancybox");
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
        },
        Init: function () {
            this.Flexslider();
            this.Fancybox();
        }
    },

    Init: (function () {
        frmProspectos.Catalogos.Init();
        frmProspectos.Util.Imagen.LoadImage64();
        frmProspectos.Maps.InitMap();
        frmProspectos.Form.GetProspecto();
        frmProspectos.Util.Flexslider();
        frmProspectos.Util.Fancybox();
    })
};

frmProspectos.Init();





