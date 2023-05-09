import ChatApp from "./components/ChatApp";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import MarketPlace from "./components/MarketPlace";
import ContactUs from "./components/ContactUs";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chatbot" element={<ChatApp />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/marketplace" element={<MarketPlace />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
