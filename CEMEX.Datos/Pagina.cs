using CEMEX.Entidades;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;

namespace CEMEX.Datos
{
    public  class PaginaDatos
    {
         List<Pagina>  paginas;
         SqlCommand cmd;
         SqlDataReader reader;

        public  List<Pagina> GetPaginasporModulo(ref RespuestaData respuesta, SqlConnection conexion, int idModulo)
        {
            paginas = new List<Pagina>();
            try
            {
                using (cmd = conexion.CreateCommand())
                {
                    cmd.CommandText = "[Modulo].[uspGetPaginasporModulo]";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter() { ParameterName = "idModulo", SqlDbType = System.Data.SqlDbType.Int, Value= idModulo});

                    reader = cmd.ExecuteReader();

                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            paginas.Add(new Pagina()
                            {
                                Id = reader.GetInt32(0),
                                IdModulo = reader.GetInt32(1),
                                IdFuncionalidad = reader.GetInt32(2),
                                Nombre = reader.GetString(3),
                                UrlPagina = reader.GetString(4)
                            });
                        }
                    }
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

            return paginas;
        }
    }
}
