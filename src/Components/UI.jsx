// HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // optional

import logo1 from "../assets/logo7.webp";
import poster1 from "../assets/poster16.jpg";
import menu1 from "../assets/menu1.jpg";

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-16" id="hero">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">

        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="space-y-10">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[clamp(3rem,2.6082rem+1.9592vw,4.2rem)] font-bold pl-4 border-l-4 border-blue-500"
            >
              <span className="bg-gradient-to-r from-red-600 to-[#4d2626] bg-clip-text text-transparent">
                Experienced
              </span><br />
              Graphic <br /> Designer
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="https://drive.google.com/drive/folders/1gMBKfnOjbkvyVxx9P70-ZuyBsO-TYaCZ?usp=drive_link "
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-blue-500 text-blue-500 font-medium text-sm px-8 py-4 transition-all duration-300 hover:bg-blue-500 hover:text-black"
              >
                View CV <i className="fa-solid fa-arrow-up-right-from-square ml-2" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right Side / Swiper */}
        <div className="w-full lg:w-1/2">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            <SwiperSlide className="relative">
              <img
                src={menu1}
                alt="Render"
                loading="lazy"
                className="w-full h-[520px] object-cover brightness-[40%]"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-[clamp(3.5rem,3.0102rem+2.449vw,5rem)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 stroke-white stroke-1">
                  MENUS <br />
                  <span className="text-transparent" style={{ WebkitTextStroke: '3px #0096c7' }}>MENUS</span><br />
                  MENUS
                </h2>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative">
              <img
                src={poster1}
                alt="Poster"
                loading="lazy"
                className="w-full h-[520px] object-cover brightness-[40%]"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-[clamp(3.5rem,3.0102rem+2.449vw,5rem)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-400 stroke-white stroke-1">
                  POSTERS <br />
                  <span className="text-transparent" style={{ WebkitTextStroke: '3px #52b69a' }}>POSTERS</span><br />
                  POSTERS
                </h2>
              </div>
            </SwiperSlide>

            <SwiperSlide className="relative">
              <img
                src={logo1}
                alt="Logo"
                loading="lazy"
                className="w-full h-[520px] object-cover brightness-[40%]"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-[clamp(3.5rem,3.0102rem+2.449vw,5rem)] font-bold text-transparent bg-clip-text stroke-white stroke-1">
                  LOGOS <br />
                  <span className="text-transparent" style={{ WebkitTextStroke: '3px rgb(255, 217, 0)' }}>LOGOS</span><br />
                  LOGOS
                </h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
