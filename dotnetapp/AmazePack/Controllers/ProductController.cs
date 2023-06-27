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

namespace AmazePack.Controllers
{
    [ApiController]
    
    public class ProductController : ControllerBase
    {
        AmazePackBL amazePackBL = new AmazePackBL();
        [HttpGet]
        [Route("admin")]
        //GET: api/Product
        public List<ProductModel> GetProduct()
        {
            
            return(amazePackBL.GetProduct());
        
        }
        // [HttpGet]
        // [Route("home/{userId}")]
        // public List<CartModel> GetHomeProduct(string userId)
        // {
        //     return (amazePackBL.GetHomeProduct(userId));
        // }

        [HttpGet]
        [Route("admin/productEdit/{id}")]
        //GET: api/Product/5
        public List<string> ProductEditData(int id)
        {
            return (amazePackBL.ProductEditData(id));
        }
        [HttpPost]
        [Route("admin/addProduct")]
        //POST: api/Product
        public string ProductSave([FromBody]ProductModel p)
        {
            return (amazePackBL.ProductSave(p));
        }
        [HttpPut]
        [Route("admin/productEdit/{id}")]
        //PUT: api/Product/5
        public string ProductEditSave(int id, [FromBody] ProductModel p)
        {
            return (amazePackBL.ProductEditSave(id, p));
        }
        [HttpDelete]
        [Route("admin/delete/{id}")]
        // DELETE: api/Product/5
        public string ProductDelete(int id)
        {
            return (amazePackBL.ProductDelete(id));
        }
    }
}
