import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  const renderAuthButtons = () => {
    if (authUser && authUser.email) {
      const avatarText = authUser.email.charAt(0).toUpperCase();
      return (
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center mr-2">
            <span className="text-white font-bold">{avatarText}</span>
          </div>
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <>
          <Link to="/login">
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4">
              Sign Up
            </button>
          </Link>
        </>
      );
    }
  };
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img
                  className="w-20 rounded-full"
                  src={logo}
                />
              </Link>
            </div>
          </div>
          {/* Desktop View */}
          <div className="flex items-center">
            <div className="hidden lg:flex">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
              >
                About
              </Link>
              <Link
                to="/products"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
              >
                Products
              </Link>
              <Link
                to="/marketplace"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
              >
                Market Place
              </Link>
              <Link
                to="/chatbot"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
              >
                ChatBot
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                <svg
                  className="h-6 w-6 text-gray-300 hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex items-center ml-4">
              {renderAuthButtons()}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div
        className={isMobileMenuOpen ? "block" : "hidden"}
        onClick={toggleMobileMenu}
      >
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white"
          >
            About
          </Link>
          <Link
            to="/products"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white"
          >
            Products
          </Link>
          <Link
            to="/marketplace"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white"
          >
            Market Place
          </Link>
          <Link
            to="/chatbot"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white"
          >
            ChatBot
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white"
          >
            Contact Us
          </Link>
          <div className="mt-4 flex justify-center">{renderAuthButtons()}</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
