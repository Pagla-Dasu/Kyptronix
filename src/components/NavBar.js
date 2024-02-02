import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full shadow-lg bg-white rounded-lg">
      <div className="flex justify-between items-center p-2 md:p-4">
        <img src="/logo.webp" alt="logo" width={100} />
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? (
              <XIcon className="h-8 w-8 text-gray-500" />
            ) : (
              <MenuIcon className="h-8 w-8 text-gray-500" />
            )}
          </button>
        </div>
        <div className={`md:flex md:space-x-8 ${isOpen ? "block" : "hidden"}`}>
          <NavLink to="/about" className="md:mb-4">
            About Us
          </NavLink>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
