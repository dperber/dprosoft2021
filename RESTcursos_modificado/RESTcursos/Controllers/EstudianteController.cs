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
    public class EstudianteController : ControllerBase
    {
        public static List<Estudiante>  estudiantes = new List<Estudiante>();

        // Add parts to the list.
       
        // GET: api/Categorias
        [HttpGet]
        public IEnumerable<Estudiante> Get()
        {
            return estudiantes;
        }
        [HttpPost]
        public IEnumerable<Estudiante> insertEstudiante([FromBody] Estudiante estudiante)
        {
            estudiantes.Add(estudiante);
            return estudiantes;
        }

        [HttpPut]
        public Estudiante updateEstado([FromBody] RequestEstudiante requestEstudiante)
        {
            
            foreach (Estudiante estudiante in estudiantes){
                if (estudiante.DNI.Equals(requestEstudiante.DNI)){
                    estudiante.estado = requestEstudiante.estado;
                    return estudiante;
                }
            }
            return null;
        }


    }
}
