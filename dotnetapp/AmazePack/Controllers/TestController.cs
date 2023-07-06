using Microsoft.AspNetCore.Mvc;
namespace AmazePack.Controllers
{
    
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet]
        [Route("/home")]
        public string Home(){
            return("home");
        }
        [HttpGet]
        [Route("admin/cart")]
        public string cart(){
            return ("cart");
        }
        [HttpGet]
        [Route("admin/productEdit")]
        public string productEdit(){
            return ("productEdit");
        }
    }
}