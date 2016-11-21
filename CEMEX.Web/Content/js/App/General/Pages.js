
//Registra las páginas de la aplicación.
var Pages = function () {
    return {
        Login: "login.htm",
        Error: {
            //Pagina a la cual se redirecciona en caso de haber un error en la respuesta.
            InternalServerError: "/Error/Error500",
            NotFound: "/Error/Error404"
        },
        StatusProspectos: "/Home/StatusProspectos",
        Roles: {
            Listado: "admonRoles.htm",
            Alta: "altaRoles.htm",
            Edicion: "editarRoles.htm"
        },
        Usuarios: {
            //Listado de Usuarios.
            Listado: "admonUsuarios.htm",
            //Formulario de Alta Usuario
            Alta: "altaUsuario.htm",
            //Formulario de Edición Usuario.
            Edicion: "editarUsuario.htm"
        },
        Moviles: {
            //Listado de Moviles
            Listado: "admonMoviles.htm",
            //Formulario de Alta de Movil.
            Alta: "altaMoviles.htm",
            //Formulario de Edición de Movil.
            Edicion: "editarMoviles.htm"
        },
        PlanTactico: {
            Index: ""
        },
        Prospecto: {
            //Listado de Prospectos.
            Listado: "admonProspectos.htm",
            //Formulario de Alta de Prospecto.
            Alta: "/Prospecto/Create",
            //Formulario de Edición de Prospecto.
            Edicion: "/Prospecto/Edit"
        },
        GestionVenta: {
            Listado: "",

            Index: "../procesoGestionVentas.htm"
        },
        CargarMasiva: "",
        Home: {
            index: "/"
        }
    }
}();