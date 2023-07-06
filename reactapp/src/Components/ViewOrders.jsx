import React ,{useState,useEffect} from 'react'
import AdminHomePage from './AdminHomePage';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Order() {
  const [orderList,setOrderList] = useState([]);

  
  useEffect(()=>{
    axios.get("https://8080-fbedfcfaaeeeeafacbbedddeecfbcbaca.project.examly.io/admin/orders")
    .then((res)=>{
      setOrderList(res.data);
    })
  },[])
  
  return(
    <>
    <AdminHomePage/>
    <div id='adminOrderBody' className='container-fluid' >
      <div className='row' style={{'color':'white','padding':'16px' ,backgroundColor:'#777',borderTopLeftRadius:'8px', borderTopRightRadius:'8px'}}>
        <div className='col-3' id="orderId">OrderId</div>
        <div className='col-2'>UserId</div>
        <div className='col-3'>ProductName</div>
        <div className='col-2'>Price</div>
        <div className='col-2'>Quantity</div>
      </div>
    {
      orderList.map((orders,index)=>{
        return(
          <div className='row'  key={orders.id} style={{'color':'white','padding':'16px',backgroundColor:'#495057'}}>
            <div className='col-3'>{orders.orderId}</div>
            <div className='col-2'>{orders.username}</div>
            <div className='col-3'>{orders.productName}</div>
            <div className='col-2'>₹  {parseInt(orders.price).toLocaleString('hi-IN')}</div>
            <div className='col-2'>{orders.quantity}</div>
          </div>
        )  
      })
    }
    </div> 
    </>
  )
}

