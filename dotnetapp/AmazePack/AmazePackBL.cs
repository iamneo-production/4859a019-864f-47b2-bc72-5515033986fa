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
    }
}

