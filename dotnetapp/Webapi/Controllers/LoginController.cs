using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;

namespace Webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    
    public class LoginController : ControllerBase
    {
        
        [HttpPost]
        [Route("login")]
        public List<string> checkUser([FromBody] LoginModel user)
        {
            AmazePackBL amazePackBL = new AmazePackBL();
            return (amazePackBL.checkUser(user));

        }
    
            
    }
}
