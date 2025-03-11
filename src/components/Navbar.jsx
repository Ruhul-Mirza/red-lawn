import React, { useState, useEffect, useContext } from "react";
import logo from "../../images/logo.png";
import {
  ShoppingCart,
  User,
  ChevronDown,
  Menu,
  X,
  
} from "lucide-react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group" onMouseLeave={() => setIsOpen(false)}>
      <button
        className="flex items-center  hover:bg-gray-50 cursor-pointer rounded-4xl space-x-1.5 px-4 py-2.5 text-gray-700 hover:text-black transition-colors font-medium"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        <span className="text-sm tracking-wide">{title}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-0.5 w-64 rounded-lg shadow-xl py-3 z-10 border border-gray-100 backdrop-blur-sm bg-white/95"
          onMouseEnter={() => setIsOpen(true)}
        >
          <div className="py-1">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navigate = useNavigate();

  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    { label: "New Arrivals", to: "/new-arrival" },
    { label: "Best Sellers", to: "/best-seller" },
  ];



  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="w-auto max-w-100 h-16" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Dropdown title="Products" items={products} />
            <Link
              to="/contact"
              className="px-4 py-2.5 text-sm text-gray-700  hover:bg-gray-50 cursor-pointer rounded-4xl transition-colors font-medium tracking-wide"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="px-4 py-2.5 text-sm text-gray-700  hover:bg-gray-50 cursor-pointer rounded-4xl transition-colors font-medium tracking-wide"
            >
              About
            </Link>
          </nav>

          {/* Right side icons - Desktop */}
          <div className="hidden lg:flex items-center space-x-1">

            <Link
              to="/cart-item"
              className="p-2.5 rounded-full hover:bg-gray-100 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <Link
              to="/login"
              className="ml-2 flex items-center space-x-1.5 px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition-colors font-medium text-sm"
            >
              <User className="h-4 w-4" />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile menu controls */}
          <div className="flex lg:hidden items-center space-x-1">
            <Link
              to="/cart-item"
              className="p-2.5 rounded-full hover:bg-gray-100 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <button
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="px-4 py-6 space-y-4 sm:px-6">
            <div className="flex justify-between items-center border-b border-gray-100">
              <Link to="/" className="flex items-center space-x-2">
                <div className="max-w-2xl">
                  <img src={logo} className="w-28" alt="" />
                </div>
              </Link>
              <button
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="space-y-1 pt-2">
              <div className="block">
                <div
                  className="flex justify-between items-center px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={() =>
                    document
                      .getElementById("mobile-products")
                      ?.classList.toggle("hidden")
                  }
                >
                  <span>Products</span>
                  <ChevronDown className="h-5 w-5" />
                </div>
                <div
                  id="mobile-products"
                  className="hidden pl-6 mt-1 space-y-1"
                >
                  {products.map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      className="block py-2.5 px-3 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Contact
              </Link>

              <Link
                to="/about"
                className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
              >
                About
              </Link>
            </nav>

            <div className="pt-6 border-t border-gray-100">
              <Link
                to="/login"
                className="flex items-center justify-center space-x-2 w-full px-4 py-3 border border-black text-black rounded-md hover:bg-black hover:text-white transition-colors font-medium"
              >
                <User className="h-5 w-5" />
                <span>Login / Register</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;