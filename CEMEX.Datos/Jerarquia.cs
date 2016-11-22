using CEMEX.Entidades;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;

namespace CEMEX.Datos
{
    public class JerarquiaDatos
    {
        List<Jerarquia> jerarquias;
        SqlCommand cmd;
        SqlDataReader reader;

        public List<Jerarquia> GetJerarquias(ref RespuestaData respuesta)
        {
            jerarquias = new List<Jerarquia>();
            respuesta = new RespuestaData();
            try
            {
                using (SqlConnection conexion = new SqlConnection(ConfigurationManager.ConnectionStrings["CEMEX"].ConnectionString.ToString()))
                {
                    conexion.Open();
                    cmd = conexion.CreateCommand();
                    cmd.CommandText = "[Jerarquia].[uspGetJerarquias]";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add(new SqlParameter() { ParameterName = "idStatusRegistro", SqlDbType = System.Data.SqlDbType.Int, Value= ETypeStatusRegistro.Activo});
                    reader = cmd.ExecuteReader();

                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            jerarquias.Add(new Jerarquia()
                            {
                                Id= reader.GetInt32(0),
                                IdEmpresa = reader.GetInt32(1),
                                Nombre = reader.GetString(2),
                                Descripcion = reader.GetString(3),
                                JerarquiaPadre = reader.GetInt32(4),
                                NivelEstructura = reader.GetInt32(5),
                                IdEstatus = reader.GetInt32(6)
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
                jerarquias = null;
            }
            catch (Exception ex)
            {
                respuesta.ExisteError = true;
                respuesta.MensajeException = ex.InnerException.Message.ToString();
                jerarquias = null;
            }

            return jerarquias;
        }
    }
}
