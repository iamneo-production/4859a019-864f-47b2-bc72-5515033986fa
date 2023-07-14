using Razorpay.Api;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Security.Cryptography;
namespace AmazePack.Controllers
{
    public class PaymentController : ControllerBase
    {
        string key = "rzp_test_ZVXZhMVXtzBbpq";
        string secret = "xitqLOLZRdnHrkPnLJORJV1e";


        [HttpPost]
        [Route("payment/initialize/{Price}")]
        // POST: api/Payment
        public string Post(string Price)
        {
            Dictionary<string, object> input = new Dictionary<string, object>();
            input.Add("amount", int.Parse(Price) * 100); // this amount should be same as transaction amount
            input.Add("currency", "INR");
            input.Add("receipt", "12121");

            RazorpayClient client = new RazorpayClient(key, secret);

            Razorpay.Api.Order order = client.Order.Create(input);
            string orderId = order["id"].ToString();
            return (orderId);
        }
        [HttpPost]
        [Route("payment/confirm")]
        public string Post([FromBody]PaymentModel confirmPayment)
        {
            string arg = confirmPayment.razorpay_order_id;
            string arg2 = confirmPayment.razorpay_payment_id;
            string payload = $"{arg}|{arg2}";
            HMACSHA256 hMACSHA = new HMACSHA256(StringEncode(secret));
            byte[] buffer = StringEncode(payload);
            string actualSignature= HashEncode(hMACSHA.ComputeHash(buffer));
            if(confirmPayment.razorpay_signature == actualSignature){
                AmazePackBL amazePackBL = new AmazePackBL();
                amazePackBL.deleteOrderAndCartItems(confirmPayment.userId);
                return "success";
            }else{
                return "not successfull";
            }
        }
        public static byte[] StringEncode(string text)
        {
            return new ASCIIEncoding().GetBytes(text);
        }

        public static string HashEncode(byte[] hash)
        {
            return BitConverter.ToString(hash).Replace("-", "").ToLower();
        }
    }
}