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
         public List<string> checkUser(LoginModel user)
        {
            return (amazePackDL.checkUser(user));
        }
    }
}