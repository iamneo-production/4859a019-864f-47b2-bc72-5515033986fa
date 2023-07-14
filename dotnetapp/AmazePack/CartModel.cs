using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmazePack
{
    public class CartModel : ProductModel
    {
        public int id { get; set; }
        public string cartItemID { get; set; }
        public string userId { get; set; }
        public string productName { get; set; }
        public int quantity { get; set; }
        public string price { get; set; }

    }
}
