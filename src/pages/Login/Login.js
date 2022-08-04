import React, { useState } from 'react'
import './Login.css'
import { Link } from "react-router-dom";
import { login } from '../../http/userAPI';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {data: {token}} = await login(username, password);
    if (token) {
      localStorage.setItem("access_token", token);
    }
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="maincard">
        <h3>Login</h3>
        <div className="username">
          <label>Username:</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="password">
          <label>Password:</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
        </div>
        <button type="submit">Log in</button>
        <p>
          Do not have an account?
          <Link to="/registration">Register</Link>
        </p>
      </div>
    </form>
  );
};

export default Login;