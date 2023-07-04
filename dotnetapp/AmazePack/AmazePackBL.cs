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
         public Boolean SaveUser(UserModel user)
        {
            return (amazePackDL.SaveUser(user));
        }
    }
}
