import React from "react";
import { FaArrowUp, FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";

import poster1 from "../assets/poster1.jpg";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/poster3.jpg";
import poster4 from "../assets/poster4.jpg";
import poster5 from "../assets/poster5.jpg";
import poster6 from "../assets/poster6.jpg";
import poster7 from "../assets/poster7.jpg";
import poster8 from "../assets/poster8.jpg";
import poster9 from "../assets/poster9.jpg";
import poster10 from "../assets/poster10.jpg";
import poster11 from "../assets/poster11.jpg";
import poster12 from "../assets/poster12.jpg";
import poster13 from "../assets/poster13.jpg";
import poster14 from "../assets/poster14.jpg";
import poster15 from "../assets/poster15.jpg";
import poster16 from "../assets/poster16.jpg";
import poster17 from "../assets/poster17.jpg";

const posters = [
  poster1, poster2, poster3, poster4,
  poster5, poster6, poster7, poster8,
  poster9, poster10, poster11, poster12,
  poster13, poster14, poster15, poster16,poster17
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

const PostersGallery = () => {
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

export default PostersGallery;
