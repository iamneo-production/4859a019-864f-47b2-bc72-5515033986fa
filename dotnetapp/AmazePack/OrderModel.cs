using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmazePack
{
    public class OrderModel: UserModel
    {
        public int id { get; set; }
        public string orderId { get; set; }
#pragma warning disable CS0108 // Member hides inherited member; missing new keyword
        public string userId { get; set; }
#pragma warning restore CS0108 // Member hides inherited member; missing new keyword
        public string productName { get; set; }
        public string totalPrice { get; set; }
        public int quantity { get; set; }
        public string status{get;set;}
        public string price { get; set; }
    }

}


