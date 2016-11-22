using CEMEX.Entidades;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;

namespace CEMEX.Datos
{
    public class ModuloDatos
    {
        SqlCommand cmd;
        SqlDataReader reader;
        List<Modulo> modulos;

        PaginaDatos paginaDatos;

    
        public List<Modulo> GetModulos(ref RespuestaData respuesta)
        {
            modulos = new List<Modulo>();
            respuesta = new RespuestaData();
            paginaDatos = new PaginaDatos();
            try
            {
                using (SqlConnection conexion = new SqlConnection(ConfigurationManager.ConnectionStrings["CEMEX"].ConnectionString.ToString()))
                {
                    conexion.Open();
                    cmd = conexion.CreateCommand();
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.CommandText = "[Modulo].[uspGetModulosPrincipales]";
                    cmd.Parameters.Add(new SqlParameter() {ParameterName = "idStatusRegistro", SqlDbType = System.Data.SqlDbType.Int, Value= ETypeStatusRegistro.Activo });
                    reader = cmd.ExecuteReader();

                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            modulos.Add(new Modulo()
                            {
                                Id =reader.GetInt32(0),
                                IdPlataforma = reader.GetInt32(1),
                                IdRegistroModulo = reader.GetInt32(2),
                                Orden = reader.GetInt32(3),
                                Nombre = reader.GetString(4),
                                Descripcion = reader.GetString(5),
                                Icono = reader.GetString(6),
                                Url = reader.GetString(7),
                                IdStatus = reader.GetInt32(8),
                                Paginas = paginaDatos.GetPaginasporModulo(ref respuesta, conexion, reader.GetInt32(0))
                            });

                        }
                    }

                    respuesta.ExisteError = false;
                    respuesta.MensajeException = string.Empty;
                }
            }
            catch (SqlException exSql)
            {
                modulos = null;
                respuesta.ExisteError = true;
                respuesta.MensajeException = exSql.InnerException.Message.ToString();
            }
            catch (Exception ex)
            {
                modulos = null;
                respuesta.ExisteError = true;
                respuesta.MensajeException = ex.InnerException.Message.ToString();
            }

            return modulos;
        }
    }
}
