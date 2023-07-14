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

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

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
      <h1 style={{backgroundColor: "#6032A2",color:"white"}} >Register</h1>
      <h1 style= {{color :"#6032A2"}} >Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="email" id="email" value={email} placeholder="Enter email" colors={["#DF98FA","#9055FF"]} onChange={handleEmailChange} required></input>
        </div>
     
        <div>
          
          <input type="text" id="username" value={username} placeholder="Enter Username" onChange={handleUsernameChange} required />
        </div>
        <div>
          
          <input type="tel" id="mobileNumber" value={mobileNumber} placeholder="Enter Mobile Number" onChange={handleMobileNumberChange} required />
        </div>
        <div>
          
          <input type="password" id="password" value={password} placeholder="Enter Password" onChange={handlePasswordChange} required />
        </div>
        <div>
          
          <input type="password" id="confirmPassword" value={confirmPassword} placeholder="Confirm Password" onChange={handleConfirmPasswordChange} required />
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <button type="submit" id='submitButton'>Submit</button>
        )}
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
      <p>
        Already a User? <a href="/signin" id="signinLink" onClick="login.jsx">Login</a>.
      </p>
    </div>
  );
};

export default Signup;
