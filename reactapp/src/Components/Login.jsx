/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    let flag=1;
    const emailRegex = /^[^\s@]{2,102}@[^\s@]{4,256}\.[^\s@]{2,}$/;
    if(!emailRegex.test(email)) {
      flag= flag&0;
      setEmailError('Invalid Email');
    }else{
      setEmailError('');
    }
    if (password.length < 8) {
      flag =flag&0;
      setPasswordError('Password must be at least 8 characters long.');
    }else{
        setPasswordError('');
    }
    if(flag===1){
      axios.post('https://8080-fbedfcfaaeeeeafacbbedddeecfbcbaca.project.examly.io/login', { email, password })
      .then((res)=>{
        if(res.data[0]==='true' && res.data[1]==="USER"){
          sessionStorage.setItem('user',res.data[2]);
          navigate("/home");
        }else if(res.data[0]==='true' && res.data[1]==="ADMIN"){
          sessionStorage.setItem('admin',res.data[2]);
          navigate("/admin");
        }else{
          setError('Invalid email or password');
        }
      }).catch ((error)=> {
        console.error(error);
        setError('An internal error');
      });
    }
  }

  return (
    <section className='login-section'>

    <div id="loginBox" >
      <h1 className='title'>AMAZEPACK</h1>
      <h1 className="heading">LOGIN</h1>
      <form onSubmit={handleSubmit} className='login-form'>
        <label style={{marginBottom:"24px"}}>Your e-mail</label>
        <div></div>
        <div className="input-box">
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter email"
            
            onChange={(event) => setEmail(event.target.value)}
            required
            />
          {emailError && <div style={{color: 'red'}}>{emailError}</div>}
        </div>
        <br/>
        <label style={{marginBottom:"24px"}}>Password</label>
        <div></div>
        <div className="input-box">
          <input
            type="password"
            id="password"
            value={password}
            placeholder="At least 8 characters long"
            onChange={(event) => setPassword(event.target.value)}
            required
            />
          {passwordError && <div style={{color: 'red'}}>{passwordError}</div>}
        </div>
        <br/>
        <button href="#" onClick= {handleSubmit} id="loginButton">Login</button><span className='ortext'>or</span><a href="/signup" id = "signupLink">Sign up</a>
        {error && <div style={{"color":"red"}}>{error}</div>}
        
      </form>
      
    </div>
      <div className='app-image'>
        <img src= "images/Amazepack.jpeg" alt="logo" class="login-image"></img>
      </div>
    </section>
  );
}
export default Login;
