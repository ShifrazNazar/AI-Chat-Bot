import React from "react";
import Navbar from "./Navbar";

const ContactUs = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              We would love to hear from you. Fill out the form below and we
              will get back to you as soon as possible.
            </p>
            <form>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:shadow-outline"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="mb-2">
              <strong>Address:</strong> 123 Main St, New York, NY 10001
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="mb-2">
              <strong>Email:</strong> info@starkai.com
            </p>
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
              <div className="flex">
                <a href="#" className="mr-4 text-blue-500 hover:text-blue-700">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="#" className="mr-4 text-blue-500 hover:text-blue-700">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#" className="mr-4 text-blue-500 hover:text-blue-700">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
