// LoginPage.js
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const LoginPage = ({ handleLogin, isLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure handleLogin is a function before calling it
    if (typeof handleLogin === "function") {
      handleLogin({ email, password });
    }
  };

  // If the user is already logged in, redirect to the prompt page
  if (isLoggedIn) {
    return <Navigate to="/prompt" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </form>
  );
};

export default LoginPage;
