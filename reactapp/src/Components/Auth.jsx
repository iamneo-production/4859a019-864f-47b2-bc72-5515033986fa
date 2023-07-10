import { Outlet,Navigate } from "react-router-dom";


function Auth(){
  return(
    sessionStorage.getItem('user') ? <Outlet/> : <Navigate to = "/" />
  );
}
function Admin(){
    if(sessionStorage.getItem('admin')){
      return(<Outlet/>)
    }else if(sessionStorage.getItem('user')){
      <Navigate to = "/home"/>
    }else{
      <Navigate to ="/"/>
    }
}
export  {Auth,Admin}