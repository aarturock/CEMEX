//Registra las URI para servicio en la aplicación.
var URI = function () {
    return {
        Login: "login",
        Home: {
            Semaforo: "reportes/negociacion"
        },
        Actividades: {

            ConsultarActividades: "actividad/vendedor",

            InsertarActividades: "actividad/lote",

            EditarActividades: "actividad/lote",

            EliminarActividades: "actividad/lote"
        },
        Archivo: {
            Subir: "documento/CargaArchivo",
            //Id del Archivo.
            Descargar: "documento/ObtieneArchivo/",
            //Actualiaza Archivo.
            Actualiza: "documento/ActualizaArchivo/",
            //Elimina Archivo
            Eliminar: "documento/EliminaArchivo/"
        },
        Catalogos: {
            Vendedor: "catalogo/vendedor/",
            TipoProspecto: "catalogo/nombre/TipoProspecto/",
            SubSegmento: "catalogo/nombre/SubSegmento/",
            StatusObra: "catalogo/nombre/StatusObra",
            Prospecto: "prospectostatus",
            Pais: "catalogo/nombre/Pais",
            Estado: "catalogo/padre/Estado/",
            Municipio: "catalogo/padre/Municipio/",
            Rol: "rol/filtro",
            Zona: "catalogo/nombre/Zona",
            Plaza: "catalogo/padre/Plaza/",
            Gerencia: "catalogo/padre/Gerencia/",
            Campania: "catalogo/nombre/Campania",
            Funcionalidad: "catalogo/modulofuncionalidad/",
            Permiso: "catalogo/nombre/Permiso",
            Jerarquia: "catalogo/nombre/Jerarquia",
            StatusProspecto: "catalogo/nombre/EstatusPGV",
            Vendedores: "catalogo/vendedores/plaza/",
            ActividadesPGV: "catalogo/nombre/ActividadesPGV/",
            motivoExclusion: "catalogo/nombre/MotivoPerdida/",
            productosSubsegmentos: "catalogo/subsegmentoproducto/",
            servicios: "catalogo/nombre/Servicio/"
        },
        PlanTactico: {
            Actividades: "catalogo/padre/ActividadesPGV/",
            //Obtiene las actividades por el id Prospecto
            ActividadesByProspectoId: "prospecto/filtro",
            //Inserta la actividad para el prospecto
            CrearActividad: "prospecto/actividad/",
            //Edita la actividad para el prospecto
            EditarEvento: "ActividadProspecto",
            //Edita el Estatus del Prospecto por Id
            EditarEstatusProspecto: "prospecto/estatus/",
            //Permite insertar varias actividades a partir de arreglo
            InsertarActividades: "",
            //Permite elimnar varias actividades a partir de un arreglo
            EliminarActividades: "",
            //Permite editar varias actividades a partir de un arreglo
            EditarActividades: ""
        },
        CargarMasiva: {
            SubirArchivo: "CargaMasiva/",

            DescargarArchivo: "documento/ObtieneArchivo/"
        },
        Roles: {
            Listado: "rol/filtro",
            CrearRol: "rol",
            EditarRol: "rol/",
            EliminarRol: "rol/",
            ConsultarRol: "rol/"
        },
        Usuarios: {
            CrearUsuario: "usuarios",
            EditarUsuario: "usuarios/",
            EliminarUsuario: "usuarios/",
            ConsultarUsuario: "usuarios/",
            Listado: "usuarios/filtro"
        },
        Moviles: {
            //POST
            CrearMovil: "movil",
            //PUT
            EditarMovil: "movil/",
            //DELETE
            EliminarMovil: "movil/",
            //GET
            ConsultarMovil: "movil/",
            //POST
            Listado: "movil/filtro"
        },
        Prospecto: {
            //POST
            CrearProspecto: "prospecto/inserta",
            //PUT +  {idProspecto}
            EditarProspecto: "prospecto/actualiza/",
            //DELETE + {idProspecto}
            EliminarProspecto: "prospectos/",
            //GET + {idProspecto}
            ConsultarProspecto: "prospecto/obtiene/",
            //Listado
            Listado: "prospecto/filtro"
        },
        localizacion: {
            filtro: "localizacion/filtro/"
        }
    };
}();
