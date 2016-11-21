using CEMEX.Entidades;
using System.Collections.Generic;

namespace CEMEX.Web.Models
{
    public class ViewModelRolCrear
    {
        public int IdJerarquia { get; set; }
        public List<Jerarquia> Jerarquias { get; set; }
    }
}