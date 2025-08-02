import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "About", "Work", "Contact"];

  return (
    <nav className="bg-black text-white p-4 font-semibold">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
       <Link to={"/"}>
        <div className="text-[40px] font-bold luckiest-guy-regular">
          <span className="text-blue-500">I</span>
          <span className="text-white">shita</span>
        </div>
         </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(" ", "")}`}
                className="relative group text-[18px] luckiest-guy-regular"
              >
                <span>{link}</span>
                <span className="absolute left-0 bottom-[-2px] h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown with smooth transition */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } md:hidden`}
      >
        <ul className="mt-4 space-y-4 px-2">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(" ", "")}`}
                className="block w-fit relative group text-[20px] luckiest-guy-regular"
              >
                <span>{link}</span>
                <span className="absolute left-0 bottom-[-2px] h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
