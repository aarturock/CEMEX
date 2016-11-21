using CEMEX.Datos;
using CEMEX.Entidades;
using CEMEX.Web.Models;
using System.Collections.Generic;
using System.Web.Mvc;

namespace CEMEX.Web.Controllers
{
    public class RolController : Controller
    {
        RespuestaData respuesta;
        RolDatos rolDatos;
        JerarquiaDatos jerarquiaDatos;


        List<Rol> roles;

        public ActionResult Index(ETypeStatusRegistro statusRegistro = ETypeStatusRegistro.Todos)
        {
            ViewBag.EstatusRegistro = EstatusRegistro.GetEstatusRegistro();

            rolDatos = new RolDatos();
            roles = rolDatos.GetRoles(out respuesta, statusRegistro);

            if (!respuesta.ExisteError)
            {
                return View(roles);
            }else
            {
                return View();
            }           
        }

        public ActionResult Crear()
        {
            jerarquiaDatos = new JerarquiaDatos();
            ViewModelRolCrear model = new ViewModelRolCrear();

            model.Jerarquias = jerarquiaDatos.GetJerarquias(out respuesta);

            if (!respuesta.ExisteError)
            {
                return View(model);
            }else
            {
                return View();
            }           
        }

        
    }
}