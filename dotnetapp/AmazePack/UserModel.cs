using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmazePack
{
    public class UserModel
    {
        public int id { get; set; }
        public string userId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string username { get; set; }
        public string mobileNumber { get; set; }
        public Boolean active { get; set; } 
        public string userRole { get; set; }
    }
}
