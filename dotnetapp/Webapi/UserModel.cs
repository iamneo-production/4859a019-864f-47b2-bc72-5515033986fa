using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Webapi
{
    public class UserModel
    {
        public int id { get; set; }
        public string userId { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string username { get; set; }
        public string mobileNumber { get; set; }
        public Boolean active { get; set; } 
        public string role { get; set; }
    }
}