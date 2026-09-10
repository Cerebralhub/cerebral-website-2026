import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import logo from "../assets/svg/Cerebral Logo.svg";

const Navbar = () => {
  const location = useLocation();

  const getNavLinkClass = path => {
    return location.pathname === path
      ? "bg-cerebralOrange-600 text-white cursor-pointer"
      : "hover:bg-cerebralOrange-600 hover:text-white cursor-pointer";
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex justify-between items-center py-7">
        {/* logo */}
        <Link to="/">
          <img src={logo} alt="Cerebral Logo" />
        </Link>
        {/* navbar */}
        <nav className="hidden lg:block">
          <ul className="flex gap-4 font-semibold *:px-7 *:py-2 *:rounded-full">
            <Link to="/" className={getNavLinkClass("/")}>
              Home
            </Link>
            <Link to="/about-us" className={getNavLinkClass("/about-us")}>
              About
            </Link>
            <Link to="/services" className={getNavLinkClass("/services")}>
              Services
            </Link>
            <Link to="/our-work" className={getNavLinkClass("/our-work")}>
              Work
            </Link>

            <a
              href="https://medium.com/@cerebralhubit"
              target="__blank"
              className="hover:bg-cerebralOrange-600 hover:text-white cursor-pointer"
            >
              {" "}
              Blog
            </a>

            <Link to="/contact" className={getNavLinkClass("/contact")}>
              Contact
            </Link>
          </ul>
        </nav>
        {/* hamburger icon */}
        <div className="lg:hidden">
          <button
            className="text-greyish-10 hover:text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* side menu */}
      <div
        className={`fixed inset-0 z-20 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed top-0 right-0 z-50 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center px-4 py-5">
          <button
            className="text-greyish-10 hover:text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 py-4">
          <Link
            to="/"
            className="text-greyish-10 hover:text-black"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="text-greyish-10 hover:text-black"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-greyish-10 hover:text-black"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/our-work"
            className="text-greyish-10 hover:text-black"
            onClick={toggleMenu}
          >
            Work
          </Link>
          <Link
            className="text-greyish-10 hover:text-black"
            onClick={toggleMenu}
          >
            Blog
          </Link>

          <Link
            to="/contact"
            className="text-greyish-10 hover:text-black"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
