
//Registra los codigos de respuesta.
var StatusCode = function () {
    return {
        //Respuesta estándar para peticiones correctas.
        OK: 200,
        //La petición ha sido completada y ha resultado en la creación de un nuevo recurso.
        Created: 201,
        //La petición se ha completado con éxito pero su respuesta no tiene ningún contenido.
        NoContent: 204,
        //La solicitud contiene sintaxis errónea y no debería repetirse.
        BadRequest: 400,
        //La solicitud fue legal, pero el servidor rehúsa  responderla dado que el cliente 
        //no tiene privilegios para hacerla.
        Forbidden: 403,
        //Recurso no encontrado. Se utiliza cuando el servidor web no encuentra la página
        //o recurso solicitado.
        NotFound: 404,
        //Es un error generado por el servidor web. Basicamente, algo salio mal.
        InternalServerError: 500,
        //No tienes permisos para solicitar servicio
        unauthorized: 401
    }
}();