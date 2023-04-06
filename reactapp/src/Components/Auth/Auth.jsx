import React, { useState } from 'react';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleToggleAuth = () => {
    setIsLogin(!isLogin);
  };

  const handleAuthSubmit = (event) => {
    event.preventDefault();

    // handle login or signup logic here
  
    // clear form inputs after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Signup'}</h1>
      <form onSubmit={handleAuthSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
      <button onClick={handleToggleAuth}>
        {isLogin ? 'New User? Signup Here' : 'Already Have an Account? Login Here'}
      </button>
    </div>
  );
};

export default Auth;