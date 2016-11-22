using CEMEX.Datos;
using CEMEX.Entidades;
using CEMEX.Web.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace CEMEX.Web.Controllers
{
    public class RolController : Controller
    {
        RespuestaData respuesta;
        RolDatos rolDatos;
        JerarquiaDatos jerarquiaDatos;
        ModuloDatos moduloDatos;

        List<Rol> roles;
        List<Modulo> modulos;


        public RolController()
        {
            rolDatos = new RolDatos();
            jerarquiaDatos = new JerarquiaDatos();
            moduloDatos = new ModuloDatos();

        }

        public ActionResult Index(ETypeStatusRegistro statusRegistro = ETypeStatusRegistro.Todos)
        {
            ViewBag.EstatusRegistro = EstatusRegistro.GetEstatusRegistro();
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
         
            ViewModelRolCrear model = new ViewModelRolCrear();
            model.Jerarquias = jerarquiaDatos.GetJerarquias(ref respuesta);

            if (!respuesta.ExisteError)
            {
                modulos = moduloDatos.GetModulos(ref respuesta);
                if (!respuesta.ExisteError)
                {
                    model.ModulosMovil = modulos.Where(x => x.IdPlataforma == (int)ETypePlataforma.Movil).ToList();
                    model.ModulosWeb = modulos.Where(x => x.IdPlataforma == (int)ETypePlataforma.Web).ToList();

                    return View(model);
                }
                else
                {
                    return View();
                }                
            }else
            {
                return View();
            }           
        }

        
    }
}