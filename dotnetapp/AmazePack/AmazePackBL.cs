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

        public List<ProductModel> GetProduct()
        {
            return(amazePackDL.GetProduct());
        }
        public List<CartModel> GetHomeProduct(string userId)
        {
            return(amazePackDL.GetHomeProduct(userId));
        }
        public List<string> ProductEditData(int id)
        {
            return (amazePackDL.ProductEditData(id));
        }
        public string ProductSave(ProductModel p)
        {
            return (amazePackDL.ProductSave(p));

        }
        public string ProductEditSave(int id, ProductModel p)
        {
            return (amazePackDL.ProductEditSave(id, p));
        }
        
        public string ProductDelete(int id)
        {
            return (amazePackDL.ProductDelete(id));
        }
        
        public Boolean SaveUser(UserModel user)
        {
            return (amazePackDL.SaveUser(user));
        }
        public List<string> checkUser(LoginModel user)
        {
            return (amazePackDL.checkUser(user));
        }
        
        public List<CartModel> showCart(string userId) { 
            return (amazePackDL.showCart(userId));
        }
        public Boolean addToCart(CartModel cart)
        {
            return (amazePackDL.addToCart(cart));
        }
        public dynamic editQuantity(string cartItemId, CartModel cart)
        {
            return (amazePackDL.editQuantity(cartItemId,cart));
        }
        public Boolean Delete(string cartItemId)
        {
            return (amazePackDL.Delete(cartItemId));
        }
 
        public void SaveProduct(UserModel user)
        {
            amazePackDL.SaveProduct(user);
        }
        public List<OrderModel> GetUserProducts(string userId)
        {
            return (amazePackDL.GetUserProducts(userId));
        }
        public List<OrderModel> GetOrders()
        {
            return(amazePackDL.GetOrders());
        }
    }
}  
