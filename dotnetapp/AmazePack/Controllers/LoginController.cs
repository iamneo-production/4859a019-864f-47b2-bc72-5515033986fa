using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Data.SqlClient;

namespace AmazePack.Controllers
{
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