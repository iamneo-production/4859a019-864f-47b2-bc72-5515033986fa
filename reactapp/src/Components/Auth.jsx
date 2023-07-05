import { Outlet,Navigate } from "react-router-dom";


function Auth(){
  //const auth = useAuth();
  return(
    sessionStorage.getItem('user') ? <Outlet/> : <Navigate to = "/" />
  );
}
function Admin(){
  return (
    sessionStorage.getItem('admin')?<Outlet/>: sessionStorage.getItem('user') ? <Navigate to = "/home"/>: <Navigate to ="/"/>
  )
}
export  {Auth,Admin}