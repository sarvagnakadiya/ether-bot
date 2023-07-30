// src/App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PromptPage from "./pages/PromptPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (userData) => {
    // Simulate an asynchronous authentication request (e.g., API call) with a short delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Dummy credentials for demonstration
    const dummyEmail = "user@example.com";
    const dummyPassword = "password";

    const { email, password } = userData;

    if (email === dummyEmail && password === dummyPassword) {
      // Login successful
      setIsLoggedIn(true);
      console.log("Login successful!");
    } else {
      // Login failed
      console.log("Invalid credentials. Login failed.");
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <LoginPage handleLogin={handleLogin} isLoggedIn={isLoggedIn} />
          }
        />
        <Route path="/signup" element={<SignupPage />} />
        {isLoggedIn ? (
          <Route path="/prompt" element={<PromptPage />} />
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
