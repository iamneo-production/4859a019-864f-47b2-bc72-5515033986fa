using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http;
namespace AmazePack.Controllers
{
    
    [ApiController]
    public class SignupController : ControllerBase
    {
        [HttpPost]
        [Route("signup")]
        public IActionResult SaveUser([FromBody] UserModel user)
        {
            AmazePackBL amazePackBL = new AmazePackBL();
            return  Created("",amazePackBL.SaveUser(user));
        }
    }
}