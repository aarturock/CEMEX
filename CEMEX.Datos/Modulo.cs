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

        public List<Modulo> GetModulos(out RespuestaData respuesta)
        {
            modulos = new List<Modulo>();
            respuesta = new RespuestaData();
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
                            //modulos.Add(new Modulo()
                            //{
                            //    Id = 
                            //});
                        }
                    }
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
