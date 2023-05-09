import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full py-12 px-6">
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">
            Welcome Back!
        </h1>
        <form>
          <div>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="block w-full mt-1 px-4 py-3 rounded-md bg-gray-800 border-transparent focus:border-gray-500 focus:bg-gray-900 focus:ring-0 text-white"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <input
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              className="block w-full mt-1 px-4 py-3 rounded-md bg-gray-800 border-transparent focus:border-gray-500 focus:bg-gray-900 focus:ring-0 text-white"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-8">
            <button
              onClick={onLogin}
              className="w-full px-4 py-3 rounded-md bg-gray-600 hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
            >
              Log In
            </button>
          </div>
        </form>

        <p className="mt-8 text-sm text-gray-400 text-center">
          Don't have an account yet?{" "}
          <NavLink to="/signup" className="text-gray-500 hover:text-gray-300">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
