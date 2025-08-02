// PortfolioSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo8.webp";
import poster1 from "../assets/poster2.jpg";
import menu1 from "../assets/menu2.png";
import dog1 from "../assets/dog1.png";



const fadeIn = (direction = "up", delay = 0) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.6, delay },
    },
  };
  return variants;
};

const PortfolioSection = () => {
  return (
    <section className="bg-black text-white py-12" id="work">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-end">
          <div className="text-right">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeIn("down", 0)}
              className="flex justify-end items-center gap-4 mb-2"
            >
              <div className="bg-blue-500 h-px min-w-[150px]"></div>
              <h3 className="text-3xl font-semibold text-blue-500">PORTFOLIO</h3>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeIn("down", 0.2)}
              className="mb-8"
            >
              <h2 className="text-xl font-medium">HERE ARE SOME OF MY WORKS</h2>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {/* Posters */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-[45%] cursor-pointer overflow-hidden relative"
          >
             <Link to="/posters">
              <div className="relative group">
                <img
                  src={poster1}
                  alt="Posters"
                  className="w-full h-[520px] object-cover transition-transform duration-300 group-hover:scale-125 brightness-50"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition duration-300">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-blue-500">POSTERS</h2>
                    <h4 className="text-sm font-medium text-blue-500 hover:underline">
                      View more <FaArrowUpRightFromSquare className="inline ml-1" />
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Renders */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-[45%] cursor-pointer overflow-hidden relative"
          >
            <Link to="/Menu">
              <div className="relative group">
                <img
                  src={menu1}
                  alt="Renders"
                  className="w-full h-[520px] object-cover transition-transform duration-300 group-hover:scale-125 brightness-50"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition duration-300">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-blue-500">MENUS</h2>
                    <h4 className="text-sm font-medium text-blue-500 hover:underline">
                      View more <FaArrowUpRightFromSquare className="inline ml-1" />
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

<motion.div
  variants={fadeIn("up", 0.3)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
  className="w-full lg:w-[45%] cursor-pointer overflow-hidden relative"
>
  <Link to="/logo">
    <div className="relative group">
      <img
        src={logo1}
        alt="Logos"
        className="w-full h-[520px] object-cover transition-transform duration-300 group-hover:scale-125 brightness-50"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition duration-300">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-500">LOGOS</h2>
          <h4 className="text-sm font-medium text-blue-500 hover:underline">
            View more <FaArrowUpRightFromSquare className="inline ml-1" />
          </h4>
        </div>
      </div>
    </div>
  </Link>
</motion.div>

          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-[45%] cursor-pointer overflow-hidden relative"
          >
             <Link to="/UI">
              <div className="relative group">
                <img
                  src={dog1}
                  alt="Posters"
                  className="w-full h-[520px] object-cover transition-transform duration-300 group-hover:scale-125 brightness-50"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition duration-300">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold text-blue-500">UI</h2>
                    <h4 className="text-sm font-medium text-blue-500 hover:underline">
                      View more <FaArrowUpRightFromSquare className="inline ml-1" />
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>



        </div>

        

      </div>
    </section>
  );
};

export default PortfolioSection;
