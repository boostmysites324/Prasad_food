import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo, navItems } from "../content/constant";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get current path without leading slash
  const currentPath = location.pathname.substring(1) || "";

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Prasad Food Divine Logo"
              className="h-16 mr-3"
            />
          </Link>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 cursor-pointer !rounded-button whitespace-nowrap"
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
            ></i>
          </button>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={`/${item.path}`}
              className={`font-medium text-base cursor-pointer transition-colors hover:text-[#FF9933] !rounded-button whitespace-nowrap ${
                currentPath === item.path
                  ? "text-[#FF9933] border-b-2 border-[#FF9933]"
                  : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-6 py-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={`/${item.path}`}
                className={`block py-2 px-4 w-full text-left cursor-pointer transition-colors hover:text-[#FF9933] !rounded-button whitespace-nowrap ${
                  currentPath === item.path
                    ? "text-[#FF9933] font-medium"
                    : "text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
