import { Outlet,Navigate } from "react-router-dom";


function Auth(){
  
    if(sessionStorage.getItem('user')){
      return(<Outlet/>)
    }else if(sessionStorage.getItem('admin')){
      return(<Navigate to = "/admin"/>)
    }else{
      return(<Navigate to ="/"/>)
    }
}
function Admin(){
    if(sessionStorage.getItem('admin')){
      return(<Outlet/>)
    }else if(sessionStorage.getItem('user')){
      return(<Navigate to = "/home"/>)
    }else{
      return(<Navigate to ="/"/>)
    }
}
export  {Auth,Admin}