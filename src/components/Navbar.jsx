import React, { useState, useEffect, useContext } from "react";
import logo from "../../images/logo.png";
import {
  Heart,
  ShoppingCart,
  User,
  ChevronDown,
  Menu,
  X,
  Search,
} from "lucide-react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

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
              <a
                key={index}
                href={item.href}
                className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
    { label: "New Arrivals", href: "/products/new" },
    { label: "Best Sellers", href: "/products/best-sellers" },
  ];

  const categories = [
    { label: "Men", href: "/categories/men" },
    { label: "Women", href: "/categories/women" },
    { label: "Kids", href: "/categories/kids" },
  ];

  const support = [
    { label: "Contact Us", href: "/support/contact" },
    { label: "FAQs", href: "/support/faqs" },
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
            <a href="/" className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="w-auto max-w-100 h-16" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Dropdown title="Products" items={products} />
            <Dropdown title="Categories" items={categories} />
            <Dropdown title="Support" items={support} />
            <a
              href="/about"
              className="px-4 py-2.5 text-sm text-gray-700  hover:bg-gray-50 cursor-pointer rounded-4xl transition-colors font-medium tracking-wide"
            >
              About
            </a>
          </nav>

          {/* Right side icons - Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            <button
              className="p-2.5 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-gray-700" />
            </button>

            <button
              className="p-2.5 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setIsHeartFilled(!isHeartFilled)}
              aria-label="Favorites"
            >
              <Heart
                className={`h-5 w-5 ${
                  isHeartFilled ? "fill-red-500 text-red-500" : "text-gray-700"
                }`}
              />
            </button>

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
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setIsHeartFilled(!isHeartFilled)}
              aria-label="Favorites"
            >
              <Heart
                className={`h-5 w-5 ${
                  isHeartFilled ? "fill-red-500 text-red-500" : "text-gray-700"
                }`}
              />
            </button>

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

      {/* Search bar */}
      {searchOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 sm:px-6 lg:px-8 border-t border-gray-100 animate-fadeDown">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-3 pl-4 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                autoFocus
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs text-gray-500">Popular:</span>
              <a href="#" className="text-xs text-gray-700 hover:underline">
                New Arrivals
              </a>
              <a href="#" className="text-xs text-gray-700 hover:underline">
                Best Sellers
              </a>
              <a href="#" className="text-xs text-gray-700 hover:underline">
                Summer Collection
              </a>
              <a href="#" className="text-xs text-gray-700 hover:underline">
                Limited Edition
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="px-4 py-6 space-y-4 sm:px-6">
            <div className="flex justify-between items-center border-b border-gray-100">
              <a href="/" className="flex items-center space-x-2">
                <div className="max-w-2xl">
                  <img src={logo} className="w-28" alt="" />
                </div>
              </a>
              <button
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-3 pl-4 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
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
                    <a
                      key={index}
                      href={item.href}
                      className="block py-2.5 px-3 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="block">
                <div
                  className="flex justify-between items-center px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={() =>
                    document
                      .getElementById("mobile-categories")
                      ?.classList.toggle("hidden")
                  }
                >
                  <span>Categories</span>
                  <ChevronDown className="h-5 w-5" />
                </div>
                <div
                  id="mobile-categories"
                  className="hidden pl-6 mt-1 space-y-1"
                >
                  {categories.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block py-2.5 px-3 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="block">
                <div
                  className="flex justify-between items-center px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={() =>
                    document
                      .getElementById("mobile-support")
                      ?.classList.toggle("hidden")
                  }
                >
                  <span>Support</span>
                  <ChevronDown className="h-5 w-5" />
                </div>
                <div id="mobile-support" className="hidden pl-6 mt-1 space-y-1">
                  {support.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block py-2.5 px-3 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="/about"
                className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
              >
                About
              </a>

              <a
                href="/contact"
                className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Contact
              </a>
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


