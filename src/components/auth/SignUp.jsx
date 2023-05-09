import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full py-12 px-6">
        <h1 className="text-3xl font-bold text-white mb-4">Welcom Back!</h1>
        <form>
          <div>
            <input
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
              className="block w-full mt-1 px-4 py-3 rounded-md bg-gray-800 border-transparent focus:border-gray-500 focus:bg-gray-900 focus:ring-0 text-white"
            />
          </div>

          <div className="mt-4">
            <input
              type="password"
              label="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="block w-full mt-1 px-4 py-3 rounded-md bg-gray-800 border-transparent focus:border-gray-500 focus:bg-gray-900 focus:ring-0 text-white"
            />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              onClick={onSubmit}
              className="w-full px-4 py-2 rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-8 text-sm text-gray-400 text-center">
          Already have an account?{" "}
          <NavLink to="/login" className="text-gray-500 hover:text-gray-300">
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
