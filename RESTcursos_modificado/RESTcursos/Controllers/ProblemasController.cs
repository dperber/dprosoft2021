using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RESTcursos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProblemasController : ControllerBase
    {
         public static Problema[] problemas =new Problema[] {
                new Problema { id = 1, estado=0, titulo = "Problema 1", descripcion = "Página web con listado de problemas"},
                new Problema { id = 2, estado=0, titulo = "Problema 2", descripcion = "Iniciar y completar"},
                new Problema { id = 3, estado=0, titulo = "Problema 3", descripcion = "Youtube"},
                new Problema { id = 4, estado=0, titulo = "Problema 4", descripcion = "Gráfica"},
                new Problema { id = 5, estado=0, titulo = "Problema 5", descripcion = "Formulario"}
        };

        // GET: api/Autores
        [HttpGet]
        public IEnumerable<Problema> Get()
        {
            return problemas;
        }

        [HttpPut]
        public Problema updateEstado([FromBody] RequestProblema requestProblema)
        {
            problemas[requestProblema.id-1].estado = requestProblema.estado;
            return problemas[requestProblema.id-1];
        }
   

    }
}
