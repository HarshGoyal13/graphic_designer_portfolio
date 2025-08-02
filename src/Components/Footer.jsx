import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };

  return (
    <footer className="bg-black text-white p-4 font-semibold border-t-4 border-blue-500 relative">
      {/* Scroll to Top Button - Right Corner */}
      <button
        onClick={scrollToTop}
        className="absolute -top-[-6] right-4 z-10 transition hover:scale-110"
        title="Back to Top"
      >
        <div className="w-10 h-10 rounded-full border-2 border-white bg-black flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300">
          <FaArrowUp />
        </div>
      </button>

      {/* Footer Brand */}
      <div className="text-[40px] font-bold luckiest-guy-regular">
        <span className="text-blue-500">I</span>
        <span className="text-white">shita</span>
      </div>
    </footer>
  );
};

export default Footer;
