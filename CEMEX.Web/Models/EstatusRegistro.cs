using System.Collections.Generic;

namespace CEMEX.Web.Models
{
    public static class EstatusRegistro
    {
        public static List<object> GetEstatusRegistro()
        {
            return new List<object>()
            {
                new { Id = 0, Nombre = "Todos"},
                new { Id= 1, Nombre = "Activos"},
                new { Id= 2, Nombre = "Inactivos"}
            };
        }
    }
}