/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);

  };
  

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let flag=1;
    const emailRegex = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$');
    if (!emailRegex.test(email)) {
      flag=0;
      setEmailError('Invalid Email');
    }else{
      flag=flag&1;
      setEmailError("");
    } 
    var mobileNumberRegex = /^\d{10}$/;
    if (!mobileNumberRegex.test(mobileNumber)) {
      flag=0;
      setMobileNumberError('Mobile number must be a 10-digit number.');
    }else{
      flag=flag&1;
      setMobileNumberError("");
    }
    var pwd = new RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}$")
    if (!pwd.test(password)) {
      flag=0;
      setPasswordError('Password must contains 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
    }else{
      flag=flag&1;
      setPasswordError("");
    }
    if (confirmPassword !== password) {
      flag=0;
      setConfirmPasswordError('Passwords do not match.');
    } else {
      flag=flag&1;
      setConfirmPasswordError('');
    }
    setIsLoading(true);
    setErrorMessage('');
    console.log(flag)
    if(flag===1){
      axios.post('http://localhost:51700/signup', {
      email,
      password,
      username,
      mobileNumber,
      
    })
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
        if(response.data){
          navigate("/");
        }else{
          setErrorMessage("Account already exists on this email....")
        }
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setErrorMessage('An error occurred during signup. Please try again.');
      });
    }
    setIsLoading(false);
    
  };
  return (
    <main className="body">
    <div id="signupBox">
      <h1>CREATE AN ACCOUNT</h1>
      <form onSubmit={handleSubmit} align="center">
        <div>
          <input type="email" id="email" value={email} placeholder="Enter email" onChange={handleEmailChange} required></input>
          {emailError && <div style={{color: 'red'}}>{emailError}</div>}
        </div>
        <br/>
        <div>
          
          <input type="text" id="username" value={username} placeholder="Enter Username"  onChange={handleUsernameChange} required />
        </div>
        <br/>
        <div>
          
      
          {mobileNumberError && <div style={{color: 'red'}}>{mobileNumberError}</div>}
        </div>
          <input type="tel" id="mobileNumber" value={mobileNumber} placeholder="Enter Mobile Number"  onChange={handleMobileNumberChange} required />
        <br/>
        <div>
          
          <input type="password" id="password" value={password} placeholder="Enter Password"  onChange={handlePasswordChange} required />
          {passwordError && <div style={{color: 'red'}}>{passwordError}</div>}
        </div>
        <br/>
        <div>
          
          <input type="password" id="confirmPassword" value={confirmPassword} placeholder="Confirm Password" onChange={handleConfirmPasswordChange} required />
          {confirmPasswordError && <div style={{color: 'red'}}>{confirmPasswordError}</div>}
        </div>
        <br/>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <button id='submitButton'>Sign in</button>
        )}
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
      <br/>
      <p style={{"textAlign":"center"
      }}>
        Already a User? <a href="/" id="signinLink" onClick="login.jsx">Login</a>
      </p>
    </div>
  </main>
  );
};
export default Signup;