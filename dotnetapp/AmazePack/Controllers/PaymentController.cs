using Razorpay.Api;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
namespace AmazePack.Controllers
{
    public class PaymentController : ControllerBase
    {
        string key = "rzp_test_ZVXZhMVXtzBbpq";
        string secret = "xitqLOLZRdnHrkPnLJORJV1e";


        [HttpPost]
        [Route("payment/initialize")]
        // POST: api/Payment
        public string Post([FromBody] OrderModel o)
        {
            Dictionary<string, object> input = new Dictionary<string, object>();
            input.Add("amount", int.Parse(o.totalPrice) * 100); // this amount should be same as transaction amount
            input.Add("currency", "INR");
            input.Add("receipt", "12121");

            RazorpayClient client = new RazorpayClient(key, secret);

            Razorpay.Api.Order order = client.Order.Create(input);
            string orderId = order["id"].ToString();
            return (orderId);
        }
        [HttpPost]
        [Route("payment/confirm")]
        public void Post(PaymentModel confirmPayment)
        {

            RazorpayClient client = new RazorpayClient(key,secret);

            Dictionary<string, string> attributes = new Dictionary<string, string>();

            attributes.Add("razorpay_payment_id",confirmPayment.razorpay_payment_id);
            attributes.Add("razorpay_order_id",confirmPayment.razorpay_order_id);
            attributes.Add("razorpay_signature", confirmPayment.razorpay_signature);

            try
            {
                Utils.verifyPaymentSignature(attributes);
                AmazePackBL amazePackBL = new AmazePackBL();
                amazePackBL.deleteOrderAndCartItems(confirmPayment.userId);
            }
            catch (Exception e)
             {
                Console.WriteLine(e);
            }


        }
    }
    // PUT: api/Payment/5
    
}
