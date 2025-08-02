import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import LaptopPDFViewer from "./LaptopUi";

import dog1 from "../assets/dog1.png";
import dog2 from "../assets/dog2.png";
import dog3 from "../assets/dog3.png";
import dog4 from "../assets/dog4.png";
import dog5 from "../assets/dog5.png";
import dog6 from "../assets/dog6.png";
import dog7 from "../assets/dog7.png";
import dog8 from "../assets/dog8.png";
import dog9 from "../assets/dog9.png";
import dog10 from "../assets/dog10.png";
import dog11 from "../assets/dog11.png";
import dog12 from "../assets/dog12.png";
import dog13 from "../assets/dog13.png";
import dog14 from "../assets/dog14.png";

import travel1 from "../assets/travel1.png";
import travel2 from "../assets/travel2.png";
import travel3 from "../assets/travel3.png";
import travel4 from "../assets/travel4.png";

const images = [
  dog1,
  dog2,
  dog3,
  dog4,
  dog5,
  dog6,
  dog7,
  dog8,
  dog9,
  dog10,
  dog11,
  dog12,
  dog13,
  dog14,
];

const travelImages = [travel1, travel2, travel3, travel4];

export default function AppsUI() {
  const [currentDog, setCurrentDog] = useState(0);
  const [currentTravel, setCurrentTravel] = useState(0);

  const prevDog = () => {
    setCurrentDog((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextDog = () => {
    setCurrentDog((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevTravel = () => {
    setCurrentTravel((prev) => (prev === 0 ? travelImages.length - 1 : prev - 1));
  };

  const nextTravel = () => {
    setCurrentTravel((prev) => (prev === travelImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="min-h-screen signika bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-12">APPS UI</h1>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-16">
          {/* Phone 1 - Dogs App */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">AdorPaw</h2>
            <div className="w-[300px] h-[600px] bg-black border-[8px] border-gray-600 rounded-[2.5rem] overflow-hidden relative shadow-2xl">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gray-600 rounded-full" />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full" />

              <motion.img
                key={currentDog}
                src={images[currentDog]}
                alt={`Dog App Screenshot ${currentDog + 1}`}
                initial={{ opacity: 0.5, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />

              <button
                onClick={prevDog}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-blue-500 text-black p-2 rounded-full hover:bg-blue-600 transition"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextDog}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-blue-500 text-black p-2 rounded-full hover:bg-blue-600 transition"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Phone 2 - Travel App */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Travel Explorer</h2>
            <div className="w-[300px] h-[600px] bg-black border-[8px] border-gray-600 rounded-[2.5rem] overflow-hidden relative shadow-2xl">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gray-600 rounded-full" />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full" />

              <motion.img
                key={currentTravel}
                src={travelImages[currentTravel]}
                alt={`Travel App Screenshot ${currentTravel + 1}`}
                initial={{ opacity: 0.5, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />

              <button
                onClick={prevTravel}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-blue-500 text-black p-2 rounded-full hover:bg-blue-600 transition"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextTravel}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-blue-500 text-black p-2 rounded-full hover:bg-blue-600 transition"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[30px]">
         <LaptopPDFViewer/>
      </div>

   

    </section>
  );
}
