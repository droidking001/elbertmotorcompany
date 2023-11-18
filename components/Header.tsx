import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header bg-white fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-6">
      <div id="menu-btn"></div>

      <div className="flex items-center justify-between w-full">
        <a href="/" className="logo text-3xl font-bold">
          <span className="text-red-500 text-3.5xl">Elbert</span>Motors
        </a>

        <nav className="navbar">
          <a
            href="/"
            className="text-1.7xl mx-4 text-black transition duration-300 hover:text-red-500"
          >
            Home
          </a>
          <a
            href="#vehicles"
            className="text-1.7xl mx-4 text-black transition duration-300 hover:text-red-500"
          >
            Vehicles
          </a>
          <a
            href="/admin"
            className="text-1.7xl mx-4 text-black transition duration-300 hover:text-red-500"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-1.7xl mx-4 text-black transition duration-300 hover:text-red-500"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
