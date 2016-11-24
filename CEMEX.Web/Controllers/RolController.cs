using CEMEX.Datos;
using CEMEX.Entidades;
using CEMEX.Web.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace CEMEX.Web.Controllers
{
    public class RolController : Controller
    {
        RespuestaData respuesta;
        RolDatos rolDatos;
        JerarquiaDatos jerarquiaDatos;
        ModuloDatos moduloDatos;
        PermisoDatos permisoDatos;

        List<Rol> roles;
        List<Modulo> modulos;


        public RolController()
        {
            rolDatos = new RolDatos();
            jerarquiaDatos = new JerarquiaDatos();
            moduloDatos = new ModuloDatos();
            permisoDatos = new PermisoDatos();

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
            //Se consulta el catalogo de Jerarquias.
            model.Jerarquias = jerarquiaDatos.GetJerarquias(ref respuesta);

            if (!respuesta.ExisteError)
            {
                //Se consultan los Modulos que se encuentren activos.
                modulos = moduloDatos.GetModulos(ref respuesta);
                if (!respuesta.ExisteError)
                {
                    // Se asignan los Modulos que pertenezcan a moviles de la colección.
                    model.ModulosMovil = modulos.Where(x => x.IdPlataforma == (int)ETypePlataforma.Movil).ToList();
                    // Se asignan los Modulos que pertenezcan a Web de la collección.
                    model.ModulosWeb = modulos.Where(x => x.IdPlataforma == (int)ETypePlataforma.Web).ToList();

                    //Se consulta el catalogo de Permisos.
                    model.Permisos = permisoDatos.GetPermisos(ref respuesta);

                    if (!respuesta.ExisteError)
                    {
                        return View(model);
                    }else
                    {
                        return View();
                    }
                }
                else
                {
                    return View();
                }
            }
            else
            {
                return View();
            }
        }        
    }
}