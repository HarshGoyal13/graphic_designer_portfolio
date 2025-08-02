import React from "react";
import { FaArrowUp, FaArrowLeftLong, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.jpg";
import logo7 from "../assets/logo7.webp";
import logo8 from "../assets/logo8.webp";

const logos = [
  [logo1, logo2, logo3, logo4],
  [logo5, logo6, logo7, logo8],
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const LogosGallery = () => {
  return (
    <div className="bg-black signika text-white min-h-screen font-[Poppins] relative">
      {/* Scroll Up Arrow */}
      <a
        href="#head-section"
        className="fixed bottom-4 right-4 z-50 opacity-80 hover:opacity-100 transition"
      >
        <FaArrowUp className="text-black bg-white rounded-full p-3 w-12 h-12 border-2 border-black hover:bg-black hover:text-white" />
      </a>

      {/* Header */}
      <section
        id="head-section"
        className="py-20 px-4 bg-gradient-to-b from-black via-[#0f0f0f] to-black relative"
      >
        <a href="/" className="absolute top-6 left-6">
          <FaArrowLeftLong className="text-white text-3xl hover:text-blue-500 transition" />
        </a>
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold">
            <span className="text-blue-500">LOGO</span> 
          </h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-wrap gap-6 justify-center">
            {logos.map((column, colIdx) => (
              <div
                key={colIdx}
                className="flex flex-col gap-6 w-full sm:w-[45%] md:w-[30%]"
              >
                {column.map((src, idx) => (
                  <motion.div
                    key={idx}
                    custom={colIdx * 4 + idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                    className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_#3b82f6]"
                  >
                    <img
                      src={src}
                      alt="logo"
                      loading="lazy"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default LogosGallery;
