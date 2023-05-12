import React, { useState } from 'react';
import axios from 'axios';
//import LinearGradient from 'react-native-linear-gradient';


const Signup = () => {
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid Email');
    } 
    const mobileNumberRegex = /^[0-9]{10}$/;
    if (!mobileNumberRegex.test(mobileNumber)) {
      setMobileNumberError('Mobile number must be a 10-digit number.');
    }
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
    setIsLoading(true);
    setErrorMessage('');

    axios.post('http://localhost:8000/signup', {
      email,
      username,
      mobileNumber,
      password,
      confirmPassword,
    })
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
        // handle successful signup here
        // ...
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setErrorMessage('An error occurred during signup. Please try again.');
      });
  };

  
  return (
    <div className="signupBox">
      <h1 style={{backgroundColor: "#6032A2",color:"white"}} >REGISTER</h1>
      <h1 style= {{color :"#6032A2"}} >Sign Up</h1>
      <form onSubmit={handleSubmit} align="center">
        <div>
          <input type="email" id="email" value={email} placeholder="Enter email" style={{backgroundColor: "#f2e6ff",width:"300px",height:"30px"}} onChange={handleEmailChange} required></input>
          {emailError && <div style={{color: 'red'}}>{emailError}</div>}
        </div>
        <br/>
        <div>
          
          <input type="text" id="username" value={username} placeholder="Enter Username" style={{backgroundColor: "#f2e6ff", width:"300px",height:"30px"}} onChange={handleUsernameChange} required />
        </div>
        <br/>
        <div>
          
          <input type="tel" id="mobileNumber" value={mobileNumber} placeholder="Enter Mobile Number" style={{backgroundColor: "#f2e6ff", width:"300px",height:"30px"}} onChange={handleMobileNumberChange} required />
          {mobileNumberError && <div style={{color: 'red'}}>{mobileNumberError}</div>}
        </div>
        <br/>
        <div>
          
          <input type="password" id="password" value={password} placeholder="Enter Password" style={{backgroundColor: "#f2e6ff", width:"300px",height:"30px"}} onChange={handlePasswordChange} required />
          {passwordError && <div style={{color: 'red'}}>{passwordError}</div>}
        </div>
        <br/>
        <div>
          
          <input type="password" id="confirmPassword" value={confirmPassword} placeholder="Confirm Password" style={{backgroundColor: "#f2e6ff",width:"300px",height:"30px"}} onChange={handleConfirmPasswordChange} required />
          {confirmPasswordError && <div style={{color: 'red'}}>{confirmPasswordError}</div>}
        </div>
        <br/>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <button type="submit" id='submitButton' style={{backgroundColor: "#6600cc",color: "white", width:"100px",height:"30px"}}>Submit</button>
        )}
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
      <br/>
      <p>
        Already a User? <a href="/signin" id="signinLink" onClick="login.jsx">Login</a>.
      </p>
    </div>
  );
};
export default Signup;