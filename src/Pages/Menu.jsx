import React from "react";
import { FaArrowUp, FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";

import menu1 from "../assets/menu1.jpg"
import menu2 from "../assets/menu2.png"
import menu3 from "../assets/menu3.png"
import menu4 from "../assets/menu4.png"
import menu5 from "../assets/menu5.png"
import menu6 from "../assets/menu6.png"
import menu7 from "../assets/menu7.png"
import menu8 from "../assets/menu8.png"
import menu9 from "../assets/menu9.png"
import menu10 from "../assets/menu10.png"
import menu11 from "../assets/menu11.png"
import menu12 from "../assets/menu12.png"




const posters = [
    menu1, menu2, menu3, menu4,
    menu5, menu6, menu7, menu8,
    menu9, menu10, menu11, menu12,

];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const MenusGallery = () => {
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
            <span className="text-blue-500">POSTER</span> 
          </h1>
        </div>
      </section>

      {/* Gallery with Flex Wrap */}
      <section className="py-16 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-6">
          {posters.map((src, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="bg-[#111] p-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#3b82f6] w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] flex justify-center items-center"
            >
              <img
                src={src}
                alt={`poster-${idx + 1}`}
                loading="lazy"
                className="w-full h-auto max-h-[440px] object-contain rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenusGallery;
