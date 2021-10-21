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
    public class DataController : ControllerBase
    {
        // GET: api/Data
        [HttpGet]
        public IEnumerable<Data> GetUltimos()
        {
            return new Data[] {  
                new Data {titulo= "Unidad 1 - Introducción GIT", completas= 2, visitadas= 4},
                new Data {titulo= "Unidad 5 - Git Flow", completas= 1, visitadas= 2},
                new Data {titulo= "Unidad 2 - Ramas", completas= 3, visitadas= 5},
                new Data {titulo= "Unidad 3 - Introducción GitHub", completas= 1, visitadas= 1}
            };       
        }


    }
}
