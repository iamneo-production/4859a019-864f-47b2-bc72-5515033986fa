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
    var flag=1;
    const emailRegex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$");
    if(!emailRegex.test(email)) {
      flag= flag&0;
      setEmailError('Invalid Email');
    }else{
      setEmailError('');
    }
    var pwd = new RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}$")
    if (!pwd.test(password)) {
      flag =flag&0;
      setPasswordError('Password must contains 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
    }else{
      setPasswordError('');
    }
    if(flag===1){
      axios.post('https://8080-fbedfcfaaeeeeafacbbedddeebdbeefaabcf.project.examly.io/Login/login', { email, password })
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
        <label>Your e-mail</label>
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
        <label>Password</label>
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
        <img src= "https://mail.google.com/mail/u/0?ui=2&ik=129d43fd23&attid=0.1&permmsgid=msg-f:1767227424689440530&th=188673fac5f14712&view=att&disp=safe&realattid=f_li8rgswj0" alt="logo" className="login-image"></img>
      </div>
    </section>
  );
}
export default Login;
