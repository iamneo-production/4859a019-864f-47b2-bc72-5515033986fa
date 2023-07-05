using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;

namespace AmazePack
{
    public class AmazePackBL
    {
        
        AmazePackDL amazePackDL = new AmazePackDL();
       public string checkQuantityBeforePaying(string userId)
        {
            return (amazePackDL.checkQuantityBeforePaying(userId));
        }
        public void deleteOrderAndCartItems(string userId)
        {
            amazePackDL.deleteOrderAndCartItems(userId);
        }
    }
}