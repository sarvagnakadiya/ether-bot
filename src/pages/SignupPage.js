import React from "react";
import SignupForm from "../components/SignupForm";

const SignupPage = ({ handleSignup }) => {
  return (
    <div className="page-container">
      <SignupForm handleSignup={handleSignup} />
    </div>
  );
};

export default SignupPage;
