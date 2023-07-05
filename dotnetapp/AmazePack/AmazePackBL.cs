using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace AmazePack
{
    public class AmazePackBL
    {
        AmazePackDL amazePackDL = new AmazePackDL();
         public List<CartModel> showCart(string userId)
        {
            return (amazePackDL.showCart(userId));
        }
        public Boolean addToCart(CartModel cart)
        {
            return (amazePackDL.addToCart(cart));
        }
        public dynamic editQuantity(string cartItemId, CartModel cart)
        {
            return (amazePackDL.editQuantity(cartItemId, cart));
        }
        public Boolean Delete(string cartItemId)
        {
            return (amazePackDL.Delete(cartItemId));
        }
    }
}