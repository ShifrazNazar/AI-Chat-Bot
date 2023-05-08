import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.jpeg";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-10 w-auto rounded-full" src={logo} />
              <Link to="/" className="text-gray-300 hover:text-white ml-2">
                Stark-AI
              </Link>
            </div>
          </div>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex items-center ml-4">
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>

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
          <Link
            to="/login"
          >
          <div className="mt-4 flex justify-center">
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              Log in
            </button>
          </div>
          </Link>
          <Link
            to="/signup"
          >
          <div className="mt-4 flex justify-center">
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              Sign up
            </button>
          </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
