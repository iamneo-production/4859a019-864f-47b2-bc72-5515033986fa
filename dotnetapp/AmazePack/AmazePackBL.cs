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