using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;

namespace Webapi
{
    public class AmazePackBL
    {
        
        AmazePackDL amazePackDL = new AmazePackDL();
        public List<ProductModel> GetProduct()
        {
            return(amazePackDL.GetProduct());
        }
        public Boolean SaveUser(UserModel user)
        {
            return (amazePackDL.SaveUser(user));
        }
        public List<string> checkUser(LoginModel user)
        {
            return (amazePackDL.checkUser(user));
        }
    }
}