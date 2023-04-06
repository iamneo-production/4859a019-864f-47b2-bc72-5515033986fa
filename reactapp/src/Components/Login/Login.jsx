import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-box">
          
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>
        New User? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default Login;