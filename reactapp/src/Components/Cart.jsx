import React,{useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

export default function Cart() {
  const [cartProduct,setCartProduct]= useState([]);
  const [count,setCount] = useState(0);
  const [quantityErr,setquantityErr] =useState([]);
  const [alert,setalert] =useState("none")
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://8080-fbedfcfaaeeeeafacbbedddeebdbeefaabcf.project.examly.io/cart/"+sessionStorage.getItem('user'))
    .then((res)=>{
      setCartProduct(res.data);
    })
  }, [count])
  function putData(cartItemID,data){
     axios.put("https://8080-fbedfcfaaeeeeafacbbedddeebdbeefaabcf.project.examly.io/cart/"+(cartItemID),{userId:sessionStorage.getItem('user'),quantity:data})
    .then((res)=>{
      if(typeof(res.data) === "string"){
        setquantityErr(res.data);
        setalert("alert")
        setTimeout(()=>{setalert("none")},4000);
      }else{
        setCartProduct(res.data);
      }
      
    });
  }
  function handleChange(event,ind){
    
    putData(cartProduct[ind].cartItemID,event.target.value);
  }
  function quantityDec(index){
    if(cartProduct[index].quantity<1){// TO increase the cartitem quantity
      putData(index,0)
    }else{
      putData(cartProduct[index].cartItemID,parseInt(cartProduct[index].quantity)-1);
    }
  }
  function quantityInc(index){ // To decrease the cartitem quantity
    putData(cartProduct[index].cartItemID,parseInt(cartProduct[index].quantity)+1);
  }
  function deleteCartItem(index){// To delete the cart Item
    axios.delete("https://8080-fbedfcfaaeeeeafacbbedddeebdbeefaabcf.project.examly.io/cart/delete/"+(cartProduct[index].cartItemID))
    .then((res)=>{
      if(res.data){
        setCount(count+1);
      }
    })
  }
  function placeOrder(){
      axios.post("https://8080-fbedfcfaaeeeeafacbbedddeebdbeefaabcf.project.examly.io/saveOrder",{userId : sessionStorage.getItem('user')})
      .then((res)=>{
        navigate("/order");
      }).catch((err) => {
        console.log(err);
      })
  }
  return (
    <>
    <Navbar/>
     <section id='productCardBody'>
    {cartProduct.map((cartProductobj,index)=>{
      return (
        <div className="cartItem" key = {cartProductobj.id} >
          <img src={cartProductobj.imageurl} alt="product img" />
          <div className="product-description">
          <div className='product-name'>{cartProductobj.productName}</div>
          <strong>Price : </strong>
          <div style={{'fontWeight':'500'}}>₹{cartProductobj.price}</div>
          <strong>Quantity : </strong>
          <div>
            <button className="btn1" onClick={()=>{quantityDec(index)}}>-</button>
            <input type="text" value={cartProductobj.quantity} onChange={(event)=>{handleChange(event,index)}} className="cart-row-quantity"></input>
            <button className="btn1" onClick={()=>{quantityInc(index)}}>+</button>
          </div>
          <div className="delete" onClick={()=>deleteCartItem(index)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash icon-delete" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 7l16 0" />
              <path d="M10 11l0 6" />
              <path d="M14 11l0 6" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>Delete
          </div>
          </div>
        </div>
          )
        })}
        
      </section> 
      <button id='placeOrderButton' onClick={placeOrder}>Place Orders</button>
      <section id = {alert}>{quantityErr}</section>
    </>
  )
}
