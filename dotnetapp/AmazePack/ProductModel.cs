using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmazePack
{
    
    public partial class ProductModel
    {
        public int id { get; set; }
        public string productId { get; set; }
        public string productName { get; set; }
        public string price { get; set; }
        public string imageurl { get; set; }
        public string quantity { get; set; }
        public string description { get;set; }
    }
}