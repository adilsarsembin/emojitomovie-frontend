import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registration } from "../../http/userAPI";
import "./Registration.css";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registration(username, password);
    setMessage(res.data.message);
  }

  return (
    <form className="register" onSubmit={handleSubmit}>
      <div className="maincard">
        <h3>Registration</h3>
        {message && <p>{message}</p>}
        <div className="username">
          <label>Username:</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="password">
          <label>Password:</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
        </div>
        <button type="submit">Sign Up</button>
        <p>
        Already have an account?
        <Link to="/login">Log in</Link>
      </p>
      </div>
    </form>
  );
};

export default Registration;
