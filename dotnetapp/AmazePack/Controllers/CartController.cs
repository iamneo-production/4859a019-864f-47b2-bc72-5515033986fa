using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.SqlClient;
using System.Data;
using Microsoft.AspNetCore.Mvc;
namespace AmazePack.Controllers
{
    public class CartController : ControllerBase
    {
        
        AmazePackBL amazePackBL = new AmazePackBL();
        [HttpGet]
        [Route("cart/{userId}")]
        public List<CartModel> showCart(string userId)
        {
            return (amazePackBL.showCart(userId));
        }
        [HttpPost]
        [Route("addToCart")]
        // POST: api/Cart
        public Boolean addToCart([FromBody]CartModel cart)
        {
            return(amazePackBL.addToCart(cart));
        }

        [HttpPut]
        [Route("cart/{id}")]
        public dynamic Put(string id, [FromBody]CartModel cart)
        {
            return (amazePackBL.editQuantity(id, cart));
        }

        [HttpDelete]
        [Route("cart/delete/{id}")]
        public Boolean Delete(string id)
        {
            return (amazePackBL.Delete(id));
        }
        
    }
}
