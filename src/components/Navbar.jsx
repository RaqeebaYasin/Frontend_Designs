import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "/src/assets/Nav-Logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Check Job", path: "/checkjob" },
  { name: "Report Scam", path: "#" },
  { name: "Learn", path: "#" },
  { name: "Contact", path: "/contact" } // Changed from "#" to "/contact"
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setMenuOpen(false);
    
    if (window.location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  const handleNavClick = (item) => {
    setMenuOpen(false);
    if (item.name === "Home") {
      handleHomeClick();
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center h-16">
        {/* Left - Logo */}
        <div
          className="flex items-center h-full cursor-pointer md:cursor-auto mr-6 ml-4"
          onClick={handleHomeClick}
        >
          <img
            src={Logo}
            alt="Logo"
            className="h-8 sm:h-10 md:h-10 lg:h-12 xl:h-12 w-auto object-contain scale-110"
          />
        </div>

        {/* Center - Nav Links (Desktop) */}
        <div className="hidden md:flex text-black font-medium flex-1 justify-center">
          {navLinks.map((item, idx) => (
            <Link 
              to={item.path} 
              key={item.name}
              onClick={() => handleNavClick(item)}
            >
              <button
                className={`
                  relative
                  px-1 sm:px-2 md:px-1 md:py-1 lg:px-3 lg:py-2
                  text-xs sm:text-sm md:text-[13px] lg:text-base
                  hover:text-teal-600 hover:font-semibold
                  ${idx === 0 ? "ml-2 sm:ml-4 md:ml-4 lg:ml-6 xl:ml-8" : ""}
                  ${idx === navLinks.length - 1 ? "mr-3 sm:mr-5 md:mr-6 lg:mr-10 xl:mr-8" : ""}
                  xl:text-[15px] xl:px-5 xl:py-2
                  after:content-[''] after:absolute after:inset-0 after:rounded-md
                  after:scale-0 hover:after:scale-100 after:transition-transform
                  after:duration-300 after:bg-white after:shadow-[0_4px_10px_rgba(0,0,0,0.15)]
                  hover:after:-translate-y-0.5 after:-z-10
                  before:content-[''] before:absolute before:left-1/2 before:bottom-1.5
                  before:h-[2px] sm:before:h-[3px] before:w-0 hover:before:w-[40%] before:bg-teal-500
                  before:rounded-full before:transition-all before:duration-300 before:-translate-x-1/2
                `}
              >
                {item.name}
              </button>
            </Link>
          ))}
        </div>

        {/* Right - Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-4">
          <Link to="/signin">
            <button className="px-2 sm:px-3 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-1.5 lg:py-2 bg-white text-teal-600 font-semibold rounded-full border border-teal-500 transition-all duration-300 hover:bg-teal-500 hover:text-white hover:shadow-md text-xs sm:text-sm md:text-sm lg:text-base xl:text-sm">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-2 sm:px-3 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-1.5 lg:py-2 bg-teal-500 text-white font-semibold rounded-full transition-all duration-300 hover:bg-teal-600 hover:shadow-lg text-xs sm:text-sm md:text-sm lg:text-base xl:text-sm">
              Get Protected
            </button>
          </Link>
        </div>

        {/* Mobile - Hamburger Menu and Action Buttons */}
        <div className="flex md:hidden space-x-2 items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-600 hover:text-teal-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          
          <Link to="/signin">
            <button className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white text-teal-600 font-semibold rounded-full border border-teal-500 transition-all duration-300 hover:bg-teal-500 hover:text-white hover:shadow-md text-xs sm:text-sm">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-2 sm:px-3 py-1 sm:py-1.5 bg-teal-500 text-white font-semibold rounded-full transition-all duration-300 hover:bg-teal-600 hover:shadow-lg text-xs sm:text-sm">
              Get Protected
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              onClick={() => {
                handleNavClick(item);
              }}
              className="text-black font-medium text-base sm:text-lg hover:text-teal-600 transition-colors duration-300 py-2"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;