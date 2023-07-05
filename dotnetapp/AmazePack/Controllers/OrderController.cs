using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using AmazePack;

namespace AmazePackAPI.Controllers
{
    [ApiController]
    public class OrderController : ControllerBase
    {
        
        AmazePackBL amazePackBL = new AmazePackBL();
        
        [HttpGet]
        [Route("admin/orders")]
        public List<OrderModel> Get()
        {
            return (amazePackBL.GetOrders());    
        }

        // GET: api/Order/5
        [HttpGet]
        [Route("orders/{userId}")]
        public List<OrderModel> Get(string userId)
        {
            return (amazePackBL.GetUserProducts(userId));
        }
        [HttpPost]
        [Route("saveOrder")]
        // POST: api/Order
        public void Post([FromBody]UserModel user)
        {
            amazePackBL.SaveProduct(user);

        }
        [HttpGet]
        [Route("orders/checkQuantity/{userId}")]
        public string checkQuantityBeforePaying(string userId)
        {
            return (amazePackBL.checkQuantityBeforePaying(userId));
        }
    }
}
