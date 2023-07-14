/* eslint-disable array-callback-return */

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect,useState,useRef } from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
export default function HomePage() {
  const ref = useRef();
  const [arr,setArr] =useState([]);
  const [productArr,setproductArr] = useState([]);
  const [alert,setalert] =useState("none");
  const [count,setCount] = useState(0);
  useEffect(()=>{
    axios.get("https://8080-fbedfcfaaeeeeafacbbedddeecfbcbaca.project.examly.io/home/"+sessionStorage.getItem('user'))
    .then((res)=>{
      setArr(res.data);
      setproductArr(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[count])
  function handleAddtoCart(index){
    axios.post("https://8080-fbedfcfaaeeeeafacbbedddeecfbcbaca.project.examly.io/addToCart",{
      userId:sessionStorage.getItem('user'),
      productName : productArr[index].productName,
      quantity : 1,
      price : productArr[index].price
    })
    .then((res)=>{
      setalert("alert");
      setTimeout(()=>{setalert("none")},4000)
      setCount(count+1);
    })
    .catch(err=>{console.log(err)});
  }
  function searchProducts(){
    let val = ref.current.value.toLowerCase();
    setproductArr(productArr.filter((value,index)=>{
      let productname = value.productName.toLowerCase();
      if(productname.includes(val)){
        return value;
      }
    }))
  }
  function emptyString(event){
    
    if(event.target.value === ""){
      setproductArr(arr);
    }
  }
  function conditionalRedering(quantity,cartItemID,index){
    if(parseInt(quantity) <= 0){
      return(<a className='btn btn-danger' >OUT OF STOCK</a>)
    }else if(parseInt(cartItemID) <= 1){
      return(<a className='btn btn-success' onClick={()=>handleAddtoCart(index)}>ADD TO CART</a>)
    }else{
      return(<a className='btn btn-warning' href="/cart">GO TO CART</a>)
    }
  }
  return (
    <>
    <Navbar/>
    <div className='searchButton'>
    <input ref={ref} id="search" type="text" placeholder='Search Products' onChange={emptyString}></input>
    <button className='button-search' onClick={searchProducts} >
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search icon-search" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        < path d="M21 21l-6 -6" />
      </svg>
      Search
    </button>
    </div>
    <section id="productHomeBody">
      {productArr.map((productobj,index)=>{return(
          <div id ={"grid"+(index+1)} className='product-card' key={[productobj.id]}>
            <img src={productobj.imageurl} id="product-image" alt="" ></img>
            <p className='product-name'>{productobj.productName}</p>
            <div className='product-pricing'>  
              <strong>₹{productobj.price}</strong>
              {conditionalRedering(productobj.quantity,productobj.cartItemID,index)}
            </div>
          </div>
        )
      })}
    </section>
    <section id = {alert}>
      Item Added to Cart Successfully
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="#2f9e44" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 12l5 5l10 -10"></path>
      </svg>
    </section>
    </>
  )
}