import React from "react";
import SignIn from "./auth/Login";
import SignUp from "./auth/SignUp";
import AuthDetails from "./AuthDetails";

const Login = () => {
  return (
    <div>
      {/* <SignIn /> */}
      <SignUp />
      <AuthDetails />
    </div>
  );
};

export default Login;
