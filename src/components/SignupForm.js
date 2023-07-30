import React, { useState } from "react";

const SignupForm = ({ handleSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
