/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $, { error } from 'jquery';
import Popper from 'popper.js';
import axios from 'axios';
import Navbar from './AdminHomePage';

export default function Dashboard() {
    const [productData,setProductData] = useState([]);
    const navigate = useNavigate();
    const [count,setcount] = useState(1);
    useEffect(()=>{
        axios.get("https://8080-ffebceeacfaacbbedddeecfbcbaca.project.examly.io/admin")
        .then(res => {setProductData(res.data)})
        .catch(err => {console.log(err)});
    },[count])
    function editproduct(event,index){
        
        axios.get("https://8080-ffebceeacfaacbbedddeecfbcbaca.project.examly.io/admin/productEdit/"+productData[index].id).then(res=>{
            //console.log(res.data[0])
            navigate("/addproduct",{
                state : {
                    id : productData[index].id,//prodcutid;
                    productName:res.data[0],//productname
                    price:res.data[1],//productprice
                    description:res.data[2],
                    imageurl:res.data[3],//productimageurl
                    quantity:res.data[4],//productquantity
                }
            })
        })
        
    }
    function deleteproduct(event,index){
        var id = productData[index].id;
        axios.delete("https://8080-ffebceeacfaacbbedddeecfbcbaca.project.examly.io/admin/delete/"+id)
        .then(res=>{
            alert(res.data);
            setcount(count+1);
        })
    }
  return (
    <>
        <Navbar/>

        <a className= "addProductBtn" href="/addProduct">ADD A PRODUCT</a>
        <div className='container-fluid' id="addProductBody">
            <div className='row' style={{'color':'white',padding:'10px',backgroundColor:'#777',borderTopLeftRadius:'8px',borderTopRightRadius:'8px'}}>
                <div className='col-lg-3'>Image</div>
                <div className='col-lg-3'>ProductName</div>
                <div className='col-lg-2'>Price</div>
                <div className='col-lg-2'>Quantity</div>
                <div className='col-lg-1'>Edit</div>
                <div className='col-lg-1'>Delete</div>
            </div>
            {productData.map((productobj,index)=>{return(
                <div className='row' key={index} style={{'color':'white',padding:'10px',backgroundColor:'#495057'}}>
                    <div className='col-lg-3'><img src={productobj.imageurl} alt="" style={{'width':'100px','height':'100px'}}></img></div>
                    <div className='col-lg-3'>{productobj.productName}</div>
                    <div className='col-lg-2'>{productobj.price}</div>
                    <div className='col-lg-2'>{productobj.quantity}</div>
                    <i className='far fa-edit col-lg-1' id={'editProduct'+(index+1)} onClick={(event)=>{editproduct(event,index)}}></i>
                    <i className='far fa-trash-alt col-lg-1' id={'deleteProduct'+index} onClick={(event)=>{deleteproduct(event,index)}}></i>   
                </div>
            )   
            })}
        </div>
    </>
  )
}
