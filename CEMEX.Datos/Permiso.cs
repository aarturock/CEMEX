using CEMEX.Entidades;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;

namespace CEMEX.Datos
{
    public class PermisoDatos
    {
        List<Permiso> permisos;

        public List<Permiso> GetPermisos(ref RespuestaData respuesta)
        {
            respuesta = new RespuestaData();
            permisos = new List<Permiso>();
            try
            {
                using (SqlConnection conexion = new SqlConnection(ConfigurationManager.ConnectionStrings["CEMEX"].ConnectionString.ToString()))
                {

                }
            }
            catch (SqlException exSql)
            {
                permisos = null;
                respuesta.ExisteError = true;
                respuesta.MensajeException = exSql.InnerException.Message.ToString();
            }
            catch (Exception ex)
            {
                permisos = null;
                respuesta.ExisteError = true;
                respuesta.MensajeException = ex.InnerException.Message.ToString();
            }

            return permisos;
        }
    }
}
