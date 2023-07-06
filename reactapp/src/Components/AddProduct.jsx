import React from 'react';
import { useNavigate,useLocation } from "react-router-dom";
import axios from 'axios'
import AdminHomePage from './AdminHomePage';
export default function AddProduct() {
    const navigate = useNavigate();
    const {state} = useLocation();
    function handleSubmit(e){
        e.preventDefault();
        console.log(e);
        if(state!=null){
          axios.put("https://8080-ffebceeacfaacbbedddeecfbcbaca.project.examly.io/admin/productEdit/"+state.id,{
            productName:e.target['0']['value'],
            price:e.target['1']['value'],
            description : e.target['2']['value'],
            imageurl:e.target['3']['value'],
            quantity:e.target['4']['value'],
        }).then(res => {alert(res.data);navigate("/admin")});
        }else{
        axios.post("https://8080-ffebceeacfaacbbedddeecfbcbaca.project.examly.io/admin/addProduct",{
            productName:e.target['0']['value'],
            price:e.target['1']['value'],
            description : e.target['2']['value'],
            imageurl:e.target['3']['value'],
            quantity:e.target['4']['value'],
        }).then(res => {alert(res.data);navigate("/admin")});
      }
    }
  return (
    <>
    <AdminHomePage/>
    <form onSubmit={handleSubmit} id = "formbox">
        <h1 className='heading'>ADD A PRODUCT</h1>
        <label>Enter the ProductName : </label>
        <input type='text' className = "inputfield" id="productName" defaultValue={state==null ? "" :state.productName }></input>
        <label>Enter the ProductPrice : </label>
        <input type='te'className = "inputfield"  id="productPrice" defaultValue={state==null ? "" :state.price}></input>
        <label>Enter the Product Description : </label>
        <input type='text'className = "inputfield"  id="productDescription" defaultValue={state==null ? "" :state.description}></input>
        <label>Enter the ProductImage url : </label>
        <input type='text'className = "inputfield"  id="productImageURL" defaultValue={state==null ? "" :state.imageurl}></input>
        <label>Enter the Product Quantity : </label>
        <input type='text'className = "inputfield"  id="productQuantity" defaultValue={state==null ? "" :state.quantity}></input>
        <button className="btn btn-primary btn-large" style={{"display":"block","width":"30%","marginLeft":"180px"}}id="addProductButton">Add</button>
    </form>
    </>
  )
  }
