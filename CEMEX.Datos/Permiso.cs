using CEMEX.Entidades;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace CEMEX.Datos
{
    public class PermisoDatos
    {
        List<Permiso> permisos;
        SqlCommand cmd;
        SqlDataReader reader;

        public List<Permiso> GetPermisos(ref RespuestaData respuesta, 
                                        ETypeStatusRegistro statusRegistro = ETypeStatusRegistro.Activo)
        {
            respuesta = new RespuestaData();
            permisos = new List<Permiso>();
            try
            {
                using (SqlConnection conexion = new SqlConnection(ConfigurationManager.ConnectionStrings["CEMEX"].ConnectionString.ToString()))
                {
                    conexion.Open();
                    cmd = conexion.CreateCommand();
                    cmd.CommandText = "[Rol].[uspGetPermisos]";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter() {ParameterName = "IdStatus", SqlDbType = SqlDbType.Int, Value= statusRegistro });
                    reader = cmd.ExecuteReader();

                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            permisos.Add(new Permiso()
                            {
                                Id = reader.GetInt32(0),
                                Nombre = reader.GetString(1),
                                Descripcion = reader.GetString(2),
                                Icono = reader.GetString(3),
                                IdStatus = reader.GetInt32(4)
                            });
                        }
                    }

                    respuesta.ExisteError = false;
                    respuesta.MensajeException = string.Empty;
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
