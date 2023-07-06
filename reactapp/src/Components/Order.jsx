import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from 'react-router-dom';
export default function Order() {
  const navigate = useNavigate();
  const [orderList,setOrderList] = useState([]);
  let totalPrice=0;
  useEffect(()=>{
    axios.get("https://8080-fbedfcfaaeeeeafacbbedddeecfbcbaca.project.examly.io/orders/"+sessionStorage.getItem('user'))
    .then((res)=>{
      setOrderList(res.data);
    })
  },[])
  for(const element of orderList){
    if(element.status === "active"){     
      totalPrice += parseInt(element.totalPrice);
    }
  }
  
  async function handlePayment(e,tPrice){
    let result = ""
    await axios.get("https://8080-fbedfcfaaeeeeafacbbedddeecfbcbaca.project.examly.io/orders/checkQuantity/"+sessionStorage.getItem('user'))
    .then((res)=>{
      result =res.data;
      
    }).catch(err=>{
      console.log(err);
    })
    console.log(result)
    if(result.length !== 0){
      alert("Out of stock for " + result);
    }else{
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        document.body.appendChild(script);
        axios.post("https://8080-fbedfcfaaeeeeafacbbedddeecfbcbaca.project.examly.io/payment/initialize",{totalPrice : tPrice}).then(res=>{
            var options = {
                "name": "AmazePack",
                "description": "Pay Your Transaction",
                "image": "https://example.com/your_logo",
                "order_id": res.data, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "handler": function (response){
                    axios.post("https://8080-fbedfcfaaeeeeafacbbedddeecfbcbaca.project.examly.io//payment/confirm",
                    {razorpay_order_id : response.razorpay_order_id,
                        razorpay_payment_id:response.razorpay_payment_id,
                        razorpay_signature:response.razorpay_signature,
                        userId : sessionStorage.getItem('user'),
                    }).then(()=>{
                        alert("Payment Successfull");
                        navigate("/home");
                    })
                },
                "theme": {
                    "color": "#f1f3f5"
                }
            };
            var rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response){
                    alert(response.error.code);
                    alert(response.error.description);
                    alert(response.error.source);
                    alert(response.error.step);
                    alert(response.error.reason);
                    alert(response.error.metadata.order_id);
                    alert(response.error.metadata.payment_id);
            });
            rzp1.open();
        });
    }
    e.preventDefault();
  }
  
  return(
    <>
    <Navbar/>
    <div id='productOrderBody' className='container-fluid' >
      <div className='row' style={{'color':'white','padding':'16px' ,backgroundColor:'#777',borderTopLeftRadius:'8px', borderTopRightRadius:'8px'}}>
        <div className='col-3'>ProductName</div>
        <div className='col-3'>Price</div>
        <div className='col-3'>Quantity</div>
        <div className="col-3">Order Status</div>
      </div>
    {
      orderList.map((orders,index)=>{
        return(
          <div className='row'  key={orders.id} style={{'color':'white','padding':'16px',backgroundColor:'#495057'}}>
            <div className='col-3'>{orders.productName}</div>
            <div className='col-3'>₹  {parseInt(orders.price).toLocaleString('hi-IN')}</div>
            <div className='col-3'>{orders.quantity}</div>
            <div className='col-3'>{orders.status}</div>
          </div>
        )  
      })
    }
    </div>
    <button id="payButton" onClick={(e)=>{handlePayment(e,totalPrice)}}>PAY ₹ {totalPrice.toLocaleString('hi-IN')}</button>  
    </>
  )
}
