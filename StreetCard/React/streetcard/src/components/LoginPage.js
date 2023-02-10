import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // logic to authenticate the user
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
