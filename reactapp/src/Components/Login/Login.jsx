import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);

  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid Email');
    } 
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    }
    try {
      const response = await axios.post('http://localhost:8000/login', { email, password });
      console.log(response.data);
      // handle successful login here
    } catch (error) {
      console.error(error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-box">
      <h1 style={{backgroundColor: "#6032A2",color:"white"}}>LOGIN</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter email"
            style={{backgroundColor: "#f2e6ff",width:"300px",height:"30px"}}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          {emailError && <div style={{color: 'red'}}>{emailError}</div>}
        </div>
        <br/>
        <div className="input-box">
          
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter Password"
            onChange={(event) => setPassword(event.target.value)}
            style={{backgroundColor: "#f2e6ff",width:"300px",height:"30px"}}
            required
          />
          {passwordError && <div style={{color: 'red'}}>{passwordError}</div>}
        </div>
        <br/>
        <button type="submit" style={{backgroundColor: "#6600cc",color: "white", width:"100px",height:"30px"}}>Submit</button>
      </form>
      <p>
        New User? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default Login;