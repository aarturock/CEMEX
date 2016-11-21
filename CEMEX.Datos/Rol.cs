using CEMEX.Entidades;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;

namespace CEMEX.Datos
{
    public class RolDatos
    {
        SqlCommand cmd;
        SqlDataReader reader;
        List<Rol> roles;

        public List<Rol> GetRoles(out RespuestaData respuesta, ETypeStatusRegistro statusRegistro)
        {
            respuesta = new RespuestaData();
            roles = new List<Rol>();
            try
            {
                using (SqlConnection conexion = new SqlConnection(ConfigurationManager.ConnectionStrings["CEMEX"].ConnectionString.ToString()))
                {
                    conexion.Open();
                    cmd = conexion.CreateCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter() { ParameterName = "idStatusRegistro", SqlDbType = System.Data.SqlDbType.Int, Value = statusRegistro });
                    cmd.CommandText = "[Rol].[uspGetRolesporIdStatus]";
                    reader = cmd.ExecuteReader();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            roles.Add(new Rol()
                            {
                                Id = reader.GetInt32(0),
                                IdJerarquia = reader.GetInt32(1),
                                Nombre = reader.GetString(2),
                                Descripcion = reader.GetString(3),
                                AsignacionMultiple = reader.GetBoolean(4),
                                IdStatus = reader.GetInt32(5)
                            });
                        }
                    }

                    respuesta.ExisteError = false;
                    respuesta.MensajeException = string.Empty;
                }

            }
            catch (SqlException exSql)
            {
                respuesta.ExisteError = true;
                respuesta.MensajeException = exSql.InnerException.Message.ToString();
            }
            catch (Exception ex)
            {
                respuesta.ExisteError = true;
                respuesta.MensajeException = ex.InnerException.Message.ToString();
            }

            return roles;
        }
    }
}
